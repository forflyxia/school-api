package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseResponse;

/**
 * Created by wangqc on 2017/8/27.
 */
public class AddCategoryResponse extends BaseResponse {
    /*
    category name
     */
    private String categoryName;
    public String getCategoryName() {
        return categoryName;
    }
    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
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
