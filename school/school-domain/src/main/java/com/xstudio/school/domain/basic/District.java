/************************************************************************************************************************************************
 * FileName:       DistrictPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.basic;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;

/**
 *  行政区信息
 */
public class District
{
    
    private DistrictPo districtPo;

    //self
    
    /**
     *  行政区ID
     */
	public Integer getId() {
        return districtPo.getId();
    }   
    
    
    /**
     *  名称
     */
	public String getName() {
        return districtPo.getName();
    }   
    
    
    /**
     *  英文名称
     */
	public String getEname() {
        return districtPo.getEname();
    }   
    
    
    /**
     *  邮编
     */
	public String getZipcode() {
        return districtPo.getZipcode();
    }   
    
    
    /**
     *  城市ID
     */
	public Integer getCityId() {
        return districtPo.getCityId();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return districtPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return districtPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return districtPo.getUpdatetime();
    }   
    
    
    //foreign table
    
    
    /**
     *  Init
     */
    public District init(DistrictPo districtPo) {
        this.districtPo = districtPo;
        return this;
    }
    
}
