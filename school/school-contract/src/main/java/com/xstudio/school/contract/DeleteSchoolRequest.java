package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseRequest;

/**
 * Created by wangqc on 2017/8/27.
 */
public class DeleteSchoolRequest extends BaseRequest {

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
    school id
     */
    private Long schoolId;
    public Long getSchoolId() {
        return schoolId;
    }
    public void setSchoolId(Long schoolId) {
        this.schoolId = schoolId;
    }
}
