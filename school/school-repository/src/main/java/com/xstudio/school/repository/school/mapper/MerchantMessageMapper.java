/************************************************************************************************************************************************
 * FileName:       MerchantMessageMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface MerchantMessageMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    MerchantMessagePo getMerchantMessage(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<MerchantMessagePo> getMerchantMessagesByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<MerchantMessagePo> getMerchantMessages();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateMerchantMessage(MerchantMessagePo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertMerchantMessage(MerchantMessagePo item);
}