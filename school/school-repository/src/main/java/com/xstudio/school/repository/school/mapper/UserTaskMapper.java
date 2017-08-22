/************************************************************************************************************************************************
 * FileName:       UserTaskMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface UserTaskMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    UserTaskPo getUserTask(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<UserTaskPo> getUserTasksByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<UserTaskPo> getUserTasks();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateUserTask(UserTaskPo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertUserTask(UserTaskPo item);
}