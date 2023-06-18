import React from "react"
import { Stack, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../assets/GoogleIcon.png";
import Line from "../assets/Line.png";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { theme } from "../utils/theme";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <section className="w-[80%] md:w-[55%] lg:w-[60%] xl:w-[60%] mx-auto flex flex-col gap-5">
      <div className="w-full">
        <Typography varinat="p" color={theme.palette.primary.light}>Sign in to continue</Typography>
        <Typography variant="h4" color="primary" fontWeight={"700"} className="font-semibold text-secondary text-[48px]">
          Get back in
        </Typography>
      </div>
      <Stack spacing={2}>
        <TextField label="Email Address" variant="outlined" />
         <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Stack>
      <p className="font-bold text-[12px] underline cursor-pointer">Forgot password?</p>
      <button
        className="py-[11px] text-white bg-tertiary w-full"
        onClick={() => navigate("/")}
      >
        Continue
      </button>
      <div className="flex w-full items-center justify-between">
        <img className="w-[40%]" src={Line} />
        <span>or</span>
        <img className="w-[40%]" src={Line} />
      </div>
      <button
        className="w-full flex items-center justify-center font-semibold py-[11px] bg-gray-100 text-black"
        onClick={() => navigate("/")}
      >
        <img className=" mr-[15px]" src={GoogleIcon} />
        Continue with Google
      </button>
      <Typography variant="p">
        Don't have an account?{" "}
        <Link to="/signin/create">
          {" "}
          <span className="cursor-pointer text-tertiary font-semibold underline">
            Create Account
          </span>
        </Link>
      </Typography>
    </section>
  );
};

export default SignIn;
