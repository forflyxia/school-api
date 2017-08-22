package com.xstudio.school.contract;

import com.xstudio.school.contract.shop.ShopDTO;
import com.xstudio.school.contract.base.BaseRequest;
import com.xstudio.school.contract.category.CategoryDTO;

import java.util.List;

/**
 * Created by wangqc on 2017/8/6.
 */
public class SearchCategoryRequest extends BaseRequest {
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
    Category list
    */
    private List<CategoryDTO> categoryDTOList;
    public List<CategoryDTO> getCategoryDTOList() {
        return categoryDTOList;
    }
    public void setCategoryDTOList(List<CategoryDTO> categoryDTOList) {
        this.categoryDTOList = categoryDTOList;
    }

}
