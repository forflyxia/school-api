/************************************************************************************************************************************************
 * FileName:       CountryMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface CountryMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    CountryPo getCountry(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<CountryPo> getCountrysByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<CountryPo> getCountrys();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateCountry(CountryPo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertCountry(CountryPo item);
}