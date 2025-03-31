using DRONNEX.API.Core;
using Microsoft.EntityFrameworkCore;

namespace DRONNEX.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<Product> ProductDb { get; set; }
    }
}
