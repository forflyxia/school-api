/************************************************************************************************************************************************
 * FileName:       OrderPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.order;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;
import com.xstudio.school.domain.user.*;
import com.xstudio.school.domain.promotion.*;
import com.xstudio.school.domain.school.*;

/**
 *  订单信息
 */
public class Order
{
    
    private OrderPo orderPo;
    private List<UserPo> userPos;
    private List<PromotionPo> promotionPos;
    private List<SchoolPo> schoolPos;

    //self
    
    /**
     *  订单ID
     */
	public Integer getId() {
        return orderPo.getId();
    }   
    
    
    /**
     *  用户ID
     */
	public Integer getUserId() {
        return orderPo.getUserId();
    }   
    
    
    /**
     *  联系人
     */
	public String getContact() {
        return orderPo.getContact();
    }   
    
    
    /**
     *  电话
     */
	public String getTelphone() {
        return orderPo.getTelphone();
    }   
    
    
    /**
     *  手机
     */
	public String getMobliephone() {
        return orderPo.getMobliephone();
    }   
    
    
    /**
     *  总金额
     */
	public Double getTotalamount() {
        return orderPo.getTotalamount();
    }   
    
    
    /**
     *  减免金额
     */
	public Double getReduction() {
        return orderPo.getReduction();
    }   
    
    
    /**
     *  实收金额
     */
	public Double getAmountpaId() {
        return orderPo.getAmountpaId();
    }   
    
    
    /**
     *  优惠券ID
     */
	public String getPromotionId() {
        return orderPo.getPromotionId();
    }   
    
    
    /**
     *  优惠阶梯ID
     */
	public String getPromotionladderId() {
        return orderPo.getPromotionladderId();
    }   
    
    
    /**
     *  配送学校ID
     */
	public Integer getSchoolId() {
        return orderPo.getSchoolId();
    }   
    
    
    /**
     *  配送地址
     */
	public String getDeliveryaddress() {
        return orderPo.getDeliveryaddress();
    }   
    
    
    /**
     *  备注
     */
	public String getRemark() {
        return orderPo.getRemark();
    }   
    
    
    /**
     *  订单状态
     */
	public Integer getStatus() {
        return orderPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return orderPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return orderPo.getUpdatetime();
    }   
    
    
    //foreign table
    /**
     *  用户信息
     */
    public List<User> getUsers() {
        List<User> items = new ArrayList<User>();
        if(!userPos.isEmpty()) {
            for(UserPo userPo : userPos) {
                User item = new User();
                item.init(userPo);
                items.add(item);
            }
        }
        return items;
    }
    
    /**
     *  促销信息
     */
    public List<Promotion> getPromotions() {
        List<Promotion> items = new ArrayList<Promotion>();
        if(!promotionPos.isEmpty()) {
            for(PromotionPo promotionPo : promotionPos) {
                Promotion item = new Promotion();
                item.init(promotionPo);
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
    public Order init(OrderPo orderPo, List<UserPo> userPos, List<PromotionPo> promotionPos, List<SchoolPo> schoolPos) {
        this.orderPo = orderPo;
        this.userPos = userPos;
        this.promotionPos = promotionPos;
        this.schoolPos = schoolPos;
        return this;
    }
    
    /**
     *  Init
     */
    public Order init(OrderPo orderPo) {
        this.orderPo = orderPo;
        return this;
    }
    
}
