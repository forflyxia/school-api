/************************************************************************************************************************************************
 * FileName:       UserTaskPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  用户任务信息
 */
public class UserTaskPo
{
	private Integer id;
	private Integer userid;
	private Integer orderid;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  任务ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  任务ID setter
     */
	public void setId(Integer id) {
        this.id = id;
    }
    
    /**
     *  用户ID getter
     */
	public Integer getUserId() {
        return userid;
    }
    
    /**
     *  用户ID setter
     */
	public void setUserId(Integer userid) {
        this.userid = userid;
    }
    
    /**
     *  订单ID getter
     */
	public Integer getOrderId() {
        return orderid;
    }
    
    /**
     *  订单ID setter
     */
	public void setOrderId(Integer orderid) {
        this.orderid = orderid;
    }
    
    /**
     *  状态 getter
     */
	public Integer getStatus() {
        return status;
    }
    
    /**
     *  状态 setter
     */
	public void setStatus(Integer status) {
        this.status = status;
    }
    
    /**
     *  创建时间 getter
     */
	public Date getCreatetime() {
        return createtime;
    }
    
    /**
     *  创建时间 setter
     */
	public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }
    
    /**
     *  修改时间 getter
     */
	public Date getUpdatetime() {
        return updatetime;
    }
    
    /**
     *  修改时间 setter
     */
	public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }
}
