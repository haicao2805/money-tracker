import { FC } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

interface DismissKeyboardHOCProps {}

export const DismissKeyboardHOC: FC<DismissKeyboardHOCProps> = ({ children }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            {children}
        </TouchableWithoutFeedback>
    );
};

export default DismissKeyboardHOC;
