/************************************************************************************************************************************************
 * FileName:       ProductImageMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface ProductImageMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    ProductImagePo getProductImage(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<ProductImagePo> getProductImagesByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<ProductImagePo> getProductImages();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateProductImage(ProductImagePo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertProductImage(ProductImagePo item);
}