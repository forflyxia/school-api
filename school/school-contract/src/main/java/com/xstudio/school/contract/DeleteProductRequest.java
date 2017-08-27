package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseRequest;

/**
 * Created by wangqc on 2017/8/27.
 */
public class DeleteProductRequest extends BaseRequest {

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
    product id
     */
    private Long productId;
    public Long getProductId() {
        return productId;
    }
    public void setProductId(Long productId) {
        this.productId = productId;
    }
}
