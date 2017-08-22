/************************************************************************************************************************************************
 * FileName:       MerchantCustomCategoryMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface MerchantCustomCategoryMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    MerchantCustomCategoryPo getMerchantCustomCategory(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<MerchantCustomCategoryPo> getMerchantCustomCategorysByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<MerchantCustomCategoryPo> getMerchantCustomCategorys();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateMerchantCustomCategory(MerchantCustomCategoryPo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertMerchantCustomCategory(MerchantCustomCategoryPo item);
}