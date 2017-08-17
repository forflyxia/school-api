/************************************************************************************************************************************************
 * FileName:       ProductPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  产品信息
 */
public class ProductPo
{
	private Integer id;
	private String name;
	private String logo;
	private Integer productcategoryid;
	private String introduction;
	private Integer merchantid;
	private Integer merchantcustomcategoryid;
	private Integer schoolid;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  产品ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  产品ID setter
     */
	public void setId(Integer id) {
        this.id = id;
    }
    
    /**
     *  名称:0000000000 getter
     */
	public String getName() {
        return name;
    }
    
    /**
     *  名称:0000000000 setter
     */
	public void setName(String name) {
        this.name = name;
    }
    
    /**
     *  Logo getter
     */
	public String getLogo() {
        return logo;
    }
    
    /**
     *  Logo setter
     */
	public void setLogo(String logo) {
        this.logo = logo;
    }
    
    /**
     *  类别 getter
     */
	public Integer getProductcategoryId() {
        return productcategoryid;
    }
    
    /**
     *  类别 setter
     */
	public void setProductcategoryId(Integer productcategoryid) {
        this.productcategoryid = productcategoryid;
    }
    
    /**
     *  简介 getter
     */
	public String getIntroduction() {
        return introduction;
    }
    
    /**
     *  简介 setter
     */
	public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }
    
    /**
     *  商户ID getter
     */
	public Integer getMerchantId() {
        return merchantid;
    }
    
    /**
     *  商户ID setter
     */
	public void setMerchantId(Integer merchantid) {
        this.merchantid = merchantid;
    }
    
    /**
     *  商户类别ID getter
     */
	public Integer getMerchantcustomcategoryId() {
        return merchantcustomcategoryid;
    }
    
    /**
     *  商户类别ID setter
     */
	public void setMerchantcustomcategoryId(Integer merchantcustomcategoryid) {
        this.merchantcustomcategoryid = merchantcustomcategoryid;
    }
    
    /**
     *  学校ID getter
     */
	public Integer getSchoolId() {
        return schoolid;
    }
    
    /**
     *  学校ID setter
     */
	public void setSchoolId(Integer schoolid) {
        this.schoolid = schoolid;
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
        return ;
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
