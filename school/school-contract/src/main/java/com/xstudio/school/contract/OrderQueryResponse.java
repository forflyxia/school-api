package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseResponse;
import com.xstudio.school.contract.order.OrderQueryDTO;

import java.util.List;

/**
 * Created by wangqc on 2017/8/13.
 */
public class OrderQueryResponse extends BaseResponse{
    /*
    orderQueryDTO  list
    */
    private List<OrderQueryDTO> orderQueryDTOList;
    public List<OrderQueryDTO> getOrderQueryDTOList() {
        return orderQueryDTOList;
    }
    public void setOrderQueryDTOList(List<OrderQueryDTO> orderQueryDTOList) {
        this.orderQueryDTOList = orderQueryDTOList;
    }
}
