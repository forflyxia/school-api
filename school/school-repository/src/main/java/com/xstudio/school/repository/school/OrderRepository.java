/************************************************************************************************************************************************
 * FileName:       OrderMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import com.xstudio.school.repository.school.mapper.*;
import com.xstudio.school.domain.po.school.*;

@Repository
public class OrderRepository {

    @Autowired
    private OrderMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public OrderPo getOrder(Integer id) {
        return mapper.getOrder(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<OrderPo> getOrdersByIds(List<Integer> ids) {
        return mapper.getOrdersByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<OrderPo> getOrders() {
        return mapper.getOrders();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateOrder(OrderPo item) {
        return mapper.updateOrder(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertOrder(OrderPo item) {
        return mapper.insertOrder(item);
    }
}