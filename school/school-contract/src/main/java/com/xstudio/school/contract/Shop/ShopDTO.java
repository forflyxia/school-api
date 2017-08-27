package com.xstudio.school.contract.shop;

/**
 * Created by wangqc on 2017/8/6.
 */
public class ShopDTO {
    /*
   shop id
   */
    private Long shopId;
    public Long getShopId() {
        return shopId;
    }
    public void setShopId(Long shopId) {
        this.shopId = shopId;
    }
    /*
   shop name
    */
    private String shopName;
    public String getShopName() {
        return shopName;
    }
    public void setShopName(String shopName) {
        this.shopName = shopName;
    }
    /*
    minimum delivery amount
    */
    private double minimumDeliveryAmount;
    public double getMinimumDeliveryAmount() {
        return minimumDeliveryAmount;
    }
    public void setMinimumDeliveryAmount(double minimumDeliveryAmount) {
        this.minimumDeliveryAmount = minimumDeliveryAmount;
    }

    /*
    shop Pictures
    */
    private String shopPictures;
    public String getShopPictures() {
        return shopPictures;
    }
    public void setShopPictures(String shopPictures) {
        this.shopPictures = shopPictures;
    }


    /*
    Address
    */
    private String address;
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    /*
    City
    */
    private Integer city;
    public Integer getCity() {
        return city;
    }
    public void setCity(Integer city) {
        this.city = city;
    }

    /*
  announcement
  */
    private String announcement;
    public String getAnnouncement() {
        return announcement;
    }
    public void setAnnouncement(String announcement) {
        this.address = announcement;
    }

    /*
    business hours
    */
    private String businessHours;
    public String getBusinessHours() {
        return businessHours;
    }
    public void setBusinessHours(String businessHours) {
        this.businessHours = businessHours;
    }

}
