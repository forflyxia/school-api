package com.xstudio.school.contract.school;

/**
 * Created by wangqc on 2017/8/13.
 */
public class OnSalesDTO {
    /*
    product name
     */
    private String productName;
    public String getProductName() {
        return productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }
    /*
    product id
     */
    private Long productId;
    public Long getProductId() {
        return productId;
    }
    public void setProductId(Long productId) {
        this.productId = productId;
    }

    /*
    product url
     */
    private String productUrl;
    public String getProductUrl() {
        return productUrl;
    }
    public void setProductUrl(String productUrl) {
        this.productUrl = productUrl;
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
