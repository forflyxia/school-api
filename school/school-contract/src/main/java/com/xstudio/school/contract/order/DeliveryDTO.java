package com.xstudio.school.contract.order;

/**
 * Created by wangqc on 2017/8/6.
 */
public class DeliveryDTO {

    /*
     Contract Person Name
     */
    private String contractPersonName;
    public String getContractPersonName() {
        return contractPersonName;
    }
    public void setContractPersonName(String contractPersonName) {
        this.contractPersonName = contractPersonName;
    }
    /*
    Contract Person Mobile
    */
    private String contractPersonMobile;
    public String getContractPersonMobile() {
        return contractPersonMobile;
    }
    public void setContractPersonMobile(String contractPersonMobile) {
        this.contractPersonMobile = contractPersonMobile;
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
    Delivery Type
     */
    private Integer deliveryType;
    public Integer getDeliveryType() {
        return deliveryType;
    }
    public void setDeliveryType(Integer deliveryType) {
        this.deliveryType = deliveryType;
    }

    /*
    delivery price
    */
    private double deliveryPrice;
    public double getDeliveryPrice() {
        return deliveryPrice;
    }
    public void setDeliveryPrice(double deliveryPrice) {
        this.deliveryPrice = deliveryPrice;
    }

}
