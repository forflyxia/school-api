/************************************************************************************************************************************************
 * FileName:       PromotionMapper.java
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
public class PromotionRepository {

    @Autowired
    private PromotionMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public PromotionPo getPromotion(Integer id) {
        return mapper.getPromotion(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<PromotionPo> getPromotionsByIds(List<Integer> ids) {
        return mapper.getPromotionsByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<PromotionPo> getPromotions() {
        return mapper.getPromotions();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updatePromotion(PromotionPo item) {
        return mapper.updatePromotion(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertPromotion(PromotionPo item) {
        return mapper.insertPromotion(item);
    }
}