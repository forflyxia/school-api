/************************************************************************************************************************************************
 * FileName:       MerchantMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface MerchantMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    MerchantPo getMerchant(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<MerchantPo> getMerchantsByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<MerchantPo> getMerchants();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateMerchant(MerchantPo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertMerchant(MerchantPo item);
}