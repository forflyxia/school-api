package com.xstudio.school.contract.coupon;

/**
 * Created by wangqc on 2017/8/6.
 */
public class CouponDTO {
    /*
    coupon id
    */
    private Long couponId;

    public Long getCouponId() {
        return couponId;
    }

    public void setCouponId(Long couponId) {
        this.couponId = couponId;
    }

    /*
    coupon code
    */
    private String couponCode;

    public String getCouponCode() {
        return couponCode;
    }

    public void setCouponCode(String couponCode) {
        this.couponCode = couponCode;
    }

    /*
    coupon amount
    */
    private double couponAmount;
    public double getCouponAmount() {
        return couponAmount;
    }
    public void setCouponAmount(double couponAmount) {
        this.couponAmount = couponAmount;
    }

    /*
    coupon category
    */
    private Integer couponType;
    public Integer getCouponType() {
        return couponType;
    }
    public void setCouponType(Integer couponType) {
        this.couponType = couponType;
    }
}
