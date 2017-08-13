package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseRequest;

/**
 * Created by wangqc on 2017/8/13.
 */
public class OrderReceivingRequest extends BaseRequest {
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
    shop user id
    */
    private Long shopUserId;
    public Long getShopUserId() {
        return shopUserId;
    }
    public void setShopUserId(Long shopUserId) {
        this.shopUserId = shopUserId;
    }

    /*
    Receive  or reject Order
    */
    private Boolean isReceive;
    public Boolean getIsReceive() {
        return isReceive;
    }
    public void setIsReceive(Boolean isReceive) {
        this.isReceive = isReceive;
    }

}
