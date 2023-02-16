using Microsoft.EntityFrameworkCore;
using UserManagement.Models;

namespace UserManagement.DBContexts
{
    public class UserContext : DbContext
    {

        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {
        }
        public DbSet<UserEntity> Users { get; set; }
        public DbSet<AdminEntity> Admin { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserEntity>(entity =>
            {
                entity.HasKey(e => new { e.ID });

                entity.ToTable("Users");

                entity.Property(e => e.ID).HasColumnName("ID");
            });
        }


    }

}
