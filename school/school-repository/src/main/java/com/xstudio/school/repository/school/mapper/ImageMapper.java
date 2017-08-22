/************************************************************************************************************************************************
 * FileName:       ImageMapper.java
 * Author:         hbxia
 * Description:    this is auto genetated, don't change!
*************************************************************************************************************************************************/

package com.xstudio.school.repository.school.mapper;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.xstudio.school.domain.po.school.*;

@Repository
public interface ImageMapper {

    /**
     * getItem
     * @param id
     * @return
     */
    ImagePo getImage(Integer id);
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    List<ImagePo> getImagesByIds(List<Integer> ids);
    
     /**
     * get list
     * @return
     */
    List<ImagePo> getImages();
    
    /**
     * update item
     * @param item
     * @return
     */
    boolean updateImage(ImagePo item);
    
    /**
     * insert item
     * @param item
     * @return
     */
    boolean insertImage(ImagePo item);
}