/************************************************************************************************************************************************
 * FileName:       ProductImagePo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  产品图片信息
 */
public class ProductImagePo
{
	private Integer id;
	private String productid;
	private String imageid;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  产品图片ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  产品图片ID setter
     */
	public void setId(Integer id) {
        this.id = id;
    }
    
    /**
     *  产品ID getter
     */
	public String getProductId() {
        return productid;
    }
    
    /**
     *  产品ID setter
     */
	public void setProductId(String productid) {
        this.productid = productid;
    }
    
    /**
     *  图片ID getter
     */
	public String getImageId() {
        return imageid;
    }
    
    /**
     *  图片ID setter
     */
	public void setImageId(String imageid) {
        this.imageid = imageid;
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
