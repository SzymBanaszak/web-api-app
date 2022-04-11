using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace my_app_api.DTO
{
    public class UserDetailsViewDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Pesel { get; set; }
        public string DateOfBrith { get; set; }
        public int? Gender { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public string Adress { get; set; }
        public string Email { get; set; }
        public string PhoneNumer { get; set; }
    }
}