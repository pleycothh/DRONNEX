using System.Text.Json.Nodes;

namespace DRONNEX.API.Core
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Count { get; set; }
        public decimal Value { get; set; }
        public JsonObject Props { get; set; }
    }
}
