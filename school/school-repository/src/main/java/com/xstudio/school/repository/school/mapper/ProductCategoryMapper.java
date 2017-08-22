/************************************************************************************************************************************************
 * FileName:       ProductCategoryMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface ProductCategoryMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    ProductCategoryPo getProductCategory(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<ProductCategoryPo> getProductCategorysByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<ProductCategoryPo> getProductCategorys();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateProductCategory(ProductCategoryPo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertProductCategory(ProductCategoryPo item);
}