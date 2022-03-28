using AutoMapper;
using my_app_api.DTO;
using my_app_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace my_app_api.Mappers
{
    public static class AutoMapperConfig
    {
        public static IMapper Initialize()
            => new MapperConfiguration(cfg =>
            {

                cfg.CreateMap<User,UserMainViewDTO>();

                
            }).CreateMapper();

    }
}