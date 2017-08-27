package com.xstudio.school.openapi;

import com.xstudio.school.contract.*;
import com.xstudio.school.contract.category.CategoryDTO;
import com.xstudio.school.service.apiimpl.SearchProductByShopService;

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
        return new SearchProductByShopService().SearchProductByShop(request);
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

    @POST
    @Path("/AddProduct")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public AddProductResponse AddProduct(AddProductRequest request)
    {
        AddProductResponse response=new AddProductResponse();
        response.setIsSuccess(true);
        return response;
    }

    @POST
    @Path("/UpdateProduct")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public UpdateProductResponse UpdateProduct(UpdateProductRequest request)
    {
        UpdateProductResponse response=new UpdateProductResponse();
        response.setIsSuccess(true);
        return response;
    }

    @POST
    @Path("/DeleteProduct")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public DeleteProductResponse DeleteProduct(DeleteProductRequest request)
    {
        DeleteProductResponse response=new DeleteProductResponse();
        response.setIsSuccess(true);
        return response;
    }


    @POST
    @Path("/AddCategory")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public AddCategoryResponse AddCategory(AddCategoryRequest request)
    {
        AddCategoryResponse response=new AddCategoryResponse();
        response.setIsSuccess(true);
        return response;
    }

    @POST
    @Path("/UpdateCategory")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public UpdateCategoryResponse UpdateCategory(UpdateCategoryRequest request)
    {
        UpdateCategoryResponse response=new UpdateCategoryResponse();
        response.setIsSuccess(true);
        return response;
    }

    @POST
    @Path("/DeleteCategory")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public DeleteCategoryResponse DeleteCategory(DeleteCategoryRequest request)
    {
        DeleteCategoryResponse response=new DeleteCategoryResponse();
        response.setIsSuccess(true);
        return response;
    }
}
