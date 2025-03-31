


using DRONNEX.API.Claculator;
using DRONNEX.API.Contracts;
using DRONNEX.API.Data;
using DRONNEX.API.Meta;
using DRONNEX.API.Repository;
using DRONNEX.API.Services;
using Microsoft.EntityFrameworkCore;

namespace DRONNEX.API
{
    public class Program
    {
        public static void Main(string[] args)
        {

            var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

            var builder = WebApplication.CreateBuilder(args);

            // Add SQL
            builder.Services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


            // Add MongoDb
            // Add services to the container.
            //  builder.Services.Configure<MMBKDatabaseSettings>(
            //  builder.Configuration.GetSection("LocalDatabase"));
            //   builder.Services.Configure<MongoDbSettings>(builder.Configuration.GetSection(nameof(MongoDbSettings)));
            //   builder.Services.AddSingleton<IMongoClient>(serviceProvider =>
            //   {
            //       var configuration = serviceProvider.GetRequiredService<IConfiguration>();
            //       var connectionString = configuration.GetConnectionString("MongoDb");
            //       return new MongoClient(connectionString);
            //   });

            // Add CORS
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  policy =>
                                  {
                                      policy.AllowAnyOrigin()
                                      //policy.WithOrigins("http://localhost:4200",
                                      //  "http://localhost:4200/",
                                      //  "http://localhost:4200/flash")
                                      .AllowAnyHeader()
                                      .AllowAnyMethod();
                                  });
            });
            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Ef core


            // register service
            builder.Services.AddScoped<IProductRepository, ProductRepository>();
            //
            //   builder.Services.AddScoped<IUserService, UserService>();
            builder.Services.AddScoped<IProductService, ProductService>();

            builder.Services.AddScoped<IMetaProvider, MetaProvider>();

            builder.Services.AddScoped<ICalculator, Calculator>();

            //   builder.Services.AddScoped<MongoDbContext>();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(MyAllowSpecificOrigins);

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
