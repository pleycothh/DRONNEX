using DRONNEX.API.Models;

namespace DRONNEX.API.Contracts
{
  public interface IMetaProvider
  {
        ProductForm GetProductForm(RequestEntity request);
  }
}
