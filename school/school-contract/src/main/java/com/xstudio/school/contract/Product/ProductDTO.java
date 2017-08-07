package com.xstudio.school.contract.product;

/**
 * Created by wangqc on 2017/8/6.
 */
public class ProductDTO {
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
    product price
    */
    private double productPrice;
    public double getProductPrice() {
        return productPrice;
    }
    public void setProductPrice(double productPrice) {
        this.productPrice = productPrice;
    }
    /*
    product category
    */
    private Integer productCategory;
    public Integer getProductCategory() {
        return productCategory;
    }
    public void setProductCategory(Integer productCategory) {
        this.productCategory = productCategory;
    }
}
