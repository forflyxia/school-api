package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseResponse;

import java.util.Calendar;

/**
 * Created by wangqc on 2017/8/6.
 */
public class OrderCreateResponse extends BaseResponse {
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
        the latest Time  for pay
         */
    private Calendar latestPayTime;
    public Calendar getLatestPayTime() {
        return latestPayTime;
    }
    public void setLatestPayTime(Calendar latestPayTime) {
        this.latestPayTime = latestPayTime;
    }
}
