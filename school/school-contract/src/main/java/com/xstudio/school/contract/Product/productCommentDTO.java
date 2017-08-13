package com.xstudio.school.contract.product;

/**
 * Created by wangqc on 2017/8/13.
 */
public class ProductCommentDTO  extends ProductDTO{
    /*
    comment level 0 bad,1 normal,2 good
    */
    private Integer commentLevel;
    public Integer getCommentLevel() {
        return commentLevel;
    }
    public void setCommentLevel(Integer commentLevel) {
        this.commentLevel = commentLevel;
    }
    /*
    comment remark
     */
    private String remark;
    public String getRemark() {
        return remark;
    }
    public void setRemark(String remark) {
        this.remark = remark;
    }
}
