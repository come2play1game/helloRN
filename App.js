/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Modal,
    Button,
    ToastAndroid,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {CustomDialog} from './src/widget/CustomDialog';
import {ChatWithNative} from './src/widget/ChatWithNative';

class MyView extends React.Component {
    constructor() {
        console.log('constructor');
        super();
    }

    // shouldComponentUpdate(
    //     nextProps: Props,
    //     nextState: State,
    //     nextContext: *,
    // ): boolean {
    //     console.log('shouldComponentUpdate');
    //     return super.shouldComponentUpdate(nextProps, nextState, nextContext);
    // }

    componentWillMount(): * {
        console.log('componentWillMount');
    }

    render(): React$Node {
        console.log('render');
        return <Text> Hello world2</Text>;
    }

    componentWillUnmount(): * {
        console.log('componentWillUnmount');
    }

    componentDidUpdate(prevProps: Props, prevState: State, prevContext: *): * {
        console.log('componentDidUpdate');
    }
}

const CustomView = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: 'green',
                height: 100,
                // padding: 20,
            }}>
            <View
                style={{
                    backgroundColor: 'blue',
                    width: 200,
                    // flex属性为flexGrow,flexShrink,flex-basis的简称
                    // 也就是说支持设置3个参数，第一个为flexGrow,后两个可省略
                    //flexGrow默认值为0，即便有剩余空间也不占据剩余的空间
                    //flexShrink默认值为1，即当空间不足时，保持1(100%)的大小，该值不能为负值
                    //flex-basis默认为auto(item原本的宽高)，在计算剩余空间时，要先计算item的大小
                    //item的大小是basis属性计算的
                    // flex: 0.3,
                }}
            />
            {/*<View style={{*/}
            {/*    backgroundColor: 'red',*/}
            {/*    flex: 0.7,*/}
            {/*}}>*/}
            {/*</View>*/}
        </View>
    );
};

const App: () => React$Node = () => {
    return (
        <>
            <CustomDialog/>
            <ChatWithNative/>
            <Text
                style={{
                    height: 60,
                    textAlignVertical: 'center',
                    backgroundColor: 'red',
                    marginBottom: 10,
                }}
                onPress={() => {
                    Alert.alert('这是标题', '这是描述信息',
                        [
                            {
                                text: '自定义的按钮', onPress: () => {
                                    ToastAndroid.show('点击了自定义的按钮', ToastAndroid.SHORT);
                                },
                            },
                            {
                                text: '取消', onPress: () => {
                                    ToastAndroid.show('点击了取消', ToastAndroid.SHORT);
                                },
                            }, {
                            text: '确定', onPress: () => {
                                ToastAndroid.show('点击了确定', ToastAndroid.SHORT);
                            },
                        },

                        ],
                        {
                            onDismiss: () => {
                            },
                        },
                    );

                }}>
                弹出dialog
            </Text>

            <Text
                style={{
                    height: 60,
                    textAlignVertical: 'center',
                    backgroundColor: 'red',
                }}
                onPress={() => {
                    fetch('http://api.qingyunke.com/api.php?key=free&appid=0&msg=关键字')
                        .then((response) => {
                            console.log(response);
                            return 'first then';
                        })
                        .then((jsonObj) => {
                            console.log(jsonObj.content);
                        })
                        .catch()
                        .done();
                }}>
                fetch
            </Text>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
