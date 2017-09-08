package com.xstudio.school.service.datasource;

import com.sun.org.apache.xalan.internal.xsltc.runtime.Hashtable;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;

import java.util.concurrent.ConcurrentHashMap;

@Cacheable
public class MultipleDataSource extends AbstractRoutingDataSource {

    private static final ThreadLocal<String> dataSourceKey = new InheritableThreadLocal<String>();

    public static void setDataSourceKey(String dataSource) {
        dataSource = dataSource.toLowerCase();
        dataSourceKey.set(dataSource);
        java.util.Hashtable
        ConcurrentHashMap

    }

    @Override
    protected Object determineCurrentLookupKey() {
        return dataSourceKey.get();
    }
}