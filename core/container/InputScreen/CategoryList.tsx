import { Ionicons } from "@expo/vector-icons";
import { Box, Button, FlatList, Icon, Text } from "native-base";
import * as React from "react";
import { Colors } from "../../constants";
import { Icon as IconProps } from "@expo/vector-icons/build/createIconSet";

export interface Category {
    label: string;
    iconColor: string;
    iconName: string;
    iconType: IconProps<any, string>;
}

interface CategoryListProps {
    list: Category[];
    chooseCategoryHandler: (label: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ list, chooseCategoryHandler }) => {
    const [selectedCategory, setSelectedCategory] = React.useState<string>();
    return (
        <FlatList
            w={"95%"}
            contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
            }}
            numColumns={3}
            columnWrapperStyle={{ width: "100%" }}
            keyExtractor={(item) => item.label}
            data={list}
            renderItem={({ item }) => (
                <Box
                    w={"30%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bg={selectedCategory === item.label ? Colors.SECONDARY : Colors.APP_BACKGROUND}
                    borderRadius={4}
                >
                    <Button
                        m={0.5}
                        py={4}
                        w={"95%"}
                        bg={Colors.APP_BACKGROUND}
                        borderWidth={1}
                        borderColor={Colors.SECONDARY}
                        _pressed={{ bg: Colors.APP_BACKGROUND }}
                        onPress={() => {
                            setSelectedCategory(item.label);
                            chooseCategoryHandler(item.label);
                        }}
                    >
                        <Box justifyContent={"center"} alignItems={"center"}>
                            <Icon as={item.iconType} name={item.iconName} size={7} color={item.iconColor} />
                            <Text fontSize={"sm"}>
                                {item.label.length <= 9 ? item.label : item.label.slice(0, 10) + "..."}
                            </Text>
                        </Box>
                    </Button>
                </Box>
            )}
        />
    );
};

export default CategoryList;
