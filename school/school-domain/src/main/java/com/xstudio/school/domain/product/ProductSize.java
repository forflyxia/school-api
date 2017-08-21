/************************************************************************************************************************************************
 * FileName:       ProductSizePo.java
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
 *  产品价格信息
 */
public class ProductSize
{
    
    private ProductSizePo productSizePo;
    private List<ProductPo> productPos;

    //self
    
    /**
     *  产品规格ID
     */
	public Integer getId() {
        return productSizePo.getId();
    }   
    
    
    /**
     *  产品ID
     */
	public Integer getProductId() {
        return productSizePo.getProductId();
    }   
    
    
    /**
     *  规格
     */
	public String getSize() {
        return productSizePo.getSize();
    }   
    
    
    /**
     *  单价
     */
	public Double getUnitprice() {
        return productSizePo.getUnitprice();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return productSizePo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return productSizePo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return productSizePo.getUpdatetime();
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
    public ProductSize init(ProductSizePo productSizePo, List<ProductPo> productPos) {
        this.productSizePo = productSizePo;
        this.productPos = productPos;
        return this;
    }
    
    /**
     *  Init
     */
    public ProductSize init(ProductSizePo productSizePo) {
        this.productSizePo = productSizePo;
        return this;
    }
    
}
