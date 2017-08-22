/************************************************************************************************************************************************
 * FileName:       ProductDescriptionMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface ProductDescriptionMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    ProductDescriptionPo getProductDescription(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<ProductDescriptionPo> getProductDescriptionsByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<ProductDescriptionPo> getProductDescriptions();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateProductDescription(ProductDescriptionPo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertProductDescription(ProductDescriptionPo item);
}