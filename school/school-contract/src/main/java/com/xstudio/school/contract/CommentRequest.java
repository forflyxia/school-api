package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseRequest;
import com.xstudio.school.contract.product.ProductCommentDTO;

import java.util.List;

/**
 * Created by wangqc on 2017/8/13.
 */
public class CommentRequest extends BaseRequest {
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
    Product Comment list
    */
    private List<ProductCommentDTO> productCommentDTOList;
    public List<ProductCommentDTO> getProductCommentDTOList() {
        return productCommentDTOList;
    }
    public void setProductCommentDTOList(List<ProductCommentDTO> productCommentDTOList) {
        this.productCommentDTOList = productCommentDTOList;
    }
}
