/************************************************************************************************************************************************
 * FileName:       ProductSizeMapper.java
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
public class ProductSizeRepository {

    @Autowired
    private ProductSizeMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public ProductSizePo getProductSize(Integer id) {
        return mapper.getProductSize(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<ProductSizePo> getProductSizesByIds(List<Integer> ids) {
        return mapper.getProductSizesByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<ProductSizePo> getProductSizes() {
        return mapper.getProductSizes();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateProductSize(ProductSizePo item) {
        return mapper.updateProductSize(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertProductSize(ProductSizePo item) {
        return mapper.insertProductSize(item);
    }
}