using AutoMapper;
using my_app_api.DTO;
using my_app_api.Mappers;
using my_app_api.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Threading.Tasks;
using System.Web;

namespace my_app_api.Services
{
    public class UserService
    {
        //obsluga userow
        private ApiDatabase _db;
        private IMapper _mapper;

        public UserService() 
        {
            _db = new ApiDatabase();
            _mapper = AutoMapperConfig.Initialize();
        }

        public async Task<List<UserMainViewDTO>> GetAllUsers()
        {

            var Users = await _db.User.Select(x =>
            new UserMainViewDTO()
            {
                Id = x.Id,
                FirstName = x.FirstName,
                LastName = x.LastName
            }
            ).ToListAsync();
                      
            return Users;
            // var x = await _db.User.Where(x => x.Id == 1).FirstOrDefaultAsync();
            //var user = await _db.User.FirstOrDefaultAsync(x=>x.Id==1);
        }

        public async Task<User> GetUserDetails(int Id) 
        {
            return  await _db.User.FirstOrDefaultAsync(x => x.Id == Id);
        }

        public async Task<User> UpdateUserDetails(User user, int Id)
        {
            
            var userFromDb = await _db.User.FirstOrDefaultAsync(x => x.Id == Id);

            userFromDb.FirstName = user.FirstName;
            userFromDb.LastName = user.LastName;
            userFromDb.Pesel = user.Pesel;
            userFromDb.DateOfBrith = user.DateOfBrith;
            userFromDb.Gender = user.Gender;
            userFromDb.Title = user.Title;
            userFromDb.Location = user.Location;
            userFromDb.Email = user.Email;
            userFromDb.PhoneNumer = user.PhoneNumer;

        //userFromDb = User;
        //userFromDb = _mapper.Map<User>(user);
        await _db.SaveChangesAsync();
            return userFromDb;
           
        }


        public async Task<User> AddUser(User user)
        {
            


            var newUser = new User
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Pesel = user.Pesel,
                DateOfBrith = user.DateOfBrith,
                Gender = user.Gender,
                Title = user.Title,
                Adress = user.Adress,
                Location = user.Location,
                Email = user.Email,
                PhoneNumer = user.PhoneNumer,
            };
           


            _db.User.Add(newUser);
            await _db.SaveChangesAsync();
            return newUser;

        }
    }
}

//public void SaveMessage(Message item)
//{
//    Messages.Add(new Message // Cannot await void
//    {
//        Title = item.Title,
//        Description = item.Description,
//        Date = item.Date,
//        Url = item.Url
//    });
//}