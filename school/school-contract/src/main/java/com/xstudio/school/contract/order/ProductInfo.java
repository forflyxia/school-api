package com.xstudio.school.contract.order;

import com.xstudio.school.contract.product.ProductDTO;

/**
 * Created by wangqc on 2017/8/6.
 */
public class ProductInfo extends ProductDTO {
    /*
    product count
    */
    private Integer productCount;
    public Integer getProductCount() {
        return productCount;
    }
    public void setProductCount(Integer productCount) {
        this.productCount = productCount;
    }
}
