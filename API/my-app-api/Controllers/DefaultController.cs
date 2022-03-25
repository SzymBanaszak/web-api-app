using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace my_app_api.Controllers
{
    [RoutePrefix("Default")]
    public class DefaultController : ApiController
    {
        public DefaultController() 
        { 
        

        }

        [Route("")]
        public async Task<IHttpActionResult> Get()
        {
            try {
                return Ok("Hello");
            }
            catch (Exception ex)
            {
                return NotFound();
            }

        }

    }
}
