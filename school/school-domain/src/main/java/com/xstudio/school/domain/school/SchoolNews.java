/************************************************************************************************************************************************
 * FileName:       SchoolNewsPo.java
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
 *  学校新闻信息
 */
public class SchoolNews
{
    
    private SchoolNewsPo schoolNewsPo;
    private List<SchoolPo> schoolPos;

    //self
    
    /**
     *  学校新闻ID
     */
	public Integer getId() {
        return schoolNewsPo.getId();
    }   
    
    
    /**
     *  学校ID
     */
	public String getSchoolId() {
        return schoolNewsPo.getSchoolId();
    }   
    
    
    /**
     *  新闻标题
     */
	public String getNewstitle() {
        return schoolNewsPo.getNewstitle();
    }   
    
    
    /**
     *  新闻
     */
	public String getNews() {
        return schoolNewsPo.getNews();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return schoolNewsPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return schoolNewsPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return schoolNewsPo.getUpdatetime();
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
    public SchoolNews init(SchoolNewsPo schoolNewsPo, List<SchoolPo> schoolPos) {
        this.schoolNewsPo = schoolNewsPo;
        this.schoolPos = schoolPos;
        return this;
    }
    
    /**
     *  Init
     */
    public SchoolNews init(SchoolNewsPo schoolNewsPo) {
        this.schoolNewsPo = schoolNewsPo;
        return this;
    }
    
}
