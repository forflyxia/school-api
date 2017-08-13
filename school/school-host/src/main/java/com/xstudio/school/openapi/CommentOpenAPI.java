package com.xstudio.school.openapi;

import com.xstudio.school.contract.CommentRequest;
import com.xstudio.school.contract.CommentResponse;
import com.xstudio.school.contract.ReplyCommentRequest;
import com.xstudio.school.contract.ReplyCommentResponse;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Created by wangqc on 2017/8/13.
 */
@Path("OrderComment")
public class CommentOpenAPI {
    @POST
    @Path("/Comment")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public CommentResponse Comment(CommentRequest request)
    {
        CommentResponse response=new CommentResponse();
        response.setIsSuccess(true);
        response.setCommentId(11L);
        return response;
    }
    @POST
    @Path("/ReplyComment")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public ReplyCommentResponse ReplyComment(ReplyCommentRequest request)
    {
        ReplyCommentResponse response=new ReplyCommentResponse();
        response.setIsSuccess(true);
        return response;
    }
    @POST
    @Path("/QueryComment")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public ReplyCommentResponse QueryComment(ReplyCommentRequest request)
    {
        ReplyCommentResponse response=new ReplyCommentResponse();
        response.setIsSuccess(true);
        return response;
    }
}
