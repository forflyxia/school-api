/************************************************************************************************************************************************
 * FileName:       ProductSizeMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface ProductSizeMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    ProductSizePo getProductSize(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<ProductSizePo> getProductSizesByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<ProductSizePo> getProductSizes();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateProductSize(ProductSizePo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertProductSize(ProductSizePo item);
}