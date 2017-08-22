/************************************************************************************************************************************************
 * FileName:       SchoolNewsMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface SchoolNewsMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    SchoolNewsPo getSchoolNews(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<SchoolNewsPo> getSchoolNewssByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<SchoolNewsPo> getSchoolNewss();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateSchoolNews(SchoolNewsPo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertSchoolNews(SchoolNewsPo item);
}