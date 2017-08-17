/************************************************************************************************************************************************
 * FileName:       OrderDetailPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  订单详情信息
 */
public class OrderDetailPo
{
	private Integer id;
	private Integer orderid;
	private Integer productid;
	private Integer productsizeid;
	private Double unitprice;
	private Integer quantity;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  订单详情ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  订单详情ID setter
     */
	public void setId(Integer id) {
        this.id = id;
    }
    
    /**
     *  订单ID getter
     */
	public Integer getOrderId() {
        return orderid;
    }
    
    /**
     *  订单ID setter
     */
	public void setOrderId(Integer orderid) {
        this.orderid = orderid;
    }
    
    /**
     *  商品ID getter
     */
	public Integer getProductId() {
        return productid;
    }
    
    /**
     *  商品ID setter
     */
	public void setProductId(Integer productid) {
        this.productid = productid;
    }
    
    /**
     *  商品规格ID getter
     */
	public Integer getProductsizeId() {
        return productsizeid;
    }
    
    /**
     *  商品规格ID setter
     */
	public void setProductsizeId(Integer productsizeid) {
        this.productsizeid = productsizeid;
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
     *  购买数量 getter
     */
	public Integer getQuantity() {
        return quantity;
    }
    
    /**
     *  购买数量 setter
     */
	public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
    
    /**
     *  订单状态 getter
     */
	public Integer getStatus() {
        return status;
    }
    
    /**
     *  订单状态 setter
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
