using System.Text.Json;
using backendAPI.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace backendAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        public readonly IClientHelpers _helpers;
        public ClientController(IClientHelpers helpers)
        {
            _helpers = helpers;
        }
        [HttpGet]
        public IActionResult Index()
        {
            var clients = _helpers.GetUser();
            string jsonString = JsonSerializer.Serialize(clients);
            return Ok(jsonString);
        }

      
        


    }
}