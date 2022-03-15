import { Ionicons } from "@expo/vector-icons";
import { Box, Button, Icon, Text } from "native-base";
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
}

const CategoryList: React.FC<CategoryListProps> = ({ list }) => {
    return (
        <>
            {list.map((item, index) => (
                <Button
                    key={index}
                    height={"30%"}
                    w={"30%"}
                    bg={Colors.APP_BACKGROUND}
                    borderColor={Colors.SECONDARY}
                    borderWidth={"2"}
                    _pressed={{ bg: Colors.APP_BACKGROUND }}
                    m={1}
                >
                    <Box justifyContent={"center"} alignItems={"center"} py={1}>
                        <Icon as={item.iconType} name={item.iconName} size={6} color={item.iconColor} />
                        <Text fontSize={"sm"}>{item.label}</Text>
                    </Box>
                </Button>
            ))}
        </>
    );
};

export default CategoryList;
