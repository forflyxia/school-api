/************************************************************************************************************************************************
 * FileName:       ProductCategoryPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  产品类别信息
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
     *  类别ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  类别ID setter
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
     *  父类ID getter
     */
	public Integer getParentcategoryId() {
        return parentcategoryid;
    }
    
    /**
     *  父类ID setter
     */
	public void setParentcategoryId(Integer parentcategoryid) {
        this.parentcategoryid = parentcategoryid;
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
