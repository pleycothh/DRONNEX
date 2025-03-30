export interface ProductEntity {
    id: string;
    name: string;
  
    framEntity: FramEntity;
    motorEntity: MotorEntity;
    propsEntity: PropsEntity;
    flightControlEntity: FlightControlEntity;
    batteryEntity: BatteryEntity;
  }
  
  export interface PhisicEntity {
    code: string; // Unique code
    weight: number; // In kg, using number to represent decimal
    length: number; // Optional, as not all entities may have length
    width: number;  // Optional
    height: number; // Optional
  }
  
  export interface MotorEntity extends PhisicEntity {
    kvValue: number;  // RPM per Volt (Kv)
    power: number;    // Power in watts
    torque: number;   // Torque in Nm
    rpm: number;      // Revolutions per minute (max RPM)
    maxCurrent: number; // Maximum current in A
    efficiency: number; // Motor efficiency (0-1)
  }
  
  export interface BatteryEntity extends PhisicEntity {
    power: number;      // Power in watts
    capacity: number;   // Capacity in mAh
    rate: number;       // C-rate
    cellsType: CellsType; // Type of battery cells
    cellNumber: number; // Number of cells in the battery
    totalVoltage: number; // Total voltage (calculated as voltagePerCell * cellNumber)
    voltagePerCell: number; // Voltage per cell (e.g., 3.7V for LiPo)
  }
  
  export interface FramEntity extends PhisicEntity {
    name: string;
  }
  
  export interface PropsEntity extends PhisicEntity {
    name: string;
    diameter: number; // Propeller diameter in meters
    drag: number;     // Drag coefficient
    efficiency: number; // Propeller efficiency (0-1)
  }
  
  export interface FlightControlEntity extends PhisicEntity {
    name: string;
  }
  
  export interface PowerUnit {
    power: number;
    lift: number;
    maxMotorSpeedWithProps: number; // Max speed of the motor with the props attached
    maxPayload: number;  // Max rise speed in m/s
  }
  
  export enum CellsType {
    None = 0,
    LiPo = 1,
    LiFe = 2,
    LiIon = 3
  }
  