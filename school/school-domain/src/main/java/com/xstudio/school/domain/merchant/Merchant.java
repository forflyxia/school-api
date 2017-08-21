/************************************************************************************************************************************************
 * FileName:       MerchantPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.merchant;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;

/**
 *  商户信息
 */
public class Merchant
{
    
    private MerchantPo merchantPo;

    //self
    
    /**
     *  商户ID
     */
	public Integer getId() {
        return merchantPo.getId();
    }   
    
    
    /**
     *  名称
     */
	public String getName() {
        return merchantPo.getName();
    }   
    
    
    /**
     *  短名称
     */
	public String getShortname() {
        return merchantPo.getShortname();
    }   
    
    
    /**
     *  分店
     */
	public String getBranch() {
        return merchantPo.getBranch();
    }   
    
    
    /**
     *  Logo
     */
	public String getLogo() {
        return merchantPo.getLogo();
    }   
    
    
    /**
     *  简介
     */
	public String getIntroduction() {
        return merchantPo.getIntroduction();
    }   
    
    
    /**
     *  联系人
     */
	public String getContact() {
        return merchantPo.getContact();
    }   
    
    
    /**
     *  电话
     */
	public String getTelphone() {
        return merchantPo.getTelphone();
    }   
    
    
    /**
     *  手机
     */
	public String getMobliephone() {
        return merchantPo.getMobliephone();
    }   
    
    
    /**
     *  营业执照
     */
	public String getBusinesslicence() {
        return merchantPo.getBusinesslicence();
    }   
    
    
    /**
     *  法人
     */
	public String getLegalperson() {
        return merchantPo.getLegalperson();
    }   
    
    
    /**
     *  行政区ID
     */
	public Integer getDistrictId() {
        return merchantPo.getDistrictId();
    }   
    
    
    /**
     *  地址
     */
	public String getAddress() {
        return merchantPo.getAddress();
    }   
    
    
    /**
     *  经度
     */
	public Double getLongitude() {
        return merchantPo.getLongitude();
    }   
    
    
    /**
     *  纬度
     */
	public Double getLatitude() {
        return merchantPo.getLatitude();
    }   
    
    
    /**
     *  现金
     */
	public Double getCash() {
        return merchantPo.getCash();
    }   
    
    
    /**
     *  积分
     */
	public Double getPoint() {
        return merchantPo.getPoint();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return merchantPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return merchantPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return merchantPo.getUpdatetime();
    }   
    
    
    //foreign table
    
    
    /**
     *  Init
     */
    public Merchant init(MerchantPo merchantPo) {
        this.merchantPo = merchantPo;
        return this;
    }
    
}
