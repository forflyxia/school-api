/************************************************************************************************************************************************
 * FileName:       ProductCategoryPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.product;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;

/**
 *  产品类别信息
 */
public class ProductCategory
{
    
    private ProductCategoryPo productCategoryPo;

    //self
    
    /**
     *  类别ID
     */
	public Integer getId() {
        return productCategoryPo.getId();
    }   
    
    
    /**
     *  名称
     */
	public String getName() {
        return productCategoryPo.getName();
    }   
    
    
    /**
     *  父类ID
     */
	public Integer getParentcategoryId() {
        return productCategoryPo.getParentcategoryId();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return productCategoryPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return productCategoryPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return productCategoryPo.getUpdatetime();
    }   
    
    
    //foreign table
    
    
    /**
     *  Init
     */
    public ProductCategory init(ProductCategoryPo productCategoryPo) {
        this.productCategoryPo = productCategoryPo;
        return this;
    }
    
}
