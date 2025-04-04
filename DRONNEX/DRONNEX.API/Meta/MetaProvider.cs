using DRONNEX.API.Contracts;
using DRONNEX.API.Models.Products;

namespace DRONNEX.API.Meta
{
  public class MetaProvider : IMetaProvider
  {

    public MetaProvider()
    {

    }

    public ProductForm GetProductForm(RequestEntity request)
    {
      var productLookups = GetProductLookups();
      var prodcutEntity = GetProductEntity(request);
      return new ProductForm
      {
        ProductEntity = prodcutEntity,
        ProductLookups = productLookups
      };
    }

    public ProductLookup GetProductLookups()
    {
      var productLookups = new ProductLookup()
      {
        FramLookupItems = new List<LookupItem>(),
        MotorLookupItems = new List<LookupItem>(),
        PropellerLookupItems = new List<LookupItem>(),
        FCLookupItems = new List<LookupItem>(),
        BatteryLookupItems = new List<LookupItem>(),
      };

      // Frames
      productLookups.FramLookupItems.Add(new LookupItem { Code = "bee35", Name = "Speedybee Bee 35" });
      productLookups.FramLookupItems.Add(new LookupItem { Code = "bee25", Name = "Speedybee Bee 25" });
      productLookups.FramLookupItems.Add(new LookupItem { Code = "tbsSourceOne", Name = "TBS Source One" });
      productLookups.FramLookupItems.Add(new LookupItem { Code = "geprcMark5", Name = "GEPRC Mark5" });

      // Motors
      productLookups.MotorLookupItems.Add(new LookupItem { Code = "tmotorF60", Name = "T-Motor F60 Pro IV" });
      productLookups.MotorLookupItems.Add(new LookupItem { Code = "iFlightXing", Name = "iFlight Xing 2207" });
      productLookups.MotorLookupItems.Add(new LookupItem { Code = "emaxEcoII", Name = "Emax Eco II 2306" });

      // Propellers
      productLookups.PropellerLookupItems.Add(new LookupItem { Code = "hq5043", Name = "HQProp 5x4.3x3" });
      productLookups.PropellerLookupItems.Add(new LookupItem { Code = "gemfan51466", Name = "Gemfan 51466" });
      productLookups.PropellerLookupItems.Add(new LookupItem { Code = "dalCyclone5045", Name = "DAL Cyclone 5045" });

      // Flight Controllers
      productLookups.FCLookupItems.Add(new LookupItem { Code = "mambaF405", Name = "DiAton Mamba F405" });
      productLookups.FCLookupItems.Add(new LookupItem { Code = "betaflightF7", Name = "Betaflight F7" });
      productLookups.FCLookupItems.Add(new LookupItem { Code = "speedybeeF405V3", Name = "Speedybee F405 V3" });

      // Batteries
      productLookups.BatteryLookupItems.Add(new LookupItem { Code = "tattu1300mah6s", Name = "Tattu 1300mAh 6S" });
      productLookups.BatteryLookupItems.Add(new LookupItem { Code = "gnb1200mah6s", Name = "GNB 1200mAh 6S" });
      productLookups.BatteryLookupItems.Add(new LookupItem { Code = "chinaHobbyLine1500mah6s", Name = "ChinaHobbyLine 1500mAh 6S" });

      return productLookups;
    }
    public ProductEntity GetProductEntity(RequestEntity request)
    {
      var ProductEntity = new ProductEntity
      {
        FramEntity = new FramEntity(),
        MotorEntity = new MotorEntity(),
        PropsEntity = new PropsEntity(),
        FlightControlEntity = new FlightControlEntity(),
        BatteryEntity = new BatteryEntity()

      };
      if (request == null) return ProductEntity;

      if (!String.IsNullOrEmpty(request.FramCode))
      {
        ProductEntity.FramEntity = GetFramEntity(request.FramCode);
      }

      if (!String.IsNullOrEmpty(request.MotorCode))
      {
        ProductEntity.MotorEntity = GetMotorEntity(request.MotorCode);
      }

      if (!String.IsNullOrEmpty(request.PropellerCode))
      {
        ProductEntity.PropsEntity = GetPropsEntity(request.PropellerCode);
      }

      if (!String.IsNullOrEmpty(request.FCCode))
      {
        ProductEntity.FlightControlEntity = GetFlightControlEntity(request.FCCode);
      }

      if (!String.IsNullOrEmpty(request.BatteryCode))
      {
        ProductEntity.BatteryEntity = GetBatteryEntity(request.BatteryCode);
      }

      return ProductEntity;
    }

