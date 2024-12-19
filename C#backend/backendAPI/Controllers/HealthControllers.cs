using Microsoft.AspNetCore.Mvc;

namespace backendAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class HealthController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index()
        {
            return Ok();
        }
    }
}