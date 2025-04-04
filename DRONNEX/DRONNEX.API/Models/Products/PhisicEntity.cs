namespace DRONNEX.API.Models.Products
{
  public class PhisicEntity
  {
    public decimal Weight { get; set; }
    public decimal Width { get; set; }
    public decimal Length { get; set; }
    public decimal Height { get; set; }


    public bool IsFit { get; set; }
  }
  public class PhysicsConstants
  {
    public const decimal g = 9.81m; // Gravity constant (m/s²)
    public const decimal AirDensity = 1.225m; // Air density at sea level (kg/m³)
  }

  public enum WeightUnit
    {
      None = 0,
      mg = 1,
      g = 2,
      kg = 3,
    }
    public enum LengthUnit
    {
      None = 0,
      mm = 1,
      cm = 2,
      m = 3,
    }
}
