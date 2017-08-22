/************************************************************************************************************************************************
 * FileName:       ProvinceMapper.java
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
public class ProvinceRepository {

    @Autowired
    private ProvinceMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public ProvincePo getProvince(Integer id) {
        return mapper.getProvince(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<ProvincePo> getProvincesByIds(List<Integer> ids) {
        return mapper.getProvincesByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<ProvincePo> getProvinces() {
        return mapper.getProvinces();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateProvince(ProvincePo item) {
        return mapper.updateProvince(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertProvince(ProvincePo item) {
        return mapper.insertProvince(item);
    }
}