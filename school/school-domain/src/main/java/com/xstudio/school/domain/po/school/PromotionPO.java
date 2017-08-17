/************************************************************************************************************************************************
 * FileName:       PromotionPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  促销信息
 */
public class PromotionPo
{
	private Integer id;
	private String name;
	private String shortname;
	private String description;
	private String productcategoryid;
	private Date effectdate;
	private Date expiredate;
	private Integer merchantid;
	private Integer merchantundertake;
	private Integer platundertake;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  促销ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  促销ID setter
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
     *  短名称 getter
     */
	public String getShortname() {
        return shortname;
    }
    
    /**
     *  短名称 setter
     */
	public void setShortname(String shortname) {
        this.shortname = shortname;
    }
    
    /**
     *  简介 getter
     */
	public String getDescription() {
        return description;
    }
    
    /**
     *  简介 setter
     */
	public void setDescription(String description) {
        this.description = description;
    }
    
    /**
     *  适用产品类别ID getter
     */
	public String getProductcategoryId() {
        return productcategoryid;
    }
    
    /**
     *  适用产品类别ID setter
     */
	public void setProductcategoryId(String productcategoryid) {
        this.productcategoryid = productcategoryid;
    }
    
    /**
     *  生效日期 getter
     */
	public Date getEffectdate() {
        return effectdate;
    }
    
    /**
     *  生效日期 setter
     */
	public void setEffectdate(Date effectdate) {
        this.effectdate = effectdate;
    }
    
    /**
     *  失效日期 getter
     */
	public Date getExpiredate() {
        return expiredate;
    }
    
    /**
     *  失效日期 setter
     */
	public void setExpiredate(Date expiredate) {
        this.expiredate = expiredate;
    }
    
    /**
     *  所属商户ID getter
     */
	public Integer getMerchantId() {
        return merchantid;
    }
    
    /**
     *  所属商户ID setter
     */
	public void setMerchantId(Integer merchantid) {
        this.merchantid = merchantid;
    }
    
    /**
     *  商户承担金额 getter
     */
	public Integer getMerchantundertake() {
        return merchantundertake;
    }
    
    /**
     *  商户承担金额 setter
     */
	public void setMerchantundertake(Integer merchantundertake) {
        this.merchantundertake = merchantundertake;
    }
    
    /**
     *  平台承担金额 getter
     */
	public Integer getPlatundertake() {
        return platundertake;
    }
    
    /**
     *  平台承担金额 setter
     */
	public void setPlatundertake(Integer platundertake) {
        this.platundertake = platundertake;
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
