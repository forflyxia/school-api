/************************************************************************************************************************************************
 * FileName:       ProductDescriptionPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.product;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;
import com.xstudio.school.domain.product.*;

/**
 *  产品描述信息
 */
public class ProductDescription
{
    
    private ProductDescriptionPo productDescriptionPo;
    private List<ProductPo> productPos;

    //self
    
    /**
     *  描述ID
     */
	public Integer getId() {
        return productDescriptionPo.getId();
    }   
    
    
    /**
     *  产品ID
     */
	public Integer getProductId() {
        return productDescriptionPo.getProductId();
    }   
    
    
    /**
     *  描述
     */
	public String getDescription() {
        return productDescriptionPo.getDescription();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return productDescriptionPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return productDescriptionPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return productDescriptionPo.getUpdatetime();
    }   
    
    
    //foreign table
    /**
     *  产品信息
     */
    public List<Product> getProducts() {
        List<Product> items = new ArrayList<Product>();
        if(!productPos.isEmpty()) {
            for(ProductPo productPo : productPos) {
                Product item = new Product();
                item.init(productPo);
                items.add(item);
            }
        }
        return items;
    }
    
    
    
    /**
     *  Init
     */
    public ProductDescription init(ProductDescriptionPo productDescriptionPo, List<ProductPo> productPos) {
        this.productDescriptionPo = productDescriptionPo;
        this.productPos = productPos;
        return this;
    }
    
    /**
     *  Init
     */
    public ProductDescription init(ProductDescriptionPo productDescriptionPo) {
        this.productDescriptionPo = productDescriptionPo;
        return this;
    }
    
}
