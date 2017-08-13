package com.xstudio.school.openapi;

import com.xstudio.school.contract.SchoolHomePageResponse;

import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
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
}
