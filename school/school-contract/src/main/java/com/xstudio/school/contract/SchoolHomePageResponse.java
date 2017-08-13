package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseResponse;
import com.xstudio.school.contract.product.ProductDTO;
import com.xstudio.school.contract.school.AdvertisementInfoDTO;
import com.xstudio.school.contract.school.OnSalesDTO;
import com.xstudio.school.contract.school.SchoolInfoDTO;
import com.xstudio.school.contract.school.SchoolNewsDTO;

import java.util.List;

/**
 * Created by wangqc on 2017/8/13.
 */
public class SchoolHomePageResponse extends BaseResponse{
    /*
     school information
     */
    private SchoolInfoDTO schoolInfoDTO;
    public SchoolInfoDTO getSchoolInfoDTO() {
        return schoolInfoDTO;
    }
    public void setSchoolInfoDTO(SchoolInfoDTO schoolInfoDTO) {
        this.schoolInfoDTO = schoolInfoDTO;
    }
    /*
    product category
    */
    private List<Integer> productCategoryList;
    public List<Integer> getProductCategoryList() {
        return productCategoryList;
    }
    public void setProductCategoryList(List<Integer> productCategoryList) {
        this.productCategoryList = productCategoryList;
    }

    /*
    product list
    */
    private List<ProductDTO> productDTOList;
    public List<ProductDTO> getProductDTOList() {
        return productDTOList;
    }
    public void setProductDTOList(List<ProductDTO> productDTOList) {
        this.productDTOList = productDTOList;
    }

    /*
    advertisementInfo list
    */
    private List<AdvertisementInfoDTO> advertisementInfoDTOList;
    public List<AdvertisementInfoDTO> getAdvertisementInfoDTOList() {
        return advertisementInfoDTOList;
    }
    public void setAdvertisementInfoDTOList(List<AdvertisementInfoDTO> advertisementInfoDTOList) {
        this.advertisementInfoDTOList = advertisementInfoDTOList;
    }

    /*
    School News list
    */
    private List<SchoolNewsDTO> schoolNewsDTOList;
    public List<SchoolNewsDTO> getSchoolNewsDTOList() {
        return schoolNewsDTOList;
    }
    public void setSchoolNewsDTOList(List<SchoolNewsDTO> schoolNewsDTOList) {
        this.schoolNewsDTOList = schoolNewsDTOList;
    }

    /*
    On Sales list
    */
    private List<OnSalesDTO> onSalesDTOList;
    public List<OnSalesDTO> getOnSalesDTOList() {
        return onSalesDTOList;
    }
    public void setOnSalesDTOList(List<OnSalesDTO> onSalesDTOList) {
        this.onSalesDTOList = onSalesDTOList;
    }
}
