/************************************************************************************************************************************************
 * FileName:       MerchantCustomCategoryPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  商户自定义类别信息
 */
public class MerchantCustomCategoryPo
{
	private Integer id;
	private Integer merchatid;
	private String categoryname;
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
     *  商户ID getter
     */
	public Integer getMerchatId() {
        return merchatid;
    }
    
    /**
     *  商户ID setter
     */
	public void setMerchatId(Integer merchatid) {
        this.merchatid = merchatid;
    }
    
    /**
     *  类别名称 getter
     */
	public String getCategoryname() {
        return categoryname;
    }
    
    /**
     *  类别名称 setter
     */
	public void setCategoryname(String categoryname) {
        this.categoryname = categoryname;
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
