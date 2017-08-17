/************************************************************************************************************************************************
 * FileName:       ProvincePo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  省份信息
 */
public class ProvincePo
{
	private Integer id;
	private String name;
	private String ename;
	private Integer countryid;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  省份ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  省份ID setter
     */
	public void setId(Integer id) {
        this.id = id;
    }
    
    /**
     *  名称 getter
     */
	public String getName() {
        return name;
    }
    
    /**
     *  名称 setter
     */
	public void setName(String name) {
        this.name = name;
    }
    
    /**
     *  英文名称 getter
     */
	public String getEname() {
        return ename;
    }
    
    /**
     *  英文名称 setter
     */
	public void setEname(String ename) {
        this.ename = ename;
    }
    
    /**
     *  国家ID getter
     */
	public Integer getCountryId() {
        return countryid;
    }
    
    /**
     *  国家ID setter
     */
	public void setCountryId(Integer countryid) {
        this.countryid = countryid;
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
