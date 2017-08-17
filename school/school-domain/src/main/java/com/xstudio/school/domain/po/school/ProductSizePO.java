/************************************************************************************************************************************************
 * FileName:       ProductSizePo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  产品价格信息
 */
public class ProductSizePo
{
	private Integer id;
	private Integer productid;
	private String size;
	private Double unitprice;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  产品规格ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  产品规格ID setter
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
     *  规格 getter
     */
	public String getSize() {
        return size;
    }
    
    /**
     *  规格 setter
     */
	public void setSize(String size) {
        this.size = size;
    }
    
    /**
     *  单价 getter
     */
	public Double getUnitprice() {
        return unitprice;
    }
    
    /**
     *  单价 setter
     */
	public void setUnitprice(Double unitprice) {
        this.unitprice = unitprice;
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
