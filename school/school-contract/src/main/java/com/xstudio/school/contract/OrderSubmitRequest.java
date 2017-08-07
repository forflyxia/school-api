package com.xstudio.school.contract;

import com.xstudio.school.contract.OrderManage.PaymentDTO;
import com.xstudio.school.contract.base.BaseRequest;

import java.util.List;

/**
 * Created by wangqc on 2017/8/6.
 */
public class OrderSubmitRequest extends BaseRequest {

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
    Payment list
    */
    private List<PaymentDTO> paymentDTOList;
    public List<PaymentDTO> getPaymentDTOList() {
        return paymentDTOList;
    }
    public void setPaymentDTOList(List<PaymentDTO> paymentDTOList) {
        this.paymentDTOList = paymentDTOList;
    }
}
