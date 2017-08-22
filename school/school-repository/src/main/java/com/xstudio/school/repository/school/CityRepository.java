/************************************************************************************************************************************************
 * FileName:       CityMapper.java
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
public class CityRepository {

    @Autowired
    private CityMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public CityPo getCity(Integer id) {
        return mapper.getCity(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<CityPo> getCitysByIds(List<Integer> ids) {
        return mapper.getCitysByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<CityPo> getCitys() {
        return mapper.getCitys();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateCity(CityPo item) {
        return mapper.updateCity(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertCity(CityPo item) {
        return mapper.insertCity(item);
    }
}