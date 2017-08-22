/************************************************************************************************************************************************
 * FileName:       UserMapper.java
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
public class UserRepository {

    @Autowired
    private UserMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public UserPo getUser(Integer id) {
        return mapper.getUser(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<UserPo> getUsersByIds(List<Integer> ids) {
        return mapper.getUsersByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<UserPo> getUsers() {
        return mapper.getUsers();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateUser(UserPo item) {
        return mapper.updateUser(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertUser(UserPo item) {
        return mapper.insertUser(item);
    }
}