---
sidebar_position: 2
---

# Use ELSR reciver on ESP32

## Introduction
This guid is showing how to read reciver signal on esp32 via uart, this is very helpful to controll robotic via controller. However, not only esp32, any board support uart and and reciver can send sbus signal will bascily work in this tutorial.
## Prerequirement
**Hardware:**
- Any [ESP32](https://core-electronics.com.au/pros3-esp32-s3-dev-board-1.html)
- Any reciver supports SBUS [Radiomaster ELRS XR2](https://www.radiomasterrc.com/products/xr2-nano-2-4ghz-expresslrs-receiver)  

**Wiring guide** 
- `ESP32 RX` → `Reciver RX`
- `ESP32 Ground` → `Reciver Ground`
- `ESP32 5V` → `Reciver 5V`

## Run Code

```jsx title="Sbus-streamer.ino"
#include <Servo.h>
#include <AlfredoCRSF.h>

// Create CRSF and Servo objects
AlfredoCRSF crsf;
Servo myServo;

// Channel index for controlling the servo
#define CHANNEL_INDEX 0  // Channel 1 corresponds to index 0

void setup() {
  Serial.begin(115200);  // Serial Monitor for debugging
  crsf.begin(&Serial1);  // Initialize CRSF on Serial1 (Pin 4 for RX)
  
  myServo.attach(9);     // Attach the servo to Pin 9
  Serial.println("CRSF Servo Control Starting...");
}

void loop() {
  // Update CRSF data
  crsf.update();

  // Check if CRSF has valid data
  if (crsf.channelsAvailable()) {
    // Get the value from the desired channel
    int channelValue = crsf.getChannel(CHANNEL_INDEX);

    // Map the CRSF channel range (172-1811) to servo range (0-180 degrees)
    int servoAngle = map(channelValue, 172, 1811, 0, 180);

    // Move the servo to the desired angle
    myServo.write(servoAngle);

    // Debug output
    Serial.print("Channel Value: ");
    Serial.print(channelValue);
    Serial.print(" -> Servo Angle: ");
    Serial.println(servoAngle);
  }

  delay(20); // Add a slight delay for stability
}
```

## Result output

