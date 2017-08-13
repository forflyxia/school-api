package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseResponse;
import com.xstudio.school.contract.product.ShopProductDTO;

import java.util.List;

/**
 * Created by wangqc on 2017/8/6.
 */
public class SearchProductResponse extends BaseResponse {

    /*
    product list
    */
    private List<ShopProductDTO> shopProductDTOList;
    public List<ShopProductDTO> getShopProductDTOList() {
        return shopProductDTOList;
    }
    public void setShopProductDTOList(List<ShopProductDTO> shopProductDTOList) {
        this.shopProductDTOList = shopProductDTOList;
    }


}
