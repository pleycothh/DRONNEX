using DRONNEX.API.Contracts.repositories;
using DRONNEX.API.Models.Products;

namespace DRONNEX.API.Repository
{
    public class ProductRepository: IProductRepository
    {
        protected readonly string collectionName = "products";
     //   private readonly IMongoCollection<Product> collection;

        public ProductRepository()
        {
      //      collection = ConnectToMongo<Product>(collectionName);
        }

        public async Task<ProductEntity> GetProduct(string productId)
        {
            // return product 
            // map to product Entity
        //    var product = await collection.FindAsync(_ => true);
            return new ProductEntity();
        }


        public async Task AddProduct(ProductEntity product)
        {
            
        //    var productdb = product.ToDB();
        //    productdb.Id = String.Empty;
        //    await collection.InsertOneAsync(productdb);
        //    if (productdb.Id != String.Empty)
        //    {
        //        return productdb.Id;
        //    }
        //    else
        //    {
        //        return String.Empty;
        //    }
        }

        public async Task DeleteProduct(string productId)
        {
         //   await collection.DeleteOneAsync(p => p.Id == productId);
        }

    }
}
