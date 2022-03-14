import { Button, Text } from "native-base";
import React, { FC } from "react";
import { Colors } from "../../constants";
interface ToggleButtonProps {
    isActive: boolean;
    onPress: () => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({ isActive, children, onPress }) => {
    return (
        <Button
            borderRadius={8}
            onPress={onPress}
            px={8}
            background={isActive ? Colors.BUTTON_ACTIVE : Colors.BUTTON_INACTIVE}
        >
            <Text fontWeight={isActive ? "bold" : "normal"} color={isActive ? "white" : "black"}>
                {children}
            </Text>
        </Button>
    );
};

export default ToggleButton;
