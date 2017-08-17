/************************************************************************************************************************************************
 * FileName:       SchoolBusinessPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  学校业务信息
 */
public class SchoolBusinessPo
{
	private Integer id;
	private String schoolid;
	private String name;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  学校业务ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  学校业务ID setter
     */
	public void setId(Integer id) {
        this.id = id;
    }
    
    /**
     *  学校ID getter
     */
	public String getSchoolId() {
        return schoolid;
    }
    
    /**
     *  学校ID setter
     */
	public void setSchoolId(String schoolid) {
        this.schoolid = schoolid;
    }
    
    /**
     *  业务名称 getter
     */
	public String getName() {
        return name;
    }
    
    /**
     *  业务名称 setter
     */
	public void setName(String name) {
        this.name = name;
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
