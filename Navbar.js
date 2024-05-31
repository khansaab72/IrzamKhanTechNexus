import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "../App.css";
import tech from "../Logo2-removebg-preview (1).png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="App">
      <nav>
        <div className="container">
          <Box height="150px" width="200px">
            <Image src={tech} alt={"logo"} />
          </Box>
          <Text fontSize="30px" fontFamily="serif" margin-left="100px">
            Tech Nexus
          </Text>
          <ul>
            <Flex>
              <li padding-top="100px">
                <Link to="/">
                  <Text fontSize="lg" fontFamily={"monospace"}>
                    Home
                  </Text>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <Text fontSize="lg" fontFamily={"monospace"}>
                    About
                  </Text>
                </Link>
              </li>
              <li>
                <Link to="/blogs">
                  <Text fontSize="lg" fontFamily={"monospace"}>
                    Blogs
                  </Text>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <Text fontSize="lg" fontFamily={"monospace"}>
                    Contact Us
                  </Text>
                </Link>
              </li>
            </Flex>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
