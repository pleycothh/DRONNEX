using DRONNEX.API.Models;

namespace DRONNEX.API.Contracts
{
    public interface IProductService
    {
        Task<ProductEditor> Calc(RequestEntity ProductEntity);
      //  Task<ProductEntity> Calc(ProductEntity ProductEntity);
   // Task<ProductEditor> Get(RequestEntity request);
    }
}
