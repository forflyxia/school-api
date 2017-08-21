/************************************************************************************************************************************************
 * FileName:       OrderDetailPo.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/


package com.xstudio.school.domain.order;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import com.xstudio.school.domain.po.school.*;
import com.xstudio.school.domain.order.*;
import com.xstudio.school.domain.product.*;

/**
 *  订单详情信息
 */
public class OrderDetail
{
    
    private OrderDetailPo orderDetailPo;
    private List<OrderPo> orderPos;
    private List<ProductPo> productPos;

    //self
    
    /**
     *  订单详情ID
     */
	public Integer getId() {
        return orderDetailPo.getId();
    }   
    
    
    /**
     *  订单ID
     */
	public Integer getOrderId() {
        return orderDetailPo.getOrderId();
    }   
    
    
    /**
     *  商品ID
     */
	public Integer getProductId() {
        return orderDetailPo.getProductId();
    }   
    
    
    /**
     *  商品规格ID
     */
	public Integer getProductsizeId() {
        return orderDetailPo.getProductsizeId();
    }   
    
    
    /**
     *  单价
     */
	public Double getUnitprice() {
        return orderDetailPo.getUnitprice();
    }   
    
    
    /**
     *  购买数量
     */
	public Integer getQuantity() {
        return orderDetailPo.getQuantity();
    }   
    
    
    /**
     *  订单状态
     */
	public Integer getStatus() {
        return orderDetailPo.getStatus();
    }   
    
    
    /**
     *  创建时间
     */
	public Date getCreatetime() {
        return orderDetailPo.getCreatetime();
    }   
    
    
    /**
     *  修改时间
     */
	public Date getUpdatetime() {
        return orderDetailPo.getUpdatetime();
    }   
    
    
    //foreign table
    /**
     *  订单信息
     */
    public List<Order> getOrders() {
        List<Order> items = new ArrayList<Order>();
        if(!orderPos.isEmpty()) {
            for(OrderPo orderPo : orderPos) {
                Order item = new Order();
                item.init(orderPo);
                items.add(item);
            }
        }
        return items;
    }
    
    /**
     *  产品信息
     */
    public List<Product> getProducts() {
        List<Product> items = new ArrayList<Product>();
        if(!productPos.isEmpty()) {
            for(ProductPo productPo : productPos) {
                Product item = new Product();
                item.init(productPo);
                items.add(item);
            }
        }
        return items;
    }
    
    
    
    /**
     *  Init
     */
    public OrderDetail init(OrderDetailPo orderDetailPo, List<OrderPo> orderPos, List<ProductPo> productPos) {
        this.orderDetailPo = orderDetailPo;
        this.orderPos = orderPos;
        this.productPos = productPos;
        return this;
    }
    
    /**
     *  Init
     */
    public OrderDetail init(OrderDetailPo orderDetailPo) {
        this.orderDetailPo = orderDetailPo;
        return this;
    }
    
}
