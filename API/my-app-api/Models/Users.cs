//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace my_app_api.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Users
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Pesel { get; set; }
        public string DateOfBrith { get; set; }
        public Nullable<int> Gender { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public string Adress { get; set; }
        public string Email { get; set; }
        public string PhoneNumer { get; set; }
    }
}
