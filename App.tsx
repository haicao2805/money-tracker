import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import InputScreen from "./core/container/InputScreen";
import { store } from "./core/store";

export default function App() {
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <InputScreen />
            </NativeBaseProvider>
        </Provider>
    );
}
