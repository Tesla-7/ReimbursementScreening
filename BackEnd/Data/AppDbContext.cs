using Microsoft.EntityFrameworkCore;
using ReceiptApi.Models;

namespace ReceiptApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Receipt> Receipts { get; set; }
    }
}