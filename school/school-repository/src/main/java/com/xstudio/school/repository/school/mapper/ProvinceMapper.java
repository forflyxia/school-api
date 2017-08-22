/************************************************************************************************************************************************
 * FileName:       ProvinceMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface ProvinceMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    ProvincePo getProvince(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<ProvincePo> getProvincesByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<ProvincePo> getProvinces();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateProvince(ProvincePo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertProvince(ProvincePo item);
}