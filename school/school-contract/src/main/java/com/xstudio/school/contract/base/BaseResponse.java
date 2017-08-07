package com.xstudio.school.contract.base;

/**
 * Created by wangqc on 2017/8/6.
 */
public class BaseResponse {
    private Boolean isSuccess;

    private String errorMsg;

    public Boolean isIsSuccess() {
        return isSuccess;
    }

    public void setIsSuccess(final Boolean isSuccess) {
        this.isSuccess = isSuccess;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(final String errorMsg) {
        this.errorMsg = errorMsg;
    }
}
