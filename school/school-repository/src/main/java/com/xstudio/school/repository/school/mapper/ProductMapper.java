/************************************************************************************************************************************************
 * FileName:       ProductMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface ProductMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    ProductPo getProduct(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<ProductPo> getProductsByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<ProductPo> getProducts();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateProduct(ProductPo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertProduct(ProductPo item);
}