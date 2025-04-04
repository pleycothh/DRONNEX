using DRONNEX.API.Models.Products;

namespace DRONNEX.API.Contracts
{
  public interface IMetaProvider
  {
        ProductForm GetProductForm(RequestEntity request);
  }
}
