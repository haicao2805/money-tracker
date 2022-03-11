import { Box, Divider } from "native-base";
import * as React from "react";

interface InputContainerProps {}

export const InputContainer: React.FC<InputContainerProps> = ({ children }) => {
    return (
        <Box flexDirection={"row"} justifyContent={"flex-start"} alignItems={"center"} width={"full"} py={1} px={4}>
            {children}
        </Box>
    );
};
