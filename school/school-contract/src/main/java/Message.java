/**
 * Created by hbxia on 2017/7/6.
 */
public class Message<TRequest, TResponse> {

    private String method;
    private TRequest request;
    private TResponse response;


    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public TRequest getRequest() {
        return request;
    }

    public void setRequest(TRequest request) {
        this.request = request;
    }

    public TResponse getResponse() {
        return response;
    }

    public void setResponse(TResponse response) {
        this.response = response;
    }


}
