using DatabaseModels;
using Microsoft.AspNetCore.Mvc;

namespace SellerServer.Controllers;

[ApiController]
[Route("api/san-pham")]
public class PRoductController(IConfiguration configuration, AppDbContext dbContext) : ControllerBase
{
  readonly IConfiguration _config = configuration;
  readonly AppDbContext dbContext = dbContext;


}