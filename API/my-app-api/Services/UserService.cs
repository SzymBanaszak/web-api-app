using my_app_api.DTO;
using my_app_api.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace my_app_api.Services
{
    public class UserService
    {
        //obsluga userow
        private ApiDatabase _db;

        public UserService() 
        {
            _db = new ApiDatabase();
        }

        public async Task<List<UserMainViewDTO>> GetAllUsers()
        {
            
            var Users = await _db.User.Select(x =>
            new UserMainViewDTO()
            {
                FirstName = x.FirstName,
                LastName = x.LastName
            }
            ).ToListAsync();
                      
            return Users;
            // var x = await _db.User.Where(x => x.UserId == 1).FirstOrDefaultAsync();
            var user = await _db.User.FirstOrDefaultAsync(x=>x.UserId==1);
        }

        public async Task<User> GetUserDetails(int UserId) 
        {
            return  await _db.User.FirstOrDefaultAsync(x => x.UserId == UserId);
        }

    }
}