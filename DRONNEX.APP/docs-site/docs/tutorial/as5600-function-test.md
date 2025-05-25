---
sidebar_position: 4
---

# Use ESP32 detect I2C device

## Introduction
Use Esp32 to find phsical address for any i2c device, then do functional test with AS5600.

## Prerequirement

**Hardware:**
- Any [ESP32](https://core-electronics.com.au/pros3-esp32-s3-dev-board-1.html)
- Any [AS5600](https://www.amazon.com.au/Alinan-Magnetic-Precision-Induction-Measurement/dp/B09QYC916Q) 

**Wiring guide** 
- `ESP32 SCL PIN20` → `AS5600 SCL`
- `ESP32 SDA PIN 21` → `AS5600 SDA`
- `ESP32 Ground` → `AS5600 Ground`
- `ESP32 3.3v` → `3.3v`

## Detect I2C device

```jsx title="Sbus-streamer.ino"
#include <Wire.h>

#define SDA_PIN 21
#define SCL_PIN 20

void setup() {
  Serial.begin(115200);
  Wire.begin(SDA_PIN, SCL_PIN);
  delay(1000);

  Serial.println("🔍 Scanning I2C bus...");
  for (byte addr = 1; addr < 127; addr++) {
    Wire.beginTransmission(addr);
    if (Wire.endTransmission() == 0) {
      Serial.print("✅ Device found at 0x");
      Serial.println(addr, HEX);
    }
  }
}

void loop() {}
```

## Result output

```jsx title="Serial Monitor at 11520 baud"
ESP-ROM:esp32s3-20210327
Build:Mar 27 2021
rst:0x1 (POWERON),boot:0xb (SPI_FAST_FLASH_BOOT)
SPIWP:0xee
mode:DIO, clock div:1
load:0x3fce3808,len:0x4bc
load:0x403c9700,len:0xbd8
load:0x403cc700,len:0x2a0c
entry 0x403c98d0
🔍 Scanning I2C bus...
✅ Device found at 0x36
🔍 Scanning I2C bus...
✅ Device found at 0x36
```

## AS5600 Function test

```jsx title="Sbus-streamer.ino"
#include <Wire.h>

#define AS5600_ADDR 0x36
#define SDA_PIN 21
#define SCL_PIN 20

void setup() {
  Serial.begin(115200);
  Wire.begin(SDA_PIN, SCL_PIN);

  delay(500);
  Serial.println("🔍 Starting AS5600 I2C Scan...");

  Wire.beginTransmission(AS5600_ADDR);
  byte error = Wire.endTransmission();
  if (error == 0) {
    Serial.println("✅ AS5600 found at 0x36");
  } else {
    Serial.println("❌ AS5600 not detected");
  }
}

void loop() {
  uint16_t angle = readAS5600RawAngle();
  float deg = angle * 360.0 / 4096.0;
  Serial.printf("🌀 Raw angle: %u | Degrees: %.2f°\n", angle, deg);
  delay(500);
}

uint16_t readAS5600RawAngle() {
  Wire.beginTransmission(AS5600_ADDR);
  Wire.write(0x0C); // Start at raw angle MSB
  Wire.endTransmission();

  Wire.requestFrom(AS5600_ADDR, 2);
  uint8_t msb = Wire.read();
  uint8_t lsb = Wire.read();

  return ((msb << 8) | lsb) & 0x0FFF; // 12-bit angle
}
```

## Result output

```jsx title="Serial Monitor at 11520 baud"
🌀 Raw angle: 1 | Degrees: 1.00°
🌀 Raw angle: 2 | Degrees: 2.00°
🌀 Raw angle: 3 | Degrees: 3.00°
🌀 Raw angle: 4 | Degrees: 4.00°
```

