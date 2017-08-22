/************************************************************************************************************************************************
 * FileName:       SchoolMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface SchoolMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    SchoolPo getSchool(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<SchoolPo> getSchoolsByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<SchoolPo> getSchools();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateSchool(SchoolPo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertSchool(SchoolPo item);
}