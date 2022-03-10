import { Box, Stack, Icon, Text, Button } from "native-base";
import { FC, useState } from "react";
import { EvilIcons, Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { changeScreen, Screens } from "../../redux/slices/activeScreenSlice";
import NavigationBar from "../../components/NavigationBar";

interface InputScreenProps {}

const InputScreen: FC<InputScreenProps> = () => {
    const currentActiveScreen = useSelector((state: RootState) => state.activeScreenReducer.value);
    const dispatch = useDispatch();

    return (
        <Box position={"relative"} flex={1} bg={"amber.100"}>
            <Box position={"absolute"} bottom={0}>
                <NavigationBar />
            </Box>
        </Box>
    );
};

export default InputScreen;
