/************************************************************************************************************************************************
 * FileName:       DistrictPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  行政区信息
 */
public class DistrictPo
{
	private Integer id;
	private String name;
	private String ename;
	private String zipcode;
	private Integer cityid;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  行政区ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  行政区ID setter
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
     *  邮编 getter
     */
	public String getZipcode() {
        return zipcode;
    }
    
    /**
     *  邮编 setter
     */
	public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }
    
    /**
     *  城市ID getter
     */
	public Integer getCityId() {
        return cityid;
    }
    
    /**
     *  城市ID setter
     */
	public void setCityId(Integer cityid) {
        this.cityid = cityid;
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
