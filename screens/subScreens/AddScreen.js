import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";

class AddScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
        };
    }

    componentDidMount() {
        this.initialState = this.state;
    }

    render() {
        return (
            <View>
                <CustomTextInput
                    label="Title"
                    maxLength={20}
                    stateHolder={this}
                    stateFieldName="title"
                />
                <CustomTextInput
                    label="Description"
                    placeholder="Type something"
                    numberOfLines={60}
                    multiline={true}
                    stateHolder={this}
                    stateFieldName="description"
                    textInputStyle={{
                        height: 150,
                        textAlignVertical: "top",
                    }}
                />
                <CustomButton
                    text="Save"
                    onPress={() => {
                        const id = uuidv4();
                        const description = JSON.stringify(
                            this.state.description
                        );
                        // save description with an id and then save the title with 
                        // that description id and title
                        AsyncStorage.setItem(id, description, () => {
                            const key = JSON.stringify(this.state.title);
                            var data = {
                                title: this.state.title,
                                descriptionId: id,
                            };
                            data = JSON.stringify(data);
                            AsyncStorage.setItem(
                                key,
                                data,
                                function () {
                                    this.setState(this.initialState);
                                    Toast.show({
                                        text1: "Saved",
                                        text2: "You've saved it succefully",
                                        visibilityTime: 3000,
                                        autoHide: true,
                                        topOffset: 30,
                                        bottomOffset: 40,
                                        position: "bottom",
                                    });
                                }.bind(this)
                            );
                        });
                    }}
                />
            </View>
        );
    }
}

export default AddScreen;
