package com.xstudio.school.contract.product;

import com.xstudio.school.contract.Shop.ShopDTO;

/**
 * Created by wangqc on 2017/8/13.
 */
public class ShopProductDTO {

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
