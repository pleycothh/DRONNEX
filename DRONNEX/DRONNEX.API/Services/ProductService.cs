
using DRONNEX.API.Contracts;
using DRONNEX.API.Models;

namespace DRONNEX.API.Services
{
  public class ProductService : IProductService
  {
    private readonly IProductRepository _productRepository;
    private readonly IMetaProvider _metaProvider;

    private readonly ICalculator _calculator;
    public ProductService(IProductRepository productRepository, ICalculator calculator, IMetaProvider metaProvider)
    {
      _productRepository = productRepository;
      _calculator = calculator;
      _metaProvider = metaProvider;
    }

    // initial load page
    // return product entity, form, result
    public async Task<ProductEditor> Calc(RequestEntity request)
    {
      var prodcutForm = _metaProvider.GetProductForm(request); // get all lookups. and product based on request
      var prodcutResult = _calculator.Calculate(prodcutForm.ProductEntity, request);


      var ProductEditor = new ProductEditor()
      {
        ProductForm = prodcutForm,
        ProductResult = prodcutResult
      };
      return await Task.FromResult(ProductEditor);
    }


    [Obsolete("This method is retired, use Get instead")]
    public async Task<ProductEntity> Change(ProductEntity ProductEntity)
    {

        return await Task.FromResult(ProductEntity);
    }

 //   [Obsolete("This method is retired, use Get instead")]
 //   public async Task<ProductResult> Calc(ProductEntity ProductEntity)
 //   {
 //     var productResult = _calculator.Calculate(ProductEntity, request);
 //     return await Task.FromResult(productResult);
 //   }
  }
}
