/************************************************************************************************************************************************
 * FileName:       ProductPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.product;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;
import com.xstudio.school.domain.merchant.*;
import com.xstudio.school.domain.school.*;

/**
 *  产品信息
 */
public class Product
{
    
    private ProductPo productPo;
    private List<MerchantPo> merchantPos;
    private List<SchoolPo> schoolPos;

    //self
    
    /**
     *  产品ID
     */
	public Integer getId() {
        return productPo.getId();
    }   
    
    
    /**
     *  名称:
     */
	public String getName() {
        return productPo.getName();
    }   
    
    
    /**
     *  Logo
     */
	public String getLogo() {
        return productPo.getLogo();
    }   
    
    
    /**
     *  类别
     */
	public Integer getProductcategoryId() {
        return productPo.getProductcategoryId();
    }   
    
    
    /**
     *  简介
     */
	public String getIntroduction() {
        return productPo.getIntroduction();
    }   
    
    
    /**
     *  商户ID
     */
	public Integer getMerchantId() {
        return productPo.getMerchantId();
    }   
    
    
    /**
     *  商户类别ID
     */
	public Integer getMerchantcustomcategoryId() {
        return productPo.getMerchantcustomcategoryId();
    }   
    
    
    /**
     *  学校ID
     */
	public Integer getSchoolId() {
        return productPo.getSchoolId();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return productPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return productPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return productPo.getUpdatetime();
    }   
    
    
    //foreign table
    /**
     *  商户信息
     */
    public List<Merchant> getMerchants() {
        List<Merchant> items = new ArrayList<Merchant>();
        if(!merchantPos.isEmpty()) {
            for(MerchantPo merchantPo : merchantPos) {
                Merchant item = new Merchant();
                item.init(merchantPo);
                items.add(item);
            }
        }
        return items;
    }
    
    /**
     *  学校信息
     */
    public List<School> getSchools() {
        List<School> items = new ArrayList<School>();
        if(!schoolPos.isEmpty()) {
            for(SchoolPo schoolPo : schoolPos) {
                School item = new School();
                item.init(schoolPo);
                items.add(item);
            }
        }
        return items;
    }
    
    
    
    /**
     *  Init
     */
    public Product init(ProductPo productPo, List<MerchantPo> merchantPos, List<SchoolPo> schoolPos) {
        this.productPo = productPo;
        this.merchantPos = merchantPos;
        this.schoolPos = schoolPos;
        return this;
    }
    
    /**
     *  Init
     */
    public Product init(ProductPo productPo) {
        this.productPo = productPo;
        return this;
    }
    
}
