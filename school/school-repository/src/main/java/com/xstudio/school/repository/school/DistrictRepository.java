/************************************************************************************************************************************************
 * FileName:       DistrictMapper.java
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
public class DistrictRepository {

    @Autowired
    private DistrictMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public DistrictPo getDistrict(Integer id) {
        return mapper.getDistrict(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<DistrictPo> getDistrictsByIds(List<Integer> ids) {
        return mapper.getDistrictsByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<DistrictPo> getDistricts() {
        return mapper.getDistricts();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateDistrict(DistrictPo item) {
        return mapper.updateDistrict(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertDistrict(DistrictPo item) {
        return mapper.insertDistrict(item);
    }
}