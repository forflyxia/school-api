/************************************************************************************************************************************************
 * FileName:       SchoolNewsPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/
package com.xstudio.school.domain.po.school;


import java.util.Date;

/**
 *  学校新闻信息
 */
public class SchoolNewsPo
{
	private Integer id;
	private String schoolid;
	private String newstitle;
	private String news;
	private Integer status;
	private Date createtime;
	private Date updatetime;

    
    /**
     *  学校新闻ID getter
     */
	public Integer getId() {
        return id;
    }
    
    /**
     *  学校新闻ID setter
     */
	public void setId(Integer id) {
        this.id = id;
    }
    
    /**
     *  学校ID getter
     */
	public String getSchoolId() {
        return schoolid;
    }
    
    /**
     *  学校ID setter
     */
	public void setSchoolId(String schoolid) {
        this.schoolid = schoolid;
    }
    
    /**
     *  新闻标题 getter
     */
	public String getNewstitle() {
        return newstitle;
    }
    
    /**
     *  新闻标题 setter
     */
	public void setNewstitle(String newstitle) {
        this.newstitle = newstitle;
    }
    
    /**
     *  新闻 getter
     */
	public String getNews() {
        return news;
    }
    
    /**
     *  新闻 setter
     */
	public void setNews(String news) {
        this.news = news;
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
