/************************************************************************************************************************************************
 * FileName:       CityPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  城市信息
 */
public class CityPo
{
	private Integer id;
	private String name;
	private String ename;
	private String citycode;
	private String zipcode;
	private Integer provinceid;
	private Integer countryid;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  城市ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  城市ID setter
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
     *  三字码 getter
     */
	public String getCitycode() {
        return citycode;
    }
    
    /**
     *  三字码 setter
     */
	public void setCitycode(String citycode) {
        this.citycode = citycode;
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
     *  省份ID getter
     */
	public Integer getProvinceId() {
        return provinceid;
    }
    
    /**
     *  省份ID setter
     */
	public void setProvinceId(Integer provinceid) {
        this.provinceid = provinceid;
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
