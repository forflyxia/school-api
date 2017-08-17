import java.io.Console;
import java.util.HashMap;
import java.util.Map;

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

    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<String, Integer>();
        map.put("语文", 1);
        map.put("数学", 2);
        map.put("英语", 3);
        map.put("历史", 4);
        map.put("政治", 5);
        map.put("地理", 6);
        map.put("生物", 7);
        map.put("化学", 8);
        for(Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }

}
