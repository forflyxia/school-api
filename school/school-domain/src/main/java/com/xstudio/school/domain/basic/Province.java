/************************************************************************************************************************************************
 * FileName:       ProvincePo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.basic;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;

/**
 *  省份信息
 */
public class Province
{
    
    private ProvincePo provincePo;

    //self
    
    /**
     *  省份ID
     */
	public Integer getId() {
        return provincePo.getId();
    }   
    
    
    /**
     *  名称
     */
	public String getName() {
        return provincePo.getName();
    }   
    
    
    /**
     *  英文名称
     */
	public String getEname() {
        return provincePo.getEname();
    }   
    
    
    /**
     *  国家ID
     */
	public Integer getCountryId() {
        return provincePo.getCountryId();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return provincePo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return provincePo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return provincePo.getUpdatetime();
    }   
    
    
    //foreign table
    
    
    /**
     *  Init
     */
    public Province init(ProvincePo provincePo) {
        this.provincePo = provincePo;
        return this;
    }
    
}
