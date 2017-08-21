/************************************************************************************************************************************************
 * FileName:       UserTaskPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.user;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;
import com.xstudio.school.domain.user.*;
import com.xstudio.school.domain.order.*;

/**
 *  用户任务信息
 */
public class UserTask
{
    
    private UserTaskPo userTaskPo;
    private List<UserPo> userPos;
    private List<OrderPo> orderPos;

    //self
    
    /**
     *  任务ID
     */
	public Integer getId() {
        return userTaskPo.getId();
    }   
    
    
    /**
     *  用户ID
     */
	public Integer getUserId() {
        return userTaskPo.getUserId();
    }   
    
    
    /**
     *  订单ID
     */
	public Integer getOrderId() {
        return userTaskPo.getOrderId();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return userTaskPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return userTaskPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return userTaskPo.getUpdatetime();
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
     *  订单信息
     */
    public List<Order> getOrders() {
        List<Order> items = new ArrayList<Order>();
        if(!orderPos.isEmpty()) {
            for(OrderPo orderPo : orderPos) {
                Order item = new Order();
                item.init(orderPo);
                items.add(item);
            }
        }
        return items;
    }
    
    
    
    /**
     *  Init
     */
    public UserTask init(UserTaskPo userTaskPo, List<UserPo> userPos, List<OrderPo> orderPos) {
        this.userTaskPo = userTaskPo;
        this.userPos = userPos;
        this.orderPos = orderPos;
        return this;
    }
    
    /**
     *  Init
     */
    public UserTask init(UserTaskPo userTaskPo) {
        this.userTaskPo = userTaskPo;
        return this;
    }
    
}
