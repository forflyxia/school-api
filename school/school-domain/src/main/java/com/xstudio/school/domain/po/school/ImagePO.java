/************************************************************************************************************************************************
 * FileName:       ImagePo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  图片信息
 */
public class ImagePo
{
	private Integer id;
	private String name;
	private String url;
	private String introduction;
	private Integer merchantid;
	private Integer schoolid;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  图片ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  图片ID setter
     */
	public void setId(Integer id) {
        this.id = id;
    }
    
    /**
     *  名称 getter
     */
	public String getName() {
        return name;
    }
    
    /**
     *  名称 setter
     */
	public void setName(String name) {
        this.name = name;
    }
    
    /**
     *  Url getter
     */
	public String getUrl() {
        return url;
    }
    
    /**
     *  Url setter
     */
	public void setUrl(String url) {
        this.url = url;
    }
    
    /**
     *  简介 getter
     */
	public String getIntroduction() {
        return introduction;
    }
    
    /**
     *  简介 setter
     */
	public void setIntroduction(String introduction) {
        this.introduction = introduction;
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
     *  学校ID getter
     */
	public Integer getSchoolId() {
        return schoolid;
    }
    
    /**
     *  学校ID setter
     */
	public void setSchoolId(Integer schoolid) {
        this.schoolid = schoolid;
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
