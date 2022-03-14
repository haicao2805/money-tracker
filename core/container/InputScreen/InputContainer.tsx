import { Box } from "native-base";
import React, { FC } from "react";
interface InputContainerProps {}

const InputContainer: FC<InputContainerProps> = ({ children }) => {
    return (
        <Box flexDirection={"row"} justifyContent={"flex-start"} alignItems={"center"} width={"full"} py={1} px={4}>
            {children}
        </Box>
    );
};

export default InputContainer;
