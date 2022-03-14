import { EvilIcons } from "@expo/vector-icons";
import moment from "moment";
import { Box, Button, Divider, Icon, Input, Text } from "native-base";
import * as React from "react";
import { Colors } from "../../constants";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import ToggleButton from "./ToggleButton";
import { TextInput } from "react-native";
import { styles } from "./style";
import InputContainer from "./InputContainer";
interface InputScreenProps {}

enum InputType {
    EXPENSE = "expense",
    INCOME = "income",
}

export const InputScreen: React.FC<InputScreenProps> = () => {
    const [toggleInputType, setToggleInputType] = React.useState<InputType>(InputType.EXPENSE);
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
        <Box flex={1}>
            <Box
                height={"10%"}
                bg={Colors.HEADER_BACKGROUND}
                mb={3}
                justifyContent={"flex-end"}
                alignItems={"center"}
                pb={1}
            >
                <Box
                    flexDirection={"row"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    bg={Colors.BUTTON_INACTIVE}
                    borderRadius={8}
                >
                    <ToggleButton
                        isActive={toggleInputType === InputType.EXPENSE}
                        onPress={() => setToggleInputType(InputType.EXPENSE)}
                    >
                        Expense
                    </ToggleButton>
                    <ToggleButton
                        isActive={toggleInputType === InputType.INCOME}
                        onPress={() => setToggleInputType(InputType.INCOME)}
                    >
                        Income
                    </ToggleButton>
                </Box>
            </Box>

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
                    {showDatePicker && <DateTimePicker value={currentDate} mode={"date"} onChange={onChangeDate} />}
                </InputContainer>
                <Divider />
                <InputContainer>
                    <Text w={"25%"} fontWeight={"semibold"} fontSize={"lg"}>
                        Note
                    </Text>
                    <Input w={"65%"} placeholder="Enter your note" borderWidth={0} fontSize={"lg"} fontWeight="light" />
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
        </Box>
    );
};
