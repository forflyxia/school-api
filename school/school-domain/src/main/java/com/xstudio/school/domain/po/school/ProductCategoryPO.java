/************************************************************************************************************************************************
 * FileName:       ProductCategoryPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  
 */
public class ProductCategoryPo
{
	private Integer id;
	private String name;
	private Integer parentcategoryid;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    /**
     *   getter
     */
	public Integer GetId() {
        return id;
    }
    
    /**
     *   setter
     */
	public void setId(Integer id) {
        this.id = id;
    }
    /**
     *   getter
     */
	public String GetName() {
        return name;
    }
    
    /**
     *   setter
     */
	public void setName(String name) {
        this.name = name;
    }
    /**
     *   getter
     */
	public Integer GetParentcategoryId() {
        return parentcategoryid;
    }
    
    /**
     *   setter
     */
	public void setParentcategoryId(Integer parentcategoryid) {
        this.parentcategoryid = parentcategoryid;
    }
    /**
     *   getter
     */
	public Integer GetStatus() {
        return status;
    }
    
    /**
     *   setter
     */
	public void setStatus(Integer status) {
        this.status = status;
    }
    /**
     *   getter
     */
	public Date GetCreatetime() {
        return createtime;
    }
    
    /**
     *   setter
     */
	public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }
    /**
     *   getter
     */
	public Date GetUpdatetime() {
        return updatetime;
    }
    
    /**
     *   setter
     */
	public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }
}
