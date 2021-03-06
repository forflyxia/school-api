/************************************************************************************************************************************************
 * FileName:       UserMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface UserMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    UserPo getUser(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<UserPo> getUsersByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<UserPo> getUsers();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateUser(UserPo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertUser(UserPo item);
}