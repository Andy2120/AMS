using Microsoft.EntityFrameworkCore;
using Ratings.Models;

namespace Ratings.DbContexts
{
    public class ApplicationDbContext:DbContext 
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {

        }
        public DbSet<CheckoutCounter> CheckoutCounters { get; set; }

        public DbSet<ManningCustomerRelation> ManningCustomerRelations { get; set; }

        public DbSet<MerchandiseReadiness> MerchandiseReadinesses { get; set; }

        public DbSet<StoreCleanliness>  storeCleanlinesses { get; set; }
        public DbSet<Total> Totals { get; set; }
    }
}
