package com.xstudio.school.contract.school;

/**
 * Created by wangqc on 2017/8/13.
 */
public class AdvertisementInfoDTO {
    /*
 Advertisement name
  */
    private String adName;
    public String getAdName() {
        return adName;
    }
    public void setAdName(String adName) {
        this.adName = adName;
    }

    /*
    Advertisement url
     */
    private String adUrl;
    public String getAdUrl() {
        return adUrl;
    }
    public void setAdUrl(String adUrl) {
        this.adUrl = adUrl;
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
