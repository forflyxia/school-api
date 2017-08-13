package com.xstudio.school.contract.school;

/**
 * Created by wangqc on 2017/8/13.
 */
public class SchoolInfoDTO {
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
