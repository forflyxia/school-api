package com.xstudio.school.openapi;

import com.xstudio.school.contract.*;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * Created by wangqc on 2017/8/13.
 */
@Path("/School")
public class SchoolOpenApi {
    @POST
    @Path("/SchoolHomePage")
    @Produces(MediaType.APPLICATION_JSON)
//    @Consumes(MediaType.APPLICATION_JSON)
    public SchoolHomePageResponse SearchSchoolHomePage(@FormParam("schoolId") Long schoolId)
    {
        SchoolHomePageResponse response=new SchoolHomePageResponse();

        response.setIsSuccess(true);
        return response;
    }
    @POST
    @Path("/AddSchool")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public AddSchoolResponse AddSchool(AddSchoolRequest request)
    {
        AddSchoolResponse response=new AddSchoolResponse();
        response.setIsSuccess(true);
        return response;
    }

    @POST
    @Path("/UpdateSchool")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public UpdateShopResponse UpdateSchool(UpdateSchoolRequest request)
    {
        UpdateShopResponse response=new UpdateShopResponse();
        response.setIsSuccess(true);
        return response;
    }

    @POST
    @Path("/DeleteSchool")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public DeleteSchoolResponse DeleteSchool(DeleteSchoolRequest request)
    {
        DeleteSchoolResponse response=new DeleteSchoolResponse();
        response.setIsSuccess(true);
        return response;
    }
}
