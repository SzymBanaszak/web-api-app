using my_app_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace my_app_api.Controllers
{
    [RoutePrefix("Users")]
    public class UsersController : ApiController
    {
        [Route("")]
        public IEnumerable<Users> Get()
        {
            using (Entities entities = new Entities())
            {
                return entities.Users.ToList();
            }
        }
    }
}
