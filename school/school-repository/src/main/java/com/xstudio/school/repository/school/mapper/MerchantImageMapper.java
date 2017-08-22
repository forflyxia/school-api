/************************************************************************************************************************************************
 * FileName:       MerchantImageMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface MerchantImageMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    MerchantImagePo getMerchantImage(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<MerchantImagePo> getMerchantImagesByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<MerchantImagePo> getMerchantImages();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateMerchantImage(MerchantImagePo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertMerchantImage(MerchantImagePo item);
}