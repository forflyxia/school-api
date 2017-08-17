/************************************************************************************************************************************************
 * FileName:       OrderPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  订单信息
 */
public class OrderPo
{
	private Integer id;
	private Integer userid;
	private String contact;
	private String telphone;
	private String mobliephone;
	private Double totalamount;
	private Double reduction;
	private Double amountpaid;
	private String promotionid;
	private String promotionladderid;
	private Integer schoolid;
	private String deliveryaddress;
	private String remark;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  订单ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  订单ID setter
     */
	public void setId(Integer id) {
        this.id = id;
    }
    
    /**
     *  用户ID getter
     */
	public Integer getUserId() {
        return userid;
    }
    
    /**
     *  用户ID setter
     */
	public void setUserId(Integer userid) {
        this.userid = userid;
    }
    
    /**
     *  联系人 getter
     */
	public String getContact() {
        return contact;
    }
    
    /**
     *  联系人 setter
     */
	public void setContact(String contact) {
        this.contact = contact;
    }
    
    /**
     *  电话 getter
     */
	public String getTelphone() {
        return telphone;
    }
    
    /**
     *  电话 setter
     */
	public void setTelphone(String telphone) {
        this.telphone = telphone;
    }
    
    /**
     *  手机 getter
     */
	public String getMobliephone() {
        return mobliephone;
    }
    
    /**
     *  手机 setter
     */
	public void setMobliephone(String mobliephone) {
        this.mobliephone = mobliephone;
    }
    
    /**
     *  总金额 getter
     */
	public Double getTotalamount() {
        return totalamount;
    }
    
    /**
     *  总金额 setter
     */
	public void setTotalamount(Double totalamount) {
        this.totalamount = totalamount;
    }
    
    /**
     *  减免金额 getter
     */
	public Double getReduction() {
        return reduction;
    }
    
    /**
     *  减免金额 setter
     */
	public void setReduction(Double reduction) {
        this.reduction = reduction;
    }
    
    /**
     *  实收金额 getter
     */
	public Double getAmountpaId() {
        return amountpaid;
    }
    
    /**
     *  实收金额 setter
     */
	public void setAmountpaId(Double amountpaid) {
        this.amountpaid = amountpaid;
    }
    
    /**
     *  优惠券ID getter
     */
	public String getPromotionId() {
        return promotionid;
    }
    
    /**
     *  优惠券ID setter
     */
	public void setPromotionId(String promotionid) {
        this.promotionid = promotionid;
    }
    
    /**
     *  优惠阶梯ID getter
     */
	public String getPromotionladderId() {
        return promotionladderid;
    }
    
    /**
     *  优惠阶梯ID setter
     */
	public void setPromotionladderId(String promotionladderid) {
        this.promotionladderid = promotionladderid;
    }
    
    /**
     *  配送学校ID getter
     */
	public Integer getSchoolId() {
        return schoolid;
    }
    
    /**
     *  配送学校ID setter
     */
	public void setSchoolId(Integer schoolid) {
        this.schoolid = schoolid;
    }
    
    /**
     *  配送地址 getter
     */
	public String getDeliveryaddress() {
        return deliveryaddress;
    }
    
    /**
     *  配送地址 setter
     */
	public void setDeliveryaddress(String deliveryaddress) {
        this.deliveryaddress = deliveryaddress;
    }
    
    /**
     *  备注 getter
     */
	public String getRemark() {
        return remark;
    }
    
    /**
     *  备注 setter
     */
	public void setRemark(String remark) {
        this.remark = remark;
    }
    
    /**
     *  订单状态 getter
     */
	public Integer getStatus() {
        return status;
    }
    
    /**
     *  订单状态 setter
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
