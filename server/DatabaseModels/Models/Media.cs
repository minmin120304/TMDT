using System.ComponentModel.DataAnnotations;

namespace DatabaseModels.Models;

public class Media
{
  [Key]
  public int Id { get; set; }
  public string? DuongDan { get; set; }
}