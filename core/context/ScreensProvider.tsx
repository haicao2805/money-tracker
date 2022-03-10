import React, { createContext, FC } from "react";

interface ScreensCtxProps {
    activeScreen: number;
    setActiveScreen: React.Dispatch<React.SetStateAction<number>>;
}

const ScreensCtx = createContext<ScreensCtxProps>(null);

interface ScreensProviderProps {}

export const ScreensProvider: FC<ScreensProviderProps> = ({ children }) => {
    const [activeScreen, setActiveScreen] = React.useState<number>(0);

    return (
        <ScreensCtx.Provider
            value={{
                activeScreen,
                setActiveScreen,
            }}
        >
            {children}
        </ScreensCtx.Provider>
    );
};

export const useScreen = () => {
    const ctx = React.useContext(ScreensCtx);
    return ctx;
};
