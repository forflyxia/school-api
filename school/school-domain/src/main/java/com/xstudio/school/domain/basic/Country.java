/************************************************************************************************************************************************
 * FileName:       CountryPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.basic;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;

/**
 *  国家信息
 */
public class Country
{
    
    private CountryPo countryPo;

    //self
    
    /**
     *  国家ID
     */
	public Integer getId() {
        return countryPo.getId();
    }   
    
    
    /**
     *  名称
     */
	public String getName() {
        return countryPo.getName();
    }   
    
    
    /**
     *  英文名称
     */
	public String getEname() {
        return countryPo.getEname();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return countryPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return countryPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return countryPo.getUpdatetime();
    }   
    
    
    //foreign table
    
    
    /**
     *  Init
     */
    public Country init(CountryPo countryPo) {
        this.countryPo = countryPo;
        return this;
    }
    
}
