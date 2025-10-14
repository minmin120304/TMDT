using DatabaseModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Utilities;

namespace SellerServer.Controllers;

[ApiController]
[Route("api/nganh-hang")]
public class NganhHangController(IConfiguration configuration, AppDbContext dbContext) : ControllerBase
{
  readonly IConfiguration _config = configuration;
  readonly AppDbContext dbContext = dbContext;

  [HttpGet("cap-do-1")]
  public async Task<IActionResult> LayDanhSachNganhHangCap1()
  {
    try
    {
      var result = await dbContext.NganhHang
        .Where(i => i.NganhHangCha == null)
        .Select(i => new
        {
          i.Id,
          i.TenNganhHang
        }).ToListAsync();
      return Ok(new ResponseFormat
      {
        Data = result,
        Success = true,
        Message = ""
      });
    }
    catch (Exception err)
    {
      return BadRequest(new ResponseFormat
      {
        Data = err,
        Success = false,
        Message = ""
      });
    }
  }

  [HttpGet("lay-nganh-hang-con/{id}")]
  public async Task<IActionResult> LayNganhHangCon(int id, [FromQuery] int page, [FromQuery] int pageSize)
  {
    try
    {
      if (page <= 0) page = 1;
      if (pageSize <= 0) pageSize = 10;

      var nganhHang = await dbContext.NganhHang.FirstOrDefaultAsync(i => i.Id == id);
      if (nganhHang == null)
      {
        throw new Exception("Khong tim thay nganh hang!");
      }

      var result = await dbContext.NganhHang
        .Where(i => i.NganhHangChaId == nganhHang.Id)
        .Skip((page - 1) * pageSize)
        .Select(i => new
        {
          i.Id,
          i.TenNganhHang
        })
        .Take(pageSize).ToListAsync();
      return Ok(new ResponseFormat
      {
        Data = new
        {
          NganhHangCha = new
          {
            nganhHang.Id,
            nganhHang.TenNganhHang
          },
          NganhHangCon = result
        }
      });
    }
    catch (Exception err)
    {
      return BadRequest(new ResponseFormat
      {
        Data = err,
        Success = false,
        Message = ""
      });
    }
  }
}