    private FramEntity GetFramEntity(string framCode)
    {
      return framCode switch
      {
        "bee35" => new FramEntity { Name = "Speedybee Bee 35", Weight = 80, Width = 3.5m },
        "bee25" => new FramEntity { Name = "Speedybee Bee 25", Weight = 60m, Width = 2.5m },
        "tbsSourceOne" => new FramEntity { Name = "TBS Source One", Weight = 50m, Width = 3.5m },
        "geprcMark5" => new FramEntity { Name = "GEPRC Mark5", Weight = 80m, Width = 5m },
        _ => new FramEntity { Name = "Unknown", Weight = 0, Width = 0m },
      };
    }

    private MotorEntity GetMotorEntity(string motorCode)
    {
      return motorCode switch
      {
        "tmotorF60" => new MotorEntity
        {
          KvValue = 2500,
          Power = 1000,
          Torque = 10,
          RPM = 25000,
          MaxCurrent = 100,
          Efficiency = 0.8m,
          Weight = 100
        },
        "iFlightXing" => new MotorEntity
        {
          KvValue = 2000,
          Power = 800,
          Torque = 8,
          RPM = 20000,
          MaxCurrent = 80,
          Efficiency = 0.75m,
          Weight = 80
        },
        "emaxEcoII" => new MotorEntity
        {
          KvValue = 1800,
          Power = 700,
          Torque = 7,
          RPM = 18000,
          MaxCurrent = 70,
          Efficiency = 0.7m,
          Weight = 70
        },
        _ => new MotorEntity
        {
          KvValue = 0,
          Power = 0,
          Torque = 0,
          RPM = 0,
          MaxCurrent = 0,
          Efficiency = 0,
          Weight = 1
        },
      };
    }

    private PropsEntity GetPropsEntity(string propellerCode)
    {
      return propellerCode switch
      {
        "hq5043" => new PropsEntity
        {
          Name = "HQProp 5x4.3x3",
          Diameter = 5,
          Drag = 0.1m,
          Efficiency = 0.9m,
          Weight = 5
        },
        "gemfan51466" => new PropsEntity
        {
          Name = "Gemfan 51466",
          Diameter = 5,
          Drag = 0.15m,
          Efficiency = 0.85m,
          Weight = 6
        },
        "dalCyclone5045" => new PropsEntity
        {
          Name = "DAL Cyclone 5045",
          Diameter = 5,
          Drag = 0.2m,
          Efficiency = 0.8m,
          Weight = 7
        },
        _ => new PropsEntity
        {
          Name = "Unknown",
          Diameter = 0,
          Drag = 0,
          Efficiency = 0,
          Weight = 1
        },
      };
    }

    private FlightControlEntity GetFlightControlEntity(string fcCode)
    {
      return fcCode switch
      {
        "mambaF405" => new FlightControlEntity { Name = "DiAton Mamba F405", Weight = 10 },
        "betaflightF7" => new FlightControlEntity { Name = "Betaflight F7", Weight = 15 },
        "speedybeeF405V3" => new FlightControlEntity { Name = "Speedybee F405 V3", Weight = 20 },
        "speedybeeF405mini" => new FlightControlEntity { Name = "Speedybee F405 mini", Weight = 10 },
        _ => new FlightControlEntity { Name = "Unknown", Weight = 0 },
      };
    }

    private BatteryEntity GetBatteryEntity(string batteryCode)
    {
      return batteryCode switch
      {
        "tattu1300mah6s" => new BatteryEntity
        {
          Power = 1000,
          Capacity = 1300,
          Rate = 100,
          CellsType = CellsType.LiPo,
          CellNumber = 6,
          VotagePerCell = 3.7m,
          Weight = 200
        },
        "gnb1200mah6s" => new BatteryEntity
        {
          Power = 900,
          Capacity = 1200,
          Rate = 90,
          CellsType = CellsType.LiPo,
          CellNumber = 6,
          VotagePerCell = 3.7m,
          Weight = 180
        },
        "chinaHobbyLine1500mah6s" => new BatteryEntity
        {
          Power = 1100,
          Capacity = 1500,
          Rate = 110,
          CellsType = CellsType.LiPo,
          CellNumber = 6,
          VotagePerCell = 3.7m,
          Weight = 220
        },
        _ => new BatteryEntity
        {
          Name = "Unknown",
          Power = 0,
          Capacity = 0,
          Rate = 0,
          CellsType = CellsType.LiPo,
          CellNumber = 0,
          VotagePerCell = 0,
          Weight = 1
        },
      };
    }
  }
}
