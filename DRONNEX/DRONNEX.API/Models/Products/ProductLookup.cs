namespace DRONNEX.API.Models.Products
{
  public class ProductLookup
  {
    public List<LookupItem> FramLookupItems { get; set; }
    public List<LookupItem> MotorLookupItems { get; set; }
    public List<LookupItem> PropellerLookupItems { get; set; }
    public List<LookupItem> FCLookupItems { get; set; }
    public List<LookupItem> BatteryLookupItems { get; set; }
  }
  public class LookupItem
  {
    public string Code { get; set; }
    public string Name { get; set; }
  }
}
