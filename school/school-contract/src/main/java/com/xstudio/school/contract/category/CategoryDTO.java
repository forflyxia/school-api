package com.xstudio.school.contract.category;

/**
 * Created by wangqc on 2017/8/6.
 */
public class CategoryDTO {
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

    /*
    category num
    */
    private Integer categoryNum;
    public Integer getCategoryNum() {
        return categoryNum;
    }
    public void setCategoryNum(Integer categoryNum) {
        this.categoryNum = categoryNum;
    }
}
