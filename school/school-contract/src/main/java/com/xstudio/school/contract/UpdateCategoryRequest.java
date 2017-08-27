package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseRequest;
import com.xstudio.school.contract.category.CategoryDTO;

/**
 * Created by wangqc on 2017/8/27.
 */
public class UpdateCategoryRequest extends BaseRequest {

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
    Category
    */
    private CategoryDTO categoryDTO;
    public CategoryDTO getCategoryDTO() {
        return categoryDTO;
    }
    public void setCategoryDTO(CategoryDTO categoryDTO) {
        this.categoryDTO = categoryDTO;
    }
}
