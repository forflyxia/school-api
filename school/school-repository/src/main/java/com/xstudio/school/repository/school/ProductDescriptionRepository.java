/************************************************************************************************************************************************
 * FileName:       ProductDescriptionMapper.java
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
public class ProductDescriptionRepository {

    @Autowired
    private ProductDescriptionMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public ProductDescriptionPo getProductDescription(Integer id) {
        return mapper.getProductDescription(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<ProductDescriptionPo> getProductDescriptionsByIds(List<Integer> ids) {
        return mapper.getProductDescriptionsByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<ProductDescriptionPo> getProductDescriptions() {
        return mapper.getProductDescriptions();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateProductDescription(ProductDescriptionPo item) {
        return mapper.updateProductDescription(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertProductDescription(ProductDescriptionPo item) {
        return mapper.insertProductDescription(item);
    }
}