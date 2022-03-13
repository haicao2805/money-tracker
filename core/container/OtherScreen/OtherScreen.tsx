import { Box, Text } from "native-base";
import * as React from "react";
interface OtherScreenProps {}

export const OtherScreen: React.FC<OtherScreenProps> = () => {
    return (
        <Box>
            <Text>Other</Text>
        </Box>
    );
};
