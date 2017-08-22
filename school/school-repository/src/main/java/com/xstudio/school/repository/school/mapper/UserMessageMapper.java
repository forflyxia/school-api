/************************************************************************************************************************************************
 * FileName:       UserMessageMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface UserMessageMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    UserMessagePo getUserMessage(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<UserMessagePo> getUserMessagesByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<UserMessagePo> getUserMessages();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateUserMessage(UserMessagePo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertUserMessage(UserMessagePo item);
}