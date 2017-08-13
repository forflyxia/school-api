package com.xstudio.school.openapi;

import com.xstudio.school.contract.*;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * Created by wangqc on 2017/8/13.
 */
@Path("/OrderManage")
public class OrderManageOpenAPI {
    @POST
    @Path("/Query")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public OrderQueryResponse Query(OrderQueryRequest request)
    {
        OrderQueryResponse response=new OrderQueryResponse();

        response.setIsSuccess(true);
        return response;
    }
    @POST
    @Path("/OrderDetail")
    @Produces(MediaType.APPLICATION_JSON)
    public OrderDetailResponse OrderDetail(@FormParam("orderId") Long orderId,@FormParam("uId") String uId)
    {
        OrderDetailResponse response=new OrderDetailResponse();
        response.setIsSuccess(true);
        return response;
    }
    @POST
    @Path("/Comment")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public CommentResponse Comment(CommentRequest request)
    {
        CommentResponse response=new CommentResponse();
        response.setIsSuccess(true);
        response.setCommentId(11L);
        return response;
    }
    @POST
    @Path("/Reminder")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public ReminderResponse Reminder(ReminderRequest request)
    {
        ReminderResponse response=new ReminderResponse();
        response.setIsSuccess(true);
        return response;
    }
}
