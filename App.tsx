import { NativeBaseProvider } from "native-base";
import InputScreen from "./containers/InputScreen";

export default function App() {
    return (
        <NativeBaseProvider>
            <InputScreen />
        </NativeBaseProvider>
    );
}
