/************************************************************************************************************************************************
 * FileName:       UserMessagePo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.user;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;
import com.xstudio.school.domain.user.*;

/**
 *  用户消息
 */
public class UserMessage
{
    
    private UserMessagePo userMessagePo;
    private List<UserPo> userPos;

    //self
    
    /**
     *  用户消息ID
     */
	public Integer getId() {
        return userMessagePo.getId();
    }   
    
    
    /**
     *  用户ID
     */
	public Integer getUserId() {
        return userMessagePo.getUserId();
    }   
    
    
    /**
     *  消息
     */
	public String getMessage() {
        return userMessagePo.getMessage();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return userMessagePo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return userMessagePo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return userMessagePo.getUpdatetime();
    }   
    
    
    //foreign table
    /**
     *  用户信息
     */
    public List<User> getUsers() {
        List<User> items = new ArrayList<User>();
        if(!userPos.isEmpty()) {
            for(UserPo userPo : userPos) {
                User item = new User();
                item.init(userPo);
                items.add(item);
            }
        }
        return items;
    }
    
    
    
    /**
     *  Init
     */
    public UserMessage init(UserMessagePo userMessagePo, List<UserPo> userPos) {
        this.userMessagePo = userMessagePo;
        this.userPos = userPos;
        return this;
    }
    
    /**
     *  Init
     */
    public UserMessage init(UserMessagePo userMessagePo) {
        this.userMessagePo = userMessagePo;
        return this;
    }
    
}
