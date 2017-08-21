/************************************************************************************************************************************************
 * FileName:       MerchantCustomCategoryPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.merchant;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;

/**
 *  商户自定义类别信息
 */
public class MerchantCustomCategory
{
    
    private MerchantCustomCategoryPo merchantCustomCategoryPo;

    //self
    
    /**
     *  类别ID
     */
	public Integer getId() {
        return merchantCustomCategoryPo.getId();
    }   
    
    
    /**
     *  商户ID
     */
	public Integer getMerchatId() {
        return merchantCustomCategoryPo.getMerchatId();
    }   
    
    
    /**
     *  类别名称
     */
	public String getCategoryname() {
        return merchantCustomCategoryPo.getCategoryname();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return merchantCustomCategoryPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return merchantCustomCategoryPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return merchantCustomCategoryPo.getUpdatetime();
    }   
    
    
    //foreign table
    
    
    /**
     *  Init
     */
    public MerchantCustomCategory init(MerchantCustomCategoryPo merchantCustomCategoryPo) {
        this.merchantCustomCategoryPo = merchantCustomCategoryPo;
        return this;
    }
    
}
