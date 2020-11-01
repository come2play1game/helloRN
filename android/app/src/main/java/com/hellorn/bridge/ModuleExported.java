package com.hellorn.bridge;

import android.text.TextUtils;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.hellorn.MainApplication;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nonnull;

public class ModuleExported extends ReactContextBaseJavaModule {

    //
    public ModuleExported(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        //暴露给RN的模块名，JS可以通过NativeModules.xxxxx访问该模块
        return "MyNativeModule";
    }


    public static final String CONSTANT_KEY = "CONSTANT_KEY";

    /**
     * 使用自带的getConstants 给JS提供常量值
     */
    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> objectMap = new HashMap<>();
        objectMap.put(CONSTANT_KEY, "hell js,this is  native constant value");
        return objectMap;
    }


    /**
     * 使用ReactMethod注解 给JS提供方法调用
     */
    @ReactMethod
    public void functionExported(String param) {
        Toast.makeText(MainApplication.getInstance(), param, Toast.LENGTH_SHORT).show();
    }

    /**
     * 使用ReactMethod注解 给JS提供方法调用
     * 参数支持 Callback
     */
    @ReactMethod
    public void functionWithCallbackExported(String param, Callback callback) {
        Toast.makeText(MainApplication.getInstance(), param, Toast.LENGTH_SHORT).show();
        callback.invoke("我是native");
    }

    /**
     * 使用ReactMethod注解 给JS提供方法调用
     * 参数支持 Promise
     */
    @ReactMethod
    public void functionWithPromiseExported(String param, Promise promise) {
        if (TextUtils.isEmpty(param)) {
            promise.reject("emptyParam", "从js传入了空的参数");
        } else {
            promise.resolve("从native返回Promise && resolve");
        }
    }




}
