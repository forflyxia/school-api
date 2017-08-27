package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseRequest;
import com.xstudio.school.contract.shop.ShopDTO;

/**
 * Created by wangqc on 2017/8/27.
 */
public class AddShopRequest extends BaseRequest {

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
    shop
    */
    private ShopDTO shopDTO;
    public ShopDTO getShopDTO() {
        return shopDTO;
    }
    public void setShopDTO(ShopDTO shopDTO) {
        this.shopDTO = shopDTO;
    }
}
