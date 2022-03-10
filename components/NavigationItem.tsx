import { Box, Button, Icon, Text } from "native-base";
import { FC } from "react";

interface NavigationItemProps {
    onPress: () => void;
    isActive: boolean;
    label: string;
    iconGroup: any;
    iconName: string;
}

const NavigationItem: FC<NavigationItemProps> = ({ onPress, label, isActive, iconGroup, iconName }) => {
    return (
        <Button alignItems={"center"} bg={"coolGray.200"} _pressed={{ bg: "coolGray.200" }} onPress={onPress}>
            <Box alignItems={"center"}>
                <Icon as={iconGroup} name={iconName} color={isActive ? "orange.300" : "black"} />
                <Text color={isActive ? "orange.300" : "black"}>{label}</Text>
            </Box>
        </Button>
    );
};

export default NavigationItem;
