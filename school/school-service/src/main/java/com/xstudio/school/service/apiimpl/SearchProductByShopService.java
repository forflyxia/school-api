package com.xstudio.school.service.apiimpl;

import com.xstudio.school.contract.SearchProductByShopRequest;
import com.xstudio.school.contract.SearchProductByShopResponse;
import com.xstudio.school.contract.shop.ShopDTO;
import com.xstudio.school.domain.po.school.ProductPo;
import com.xstudio.school.domain.product.Product;
import com.xstudio.school.repository.school.ProductRepository;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by hbxia on 2017/8/22.
 */
public class SearchProductByShopService {

    public SearchProductByShopResponse SearchProductByShop(SearchProductByShopRequest request)
    {
        List<ProductPo> productPos = new ProductRepository().getProducts();

        List<Product> products = new ArrayList<>();
        for (ProductPo item : productPos) {
            Product product = new Product().init(item);
            products.add(product);
        }
        return new SearchProductByShopResponse();
    }

}
