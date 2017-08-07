package com.xstudio.school.contract.OrderManage;

/**
 * Created by wangqc on 2017/8/6.
 */
public class PaymentDTO {
    /*
    payment number
     */
    private String paymentNo;
    public String getPaymentNo() {
        return paymentNo;
    }
    public void setPaymentNo(String paymentNo) {
        this.paymentNo = paymentNo;
    }
    /*
    amount
     */
    private double amount;
    public double getAmount() {
        return amount;
    }
    public void setAmount(double paymentNo) {
        this.amount = amount;
    }
}
