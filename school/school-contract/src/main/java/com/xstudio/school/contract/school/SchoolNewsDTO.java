package com.xstudio.school.contract.school;

/**
 * Created by wangqc on 2017/8/13.
 */
public class SchoolNewsDTO {
    /*
 news name
  */
    private String newsName;
    public String getNewsName() {
        return newsName;
    }
    public void setNewsName(String newsName) {
        this.newsName = newsName;
    }

    /*
    news url
     */
    private String newsUrl;
    public String getNewsUrl() {
        return newsUrl;
    }
    public void setNewsUrl(String newsUrl) {
        this.newsUrl = newsUrl;
    }

    /*
    picture url
     */
    private String pictureUrl;
    public String getPictureUrl() {
        return pictureUrl;
    }
    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }
}
