import { Icon as IconProps } from "@expo/vector-icons/build/createIconSet";
import { Box, Button, Icon, Text } from "native-base";
import * as React from "react";
import { useScreen } from "../../context";

interface NavbarBottomItemProps {
    label: string;
    value: number;
    IconGroup: IconProps<any, any>;
    iconName: string;
}

export const NavbarBottomItem: React.FC<NavbarBottomItemProps> = ({ label, value, IconGroup, iconName }) => {
    const { activeScreen, setActiveScreen } = useScreen();

    return (
        <Button
            alignItems={"center"}
            bg={"coolGray.100"}
            _pressed={{ bg: "coolGray.100" }}
            onPress={() => setActiveScreen(value)}
        >
            <Box alignItems={"center"}>
                <Icon as={IconGroup} name={iconName} color={activeScreen === value ? "orange.500" : "black"} />
                <Text color={activeScreen === value ? "orange.500" : "black"} fontSize={"xs"}>
                    {label}
                </Text>
            </Box>
        </Button>
    );
};
