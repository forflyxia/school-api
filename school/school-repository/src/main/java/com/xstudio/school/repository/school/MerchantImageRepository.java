/************************************************************************************************************************************************
 * FileName:       MerchantImageMapper.java
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
public class MerchantImageRepository {

    @Autowired
    private MerchantImageMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public MerchantImagePo getMerchantImage(Integer id) {
        return mapper.getMerchantImage(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<MerchantImagePo> getMerchantImagesByIds(List<Integer> ids) {
        return mapper.getMerchantImagesByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<MerchantImagePo> getMerchantImages() {
        return mapper.getMerchantImages();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateMerchantImage(MerchantImagePo item) {
        return mapper.updateMerchantImage(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertMerchantImage(MerchantImagePo item) {
        return mapper.insertMerchantImage(item);
    }
}