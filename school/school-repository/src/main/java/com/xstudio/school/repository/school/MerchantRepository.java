/************************************************************************************************************************************************
 * FileName:       MerchantMapper.java
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
public class MerchantRepository {

    @Autowired
    private MerchantMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public MerchantPo getMerchant(Integer id) {
        return mapper.getMerchant(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<MerchantPo> getMerchantsByIds(List<Integer> ids) {
        return mapper.getMerchantsByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<MerchantPo> getMerchants() {
        return mapper.getMerchants();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateMerchant(MerchantPo item) {
        return mapper.updateMerchant(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertMerchant(MerchantPo item) {
        return mapper.insertMerchant(item);
    }
}