package com.xstudio.school.contract;

import com.xstudio.school.contract.base.BaseResponse;

/**
 * Created by wangqc on 2017/8/13.
 */
public class CommentResponse extends BaseResponse{
    /*
    comment id
     */
    private Long commentId;
    public Long getCommentId() {
        return commentId;
    }
    public void setCommentId(Long commentId) {
        this.commentId = commentId;
    }
}
