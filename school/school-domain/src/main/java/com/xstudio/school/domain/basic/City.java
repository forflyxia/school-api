/************************************************************************************************************************************************
 * FileName:       CityPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.basic;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;

/**
 *  城市信息
 */
public class City
{
    
    private CityPo cityPo;

    //self
    
    /**
     *  城市ID
     */
	public Integer getId() {
        return cityPo.getId();
    }   
    
    
    /**
     *  名称
     */
	public String getName() {
        return cityPo.getName();
    }   
    
    
    /**
     *  英文名称
     */
	public String getEname() {
        return cityPo.getEname();
    }   
    
    
    /**
     *  三字码
     */
	public String getCitycode() {
        return cityPo.getCitycode();
    }   
    
    
    /**
     *  邮编
     */
	public String getZipcode() {
        return cityPo.getZipcode();
    }   
    
    
    /**
     *  省份ID
     */
	public Integer getProvinceId() {
        return cityPo.getProvinceId();
    }   
    
    
    /**
     *  国家ID
     */
	public Integer getCountryId() {
        return cityPo.getCountryId();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return cityPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return cityPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return cityPo.getUpdatetime();
    }   
    
    
    //foreign table
    
    
    /**
     *  Init
     */
    public City init(CityPo cityPo) {
        this.cityPo = cityPo;
        return this;
    }
    
}
