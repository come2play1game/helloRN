import React, {Component} from 'react';
import {Text, NativeModules, Alert, Button, Modal, View, ToastAndroid} from 'react-native';

class ChatWithNative extends Component {


    constructor(props) {
        super(props);
        this.state = {
            callbackData: '调用native的带callback方法',
            promiseData: '调用native的带promise方法',
        };
    }


    render() {
        return (
            <>
                {/*调用时必须传入相应个数的参数，不能省略*/}
                <Text style={{height: 60}} onPress={() => {
                    NativeModules.MyNativeModule.functionExported('来自js的数据');
                }}>
                    调用native方法
                </Text>


                <Text style={{height: 60}} onPress={() => {
                    NativeModules.MyNativeModule.functionWithCallbackExported('来自js的数据',
                        (nativeData) => {
                            this.setState({
                                callbackData: '调用native的带callback方法,返回数据:' + nativeData,
                            });

                        });
                }}>
                    {this.state.callbackData}
                </Text>


                <Text style={{height: 60}} onPress={() => {
                    NativeModules.MyNativeModule.functionWithPromiseExported('',
                    ).then((dataFromNative) => {
                        ToastAndroid.show(`dataFromNative:${dataFromNative}`, ToastAndroid.SHORT);
                    }).catch((e) => {
                        ToastAndroid.show(`code:${e.code},message:${e.message}`, ToastAndroid.SHORT);
                    });
                }}>
                    调用native的带promise方法
                </Text>


            </>
        );
    }

}

export {ChatWithNative};


