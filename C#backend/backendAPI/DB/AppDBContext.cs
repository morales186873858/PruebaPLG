using backendAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace backendAPI.DB{

    public class AppDbContext : DbContext{

        public DbSet<Client> Clients  { get; set;} = null!;

        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        // {
        //     optionsBuilder.UseMySql("Server=localhost;Port=3306;Database=clientes;Trusted_Connection=True;", new MariaDbServerVersion(new Version (8,0,30) ));
        // }

    public AppDbContext(DbContextOptions options): base(options){


    }
    }

}