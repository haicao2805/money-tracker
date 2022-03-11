import { Box, Button, Divider, Icon, Input, KeyboardAvoidingView, Stack, Text } from "native-base";
import { TextInput } from "react-native";
import React, { FC } from "react";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import { NavbarBottomItem } from "../../components/navbar";
import { ScreensProvider } from "../../context";
import { HeaderContainer } from "../../components/header";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import moment from "moment";
import { InputContainer } from "../../components/form";
import { styles } from "./style";
import { DismissKeyboardHOC } from "../../HOC";

enum InputType {
    EXPENSE = "expense",
    INCOME = "income",
}

interface InputScreenProps {}

const InputScreen: FC<InputScreenProps> = () => {
    const [toggleInputType, setToggleInputType] = React.useState<InputType>(InputType.INCOME);
    const [currentDate, setCurrentDate] = React.useState<Date>(new Date());
    const [showDatePicker, setShowDatePicker] = React.useState(false);
    const [amount, setAmount] = React.useState<number>(null);

    const onChangeDate = (event: Event, selectedDate: Date) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setCurrentDate(selectedDate);
        }
    };

    const showDatePickerHandler = () => {
        setShowDatePicker(true);
    };

    return (
        <KeyboardAvoidingView keyboardVerticalOffset={0} behavior="height" style={{ flex: 1 }}>
            <DismissKeyboardHOC>
                <Box position={"relative"} flex={1}>
                    {/* Header */}
                    <HeaderContainer>
                        <Box justifyContent={"center"} alignItems={"center"}>
                            <Box width={"4/5"} rounded={"lg"} flexDirection={"row"} py={1} px={1} bg={"coolGray.200"}>
                                <Button
                                    flex={1}
                                    bg={toggleInputType === InputType.EXPENSE ? "orange.500" : "coolGray.200"}
                                    rounded={"lg"}
                                    _pressed={{ bg: "coolGray.200" }}
                                    onPress={() => setToggleInputType(InputType.EXPENSE)}
                                >
                                    <Text
                                        color={toggleInputType === InputType.EXPENSE ? "white" : "black"}
                                        fontWeight={toggleInputType === InputType.EXPENSE ? "bold" : "normal"}
                                    >
                                        Expense
                                    </Text>
                                </Button>

                                <Button
                                    flex={1}
                                    bg={toggleInputType === InputType.INCOME ? "orange.500" : "coolGray.200"}
                                    rounded={"lg"}
                                    _pressed={{ bg: "coolGray.200" }}
                                    onPress={() => setToggleInputType(InputType.INCOME)}
                                >
                                    <Text
                                        paddingX={"0.5"}
                                        color={toggleInputType === InputType.INCOME ? "white" : "black"}
                                        fontWeight={toggleInputType === InputType.INCOME ? "bold" : "normal"}
                                    >
                                        Income
                                    </Text>
                                </Button>
                            </Box>
                        </Box>
                    </HeaderContainer>

                    {/* Form */}
                    <Box>
                        <InputContainer>
                            <Text w={"15%"} fontWeight={"semibold"} fontSize={"lg"}>
                                Date
                            </Text>
                            <Box w={"10%"}>
                                <Icon
                                    as={EvilIcons}
                                    name={"chevron-left"}
                                    width={"full"}
                                    onPress={() => {
                                        setCurrentDate(new Date(currentDate.getTime() - 24 * 60 * 60 * 1000));
                                    }}
                                />
                            </Box>
                            <Button
                                w={"65%"}
                                borderWidth={0}
                                textAlign={"center"}
                                bg={"orange.100"}
                                _pressed={{ bg: "orange.100" }}
                                onPress={showDatePickerHandler}
                            >
                                <Text fontSize={"lg"} fontWeight="bold" textAlign={"center"}>
                                    {moment(currentDate).format("ddd, DD/MM, YYYY")}
                                </Text>
                            </Button>
                            <Box w={"10%"} alignItems={"flex-end"}>
                                <Icon
                                    as={EvilIcons}
                                    name={"chevron-right"}
                                    width={"full"}
                                    onPress={() => {
                                        setCurrentDate(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000));
                                    }}
                                />
                            </Box>
                            {showDatePicker && (
                                <DateTimePicker value={currentDate} mode={"date"} onChange={onChangeDate} />
                            )}
                        </InputContainer>
                        <Divider />
                        <InputContainer>
                            <Text w={"25%"} fontWeight={"semibold"} fontSize={"lg"}>
                                Note
                            </Text>
                            <Input
                                w={"65%"}
                                placeholder="Enter your note"
                                borderWidth={0}
                                fontSize={"lg"}
                                fontWeight="light"
                            />
                        </InputContainer>
                        <Divider />
                        <InputContainer>
                            <Text w={"25%"} fontWeight={"semibold"} fontSize={"lg"}>
                                {toggleInputType === InputType.EXPENSE ? "Expense" : "Income"}
                            </Text>

                            <TextInput
                                style={styles.inputText}
                                keyboardType={"numeric"}
                                placeholder="Enter your amount"
                                value={amount ? amount.toString() : null}
                                onChangeText={(e) => setAmount(Number(e))}
                            />

                            <Text w={"10%"} fontWeight={"semibold"} fontSize={"lg"} textAlign={"center"}>
                                đ
                            </Text>
                        </InputContainer>
                        <Divider />
                    </Box>

                    {/* Navbar */}
                    <Box width={"full"} position={"absolute"} bottom={0}>
                        <Box
                            flex={1}
                            flexDirection={"row"}
                            justifyContent={"space-around"}
                            borderTopWidth={2}
                            borderColor={"coolGray.200"}
                            bg={"coolGray.100"}
                        >
                            <NavbarBottomItem label="Input" IconGroup={EvilIcons} iconName="pencil" value={0} />
                            <NavbarBottomItem label="Calendar" IconGroup={EvilIcons} iconName="calendar" value={1} />
                            <NavbarBottomItem label="Report" IconGroup={EvilIcons} iconName="chart" value={2} />
                            <NavbarBottomItem
                                label="Other"
                                IconGroup={Entypo}
                                iconName="dots-three-horizontal"
                                value={3}
                            />
                        </Box>
                    </Box>
                </Box>
            </DismissKeyboardHOC>
        </KeyboardAvoidingView>
    );
};

export default () => (
    <ScreensProvider>
        <InputScreen />
    </ScreensProvider>
);
