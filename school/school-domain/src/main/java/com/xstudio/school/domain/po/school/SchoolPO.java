/************************************************************************************************************************************************
 * FileName:       SchoolPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  学校信息
 */
public class SchoolPo
{
	private Integer id;
	private String name;
	private String shortname;
	private String branchname;
	private String logo;
	private String introduction;
	private Integer districtid;
	private String address;
	private Double longitude;
	private Double latitude;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  学校ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  学校ID setter
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
     *  短名称 getter
     */
	public String getShortname() {
        return shortname;
    }
    
    /**
     *  短名称 setter
     */
	public void setShortname(String shortname) {
        this.shortname = shortname;
    }
    
    /**
     *  分校 getter
     */
	public String getBranchname() {
        return branchname;
    }
    
    /**
     *  分校 setter
     */
	public void setBranchname(String branchname) {
        this.branchname = branchname;
    }
    
    /**
     *  Logo getter
     */
	public String getLogo() {
        return logo;
    }
    
    /**
     *  Logo setter
     */
	public void setLogo(String logo) {
        this.logo = logo;
    }
    
    /**
     *  简介 getter
     */
	public String getIntroduction() {
        return introduction;
    }
    
    /**
     *  简介 setter
     */
	public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }
    
    /**
     *  行政区ID getter
     */
	public Integer getDistrictId() {
        return districtid;
    }
    
    /**
     *  行政区ID setter
     */
	public void setDistrictId(Integer districtid) {
        this.districtid = districtid;
    }
    
    /**
     *  地址 getter
     */
	public String getAddress() {
        return address;
    }
    
    /**
     *  地址 setter
     */
	public void setAddress(String address) {
        this.address = address;
    }
    
    /**
     *  经度 getter
     */
	public Double getLongitude() {
        return longitude;
    }
    
    /**
     *  经度 setter
     */
	public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }
    
    /**
     *  纬度 getter
     */
	public Double getLatitude() {
        return latitude;
    }
    
    /**
     *  纬度 setter
     */
	public void setLatitude(Double latitude) {
        this.latitude = latitude;
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
