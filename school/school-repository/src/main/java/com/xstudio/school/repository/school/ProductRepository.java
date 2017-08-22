/************************************************************************************************************************************************
 * FileName:       ProductMapper.java
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
public class ProductRepository {

    @Autowired
    private ProductMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public ProductPo getProduct(Integer id) {
        return mapper.getProduct(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<ProductPo> getProductsByIds(List<Integer> ids) {
        return mapper.getProductsByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<ProductPo> getProducts() {
        return mapper.getProducts();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateProduct(ProductPo item) {
        return mapper.updateProduct(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertProduct(ProductPo item) {
        return mapper.insertProduct(item);
    }
}