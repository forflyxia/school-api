/************************************************************************************************************************************************
 * FileName:       ProductDescriptionPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  产品描述信息
 */
public class ProductDescriptionPo
{
	private Integer id;
	private Integer productid;
	private String description;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  描述ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  描述ID setter
     */
	public void setId(Integer id) {
        this.id = id;
    }
    
    /**
     *  产品ID getter
     */
	public Integer getProductId() {
        return productid;
    }
    
    /**
     *  产品ID setter
     */
	public void setProductId(Integer productid) {
        this.productid = productid;
    }
    
    /**
     *  描述 getter
     */
	public String getDescription() {
        return description;
    }
    
    /**
     *  描述 setter
     */
	public void setDescription(String description) {
        this.description = description;
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
