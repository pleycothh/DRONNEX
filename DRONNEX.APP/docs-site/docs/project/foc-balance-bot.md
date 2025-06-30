---
sidebar_position: 2
---

# FOC balance bot

## Introduction
TODO

## Prerequirement

**Code:**
```
#include <SimpleFOC.h>

// BLDCMotor(pole pair number, phase resistance (optional) );
BLDCMotor motorL = BLDCMotor(7);
BLDCDriver3PWM driverL = BLDCDriver3PWM(40, 41, 42, 12, NOT_SET, NOT_SET);
// Encoder Left
Encoder encoderL =  Encoder(15, 16, 1024, 17); // 15, 16, 1024, 17
void doAL(){encoderL.handleA();}
void doBL(){encoderL.handleB();}
void doIndexL(){encoderL.handleIndex();}


BLDCMotor motorR = BLDCMotor(7);
BLDCDriver3PWM driverR = BLDCDriver3PWM(35, 36, 37, 38, NOT_SET, NOT_SET);
// Encoder Right
Encoder encoderR =  Encoder(4, 5, 1024, 6);
// interrupt routine initialization
void doAR(){encoderR.handleA();}
void doBR(){encoderR.handleB();}
void doIndexR(){encoderR.handleIndex();}


/*instantiate the commander
Commander command = Commander(Serial);
void doTarget(char* cmd) { command.scalar(&motorL.target, cmd); }
void doLimit(char* cmd) { command.scalar(&motorL.voltage_limit, cmd); }
*/

void setup() {
  //--------------------------------------------  use monitoring with serial 
  Serial.begin(115200);
  SimpleFOCDebug::enable(&Serial);

  //----------------------------- Left
  // enable/disable quadrature mode
  encoderL.quadrature = Quadrature::ON;
  // check if you need internal pullups
  encoderL.pullup = Pullup::USE_EXTERN;
  // initialize encoder hardware
  encoderL.init();
  // hardware interrupt enable
  encoderL.enableInterrupts(doAL, doBL, doIndexL);
  motorL.linkSensor(&encoderL);
  Serial.println("Encoder Left ready");
  _delay(1000);

  // ------------ driver Left
  // power supply voltage [V]
  driverL.voltage_power_supply = 5;
  // Max DC voltage allowed - default voltage_power_supply
  driverL.voltage_limit = 2;

  // driver init
  if (!driverL.init()){
    Serial.println("driver L init failed!");
    return;
  }

  motorL.linkDriver(&driverL);
  // enable driver
  //driverL.enable();
  Serial.println("Driver L ready!");
  _delay(1000);
// ---------------------------- motor Left
  // aligning voltage
  motorL.voltage_sensor_align = 5;

  // set motion control loop to be used
  motorL.torque_controller = TorqueControlType::voltage;
  motorL.controller = MotionControlType::torque;

  // comment out if not needed
  motorL.useMonitoring(Serial);

  // initialize motor
  if(!motorL.init()){
    Serial.println("Motor init failed!");
    return;
  }
  // align sensor and start FOC
  if(!motorL.initFOC()){
    Serial.println("FOC init failed!");
    return;
  }

  // set the initial motor target
  motorL.target = 2; // Volts 

  // add target command M
  //command.add('M',"Motor");

  Serial.println(F("Motor ready."));
  Serial.println(F("Set the target using serial terminal and command M:"));
  _delay(1000);


  //--------------  Right
  // enable/disable quadrature mode
  encoderR.quadrature = Quadrature::ON;
  // check if you need internal pullups
  encoderR.pullup = Pullup::USE_EXTERN;
  // initialize encoder hardware
  encoderR.init();
  // hardware interrupt enable
  encoderR.enableInterrupts(doAR, doBR, doIndexR);
  motorR.linkSensor(&encoderR);
  Serial.println("Encoder Right ready");
  _delay(1000);
  // --------------------------------- Encoder ends

  // ------------ driver Right

    // power supply voltage [V]
  driverR.voltage_power_supply = 5;
  // Max DC voltage allowed - default voltage_power_supply
  driverR.voltage_limit = 2;

  // driver init
  if (!driverR.init()){
    Serial.println("Driver R init failed!");
    return;
  }

  // enable driver 2
  driverR.enable();
  Serial.println("Driver R ready!");
  _delay(1000);
  // ------------------------------Driver ends
  // link driver
  motorR.linkDriver(&driverR);
  _delay(1000);


}

void loop() {
  // IMPORTANT - call as frequently as possible
  // update the sensor values 
 // encoderL.update();
  //encoderR.update();
  // display the angle and the angular velocity to the terminal
 // Serial.print(encoderL.getAngle());
 // Serial.print("\t");
//  Serial.println(encoderR.getAngle());

  // main FOC algorithm function
  motorR.loopFOC();

  // Motion control function
  motorR.move();

  // user communication
 // command.run();
}

```