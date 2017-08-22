/************************************************************************************************************************************************
 * FileName:       SchoolBusinessMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface SchoolBusinessMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    SchoolBusinessPo getSchoolBusiness(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<SchoolBusinessPo> getSchoolBusinesssByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<SchoolBusinessPo> getSchoolBusinesss();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateSchoolBusiness(SchoolBusinessPo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertSchoolBusiness(SchoolBusinessPo item);
}