import { Box, Divider } from "native-base";
import * as React from "react";

interface HeaderContainerProps {}

export const HeaderContainer: React.FC<HeaderContainerProps> = ({ children }) => {
    return (
        <Box pt={8} pb={2} bg={"coolGray.100"}>
            {children}
        </Box>
    );
};
