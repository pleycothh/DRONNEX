---
sidebar_position: 5
---

# Generic FOC library

## Introduction
Write a genric FOC library for BLDC motor controll

## Prerequirement

**Hardware:**
- Any [SimpleFOC mini](https://core-electronics.com.au/pros3-esp32-s3-dev-board-1.html)
- Any [BLDC](https://www.amazon.com.au/Alinan-Magnetic-Precision-Induction-Measurement/dp/B09QYC916Q) 


## Open Loop control

```jsx title="open-loop.ino"
//int pwmA = 32;
//int pwmB = 33;
//int pwmC = 25;

int pwmA = 26;
int pwmB = 27;
int pwmC = 14;


#define _constrain(amt, low, high) ((amt) < (low) ? (low) : ((amt) > (high) ? (high) : (amt)))


float voltage_power_supply = 12.6;
float shaft_angle = 0, open_loop_timestamp = 0;
float zero_electric_angle = 0, Ualpha, Ubeta = 0, Ua = 0, Ub = 0, Uc = 0, dc_a = 0, dc_b = 0, dc_c = 0;


void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  //PWM
  pinMode(12, OUTPUT);
  digitalWrite(12, HIGH); 

  pinMode(pwmA, OUTPUT);
  pinMode(pwmB, OUTPUT);
  pinMode(pwmC, OUTPUT);
  ledcSetup(0, 30000, 8);
  ledcSetup(1, 30000, 8); 
  ledcSetup(2, 30000, 8);  
  ledcAttachPin(pwmA, 0);
  ledcAttachPin(pwmB, 1);
  ledcAttachPin(pwmC, 2);
  Serial.println("complete PWM initialization");
  delay(3000);
}

// Get electric angle
float _electricalAngle(float shaft_angle, int pole_pairs) {
  return (shaft_angle * pole_pairs);
}

// combine angle to [0,2PI]
float _normalizeAngle(float angle) {
  float a = fmod(angle, 2 * PI);  
  return a >= 0 ? a : (a + 2 * PI);
}


// Set PWM out put
void setPwm(float Ua, float Ub, float Uc) {

  dc_a = _constrain(Ua / voltage_power_supply, 0.0f, 1.0f);
  dc_b = _constrain(Ub / voltage_power_supply, 0.0f, 1.0f);
  dc_c = _constrain(Uc / voltage_power_supply, 0.0f, 1.0f);

  ledcWrite(0, dc_a * 255);
  ledcWrite(1, dc_b * 255);
  ledcWrite(2, dc_c * 255);
}

void setPhaseVoltage(float Uq, float Ud, float angle_el) {
  angle_el = _normalizeAngle(angle_el + zero_electric_angle);

  Ualpha = -Uq * sin(angle_el);
  Ubeta = Uq * cos(angle_el);

  Ua = Ualpha + voltage_power_supply / 2;
  Ub = (sqrt(3) * Ubeta - Ualpha) / 2 + voltage_power_supply / 2;
  Uc = (-Ualpha - sqrt(3) * Ubeta) / 2 + voltage_power_supply / 2;
  setPwm(Ua, Ub, Uc);
}

float velocityOpenloop(float target_velocity) {
  unsigned long now_us = micros(); 
  float Ts = (now_us - open_loop_timestamp) * 1e-6f;

  if (Ts <= 0 || Ts > 0.5f) Ts = 1e-3f;

  shaft_angle = _normalizeAngle(shaft_angle + target_velocity * Ts);

  float Uq = voltage_power_supply / 3;

  setPhaseVoltage(Uq, 0, _electricalAngle(shaft_angle, 7));

  open_loop_timestamp = now_us;

  return Uq;
}


void loop() {
  // put your main code here, to run repeatedly:
  velocityOpenloop(5);
}

```
