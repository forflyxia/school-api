/************************************************************************************************************************************************
 * FileName:       SchoolMapper.java
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
public class SchoolRepository {

    @Autowired
    private SchoolMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public SchoolPo getSchool(Integer id) {
        return mapper.getSchool(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<SchoolPo> getSchoolsByIds(List<Integer> ids) {
        return mapper.getSchoolsByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<SchoolPo> getSchools() {
        return mapper.getSchools();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateSchool(SchoolPo item) {
        return mapper.updateSchool(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertSchool(SchoolPo item) {
        return mapper.insertSchool(item);
    }
}