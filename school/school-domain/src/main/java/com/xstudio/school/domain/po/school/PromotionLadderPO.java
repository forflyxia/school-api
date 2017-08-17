/************************************************************************************************************************************************
 * FileName:       PromotionLadderPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  促销阶梯信息
 */
public class PromotionLadderPo
{
	private Integer id;
	private String name;
	private Integer promotionid;
	private Double totalamount;
	private Double reduction;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  促销阶梯ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  促销阶梯ID setter
     */
	public void setId(Integer id) {
        this.id = id;
    }
    
    /**
     *  阶梯名称 getter
     */
	public String getName() {
        return name;
    }
    
    /**
     *  阶梯名称 setter
     */
	public void setName(String name) {
        this.name = name;
    }
    
    /**
     *  促销ID getter
     */
	public Integer getPromotionId() {
        return promotionid;
    }
    
    /**
     *  促销ID setter
     */
	public void setPromotionId(Integer promotionid) {
        this.promotionid = promotionid;
    }
    
    /**
     *  满多少 getter
     */
	public Double getTotalamount() {
        return totalamount;
    }
    
    /**
     *  满多少 setter
     */
	public void setTotalamount(Double totalamount) {
        this.totalamount = totalamount;
    }
    
    /**
     *  减多少 getter
     */
	public Double getReduction() {
        return reduction;
    }
    
    /**
     *  减多少 setter
     */
	public void setReduction(Double reduction) {
        this.reduction = reduction;
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
