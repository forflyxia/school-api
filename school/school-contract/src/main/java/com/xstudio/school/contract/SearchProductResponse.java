package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseResponse;
import com.xstudio.school.contract.product.ProductDTO;
import com.xstudio.school.contract.Shop.ShopDTO;

import java.util.List;

/**
 * Created by wangqc on 2017/8/6.
 */
public class SearchProductResponse extends BaseResponse {

    /*
     shop information
     */
    private ShopDTO shopDTO;
    public ShopDTO getShopDTO() {
        return shopDTO;
    }
    public void setShopDTO(ShopDTO shopDTO) {
        this.shopDTO = shopDTO;
    }
    /*
    product list
    */
    private List<ProductDTO> productDTOList;
    public List<ProductDTO> getProductDTOList() {
        return productDTOList;
    }
    public void setProductDTOList(List<ProductDTO> productDTOList) {
        this.productDTOList = productDTOList;
    }


}
