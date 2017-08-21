/************************************************************************************************************************************************
 * FileName:       MerchantImagePo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.merchant;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;
import com.xstudio.school.domain.merchant.*;
import com.xstudio.school.domain.image.*;

/**
 *  商户图片信息
 */
public class MerchantImage
{
    
    private MerchantImagePo merchantImagePo;
    private List<MerchantPo> merchantPos;
    private List<ImagePo> imagePos;

    //self
    
    /**
     *  商户图片ID
     */
	public Integer getId() {
        return merchantImagePo.getId();
    }   
    
    
    /**
     *  商户ID
     */
	public Integer getMerchantId() {
        return merchantImagePo.getMerchantId();
    }   
    
    
    /**
     *  图片ID
     */
	public Integer getImageId() {
        return merchantImagePo.getImageId();
    }   
    
    
    /**
     *  排序号
     */
	public Integer getSequence() {
        return merchantImagePo.getSequence();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return merchantImagePo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return merchantImagePo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return merchantImagePo.getUpdatetime();
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
    public MerchantImage init(MerchantImagePo merchantImagePo, List<MerchantPo> merchantPos, List<ImagePo> imagePos) {
        this.merchantImagePo = merchantImagePo;
        this.merchantPos = merchantPos;
        this.imagePos = imagePos;
        return this;
    }
    
    /**
     *  Init
     */
    public MerchantImage init(MerchantImagePo merchantImagePo) {
        this.merchantImagePo = merchantImagePo;
        return this;
    }
    
}
