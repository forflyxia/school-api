/************************************************************************************************************************************************
 * FileName:       UserTaskMapper.java
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
public class UserTaskRepository {

    @Autowired
    private UserTaskMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public UserTaskPo getUserTask(Integer id) {
        return mapper.getUserTask(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<UserTaskPo> getUserTasksByIds(List<Integer> ids) {
        return mapper.getUserTasksByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<UserTaskPo> getUserTasks() {
        return mapper.getUserTasks();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateUserTask(UserTaskPo item) {
        return mapper.updateUserTask(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertUserTask(UserTaskPo item) {
        return mapper.insertUserTask(item);
    }
}