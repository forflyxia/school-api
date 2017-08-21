/************************************************************************************************************************************************
 * FileName:       PromotionPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.promotion;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;
import com.xstudio.school.domain.merchant.*;

/**
 *  促销信息
 */
public class Promotion
{
    
    private PromotionPo promotionPo;
    private List<MerchantPo> merchantPos;

    //self
    
    /**
     *  促销ID
     */
	public Integer getId() {
        return promotionPo.getId();
    }   
    
    
    /**
     *  名称
     */
	public String getName() {
        return promotionPo.getName();
    }   
    
    
    /**
     *  短名称
     */
	public String getShortname() {
        return promotionPo.getShortname();
    }   
    
    
    /**
     *  简介
     */
	public String getDescription() {
        return promotionPo.getDescription();
    }   
    
    
    /**
     *  适用产品类别ID
     */
	public String getProductcategoryId() {
        return promotionPo.getProductcategoryId();
    }   
    
    
    /**
     *  生效日期
     */
	public Date getEffectdate() {
        return promotionPo.getEffectdate();
    }   
    
    
    /**
     *  失效日期
     */
	public Date getExpiredate() {
        return promotionPo.getExpiredate();
    }   
    
    
    /**
     *  所属商户ID
     */
	public Integer getMerchantId() {
        return promotionPo.getMerchantId();
    }   
    
    
    /**
     *  商户承担金额
     */
	public Integer getMerchantundertake() {
        return promotionPo.getMerchantundertake();
    }   
    
    
    /**
     *  平台承担金额
     */
	public Integer getPlatundertake() {
        return promotionPo.getPlatundertake();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return promotionPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return promotionPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return promotionPo.getUpdatetime();
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
     *  Init
     */
    public Promotion init(PromotionPo promotionPo, List<MerchantPo> merchantPos) {
        this.promotionPo = promotionPo;
        this.merchantPos = merchantPos;
        return this;
    }
    
    /**
     *  Init
     */
    public Promotion init(PromotionPo promotionPo) {
        this.promotionPo = promotionPo;
        return this;
    }
    
}
