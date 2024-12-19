
using backendAPI.DB;
using backendAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace backendAPI.Helpers
{

    public class ClientHelpers: IClientHelpers{
        private readonly AppDbContext _context;
        
        public ClientHelpers(AppDbContext context)
        {
            _context = context;
        }

        public async Task<ClientDto> GetUser()
        {

          
          var clients = await _context.Clients.ToListAsync();

          var totalItems = clients.Count;
          var pageNumber = 1;
          var pageSize = 10;
          var startIndex = (pageNumber - 1) * pageSize;
        //   var endIndex = Math.Min(startIndex + pageSize, totalItems);
          var paginatedItems = clients.Skip(startIndex).Take(pageSize).ToList();
          var result = new ClientDto{

                 Clients = paginatedItems,
                 TotalItems = totalItems,
                 CurrentPage = pageNumber,
                 PageSize = pageSize, 
                 LastPage = (int)Math.Ceiling(totalItems / (double)pageSize)
            }; 

            return result;
        }
    }

}