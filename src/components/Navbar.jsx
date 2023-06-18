import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { OrangeButton } from "./commons/Common";
import { Box } from "@mui/material";

const Navbar = () => {
  const navLinks = ["Home", "Solutions", "About", "Contact"];
  return (
    <Container>
      <nav className="flex justify-between items-center mt-[20px]">
        <Box>
          <Typography variant="h3" color="secondary" fontFamily={"inherit"}>
            Salary
            <Typography variant="span" fontSize={"22px"} color="primary">
              PayDay
            </Typography>
          </Typography>
          <Typography variant="p" fontSize={"10px"} fontWeight={"500"}>
            Get paid when you need it
          </Typography>
        </Box>
        <div className="hidden xl:flex items-center gap-10 text-base">
          {navLinks.map((link, i) => (
            <Typography variant="p" key={i}>
              {link}
            </Typography>
          ))}
          <OrangeButton>
            <Link to="/signin">Login</Link>
          </OrangeButton>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
