using backendAPI.DB;
using Microsoft.EntityFrameworkCore;

namespace backendAPI.Services {
 public static class DbContextRegistration{
    public static IServiceCollection AddMariaDbContext(this IServiceCollection services, string conf) {
    services.AddDbContext<AppDbContext>(options =>
                options.UseMySql(
                    conf,
                    new MariaDbServerVersion(new Version(8, 0, 30))
                )
            );

            return services;
}
 }
}