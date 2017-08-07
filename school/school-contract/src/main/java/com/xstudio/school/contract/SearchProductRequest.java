package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseRequest;

/**
 * Created by wangqc on 2017/8/6.
 */
public class SearchProductRequest extends BaseRequest {
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
}

