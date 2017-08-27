package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseRequest;
import com.xstudio.school.contract.product.ProductDTO;

/**
 * Created by wangqc on 2017/8/27.
 */
public class UpdateProductRequest extends BaseRequest {

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
    product
    */
    private ProductDTO productDTO;
    public ProductDTO getProductDTO() {
        return productDTO;
    }
    public void setProductDTO(ProductDTO productDTO) {
        this.productDTO = productDTO;
    }
}
