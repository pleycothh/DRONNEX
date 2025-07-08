---
sidebar_position: 2
---

# FOC balance bot

## Introduction
STM32 F411 balance bot code demo

## Prerequirement

**Code:**
```
#include <SimpleFOC.h>

#define LED_PIN PC13   // On STM32F411, built-in LED is usually on PC13
#define BUTTON_PIN PA0    // User button connected to PA0 (K1)
#define GND_PIN_0 PB2
#define GND_PIN_1 PA4
MagneticSensorI2C sensor0 = MagneticSensorI2C(AS5600_I2C);
MagneticSensorI2C sensor1 = MagneticSensorI2C(AS5600_I2C);
// example of stm32 defining 2nd bus 
TwoWire Wire1(PB3, PB10);

// BLDC motor & driver instance
BLDCMotor motor0 = BLDCMotor(7);
BLDCMotor motor1 = BLDCMotor(7);

BLDCDriver3PWM driver0 = BLDCDriver3PWM(PA6, PA7, PB0, PB1);
BLDCDriver3PWM driver1 = BLDCDriver3PWM(PA5, PA1, PA2, PA3);
// angle set point variable
//float target_angle = 0;
float target_voltage = 2;

// instantiate the commander
Commander command = Commander(Serial);
void doTarget(char* cmd) { command.scalar(&target_voltage, cmd); }

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT_PULLUP);  // Active LOW

  pinMode(GND_PIN_0, OUTPUT);
  digitalWrite(GND_PIN_0, LOW);  // Drive PB2 to logic LOW
  
  pinMode(GND_PIN_1, OUTPUT);
  digitalWrite(GND_PIN_1, LOW);  // Drive PB2 to logic LOW

  Serial.begin(115200);
 // while (!Serial); // Wait for USB serial to connect
  Serial.println("USB Serial ready");
  // comment out if not needed
  SimpleFOCDebug::enable(&Serial);
  // ================================== Sensor ==============================

  Wire.setClock(400000);
  Wire1.setClock(400000);

  sensor0.init();
  sensor1.init(&Wire1);

  motor0.linkSensor(&sensor0);
  motor1.linkSensor(&sensor1);
  Serial.println("Sensor ready");

  // ==================================== Driver ==========
  // power supply voltage [V]
  driver0.voltage_power_supply = 12;
  driver1.voltage_power_supply = 12;

  driver0.init();
  driver1.init();

  motor0.linkDriver(&driver0);
  motor1.linkDriver(&driver1);

  // ==================================== MOTOR ==========
  // choose FOC modulation (optional)
  motor0.foc_modulation = FOCModulationType::SpaceVectorPWM;
  motor1.foc_modulation = FOCModulationType::SpaceVectorPWM;
  // set motion control loop to be used
  motor0.controller = MotionControlType::angle;
  motor1.controller = MotionControlType::angle;

  // velocity PI controller parameters
  motor0.PID_velocity.P = 0.21f;
  motor0.PID_velocity.I = 0.01;
  motor0.PID_velocity.D = 0;

  motor1.PID_velocity.P = 0.21f;
  motor1.PID_velocity.I = 0.01;
  motor1.PID_velocity.D = 0;

  // maximal voltage to be set to the motor
  motor0.voltage_limit = 10;
  motor1.voltage_limit = 10;

  // velocity low pass filtering time constant
  motor0.LPF_velocity.Tf = 0.01f;
  motor1.LPF_velocity.Tf = 0.01f;

  // angle P controller
  motor0.P_angle.P = 20;
  motor1.P_angle.P = 20;

  // maximal velocity of the position control
  motor0.velocity_limit = 20;
  motor1.velocity_limit = 20;

  // comment out if not needed
  motor0.useMonitoring(Serial);
  motor1.useMonitoring(Serial);

  // initialize motor
  motor0.init();
  motor1.init();

  // align sensor and start FOC
  motor0.initFOC();
  motor1.initFOC();

  // ==================================== Command ====================
  // add target command T
  //command.add('T', doTarget, "target angle");
  command.add('T', doTarget, "motor voltage");

  Serial.println(F("Motor 0 1 ready."));
  Serial.println(F("Set the target angle using serial terminal:"));
  _delay(1000);
  digitalWrite(LED_PIN, LOW); 
}

int loopCount = 0;

float leftAngle = 0;
float rightAngle = 0;
void loop() {
  // iterative function updating the sensor internal variables
  // it is usually called in motor.loopFOC()
  // this function reads the sensor hardware and 
  // has to be called before getAngle nad getVelocity
  //sensor0.update();
  //sensor1.update();
  motor0.loopFOC();
  motor1.loopFOC();

  //motor0.move();
  //motor1.move();
  //command.run();

  // virtual link code
  motor1.move( 5*(motor2.shaft_angle - motor1.shaft_angle));
  motor2.move( 5*(motor1.shaft_angle - motor2.shaft_angle));

  loopCount++;
  if (loopCount >= 500) {
    Serial.print(leftCurrent); 
    Serial.print(" - "); 
    Serial.print(rightCurrent);
    Serial.println();
    loopCount = 0;
    if (digitalRead(BUTTON_PIN) == LOW) 
    {
      Serial.println("USB Serial ready");
    }
  }
}

```