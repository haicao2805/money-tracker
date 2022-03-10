import { Box } from "native-base";
import { FC } from "react";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import { NavbarBottomItem } from "../../components/navbar";
import { ScreensProvider } from "../../context";

interface InputScreenProps {}

const InputScreen: FC<InputScreenProps> = () => {
    return (
        <Box position={"relative"} flex={1} bg={"amber.100"}>
            <Box width={"full"} position={"absolute"} bottom={0}>
                <Box
                    flex={1}
                    flexDirection={"row"}
                    justifyContent={"space-around"}
                    borderTopWidth={1}
                    borderColor={"black"}
                    bg={"coolGray.200"}
                >
                    <NavbarBottomItem label="Input" IconGroup={EvilIcons} iconName="pencil" value={0} />
                    <NavbarBottomItem label="Calendar" IconGroup={EvilIcons} iconName="calendar" value={1} />
                    <NavbarBottomItem label="Report" IconGroup={EvilIcons} iconName="chart" value={2} />
                    <NavbarBottomItem label="Other" IconGroup={Entypo} iconName="dots-three-horizontal" value={3} />
                </Box>
            </Box>
        </Box>
    );
};

export default () => (
    <ScreensProvider>
        <InputScreen />
    </ScreensProvider>
);
