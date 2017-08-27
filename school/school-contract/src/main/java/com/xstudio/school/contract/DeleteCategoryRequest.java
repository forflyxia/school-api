package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseRequest;

/**
 * Created by wangqc on 2017/8/27.
 */
public class DeleteCategoryRequest extends BaseRequest {

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
    category id
     */
    private Long categoryId;
    public Long getCategoryId() {
        return categoryId;
    }
    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
