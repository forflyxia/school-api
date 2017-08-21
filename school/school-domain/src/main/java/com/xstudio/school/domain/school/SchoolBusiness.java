/************************************************************************************************************************************************
 * FileName:       SchoolBusinessPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.school;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;
import com.xstudio.school.domain.school.*;

/**
 *  学校业务信息
 */
public class SchoolBusiness
{
    
    private SchoolBusinessPo schoolBusinessPo;
    private List<SchoolPo> schoolPos;

    //self
    
    /**
     *  学校业务ID
     */
	public Integer getId() {
        return schoolBusinessPo.getId();
    }   
    
    
    /**
     *  学校ID
     */
	public String getSchoolId() {
        return schoolBusinessPo.getSchoolId();
    }   
    
    
    /**
     *  业务名称
     */
	public String getName() {
        return schoolBusinessPo.getName();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return schoolBusinessPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return schoolBusinessPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return schoolBusinessPo.getUpdatetime();
    }   
    
    
    //foreign table
    /**
     *  学校信息
     */
    public List<School> getSchools() {
        List<School> items = new ArrayList<School>();
        if(!schoolPos.isEmpty()) {
            for(SchoolPo schoolPo : schoolPos) {
                School item = new School();
                item.init(schoolPo);
                items.add(item);
            }
        }
        return items;
    }
    
    
    
    /**
     *  Init
     */
    public SchoolBusiness init(SchoolBusinessPo schoolBusinessPo, List<SchoolPo> schoolPos) {
        this.schoolBusinessPo = schoolBusinessPo;
        this.schoolPos = schoolPos;
        return this;
    }
    
    /**
     *  Init
     */
    public SchoolBusiness init(SchoolBusinessPo schoolBusinessPo) {
        this.schoolBusinessPo = schoolBusinessPo;
        return this;
    }
    
}
