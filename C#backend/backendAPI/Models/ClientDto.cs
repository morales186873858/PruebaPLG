namespace backendAPI.Models{
  public class ClientDto {
    public int CurrentPage { get; set; }
    public int LastPage { get; set; }
    public int TotalItems { get; set; }

    public int PageSize { get; set; }
    public IEnumerable<Client> Clients { get; set; }

    }
}

