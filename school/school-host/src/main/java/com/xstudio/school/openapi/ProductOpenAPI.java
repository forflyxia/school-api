package com.xstudio.school.openapi;

import com.xstudio.school.contract.*;
import com.xstudio.school.contract.Shop.ShopDTO;
import com.xstudio.school.contract.category.CategoryDTO;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by wangqc on 2017/8/6.
 */
@Path("/Product")
public class ProductOpenAPI {
    @POST
    @Path("/SearchProductByShop")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public SearchProductByShopResponse SearchProductByShop(SearchProductByShopRequest request)
    {
        SearchProductByShopResponse response=new SearchProductByShopResponse();
        ShopDTO shopDTO=new ShopDTO();
        shopDTO.setShopId(request.getShopId());
        shopDTO.setMinimumDeliveryAmount(20);
        shopDTO.setShopName("便利店");
        response.setShopDTO(shopDTO);
        response.setIsSuccess(true);
        return response;
    }
    @POST
    @Path("/SearchCategory")
    @Produces(MediaType.APPLICATION_JSON)
    public SearchCategoryResponse SearchCategory()
    {
        SearchCategoryResponse response=new SearchCategoryResponse();
        List<CategoryDTO> categoryDTOList=new ArrayList<>();
        response.setCategoryDTOList(categoryDTOList);
        response.setIsSuccess(true);
        return response;
    }
    @POST
    @Path("/SearchShopCategory")
    @Produces(MediaType.APPLICATION_JSON)
    public SearchCategoryResponse SearchShopCategory(@FormParam("shopId") Long shopId)
    {
        SearchCategoryResponse response=new SearchCategoryResponse();
        List<CategoryDTO> categoryDTOList=new ArrayList<>();
        response.setCategoryDTOList(categoryDTOList);
        response.setIsSuccess(true);
        return response;
    }
    @POST
    @Path("/SearchPicture")
    @Produces(MediaType.APPLICATION_JSON)
    public SearchProductByShopResponse SearchPicture(@FormParam("shopId") Long shopId)
    {
        //输出带有图片URL
        SearchProductByShopResponse response=new SearchProductByShopResponse();
        response.setIsSuccess(true);
        return response;
    }

    @POST
    @Path("/SearchProduct")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public SearchProductResponse SearchProduct(SearchProductRequest request)
    {
        SearchProductResponse response=new SearchProductResponse();
        response.setIsSuccess(true);
        return response;
    }
}
