/************************************************************************************************************************************************
 * FileName:       ProductImagePo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.product;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;
import com.xstudio.school.domain.product.*;
import com.xstudio.school.domain.image.*;

/**
 *  产品图片信息
 */
public class ProductImage
{
    
    private ProductImagePo productImagePo;
    private List<ProductPo> productPos;
    private List<ImagePo> imagePos;

    //self
    
    /**
     *  产品图片ID
     */
	public Integer getId() {
        return productImagePo.getId();
    }   
    
    
    /**
     *  产品ID
     */
	public String getProductId() {
        return productImagePo.getProductId();
    }   
    
    
    /**
     *  图片ID
     */
	public String getImageId() {
        return productImagePo.getImageId();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return productImagePo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return productImagePo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return productImagePo.getUpdatetime();
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
     *  图片信息
     */
    public List<Image> getImages() {
        List<Image> items = new ArrayList<Image>();
        if(!imagePos.isEmpty()) {
            for(ImagePo imagePo : imagePos) {
                Image item = new Image();
                item.init(imagePo);
                items.add(item);
            }
        }
        return items;
    }
    
    
    
    /**
     *  Init
     */
    public ProductImage init(ProductImagePo productImagePo, List<ProductPo> productPos, List<ImagePo> imagePos) {
        this.productImagePo = productImagePo;
        this.productPos = productPos;
        this.imagePos = imagePos;
        return this;
    }
    
    /**
     *  Init
     */
    public ProductImage init(ProductImagePo productImagePo) {
        this.productImagePo = productImagePo;
        return this;
    }
    
}
