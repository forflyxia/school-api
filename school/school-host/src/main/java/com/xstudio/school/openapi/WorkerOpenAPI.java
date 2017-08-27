package com.xstudio.school.openapi;

import com.xstudio.school.contract.*;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * Created by wangqc on 2017/8/13.
 */
@Path("/Worker")
public class WorkerOpenAPI {
    @POST
    @Path("/Query")
    @Produces(MediaType.APPLICATION_JSON)
    public OrderQueryResponse Query(@FormParam("position") Integer position)
    {
        OrderQueryResponse response=new OrderQueryResponse();

        response.setIsSuccess(true);
        return response;
    }
    @POST
    @Path("/OrderDetail")
    @Produces(MediaType.APPLICATION_JSON)
    public OrderDetailResponse OrderDetail(@FormParam("orderId") Long orderId,@FormParam("uId") String uId,@FormParam("workerId") Long workerId)
    {
        OrderDetailResponse response=new OrderDetailResponse();
        response.setIsSuccess(true);
        return response;
    }

    @POST
    @Path("/GrabOrder")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public GrabOrderResponse GrabOrder(GrabOrderRequest request)
    {
        GrabOrderResponse response=new GrabOrderResponse();
        response.setIsSuccess(true);
        return response;
    }
    @POST
    @Path("/DeliveryConfirm")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public DeliveryConfirmResponse DeliveryConfirm(DeliveryConfirmRequest request)
    {
        DeliveryConfirmResponse response=new DeliveryConfirmResponse();
        response.setIsSuccess(true);
        return response;
    }
}
