package com.xstudio.school.openapi;

import com.xstudio.school.contract.OrderCreateRequest;
import com.xstudio.school.contract.OrderCreateResponse;
import com.xstudio.school.contract.OrderSubmitRequest;
import com.xstudio.school.contract.OrderSubmitResponse;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Calendar;

/**
 * Created by wangqc on 2017/8/6.
 */
@Path("/OrderManage")
public class OrderCreateOpenAPI {
    @POST
    @Path("/OrderCreate")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public OrderCreateResponse OrderCreate(OrderCreateRequest request)
    {
        OrderCreateResponse response=new OrderCreateResponse();
        response.setOrderId(123333L);
        Calendar c = Calendar.getInstance();
        response.setLatestPayTime(c);
        response.setIsSuccess(true);
        return response;
    }
    @POST
    @Path("/OrderSubmit")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public OrderSubmitResponse OrderSubmit(OrderSubmitRequest request)
    {
        OrderSubmitResponse response=new OrderSubmitResponse();
        response.setOrderId(123333L);
        Calendar c = Calendar.getInstance();
        response.setDeliveryTime(c);
        response.setIsSuccess(true);
        return response;
    }
}
