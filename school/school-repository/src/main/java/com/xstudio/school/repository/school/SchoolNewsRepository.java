/************************************************************************************************************************************************
 * FileName:       SchoolNewsMapper.java
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
public class SchoolNewsRepository {

    @Autowired
    private SchoolNewsMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public SchoolNewsPo getSchoolNews(Integer id) {
        return mapper.getSchoolNews(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<SchoolNewsPo> getSchoolNewssByIds(List<Integer> ids) {
        return mapper.getSchoolNewssByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<SchoolNewsPo> getSchoolNewss() {
        return mapper.getSchoolNewss();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateSchoolNews(SchoolNewsPo item) {
        return mapper.updateSchoolNews(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertSchoolNews(SchoolNewsPo item) {
        return mapper.insertSchoolNews(item);
    }
}