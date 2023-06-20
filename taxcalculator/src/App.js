import { Box } from "@chakra-ui/react";
import HomeButton from "./components/HomeButton";
import Routing from "./routing/Routing";
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation()
  return (
    <Box>
      {location.pathname === "/" ? <></> : <HomeButton />}

      <Routing />
    </Box>
  );
}

export default App;
