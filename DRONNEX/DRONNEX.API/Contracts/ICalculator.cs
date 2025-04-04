using DRONNEX.API.Models.Products;

namespace DRONNEX.API.Contracts
{
  public interface ICalculator
  {
    ProductResult Calculate(ProductEntity productEntity, RequestEntity request);
  }
}
