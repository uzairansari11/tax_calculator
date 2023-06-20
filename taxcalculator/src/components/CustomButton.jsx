import { Button } from "@chakra-ui/react";
import React from "react";

const CustomButton = ({ bg, color, onClick, title }) => {
    return (
        <Button bg={bg} color={color} onClick={onClick}>
            {title}
        </Button>
    );
};

export default CustomButton;
