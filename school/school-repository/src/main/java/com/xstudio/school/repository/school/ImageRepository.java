/************************************************************************************************************************************************
 * FileName:       ImageMapper.java
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
public class ImageRepository {

    @Autowired
    private ImageMapper mapper = null;

    /**
     * getItem
     * @param id
     * @return
     */
    public ImagePo getImage(Integer id) {
        return mapper.getImage(id);
    }
    
    /**
     * getItemByIds
     * @param ids
     * @return
     */
    public List<ImagePo> getImagesByIds(List<Integer> ids) {
        return mapper.getImagesByIds(ids);
    }
    
     /**
     * get list
     * @return
     */
    public List<ImagePo> getImages() {
        return mapper.getImages();
    }
    
    /**
     * update item
     * @param item
     * @return
     */
    public boolean updateImage(ImagePo item) {
        return mapper.updateImage(item);
    }
    
    /**
     * insert item
     * @param item
     * @return
     */
    public boolean insertImage(ImagePo item) {
        return mapper.insertImage(item);
    }
}