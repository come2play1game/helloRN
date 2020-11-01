package com.hellorn;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.hellorn.bridge.Emitter;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    WritableMap writableMap= Arguments.createMap();
    writableMap.putString();
    Emitter.sendEvent(getReactInstanceManager().getCurrentReactContext()
            ,"callJs",writableMap);
    return "HelloRN";
  }

}
