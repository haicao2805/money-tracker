import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import InputScreen from "./containers/InputScreen";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <InputScreen />
      </NativeBaseProvider>
    </Provider>
  );
}
