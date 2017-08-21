/************************************************************************************************************************************************
 * FileName:       UserPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.user;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;
import com.xstudio.school.domain.school.*;

/**
 *  用户信息
 */
public class User
{
    
    private UserPo userPo;
    private List<SchoolPo> schoolPos;

    //self
    
    /**
     *  用户ID
     */
	public Integer getId() {
        return userPo.getId();
    }   
    
    
    /**
     *  名称
     */
	public String getUsername() {
        return userPo.getUsername();
    }   
    
    
    /**
     *  密码
     */
	public String getPassword() {
        return userPo.getPassword();
    }   
    
    
    /**
     *  昵称
     */
	public String getNickname() {
        return userPo.getNickname();
    }   
    
    
    /**
     *  邮箱
     */
	public String getEmail() {
        return userPo.getEmail();
    }   
    
    
    /**
     *  用户类型
     */
	public String getUsertype() {
        return userPo.getUsertype();
    }   
    
    
    /**
     *  手机
     */
	public String getMoblie() {
        return userPo.getMoblie();
    }   
    
    
    /**
     *  性别
     */
	public Integer getSex() {
        return userPo.getSex();
    }   
    
    
    /**
     *  所属学校ID
     */
	public Integer getSchoolId() {
        return userPo.getSchoolId();
    }   
    
    
    /**
     *  现金
     */
	public Double getCash() {
        return userPo.getCash();
    }   
    
    
    /**
     *  积分
     */
	public Double getPoint() {
        return userPo.getPoint();
    }   
    
    
    /**
     *  状态
     */
	public Integer getStatus() {
        return userPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return userPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return userPo.getUpdatetime();
    }   
    
    
    //foreign table
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
    public User init(UserPo userPo, List<SchoolPo> schoolPos) {
        this.userPo = userPo;
        this.schoolPos = schoolPos;
        return this;
    }
    
    /**
     *  Init
     */
    public User init(UserPo userPo) {
        this.userPo = userPo;
        return this;
    }
    
}
