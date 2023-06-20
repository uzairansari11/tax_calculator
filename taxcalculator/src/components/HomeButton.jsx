import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/", { replace: true });
    };

    return (
        <Box textAlign="center" position={"fixed"} top={4} left={4} zIndex={10}>
            <IconButton
                aria-label="Home"
                icon={<FaHome />}
                colorScheme="blue"
                variant="solid"
                size="lg"
                isRound
                boxSize={12}
                _hover={{ bg: "blue.600" }}
                onClick={handleClick}
            />
        </Box>
    );
};

export default HomeButton;
