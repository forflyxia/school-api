package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseResponse;

/**
 * Created by wangqc on 2017/8/27.
 */
public class UpdateSchoolResponse extends BaseResponse {
    /*
   school name
    */
    private String schoolName;
    public String getSchoolName() {
        return schoolName;
    }
    public void setSchoolName(String schoolName) {
        this.schoolName = schoolName;
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
