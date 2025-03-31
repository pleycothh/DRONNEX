

namespace DRONNEX.API.Models
{
  public class ProductEntity
  {
    public string Id { get; set; }
    public string Name { get; set; }

    public FramEntity FramEntity { get; set; }
    public MotorEntity MotorEntity { get; set; }
    public PropsEntity PropsEntity { get; set; }
    public FlightControlEntity FlightControlEntity { get; set; }
    public BatteryEntity BatteryEntity { get; set; }
  }

  public class MotorEntity : PhisicEntity
  {
    public int KvValue { get; set; }
    public decimal Power { get; set; }
    public decimal Torque { get; set; }
    public int RPM { get; set; } // Max RPM at full throttle
    public decimal MaxCurrent { get; set; } // Max current drawn by the motor (A)
    public decimal Efficiency { get; set; } // Motor efficiency (0-1)
  }

  public class BatteryEntity : PhisicEntity
  {

    public string Name { get; set; }
    public decimal Power { get; set; }
    public int Capacity { get; set; } // Capacity in mAh
    public int Rate { get; set; } // C-rate
    public CellsType CellsType { get; set; }
    public int CellNumber { get; set; }
    public decimal TotalVotages { get => VotagePerCell * CellNumber; } // Total voltage = number of cells * voltage per cell
    public decimal VotagePerCell { get; set; } // Voltage per cell
  }

  public class FramEntity : PhisicEntity
  {
    public string Name { get; set; }
  }

  public class PropsEntity : PhisicEntity
  {
    public string Name { get; set; }
    public decimal Diameter { get; set; } // Propeller diameter (m)
    public decimal Drag { get; set; } // Drag coefficient
    public decimal Efficiency { get; set; } = 1; // Propeller efficiency (0-1)
  }

  public class FlightControlEntity : PhisicEntity
  {
    public string Name { get; set; }
  }

  public class PowerUnit
  {
    public decimal Power { get; set; }
    public decimal Lift { get; set; }
    public decimal MaxMotorSpeedWithProps { get; set; }
    public decimal maxPayload { get; set; }
  }

  public enum CellsType
  {
    None = 0,
    LiPo = 1,
    LiFe = 2,
    LiIon = 3,
  }
}
