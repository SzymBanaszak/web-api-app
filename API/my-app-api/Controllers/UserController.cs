using my_app_api.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;


namespace my_app_api.Controllers
{
    [RoutePrefix("Users")]
    public class UserController : ApiController
    {
        private UserService _userService;

        public UserController()
        {
            _userService = new UserService();

        }
        [Route("")]
        [HttpGet]
        public async Task<IHttpActionResult> GetAllUsers() 
        {
            try
            {
                return Ok(await _userService.GetAllUsers());
            }
            catch (Exception ex)
            {
                return NotFound();
            }

        }
        [Route("{UserId:int}")]
        [HttpGet]
        public async Task<IHttpActionResult> GetUserDetails(int UserId)
        {
            try
            {
                return Ok(await _userService.GetUserDetails(UserId));
            }
            catch (Exception ex)
            {
                return NotFound();
            }

        }


    }
}
