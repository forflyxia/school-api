package com.xstudio.school.openapi;

import com.xstudio.school.contract.AddSchoolRequest;
import com.xstudio.school.contract.AddSchoolResponse;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Created by wangqc on 2017/8/27.
 */
@Path("/User")
public class UserOpenAPI {
    @POST
    @Path("/AddUser")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public AddSchoolResponse AddUser(AddSchoolRequest request) {
        AddSchoolResponse response = new AddSchoolResponse();
        response.setIsSuccess(true);
        return response;
    }

    @POST
    @Path("/AddAddress")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public AddSchoolResponse AddAddress(AddSchoolRequest request) {
        AddSchoolResponse response = new AddSchoolResponse();
        response.setIsSuccess(true);
        return response;
    }

    @POST
    @Path("/QueryAddress")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public AddSchoolResponse QueryAddress(AddSchoolRequest request) {
        AddSchoolResponse response = new AddSchoolResponse();
        response.setIsSuccess(true);
        return response;
    }

    @POST
    @Path("/AddAddress")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public AddSchoolResponse UpdateAddress(AddSchoolRequest request) {
        AddSchoolResponse response = new AddSchoolResponse();
        response.setIsSuccess(true);
        return response;
    }

    @POST
    @Path("/AddAddress")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public AddSchoolResponse DeleteAddress(AddSchoolRequest request) {
        AddSchoolResponse response = new AddSchoolResponse();
        response.setIsSuccess(true);
        return response;
    }
}
