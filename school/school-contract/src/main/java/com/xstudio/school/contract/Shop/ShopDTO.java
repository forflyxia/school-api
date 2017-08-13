package com.xstudio.school.contract.Shop;

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
    position
    */
    private Integer position;
    public Integer getProductCategory() {
        return position;
    }
    public void setProductCategory(Integer position) {
        this.position = position;
    }
}
