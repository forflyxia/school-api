/************************************************************************************************************************************************
 * FileName:       ImagePo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.image;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;
import com.xstudio.school.domain.merchant.*;
import com.xstudio.school.domain.school.*;

/**
 *  图片信息
 */
public class Image
{
    
    private ImagePo imagePo;
    private List<MerchantPo> merchantPos;
    private List<SchoolPo> schoolPos;

    //self
    
    /**
     *  图片ID
     */
	public Integer getId() {
        return imagePo.getId();
    }   
    
    
    /**
     *  名称
     */
	public String getName() {
        return imagePo.getName();
    }   
    
    
    /**
     *  Url
     */
	public String getUrl() {
        return imagePo.getUrl();
    }   
    
    
    /**
     *  简介
     */
	public String getIntroduction() {
        return imagePo.getIntroduction();
    }   
    
    
    /**
     *  商户ID
     */
	public Integer getMerchantId() {
        return imagePo.getMerchantId();
    }   
    
    
    /**
     *  学校ID
     */
	public Integer getSchoolId() {
        return imagePo.getSchoolId();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return imagePo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return imagePo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return imagePo.getUpdatetime();
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
    public Image init(ImagePo imagePo, List<MerchantPo> merchantPos, List<SchoolPo> schoolPos) {
        this.imagePo = imagePo;
        this.merchantPos = merchantPos;
        this.schoolPos = schoolPos;
        return this;
    }
    
    /**
     *  Init
     */
    public Image init(ImagePo imagePo) {
        this.imagePo = imagePo;
        return this;
    }
    
}
