using DRONNEX.API.Models;

namespace DRONNEX.API.Contracts
{
  public interface ICalculator
  {
    ProductResult Calculate(ProductEntity productEntity, RequestEntity request);
  }
}
