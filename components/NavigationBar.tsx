import { Entypo, EvilIcons } from "@expo/vector-icons";
import { Box, Button, Icon, Text } from "native-base";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeScreen, Screens } from "../redux/slices/activeScreenSlice";
import { RootState } from "../redux/store";
import NavigationItem from "./NavigationItem";

interface NavigationBarProps {}

const NavigationBar: FC<NavigationBarProps> = () => {
    const currentActiveScreen = useSelector((state: RootState) => state.activeScreenReducer.value);
    const dispatch = useDispatch();

    return (
        <Box
            flexDirection={"row"}
            justifyContent={"space-around"}
            borderTopWidth={1}
            borderColor={"black"}
            height={"16"}
            width={"full"}
            bg={"coolGray.200"}
        >
            <NavigationItem
                label="Input"
                iconGroup={EvilIcons}
                iconName={"pencil"}
                isActive={currentActiveScreen === 0}
                onPress={() => {
                    dispatch(changeScreen(Screens.INPUT));
                }}
            />

            <NavigationItem
                label="Calendar"
                iconGroup={EvilIcons}
                iconName={"calendar"}
                isActive={currentActiveScreen === 1}
                onPress={() => {
                    dispatch(changeScreen(Screens.CALENDAR));
                }}
            />

            <NavigationItem
                label="Report"
                iconGroup={EvilIcons}
                iconName={"chart"}
                isActive={currentActiveScreen === 2}
                onPress={() => {
                    dispatch(changeScreen(Screens.REPORT));
                }}
            />

            <NavigationItem
                label="Other"
                iconGroup={Entypo}
                iconName={"dots-three-horizontal"}
                isActive={currentActiveScreen === 3}
                onPress={() => {
                    dispatch(changeScreen(Screens.OTHER));
                }}
            />
        </Box>
    );
};

export default NavigationBar;
