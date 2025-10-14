using System.ComponentModel.DataAnnotations;

namespace DatabaseModels.Models;

public class TaiKhoanNguoiBan
{
  [Key]
  public int Id { get; set; }
  public string? HoTen { get; set; }
  public string? Email { get; set; }
  public string? SoDienThoai { get; set; }
  public string? MatKhauBam { get; set; }
  public string? Salt { get; set; }
  public GioiTinh? GioiTinh { get; set; } = Models.GioiTinh.KHAC;
  public DateTime SinhNhat { get; set; }
  public DateTime? NgayTao { get; set; } = DateTime.UtcNow;

  public List<SanPham>? SanPham { get; set; }
}

public enum GioiTinh
{
  NAM,
  NU,
  KHAC
}

