/************************************************************************************************************************************************
 * FileName:       MerchantMessageMapper.java
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
public class MerchantMessageRepository {

    @Autowired
    private MerchantMessageMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public MerchantMessagePo getMerchantMessage(Integer id) {
        return mapper.getMerchantMessage(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<MerchantMessagePo> getMerchantMessagesByIds(List<Integer> ids) {
        return mapper.getMerchantMessagesByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<MerchantMessagePo> getMerchantMessages() {
        return mapper.getMerchantMessages();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateMerchantMessage(MerchantMessagePo item) {
        return mapper.updateMerchantMessage(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertMerchantMessage(MerchantMessagePo item) {
        return mapper.insertMerchantMessage(item);
    }
}