import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";

class SearchScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: null,
        };
    }

    componentDidMount() {
        this.initialState = this.state;
    }

    render() {
        return (
            <>
                <View style={style.container}>
                    <TextInput
                        style={style.textInput}
                        maxLength={20}
                        value={this.state.title}
                        placeholder="Title"
                        onChangeText={(text) => {
                            this.setState({
                                title: text,
                            });
                        }}
                    />
                    <CustomButton
                        text="Search"
                        buttonStyle={{ flex: 1, height: 50 }}
                        textStyle={{ paddingTop: 0 }}
                        onPress={() => {
                            AsyncStorage.getItem(
                                JSON.stringify(this.state.title),
                                (error, result) => {
                                    if (result) {
                                        const data = JSON.parse(result);
                                        const descriptionId =
                                            data.descriptionId;
                                        AsyncStorage.getItem(
                                            descriptionId,
                                            (error, result) => {
                                                this.setState({
                                                    description: JSON.parse(
                                                        result
                                                    ),
                                                });
                                            }
                                        );
                                    } else {
                                        Toast.show({
                                            text1: "404",
                                            text2: "No data found",
                                            visibilityTime: 3000,
                                            autoHide: true,
                                            topOffset: 30,
                                            bottomOffset: 40,
                                            position: "bottom",
                                        });
                                    }
                                }
                            );
                        }}
                    />
                </View>

                <ScrollView>
                    <View>
                        <Text>
                            {this.state.description && this.state.description}
                        </Text>
                    </View>
                </ScrollView>
            </>
        );
    }
}

const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        margin: 5,
    },

    textInput: {
        height: 50,
        marginLeft: 10,
        width: "96%",
        flex: 3,
        /* Branch on platform type for different styling. */
        ...Platform.select({
            ios: {
                marginTop: 4,
                paddingLeft: 10,
                borderRadius: 8,
                borderColor: "#c0c0c0",
                borderWidth: 2,
            },
            android: {
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "grey",
                borderRadius: 5,
            },
        }),
    },
});

export default SearchScreen;
