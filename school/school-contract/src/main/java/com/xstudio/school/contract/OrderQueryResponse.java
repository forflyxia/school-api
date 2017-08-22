package com.xstudio.school.contract;

import com.xstudio.school.contract.order.DeliveryDTO;
import com.xstudio.school.contract.order.UserDTO;
import com.xstudio.school.contract.base.BaseResponse;

import java.util.Calendar;

/**
 * Created by wangqc on 2017/8/13.
 */
public class OrderQueryResponse extends BaseResponse{
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
    user id
    */
    private Long userId;
    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }


    /*
    user information
    */
    private UserDTO userDTO;
    public UserDTO getUserDTO() {
        return userDTO;
    }
    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }

    /*
    order amount
    */
    private double orderAmount;
    public double getOrderAmount() {
        return orderAmount;
    }
    public void setOrderAmount(double orderPrice) {
        this.orderAmount = orderAmount;
    }

    /*
    Discount Amount
    */
    private double discountAmount;
    public double getDiscountAmount() {
        return discountAmount;
    }
    public void setDiscountAmount(double discountAmount) {
        this.discountAmount = discountAmount;
    }

    /*
        order time
         */
    private Calendar orderTime;
    public Calendar getOrderTime() {
        return orderTime;
    }
    public void setOrderTime(Calendar orderTime) {
        this.orderTime = orderTime;
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
