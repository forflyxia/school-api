package com.xstudio.school.openapi;

import com.xstudio.school.contract.*;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * Created by wangqc on 2017/8/13.
 */
@Path("/ShopOrderManage")
public class ShopOpenAPI {
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
    @Path("/OrderReceiving")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public OrderReceivingResponse OrderReceiving(OrderReceivingRequest request)
    {
        OrderReceivingResponse response=new OrderReceivingResponse();
        response.setIsSuccess(true);
        return response;
    }

    @POST
    @Path("/AddShop")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public AddShopResponse AddShop(AddShopRequest request)
    {
        AddShopResponse response=new AddShopResponse();
        response.setIsSuccess(true);
        return response;
    }

    @POST
    @Path("/UpdateShop")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public UpdateShopResponse UpdateShop(UpdateShopRequest request)
    {
        UpdateShopResponse response=new UpdateShopResponse();
        response.setIsSuccess(true);
        return response;
    }

    @POST
    @Path("/DeleteShop")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public DeleteShopResponse DeleteShop(DeleteShopRequest request)
    {
        DeleteShopResponse response=new DeleteShopResponse();
        response.setIsSuccess(true);
        return response;
    }

}