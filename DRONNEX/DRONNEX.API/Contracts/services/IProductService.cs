using DRONNEX.API.Models.Products;

namespace DRONNEX.API.Contracts.services
{
    public interface IProductService
    {
        Task<ProductEditor> Calc(RequestEntity ProductEntity);
      //  Task<ProductEntity> Calc(ProductEntity ProductEntity);
   // Task<ProductEditor> Get(RequestEntity request);
    }
}
