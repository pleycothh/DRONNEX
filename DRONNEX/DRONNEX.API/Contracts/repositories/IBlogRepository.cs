using DRONNEX.API.Models.Blogs;

namespace DRONNEX.API.Contracts.repositories
{
    public interface IBlogRepository
    {
        Task<BlogEntity> GetBlogByIdAsync(Guid id);
    }
}