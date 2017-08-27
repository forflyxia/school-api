package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseRequest;
import com.xstudio.school.contract.school.SchoolInfoDTO;

/**
 * Created by wangqc on 2017/8/27.
 */
public class UpdateSchoolRequest extends BaseRequest {

    /*
    user id
    */
    private Long userId;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    /*
    school
    */
    private SchoolInfoDTO schoolInfoDTO;
    public SchoolInfoDTO getSchoolInfoDTO() {
        return schoolInfoDTO;
    }
    public void setSchoolInfoDTO(SchoolInfoDTO schoolInfoDTO) {
        this.schoolInfoDTO = schoolInfoDTO;
    }
}
