/************************************************************************************************************************************************
 * FileName:       MerchantImagePo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  商户图片信息
 */
public class MerchantImagePo
{
	private Integer id;
	private Integer merchantid;
	private Integer imageid;
	private Integer sequence;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  商户图片ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  商户图片ID setter
     */
	public void setId(Integer id) {
        this.id = id;
    }
    
    /**
     *  商户ID getter
     */
	public Integer getMerchantId() {
        return merchantid;
    }
    
    /**
     *  商户ID setter
     */
	public void setMerchantId(Integer merchantid) {
        this.merchantid = merchantid;
    }
    
    /**
     *  图片ID getter
     */
	public Integer getImageId() {
        return imageid;
    }
    
    /**
     *  图片ID setter
     */
	public void setImageId(Integer imageid) {
        this.imageid = imageid;
    }
    
    /**
     *  排序号 getter
     */
	public Integer getSequence() {
        return sequence;
    }
    
    /**
     *  排序号 setter
     */
	public void setSequence(Integer sequence) {
        this.sequence = sequence;
    }
    
    /**
     *  状态 getter
     */
	public Integer getStatus() {
        return status;
    }
    
    /**
     *  状态 setter
     */
	public void setStatus(Integer status) {
        this.status = status;
    }
    
    /**
     *  创建时间 getter
     */
	public Date getCreatetime() {
        return createtime;
    }
    
    /**
     *  创建时间 setter
     */
	public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }
    
    /**
     *  修改时间 getter
     */
	public Date getUpdatetime() {
        return updatetime;
    }
    
    /**
     *  修改时间 setter
     */
	public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }
}
