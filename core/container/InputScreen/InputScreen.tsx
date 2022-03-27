import { AntDesign, EvilIcons, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import moment from "moment";
import { Box, Button, Divider, FlatList, Icon, Input, ScrollView, Text } from "native-base";
import * as React from "react";
import { Colors } from "../../constants";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import ToggleButton from "./ToggleButton";
import { TextInput } from "react-native";
import { styles } from "./style";
import CategoryList, { Category } from "./CategoryList";

enum InputType {
    EXPENSE = "expense",
    INCOME = "income",
}

const categoryList: Category[] = [
    {
        label: "Food",
        iconName: "fast-food-outline",
        iconType: Ionicons,
        iconColor: "#c084fc",
    },
    {
        label: "Transport",
        iconName: "bus-outline",
        iconType: Ionicons,
        iconColor: "#eab308",
    },
    {
        label: "House bill",
        iconName: "ios-home-outline",
        iconType: Ionicons,
        iconColor: "#ef4444",
    },
    {
        label: "Water bill",
        iconName: "water-outline",
        iconType: Ionicons,
        iconColor: "#7cc2ff",
    },
    {
        label: "Electric bill",
        iconName: "flash-outline",
        iconType: Ionicons,
        iconColor: "#047857",
    },
    {
        label: "Contact fee",
        iconName: "phone-portrait-outline",
        iconType: Ionicons,
        iconColor: "#f9a8d4",
    },
    {
        label: "Shopping",
        iconName: "cart-outline",
        iconType: Ionicons,
        iconColor: "#004282",
    },
];

interface InputScreenProps {}

export const InputScreen: React.FC<InputScreenProps> = () => {
    const [toggleInputType, setToggleInputType] = React.useState<InputType>(InputType.EXPENSE);
    const [showDatePicker, setShowDatePicker] = React.useState(false);
    const [currentDate, setCurrentDate] = React.useState<Date>(new Date());
    const [note, setNote] = React.useState<string>(null);
    const [amount, setAmount] = React.useState<number>(null);
    const [category, setCategory] = React.useState<string>(null);

    const onChangeDate = (event: Event, selectedDate: Date) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setCurrentDate(selectedDate);
        }
    };

    const showDatePickerHandler = () => {
        setShowDatePicker(true);
    };

    const submitHandler = () => {
        console.log("Date:", currentDate);
        console.log("Note: ", note);
        console.log("Amount: ", amount);
        console.log("Category: ", category);
    };

    return (
        <Box flex={1} bg={Colors.APP_BACKGROUND}>
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
                <Box
                    flexDirection={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    width={"full"}
                    py={1}
                    px={4}
                >
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
                </Box>
                <Divider />
                <Box
                    flexDirection={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    width={"full"}
                    py={1}
                    px={4}
                >
                    <Text w={"25%"} fontWeight={"semibold"} fontSize={"lg"}>
                        Note
                    </Text>
                    <Input
                        value={note}
                        onChangeText={(e) => setNote(e)}
                        w={"65%"}
                        placeholder="Enter your note"
                        borderWidth={0}
                        fontSize={"lg"}
                        fontWeight="light"
                    />
                </Box>
                <Divider />
                <Box
                    flexDirection={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    width={"full"}
                    py={1}
                    px={4}
                >
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
                </Box>
                <Divider />
            </Box>

            <Box h={"45%"}>
                <Box flexDirection={"row"} justifyContent={"space-between"}>
                    <Text fontWeight={"semibold"} fontSize={"lg"} px={4} py={4}>
                        Category
                    </Text>
                    <Button bg={Colors.APP_BACKGROUND} _pressed={{ bg: Colors.APP_BACKGROUND }} pr={8}>
                        <Icon as={Feather} name={"edit"} size={7} />
                    </Button>
                </Box>

                <Box h={"75%"} justifyContent={"center"} alignItems={"center"}>
                    <CategoryList list={categoryList} chooseCategoryHandler={setCategory} />
                </Box>
                <Divider />
            </Box>

            <Box justifyContent={"center"} alignItems={"center"}>
                <Button
                    bg={Colors.PRIMARY}
                    w={"60%"}
                    borderRadius={12}
                    mb={2}
                    _pressed={{ bg: Colors.PRIMARY }}
                    onPress={submitHandler}
                >
                    <Text fontWeight={"semibold"} color={"white"} fontSize={"xl"} textAlign={"center"}>
                        Submit
                    </Text>
                </Button>
                <Button bg={Colors.THIRD} w={"60%"} borderRadius={12} _pressed={{ bg: Colors.THIRD }}>
                    <Text fontWeight={"semibold"} color={"white"} fontSize={"xl"}>
                        Reset
                    </Text>
                </Button>
            </Box>
        </Box>
    );
};
