using DatabaseModels.Models;
using Microsoft.EntityFrameworkCore;

namespace DatabaseModels;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
  public DbSet<NguoiDung> NguoiDung { get; set; }
}
