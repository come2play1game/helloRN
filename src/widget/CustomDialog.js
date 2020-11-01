import React, {Component} from 'react';
import {Text, Alert, Button, Modal, View, ToastAndroid} from 'react-native';


class CustomDialog extends Component {


    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            transparent: true,
        };
    }


    render() {
        return (
            <>
                <Button title='显示Modal' onPress={() => {
                    this.setState({visible: true});

                    setInterval(() => {
                        this.setState({visible: false});
                    }, 3000);
                }}/>
                <Modal
                    visible={this.state.visible}
                    transparent={this.state.transparent}
                    onRequestClose={() => {
                        ToastAndroid.show('按下了返回键.', ToastAndroid.SHORT);
                    }}
                    onShow={() => {
                        ToastAndroid.show('正在展示Modal.', ToastAndroid.SHORT);
                    }}>

                    {/*自定义显示的内容放在这个节点里面*/}
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        }}>
                        <Text>
                            正在加载中
                        </Text>

                    </View>
                </Modal>
            </>
        );
    }

}

export {CustomDialog};
