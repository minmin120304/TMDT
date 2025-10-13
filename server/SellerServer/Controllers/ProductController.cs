using DatabaseModels;
using DatabaseModels.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using Utilities;

namespace SellerServer.Controllers;

[ApiController]
[Route("api/san-pham")]
public class ProductController(IConfiguration configuration, AppDbContext dbContext, S3Service s3Service) : ControllerBase
{
  readonly IConfiguration _config = configuration;
  readonly AppDbContext dbContext = dbContext;
  readonly S3Service s3 = s3Service;

  [HttpGet]
  public async Task<IActionResult> LayDanhSachSanPham(int nguoiBanId)
  {
    try
    {
      return Ok(new ResponseFormat()
      {
        Success = true,
        Message = "",
        Data = new List<object>()
      });
    }
    catch (Exception err)
    {
      return BadRequest(new ResponseFormat()
      {
        Success = false,
        Message = err.Message,
        Data = null
      });
    }
  }

  [HttpPost("cap-nhat-san-pham")]
  public async Task<IActionResult> CapNhatSanPham([FromForm] CapNhatSanPhamRequest request)
  {
    if (string.IsNullOrWhiteSpace(request.TenSanPham))
      return BadRequest("Tên sản phẩm không được để trống.");

    // Upload all provided files
    var uploadTasks = new List<Task<(string key, string? url)>>();
    async Task<(string, string?)> UploadIfExists(string key, IFormFile? file)
    {
      if (file == null) return (key, null);
      var url = await s3.UploadFileAsync(file);
      return (key, url);
    }

    uploadTasks.Add(UploadIfExists(nameof(request.HinhAnhSanPham1), request.HinhAnhSanPham1));
    uploadTasks.Add(UploadIfExists(nameof(request.HinhAnhSanPham2), request.HinhAnhSanPham2));
    uploadTasks.Add(UploadIfExists(nameof(request.HinhAnhSanPham3), request.HinhAnhSanPham3));
    uploadTasks.Add(UploadIfExists(nameof(request.HinhAnhSanPham4), request.HinhAnhSanPham4));
    uploadTasks.Add(UploadIfExists(nameof(request.HinhAnhSanPham5), request.HinhAnhSanPham5));
    uploadTasks.Add(UploadIfExists(nameof(request.HinhAnhSanPham6), request.HinhAnhSanPham6));
    uploadTasks.Add(UploadIfExists(nameof(request.HinhAnhSanPham7), request.HinhAnhSanPham7));
    uploadTasks.Add(UploadIfExists(nameof(request.HinhAnhSanPham8), request.HinhAnhSanPham8));
    uploadTasks.Add(UploadIfExists(nameof(request.HinhAnhSanPham9), request.HinhAnhSanPham9));
    uploadTasks.Add(UploadIfExists(nameof(request.AnhBiaSanPham), request.AnhBiaSanPham));
    uploadTasks.Add(UploadIfExists(nameof(request.VideoSanPham), request.AnhBiaSanPham));

    var uploadedFiles = (await Task.WhenAll(uploadTasks))
        .Where(r => r.url != null)
        .ToDictionary(r => r.key, r => r.url);

    // Example: Save product info + image URLs to database (pseudo)
    var sanPham = new
    {
      request.NguoiBanId,
      request.NganhHangId,
      request.TenSanPham,
      request.MoTaSanPham,
      request.GiaBan,
      request.NgayTao,
      HinhAnh = uploadedFiles
    };

    return Ok(new
    {
      message = "Cập nhật sản phẩm thành công",
      sanPham
    });
  }

  [HttpPut("cap-nhat-trang-thai")]
  public async Task<IActionResult> CapNhatTrangThaiSanPham(CapNhatTrangThaiRequest request)
  {
    return Ok();
  }

  [HttpDelete]
  public async Task<IActionResult> XoaSanPham(int id)
  {
    return Ok();
  }
}

public class CapNhatTrangThaiRequest
{
  public int SanPhamId { get; set; }
  public TrangThaiSanPham TrangThaiSanPham { get; set; }
}

public class CapNhatSanPhamRequest
{
  public int SanPhamId { get; set; }
  public int NguoiBanId { get; set; }
  public int NganhHangId { get; set; }
  public string? TenSanPham { get; set; }
  public string? MoTaSanPham { get; set; }
  public double GiaBan { get; set; }
  public DateTime NgayTao { get; set; }
  public IFormFile? HinhAnhSanPham1 { get; set; }
  public IFormFile? HinhAnhSanPham2 { get; set; }
  public IFormFile? HinhAnhSanPham3 { get; set; }
  public IFormFile? HinhAnhSanPham4 { get; set; }
  public IFormFile? HinhAnhSanPham5 { get; set; }
  public IFormFile? HinhAnhSanPham6 { get; set; }
  public IFormFile? HinhAnhSanPham7 { get; set; }
  public IFormFile? HinhAnhSanPham8 { get; set; }
  public IFormFile? HinhAnhSanPham9 { get; set; }
  public IFormFile? AnhBiaSanPham { get; set; }
  public IFormFile? VideoSanPham { get; set; }
}

public class CapNhatTrangThaiSanPhamRequest
{

}