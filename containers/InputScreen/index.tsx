import { Box, Stack, Icon, Text, Button } from "native-base";
import { FC, useState } from "react";
import { EvilIcons, Entypo } from "@expo/vector-icons";

interface InputScreenProps {}

const InputScreen: FC<InputScreenProps> = () => {
    const [activeButton, setActiveButton] = useState<number>(0);

    return (
        <Box position={"relative"} flex={1} bg={"amber.100"}>
            <Box
                position={"absolute"}
                bottom={0}
                height={"16"}
                width={"full"}
                bg={"coolGray.200"}
            >
                <Box
                    flexDirection={"row"}
                    justifyContent={"space-around"}
                    borderTopWidth={1}
                    borderColor={"black"}
                >
                    <Button
                        alignItems={"center"}
                        bg={"coolGray.200"}
                        _pressed={{ bg: "coolGray.200" }}
                        onPress={() => {
                            setActiveButton(0);
                        }}
                    >
                        <Box alignItems={"center"}>
                            <Icon
                                as={EvilIcons}
                                name={"pencil"}
                                color={
                                    activeButton === 0 ? "orange.300" : "black"
                                }
                            />
                            <Text
                                color={
                                    activeButton === 0 ? "orange.300" : "black"
                                }
                            >
                                Input
                            </Text>
                        </Box>
                    </Button>

                    <Button
                        alignItems={"center"}
                        bg={"coolGray.200"}
                        _pressed={{ bg: "coolGray.200" }}
                        onPress={() => {
                            setActiveButton(1);
                        }}
                    >
                        <Box alignItems={"center"}>
                            <Icon
                                as={EvilIcons}
                                name={"calendar"}
                                color={
                                    activeButton === 1 ? "orange.300" : "black"
                                }
                            />
                            <Text
                                color={
                                    activeButton === 1 ? "orange.300" : "black"
                                }
                            >
                                Calendar
                            </Text>
                        </Box>
                    </Button>

                    <Button
                        alignItems={"center"}
                        bg={"coolGray.200"}
                        _pressed={{ bg: "coolGray.200" }}
                        onPress={() => {
                            setActiveButton(2);
                        }}
                    >
                        <Box alignItems={"center"}>
                            <Icon
                                as={EvilIcons}
                                name={"chart"}
                                color={
                                    activeButton === 2 ? "orange.300" : "black"
                                }
                            />
                            <Text
                                color={
                                    activeButton === 2 ? "orange.300" : "black"
                                }
                            >
                                Report
                            </Text>
                        </Box>
                    </Button>

                    <Button
                        alignItems={"center"}
                        bg={"coolGray.200"}
                        _pressed={{ bg: "coolGray.200" }}
                        onPress={() => {
                            setActiveButton(3);
                        }}
                    >
                        <Box alignItems={"center"}>
                            <Icon
                                as={Entypo}
                                name={"dots-three-horizontal"}
                                color={
                                    activeButton === 3 ? "orange.300" : "black"
                                }
                            />
                            <Text
                                color={
                                    activeButton === 3 ? "orange.300" : "black"
                                }
                            >
                                Other
                            </Text>
                        </Box>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default InputScreen;
