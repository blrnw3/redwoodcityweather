import {
    Box,
    Button, Center,
    Flex, Link as ChakraLink,
    Menu,
    MenuButton, MenuItem,
    MenuList, useColorMode
} from '@chakra-ui/react';
import { IconContext } from "react-icons";
import { WiSunrise } from "react-icons/wi";
import { DarkModeSwitch } from '../components/DarkModeSwitch';
  

function NavBarItem(props) {
    return <Button as="a" p="4" m="3" bg="blue.300" color="white" href={props.to}>
        {props.name}
      </Button>;
  }
  
  function NavBarMenuItem(props) {
    return <MenuItem as="a" p="1" bg="blue.800" color="white" href={props.to}>
        {props.name}
      </MenuItem>;
  }


export function Page(props) {
    const { colorMode } = useColorMode()
    const bgColor = { light: 'gray.500', dark: 'gray.600' }
    const color = { light: 'black', dark: 'black' }
    return (
      <Box p="2" w="100%" minHeight="1000px" bg={bgColor[colorMode]}
      color={color[colorMode]}>
        <Box bg="gray.400" p="1px 5px" m="0% auto" maxWidth="1400px">
          <Flex w="100%" justify="space-between" bg="blue.400" p="6" wrap="wrap">
            <Box fontSize="2xl" minWidth="200px">
                <IconContext.Provider value={{ color: "yellow", size: "3em", style: {display: "inline"} }} ><WiSunrise /></IconContext.Provider>
               <Box as="span" paddingLeft="5"><b>RWC</b> Weather</Box>
            </Box>
            <Flex wrap="wrap">
              <NavBarItem name="Home" to="/" />
              <NavBarItem name="Reports" to="/history/month" />
              <NavBarItem name="Charts" to="/charts" />
              <Menu>
                <MenuButton as={Button} p="4" m="3" bg="blue.300" color="white">
                  More
                </MenuButton>
                <MenuList>
                  <NavBarMenuItem name="About" to="/about" />
                  <NavBarMenuItem name="Forecast" to="/forecast" />
                  <NavBarMenuItem name="Webcam" to="/webcam" />
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
          <Box p="7" bg="gray.100">
            {props.children}
          </Box>
          <Box p="5" bg="green.200">
            <Center>
            <ChakraLink isExternal
              href="https://www.linkedin.com/in/ben-masschelein-rodgers-b31744b1/"
            >
              Made by{' '}
              Ben Masschelein-Rodgers
            </ChakraLink>
            {' '} &nbsp; &copy; 2021
            </Center>
            <Center>
              Sister station:{' '}&nbsp; <ChakraLink isExternal
              href="http://nw3weather.co.uk"
            >London NW3 weather</ChakraLink>
            </Center>
          </Box>
        </Box>
  
        <DarkModeSwitch />
      </Box>
    )
  }
