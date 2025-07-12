---
sidebar_position: 3
---

# AI FOC balance bot

## Introduction
STM32 F411 balance bot based on Rasbarry Pi with Ros2 and AI powered.

This document will focuse on Pi side, for detailed F411 set up, check another document above list.

## Prerequirement
- Pi Zero 2W
- 3A 5V BEC ( power pi zero)
- Pi Camera (optional)
- FOC balance bot

## Wire Guid
**IMU:** I2C connect to rasbarry pi 

**MCU:** Serial1 connect to Pi 2W

## Coding
### First Step: Uart Set Up
**Prerequired:** 
- Go to: Interface Options → Serial
    - Disable login shell over serial
    - Enable hardware serial port
- Install pyserial:
  ``` bash
  pip install pyserial
  ```
- Python Script (Pi2W side):
    ```jsx title="python"
    import serial
    import time

    ser = serial.Serial('/dev/serial0', 115200, timeout=1)

    while True:
        line = ser.readline().decode('utf-8').strip()
        if line:
            print(f"STM32 says: {line}")
            if "PING" in line:
                ser.write(b"PONG\n")
        time.sleep(0.1)

  ```
- STM32F411CE (Arduino Framework)
    - Make sure you use Serial1 (hardware UART):
    ```jsx title="cpp"
    void setup() {
        Serial.begin(115200);      // USB Serial for debugging
        Serial1.begin(115200);     // UART on PA2 (TX), PA3 (RX)

        delay(500);
        Serial.println("STM32 booted. Starting communication...");
    }

    void loop() {
        static unsigned long lastSend = 0;

        // Send message every 2 seconds
        if (millis() - lastSend > 2000) {
            Serial1.println("PING from STM32");
            lastSend = millis();
        }

        // Read incoming from Pi
        while (Serial1.available()) {
            String incoming = Serial1.readStringUntil('\n');
            Serial.print("From Pi: ");
            Serial.println(incoming);
        }
    }
    ```
- Optional debug:
    - Confirm Uart connection on serial0:
    ``` bash
    ls /dev/serial*
    ```
    - Example command and output:
    ``` bash
    pi@raspberrypi:~ $ ls /dev/serial*
    /dev/serial0  /dev/serial1
    ```

### Second Step: IMU Set Up
**1. Ensure I2C is enabled:** 
Run:
``` bash
sudo raspi-config
```
- Go to Interface Options → I2C → Enable
- Reboot after enabling

**2. Check if IMU is detected:** 
Run:
``` bash
i2cdetect -y 1
```
You should see something like:
``` jsx title="lua"
     0 1 2 3 4 5 6 7 8 9 a b c d e f
00:          -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- --
20: -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- 68 -- -- --
```
- If you see 68, MPU6050 is detected.

**3. Install dependencies:** 
``` bash
sudo apt update
sudo apt install python3-smbus i2c-tools
pip install mpu6050-raspberrypi
```

**4. Example Python code to read MPU6050:** 

Create and Run ```read_mpu.py```:

``` jsx title="python"
from mpu6050 import mpu6050
import time

sensor = mpu6050(0x68)

while True:
    accel = sensor.get_accel_data()
    gyro = sensor.get_gyro_data()
    temp = sensor.get_temp()

    print("------")
    print("Accel:", accel)
    print("Gyro:", gyro)
    print("Temperature:", temp)
    
    time.sleep(0.5)
```

### Optional Setp: FOC control from PI Zero
**1. Update close loop FOC code:** 
``` jsx title="cpp" 
    // 0. Add two motor target for control
    float target_voltage0 = 0;
    float target_voltage1 = 0;
    
    // 1.  Add this for Pi communication
    Serial1.begin(115200); 
    while (!Serial1);

    // 2. update command serial:
    Commander command = Commander(Serial1);
    void doMotor0(char* cmd) { command.scalar(&target_voltage0, cmd); }
    void doMotor1(char* cmd) { command.scalar(&target_voltage1, cmd); }

    // 3. (optional) motor monitering :
    motor0.useMonitoring(Serial1);
    motor1.useMonitoring(Serial1);

    // 4. Add both command:
    command.add('0', doMotor0, "Motor0 voltage");
    command.add('1', doMotor1, "Motor1 voltage");
```

**2. To test from Pi:** 
``` jsx title="SingleMotor.py"
import serial

ser = serial.Serial("/dev/serial0", 115200)

while True:
    cmd = input("Enter voltage (0-12): ")
    ser.write(f'T{cmd}\n'.encode())  # send motor command
    print("Waiting for feedback...")
    print(ser.readline().decode(errors='ignore').strip())

```

``` jsx title="Two-motor-controll.py"
    import serial

    ser = serial.Serial("/dev/serial0", 115200)

    while True:
        motor = input("Motor index (0 or 1): ")
        voltage = input("Enter voltage (e.g. 2.5 or -1.0): ")
        cmd = f"T{motor} {voltage}\n"
        ser.write(cmd.encode())
        print(f"Sent: {cmd.strip()}")
        print("Waiting for feedback...")
        while ser.in_waiting:
            print(ser.readline().decode(errors='ignore').strip())
```
### Final Setp: PID Control
