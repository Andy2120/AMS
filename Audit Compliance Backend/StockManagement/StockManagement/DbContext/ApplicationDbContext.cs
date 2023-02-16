using Microsoft.EntityFrameworkCore;
using StockManagement.Models;

namespace StockManagement.MyDbContext
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public virtual DbSet<AuditQuestion> Questions { get; set; }
        public virtual DbSet<AuditAnswer> Answers { get; set; }
    }
}
