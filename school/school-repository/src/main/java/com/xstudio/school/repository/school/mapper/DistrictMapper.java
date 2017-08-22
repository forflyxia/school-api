/************************************************************************************************************************************************
 * FileName:       DistrictMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface DistrictMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    DistrictPo getDistrict(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<DistrictPo> getDistrictsByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<DistrictPo> getDistricts();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateDistrict(DistrictPo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertDistrict(DistrictPo item);
}