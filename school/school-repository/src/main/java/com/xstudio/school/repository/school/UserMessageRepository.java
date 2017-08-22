/************************************************************************************************************************************************
 * FileName:       UserMessageMapper.java
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
public class UserMessageRepository {

    @Autowired
    private UserMessageMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public UserMessagePo getUserMessage(Integer id) {
        return mapper.getUserMessage(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<UserMessagePo> getUserMessagesByIds(List<Integer> ids) {
        return mapper.getUserMessagesByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<UserMessagePo> getUserMessages() {
        return mapper.getUserMessages();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateUserMessage(UserMessagePo item) {
        return mapper.updateUserMessage(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertUserMessage(UserMessagePo item) {
        return mapper.insertUserMessage(item);
    }
}