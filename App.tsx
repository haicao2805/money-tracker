import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { BottomTab, TabItemProps } from "./core/components/bottomTab";
import { CalendarScreen, InputScreen, OtherScreen, ReportScreen } from "./core/container";

const tabListConfig: TabItemProps[] = [
    {
        route: "Input",
        label: "Input",
        iconType: EvilIcons,
        iconName: "pencil",
        component: InputScreen,
        showHeader: false,
    },
    {
        route: "Calendar",
        label: "Calendar",
        iconType: EvilIcons,
        iconName: "calendar",
        component: CalendarScreen,
        showHeader: true,
    },
    {
        route: "Report",
        label: "Report",
        iconType: EvilIcons,
        iconName: "chart",
        component: ReportScreen,
        showHeader: true,
    },
    {
        route: "Other",
        label: "Other",
        iconType: MaterialCommunityIcons,
        iconName: "dots-horizontal",
        component: OtherScreen,
        showHeader: true,
    },
];

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <BottomTab tabListConfig={tabListConfig} />
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
