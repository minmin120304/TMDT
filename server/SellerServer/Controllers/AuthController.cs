using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace SellerServer.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController(IConfiguration config) : ControllerBase
{
  private readonly IConfiguration _config = config;

  [HttpPost("login")]
  public IActionResult Login([FromBody] LoginRequest request)
  {
    // ✅ Normally validate user with DB
    if (request.Username != "test" || request.Password != "123") return Unauthorized();

    var jwtSettings = _config.GetSection("Jwt");
    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["Key"]!.PadRight(32)));
    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
    var claims = new[]
    {
      new Claim(ClaimTypes.Name, request.Username),
      new Claim(ClaimTypes.Role, "Admin") // example role
    };

    var token = new JwtSecurityToken(
        issuer: jwtSettings["Issuer"],
        audience: jwtSettings["Audience"],
        claims: claims,
        expires: DateTime.UtcNow.AddHours(1),
        signingCredentials: creds
    );

    return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token) });
  }

  [HttpGet("public")]
  public IActionResult Public() => Ok("This is public");

  [Authorize]
  [HttpGet("private")]
  public IActionResult Private() => Ok("This is protected");

  [HttpGet("admin")]
  public IActionResult Admin() => Ok("Only Admins can see this");
}

public class LoginRequest
{
  public required string Username { get; set; }
  public required string Password { get; set; }
}