package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseRequest;

/**
 * Created by wangqc on 2017/8/6.
 */
public class SearchProductRequest extends BaseRequest {

    /*
     position
     */
    private Integer position;
    public Integer getProductCategory() {
        return position;
    }
    public void setProductCategory(Integer position) {
        this.position = position;
    }

    /*
   filter content
    */
    private String filterContent;
    public String getFilterContent() {
        return filterContent;
    }
    public void setFilterContent(String filterContent) {
        this.filterContent = filterContent;
    }

    /*
    sort type
    */
    private Integer sortType;
    public Integer getSortType() {
        return sortType;
    }
    public void setSortType(Integer sortType) {
        this.sortType = sortType;
    }
}

