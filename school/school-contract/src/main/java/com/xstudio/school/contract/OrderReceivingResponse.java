package com.xstudio.school.contract;

import com.xstudio.school.contract.order.DeliveryDTO;
import com.xstudio.school.contract.base.BaseResponse;

import java.util.Calendar;

/**
 * Created by wangqc on 2017/8/13.
 */
public class OrderReceivingResponse extends BaseResponse{

    /*
    order id
     */
    private Long orderId;
    public Long getOrderId() {
        return orderId;
    }
    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }
    /*
    delivery time
     */
    private Calendar deliveryTime;
    public Calendar getDeliveryTime() {
        return deliveryTime;
    }
    public void setDeliveryTime(Calendar deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    /*
    Delivery Information
    */
    private DeliveryDTO deliveryDTO;
    public DeliveryDTO getDeliveryDTO() {
        return deliveryDTO;
    }
    public void setDeliveryDTO(DeliveryDTO deliveryDTO) {
        this.deliveryDTO = deliveryDTO;
    }
}
