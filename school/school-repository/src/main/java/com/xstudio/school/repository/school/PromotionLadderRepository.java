/************************************************************************************************************************************************
 * FileName:       PromotionLadderMapper.java
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
public class PromotionLadderRepository {

    @Autowired
    private PromotionLadderMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public PromotionLadderPo getPromotionLadder(Integer id) {
        return mapper.getPromotionLadder(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<PromotionLadderPo> getPromotionLaddersByIds(List<Integer> ids) {
        return mapper.getPromotionLaddersByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<PromotionLadderPo> getPromotionLadders() {
        return mapper.getPromotionLadders();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updatePromotionLadder(PromotionLadderPo item) {
        return mapper.updatePromotionLadder(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertPromotionLadder(PromotionLadderPo item) {
        return mapper.insertPromotionLadder(item);
    }
}