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


    /*
    shop Pictures
    */
    private String shopPictures;
    public String getShopPictures() {
        return shopPictures;
    }
    public void setShopPictures(String shopPictures) {
        this.shopPictures = shopPictures;
    }


    /*
    Address
    */
    private String address;
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    /*
    City
    */
    private Integer city;
    public Integer getCity() {
        return city;
    }
    public void setCity(Integer city) {
        this.city = city;
    }

    /*
    school Desc
    */
    private String schoolDesc;
    public String getSchoolDesc() {
        return schoolDesc;
    }
    public void setSchoolDesc(String schoolDesc) {
        this.schoolDesc = schoolDesc;
    }
}
