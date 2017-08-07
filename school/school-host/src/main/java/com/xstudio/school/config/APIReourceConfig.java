package com.xstudio.school.config;

import com.fasterxml.jackson.jaxrs.json.JacksonJsonProvider;
import com.xstudio.school.openapi.ProductOpenAPI;
import org.glassfish.jersey.filter.LoggingFilter;
import org.glassfish.jersey.server.ResourceConfig;

import javax.ws.rs.ApplicationPath;

/**
 * Created by wangqc on 2017/8/5.
 */
@ApplicationPath("/")
public class APIReourceConfig  extends ResourceConfig {
    public APIReourceConfig() {
        // 注册数据转换器

        register(ProductOpenAPI.class);
        // 注册日志
        register(LoggingFilter.class);
        register(JacksonJsonProvider.class);
    }
}
