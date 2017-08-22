/************************************************************************************************************************************************
 * FileName:       MerchantCustomCategoryMapper.java
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
public class MerchantCustomCategoryRepository {

    @Autowired
    private MerchantCustomCategoryMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public MerchantCustomCategoryPo getMerchantCustomCategory(Integer id) {
        return mapper.getMerchantCustomCategory(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<MerchantCustomCategoryPo> getMerchantCustomCategorysByIds(List<Integer> ids) {
        return mapper.getMerchantCustomCategorysByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<MerchantCustomCategoryPo> getMerchantCustomCategorys() {
        return mapper.getMerchantCustomCategorys();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateMerchantCustomCategory(MerchantCustomCategoryPo item) {
        return mapper.updateMerchantCustomCategory(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertMerchantCustomCategory(MerchantCustomCategoryPo item) {
        return mapper.insertMerchantCustomCategory(item);
    }
}