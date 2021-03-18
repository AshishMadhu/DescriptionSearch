import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

class CustomButton extends Component {
  render() {
    const {
      text,
      onPress,
      buttonStyle,
      textStyle,
      width,
      disabled,
      backgroundColor,
    } = this.props;
    return (
      <TouchableOpacity
        style={[
          {
            padding: 10,
            height: 60,
            borderRadius: 5,
            margin: 10,
            width: width,
            backgroundColor:
              disabled != null && disabled === true
                ? '#e0e0e0'
                : backgroundColor
                ? backgroundColor
                : '#303656',
          },
          buttonStyle,
        ]}
        onPress={() => {
          if (disabled == null || disabled === false) {
            onPress();
          }
        }}>
        <Text
          style={[
            {
              fontSize: 20,
              fontWeight: 'bold',
              color: '#ffffff',
              textAlign: 'center',
              paddingTop: 8,
            },
            textStyle,
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default CustomButton;
