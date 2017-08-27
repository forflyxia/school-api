package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseResponse;

/**
 * Created by wangqc on 2017/8/27.
 */
public class UpdateProductResponse extends BaseResponse {
    /*
    product name
     */
    private String productName;
    public String getProductName() {
        return productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
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
