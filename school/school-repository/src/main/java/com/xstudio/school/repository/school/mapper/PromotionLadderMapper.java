/************************************************************************************************************************************************
 * FileName:       PromotionLadderMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface PromotionLadderMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    PromotionLadderPo getPromotionLadder(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<PromotionLadderPo> getPromotionLaddersByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<PromotionLadderPo> getPromotionLadders();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updatePromotionLadder(PromotionLadderPo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertPromotionLadder(PromotionLadderPo item);
}