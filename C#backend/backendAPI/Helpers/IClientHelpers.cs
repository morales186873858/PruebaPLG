using backendAPI.Models;

namespace backendAPI.Helpers
{
    public interface IClientHelpers
{
    
      Task<ClientDto> GetUser();

}
}

