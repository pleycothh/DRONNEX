using DRONNEX.API.Models.Blogs;

namespace DRONNEX.API.Contracts.services
{
    public interface IBlogService
    {
        Task<BlogEntity> GetBlogByIdAsync(Guid id);
    }
}