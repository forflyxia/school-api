/************************************************************************************************************************************************
 * FileName:       PromotionLadderPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.promotion;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;
import com.xstudio.school.domain.promotion.*;

/**
 *  促销阶梯信息
 */
public class PromotionLadder
{
    
    private PromotionLadderPo promotionLadderPo;
    private List<PromotionPo> promotionPos;

    //self
    
    /**
     *  促销阶梯ID
     */
	public Integer getId() {
        return promotionLadderPo.getId();
    }   
    
    
    /**
     *  阶梯名称
     */
	public String getName() {
        return promotionLadderPo.getName();
    }   
    
    
    /**
     *  促销ID
     */
	public Integer getPromotionId() {
        return promotionLadderPo.getPromotionId();
    }   
    
    
    /**
     *  满多少
     */
	public Double getTotalamount() {
        return promotionLadderPo.getTotalamount();
    }   
    
    
    /**
     *  减多少
     */
	public Double getReduction() {
        return promotionLadderPo.getReduction();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return promotionLadderPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return promotionLadderPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return promotionLadderPo.getUpdatetime();
    }   
    
    
    //foreign table
    /**
     *  促销信息
     */
    public List<Promotion> getPromotions() {
        List<Promotion> items = new ArrayList<Promotion>();
        if(!promotionPos.isEmpty()) {
            for(PromotionPo promotionPo : promotionPos) {
                Promotion item = new Promotion();
                item.init(promotionPo);
                items.add(item);
            }
        }
        return items;
    }
    
    
    
    /**
     *  Init
     */
    public PromotionLadder init(PromotionLadderPo promotionLadderPo, List<PromotionPo> promotionPos) {
        this.promotionLadderPo = promotionLadderPo;
        this.promotionPos = promotionPos;
        return this;
    }
    
    /**
     *  Init
     */
    public PromotionLadder init(PromotionLadderPo promotionLadderPo) {
        this.promotionLadderPo = promotionLadderPo;
        return this;
    }
    
}
