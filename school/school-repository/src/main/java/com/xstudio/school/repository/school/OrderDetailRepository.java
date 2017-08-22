/************************************************************************************************************************************************
 * FileName:       OrderDetailMapper.java
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
public class OrderDetailRepository {

    @Autowired
    private OrderDetailMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public OrderDetailPo getOrderDetail(Integer id) {
        return mapper.getOrderDetail(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<OrderDetailPo> getOrderDetailsByIds(List<Integer> ids) {
        return mapper.getOrderDetailsByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<OrderDetailPo> getOrderDetails() {
        return mapper.getOrderDetails();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateOrderDetail(OrderDetailPo item) {
        return mapper.updateOrderDetail(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertOrderDetail(OrderDetailPo item) {
        return mapper.insertOrderDetail(item);
    }
}