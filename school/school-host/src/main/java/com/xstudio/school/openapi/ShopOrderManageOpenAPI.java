package com.xstudio.school.openapi;

import com.xstudio.school.contract.*;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * Created by wangqc on 2017/8/13.
 */
@Path("/ShopOrderManage")
public class ShopOrderManageOpenAPI {
    @POST
    @Path("/Query")
    @Produces(MediaType.APPLICATION_JSON)
    public OrderQueryResponse Query(@FormParam("shopId") Long shopId)
    {
        OrderQueryResponse response=new OrderQueryResponse();

        response.setIsSuccess(true);
        return response;
    }
    @POST
    @Path("/OrderDetail")
    @Produces(MediaType.APPLICATION_JSON)
    public OrderDetailResponse OrderDetail(@FormParam("orderId") Long orderId,@FormParam("uId") String uId,@FormParam("shopId") Long shopId)
    {
        OrderDetailResponse response=new OrderDetailResponse();
        response.setIsSuccess(true);
        return response;
    }
    @POST
    @Path("/ReplyComment")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public ReplyCommentResponse ReplyComment(ReplyCommentRequest request)
    {
        ReplyCommentResponse response=new ReplyCommentResponse();
        response.setIsSuccess(true);
        return response;
    }
    @POST
    @Path("/OrderReceiving")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public OrderReceivingResponse OrderReceiving(OrderReceivingRequest request)
    {
        OrderReceivingResponse response=new OrderReceivingResponse();
        response.setIsSuccess(true);
        return response;
    }

}