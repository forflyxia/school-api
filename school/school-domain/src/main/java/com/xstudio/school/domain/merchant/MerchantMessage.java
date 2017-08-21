/************************************************************************************************************************************************
 * FileName:       MerchantMessagePo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.merchant;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;
import com.xstudio.school.domain.merchant.*;

/**
 *  商户消息
 */
public class MerchantMessage
{
    
    private MerchantMessagePo merchantMessagePo;
    private List<MerchantPo> merchantPos;

    //self
    
    /**
     *  商户消息ID
     */
	public Integer getId() {
        return merchantMessagePo.getId();
    }   
    
    
    /**
     *  商户ID
     */
	public Integer getMerchantId() {
        return merchantMessagePo.getMerchantId();
    }   
    
    
    /**
     *  消息
     */
	public String getMessage() {
        return merchantMessagePo.getMessage();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return merchantMessagePo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return merchantMessagePo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return merchantMessagePo.getUpdatetime();
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
    public MerchantMessage init(MerchantMessagePo merchantMessagePo, List<MerchantPo> merchantPos) {
        this.merchantMessagePo = merchantMessagePo;
        this.merchantPos = merchantPos;
        return this;
    }
    
    /**
     *  Init
     */
    public MerchantMessage init(MerchantMessagePo merchantMessagePo) {
        this.merchantMessagePo = merchantMessagePo;
        return this;
    }
    
}
