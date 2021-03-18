import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';

/**
 * Styles used by this component.
 */
const styles = StyleSheet.create({
  fieldLabel: {
    marginLeft: 10,
  },

  textInput: {
    height: 50,
    marginLeft: 10,
    width: '96%',
    marginBottom: 20,
    /* Branch on platform type for different styling. */
    ...Platform.select({
      ios: {
        marginTop: 4,
        paddingLeft: 10,
        borderRadius: 8,
        borderColor: '#c0c0c0',
        borderWidth: 2,
      },
      android: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
      },
    }),
  },
});

/**
 * Define a custom TextInput component.
 */
class CustomTextInput extends Component {
  render() {
    const {
      label,
      labelStyle,
      maxLength,
      textInputStyle,
      stateHolder,
      stateFieldName,
      numberOfLines,
      multiline,
      placeholder,
    } = this.props;

    return (
      <View>
        <Text style={[styles.fieldLabel, labelStyle]}>{label}</Text>
        <TextInput
          maxLength={maxLength}
          placeholder = {placeholder}
          multiline={multiline}
          value = {
            stateHolder.state[stateFieldName]
          }
          numberOfLines={numberOfLines}
          onChangeText={inText =>
            stateHolder.setState(() => {
              const obj= {};
              obj[stateFieldName] = inText;
              return obj;
            })
          }
          style={[styles.textInput, textInputStyle]}
        />
      </View>
    );
  }
} /* End customTextInput component. */

export default CustomTextInput;
