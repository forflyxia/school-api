/************************************************************************************************************************************************
 * FileName:       ProductCategoryMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import com.xstudio.school.repository.school.mapper.*;
import com.xstudio.school.domain.po.school.*;

@Repository
public class ProductCategoryRepository {

    @Autowired
    private ProductCategoryMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public ProductCategoryPo getProductCategory(Integer id) {
        return mapper.getProductCategory(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<ProductCategoryPo> getProductCategorysByIds(List<Integer> ids) {
        return mapper.getProductCategorysByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<ProductCategoryPo> getProductCategorys() {
        return mapper.getProductCategorys();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateProductCategory(ProductCategoryPo item) {
        return mapper.updateProductCategory(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertProductCategory(ProductCategoryPo item) {
        return mapper.insertProductCategory(item);
    }
}