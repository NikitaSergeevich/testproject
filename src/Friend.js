import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
} from 'react-native';

export default class Friend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            translateValue: new Animated.Value(0),
        };
    }

    animate() {
        Animated.sequence([
            Animated.timing(this.state.translateValue, {
                toValue: 50,
                duration: 200,
            }),
            Animated.timing(this.state.translateValue, {
                toValue: -50,
                duration: 200,
            }),
            Animated.timing(this.state.translateValue, {
                toValue: 0,
                duration: 200,
            })
        ]).start();
    }

    render() {
        return (
            <Animated.View activeOpacity={1} style={[styles.friend, { transform: [{ translateX: this.state.translateValue }] }]}>
                <TouchableOpacity style={styles.row} onPress={() => this.animate()}>
                    <Image
                        style={[styles.avatar, { borderColor: this.props.data.isOnline ? 'green' : 'red' }]}
                        source={{ uri: this.props.data.avatarUrl }} />
                    <View>
                        <Text style={styles.name}>{this.props.data.firstName} {this.props.data.lastName}</Text>
                        <Text style={styles.company}>{this.props.data.company}</Text>
                        <Text style={styles.phone}>{this.props.data.phone}</Text>
                        <Text style={styles.email}>{this.props.data.email}</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    friend: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    avatar: {
        margin: 10,
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
    },
    rowText: {
        fontSize: 18,
        color: '#000',
    },
});