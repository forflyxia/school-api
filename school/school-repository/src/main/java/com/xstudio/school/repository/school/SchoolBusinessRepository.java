/************************************************************************************************************************************************
 * FileName:       SchoolBusinessMapper.java
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
public class SchoolBusinessRepository {

    @Autowired
    private SchoolBusinessMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public SchoolBusinessPo getSchoolBusiness(Integer id) {
        return mapper.getSchoolBusiness(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<SchoolBusinessPo> getSchoolBusinesssByIds(List<Integer> ids) {
        return mapper.getSchoolBusinesssByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<SchoolBusinessPo> getSchoolBusinesss() {
        return mapper.getSchoolBusinesss();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateSchoolBusiness(SchoolBusinessPo item) {
        return mapper.updateSchoolBusiness(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertSchoolBusiness(SchoolBusinessPo item) {
        return mapper.insertSchoolBusiness(item);
    }
}