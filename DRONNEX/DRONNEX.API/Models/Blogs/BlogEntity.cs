using DRONNEX.API.Models.Products;
using System.Text.Json.Nodes;

namespace DRONNEX.API.Models.Blogs
{
    public class BlogEntity
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public List<BlogSection> Sections { get; set; }
        public string Footer { get; set; }
    }

    public class BlogSection
    {
        public string Heading { get; set; }
        public string Content { get; set; }
    }
}
