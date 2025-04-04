using DRONNEX.API.Contracts.repositories;
using DRONNEX.API.Models.Blogs;
using DRONNEX.API.Contracts.services;

namespace DRONNEX.API.Services
{
    public class BlogService : IBlogService
    {
        private readonly IBlogRepository _blogRepository;

        public BlogService(IBlogRepository blogRepository)
        {
            _blogRepository = blogRepository;
        }

        public async Task<BlogEntity> GetBlogByIdAsync(Guid id)
        {
            return await _blogRepository.GetBlogByIdAsync(id);
        }
    }
}
