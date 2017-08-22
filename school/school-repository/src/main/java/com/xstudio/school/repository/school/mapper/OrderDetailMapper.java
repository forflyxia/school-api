/************************************************************************************************************************************************
 * FileName:       OrderDetailMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface OrderDetailMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    OrderDetailPo getOrderDetail(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<OrderDetailPo> getOrderDetailsByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<OrderDetailPo> getOrderDetails();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateOrderDetail(OrderDetailPo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertOrderDetail(OrderDetailPo item);
}