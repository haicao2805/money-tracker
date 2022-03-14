import { Icon as IconProps } from "@expo/vector-icons/build/createIconSet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, Text } from "native-base";
import React, { FC } from "react";
import { Colors } from "../../constants";

const Tab = createBottomTabNavigator();

interface BottomTabProps {
    tabListConfig: TabItemProps[];
}

export interface TabItemProps {
    route: string;
    label: string;
    iconName: string;
    iconType: IconProps<any, string>;
    component: React.FC;
    showHeader: boolean;
}

export const BottomTab: FC<BottomTabProps> = ({ tabListConfig }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: Colors.TAB_BAR_BACKGROUND,
                },
            }}
        >
            {tabListConfig.map((item, index) => (
                <Tab.Screen
                    key={index}
                    name={item.route}
                    component={item.component}
                    options={{
                        headerShown: item.showHeader,
                        tabBarLabel: (props) => (
                            <Text color={props.focused ? Colors.TAB_ITEM_ACTIVE : Colors.TAB_ITEM_INACTIVE}>
                                {item.label}
                            </Text>
                        ),
                        tabBarIcon: (props) => (
                            <Icon
                                as={item.iconType}
                                name={item.iconName}
                                color={props.focused ? Colors.TAB_ITEM_ACTIVE : Colors.TAB_ITEM_INACTIVE}
                            />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};
