using DRONNEX.API.Contracts.services;
using DRONNEX.API.Models.Products;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DRONNEX.API.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class ProductController : ControllerBase
    {

        private readonly IProductService _productService;
        public ProductController(IProductService actionService) => _productService = actionService;

        [HttpPost("calc")]
        public async Task<IActionResult> Calc([FromBody] RequestEntity request)
        {
        
          var productEditor = await _productService.Calc(request);
          return Ok(productEditor);
        }


    // later enabled for save purpose
   //     [Obsolete("This method is retired, use auto calculation")]
   //     [HttpPost("calcsave")]
   //     public async Task<IActionResult> AddProduct([FromBody]ProductEntity productEntity)
   //     {
   //         var productId = await _productService.Calc(productEntity);
   //         return Ok(productId);
   //     }
    }
}
