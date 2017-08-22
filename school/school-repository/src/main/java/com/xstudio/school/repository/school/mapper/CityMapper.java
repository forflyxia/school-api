/************************************************************************************************************************************************
 * FileName:       CityMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface CityMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    CityPo getCity(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<CityPo> getCitysByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<CityPo> getCitys();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateCity(CityPo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertCity(CityPo item);
}