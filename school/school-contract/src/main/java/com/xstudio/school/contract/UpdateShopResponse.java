package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseResponse;

/**
 * Created by wangqc on 2017/8/27.
 */
public class UpdateShopResponse extends BaseResponse {
    /*
   shop name
    */
    private String shopName;
    public String getShopName() {
        return shopName;
    }
    public void setShopName(String shopName) {
        this.shopName = shopName;
    }
    /*
    shop id
    */
    private Long shopId;
    public Long getShopId() {
        return shopId;
    }
    public void setShopId(Long shopId) {
        this.shopId = shopId;
    }
}
