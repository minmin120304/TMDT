using DatabaseModels.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DatabaseModels;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
  public DbSet<TaiKhoanNguoiBan> TaiKhoanNguoiBan { get; set; }
  public DbSet<SanPham> SanPham { get; set; }
  public DbSet<PhienBanSanPham> PhienBanSanPham { get; set; }
  public DbSet<MediaSanPham> MediaSanPham { get; set; }
  public DbSet<NganhHang> NganhHang { get; set; }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    base.OnModelCreating(modelBuilder);

    var nganhHang = modelBuilder.Entity<NganhHang>();
    nganhHang
      .HasOne(i => i.NganhHangCha)
      .WithMany(i => i.NganhHangCon)
      .HasForeignKey(i => i.NganhHangChaId);
  }
}
