package com.xstudio.school.domain;

/**
 * Created by hbxia on 2017/7/6.
 */
public abstract class BaseService<TRequest, TResponse> {

    public abstract TResponse process(TRequest request);

}
