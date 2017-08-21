/************************************************************************************************************************************************
 * FileName:       SchoolPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.school;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;

/**
 *  学校信息
 */
public class School
{
    
    private SchoolPo schoolPo;

    //self
    
    /**
     *  学校ID
     */
	public Integer getId() {
        return schoolPo.getId();
    }   
    
    
    /**
     *  名称
     */
	public String getName() {
        return schoolPo.getName();
    }   
    
    
    /**
     *  短名称
     */
	public String getShortname() {
        return schoolPo.getShortname();
    }   
    
    
    /**
     *  分校
     */
	public String getBranchname() {
        return schoolPo.getBranchname();
    }   
    
    
    /**
     *  Logo
     */
	public String getLogo() {
        return schoolPo.getLogo();
    }   
    
    
    /**
     *  简介
     */
	public String getIntroduction() {
        return schoolPo.getIntroduction();
    }   
    
    
    /**
     *  行政区ID
     */
	public Integer getDistrictId() {
        return schoolPo.getDistrictId();
    }   
    
    
    /**
     *  地址
     */
	public String getAddress() {
        return schoolPo.getAddress();
    }   
    
    
    /**
     *  经度
     */
	public Double getLongitude() {
        return schoolPo.getLongitude();
    }   
    
    
    /**
     *  纬度
     */
	public Double getLatitude() {
        return schoolPo.getLatitude();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return schoolPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return schoolPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return schoolPo.getUpdatetime();
    }   
    
    
    //foreign table
    
    
    /**
     *  Init
     */
    public School init(SchoolPo schoolPo) {
        this.schoolPo = schoolPo;
        return this;
    }
    
}
