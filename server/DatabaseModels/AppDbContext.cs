using DatabaseModels.Models;
using Microsoft.EntityFrameworkCore;

namespace DatabaseModels;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
  public DbSet<TaiKhoanNguoiBan> TaiKhoanNguoiBan { get; set; }
  public DbSet<SanPham> SanPham { get; set; }
  public DbSet<SanPham> PhienBanSanPham { get; set; }
  public DbSet<SanPham> NganhHang { get; set; }
}
