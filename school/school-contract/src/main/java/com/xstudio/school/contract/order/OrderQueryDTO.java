package com.xstudio.school.contract.order;

import java.util.Calendar;

/**
 * Created by wangqc on 2017/8/27.
 */
public class OrderQueryDTO {
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
order Status
 */
    private Long orderStatus;
    public Long getOrderStatus() {
        return orderStatus;
    }
    public void setOrderStatus(Long orderStatus) {
        this.orderStatus = orderStatus;
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
