/************************************************************************************************************************************************
 * FileName:       OrderMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface OrderMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    OrderPo getOrder(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<OrderPo> getOrdersByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<OrderPo> getOrders();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateOrder(OrderPo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertOrder(OrderPo item);
}