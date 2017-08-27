package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseRequest;

/**
 * Created by wangqc on 2017/8/27.
 */
public class DeleteShopRequest extends BaseRequest {

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
