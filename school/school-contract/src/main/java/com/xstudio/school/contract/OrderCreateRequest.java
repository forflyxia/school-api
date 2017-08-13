package com.xstudio.school.contract;

import com.xstudio.school.contract.OrderManage.DeliveryDTO;
import com.xstudio.school.contract.OrderManage.ProductInfo;
import com.xstudio.school.contract.OrderManage.UserDTO;
import com.xstudio.school.contract.base.BaseRequest;
import com.xstudio.school.contract.coupon.CouponDTO;

import java.util.List;

/**
 * Created by wangqc on 2017/8/6.
 */
public class OrderCreateRequest extends BaseRequest {


    /*
    user information
    */
    private UserDTO userDTO;
    public UserDTO getUserDTO() {
        return userDTO;
    }
    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }

    /*
    order amount
    */
    private double orderAmount;
    public double getOrderAmount() {
        return orderAmount;
    }
    public void setOrderAmount(double orderPrice) {
        this.orderAmount = orderAmount;
    }

    /*
    coupons
    */
    private List<CouponDTO> couponDTOList;
    public List<CouponDTO> getCouponDTOList() {
        return couponDTOList;
    }
    public void setCouponDTOList(List<CouponDTO> couponDTOList) {
        this.couponDTOList = couponDTOList;
    }
    /*
    Discount Amount
    */
    private double discountAmount;
    public double getDiscountAmount() {
        return discountAmount;
    }
    public void setDiscountAmount(double discountAmount) {
        this.discountAmount = discountAmount;
    }

    /*
    Delivery Information
    */
    private DeliveryDTO deliveryDTO;
    public DeliveryDTO getDeliveryDTO() {
        return deliveryDTO;
    }
    public void setDeliveryDTO(DeliveryDTO deliveryDTO) {
        this.deliveryDTO = deliveryDTO;
    }

    /*
    Product Information list
    */
    private List<ProductInfo> productInfoList;
    public List<ProductInfo> getProductInfo() {
        return productInfoList;
    }
    public void setProductInfo(List<ProductInfo> productInfoList) {
        this.productInfoList = productInfoList;
    }
}
