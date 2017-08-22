/************************************************************************************************************************************************
 * FileName:       ProductImageMapper.java
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
public class ProductImageRepository {

    @Autowired
    private ProductImageMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public ProductImagePo getProductImage(Integer id) {
        return mapper.getProductImage(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<ProductImagePo> getProductImagesByIds(List<Integer> ids) {
        return mapper.getProductImagesByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<ProductImagePo> getProductImages() {
        return mapper.getProductImages();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateProductImage(ProductImagePo item) {
        return mapper.updateProductImage(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertProductImage(ProductImagePo item) {
        return mapper.insertProductImage(item);
    }
}