import React from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../assets/GoogleIcon.png";
import Line from "../assets/Line.png";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { theme } from "../utils/theme";

import * as Yup from "yup";

import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "password must contain at least 5 characters")
    .required("password is required"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  return (
    <section className="w-[80%] md:w-[55%] lg:w-[70%] xl:w-[60%] mx-auto flex flex-col gap-5">
      <div className="w-full">
        <Typography varinat="p" color={theme.palette.primary.light}>
          Sign in to continue
        </Typography>
        <Typography
          variant="h4"
          color="primary"
          fontWeight={"700"}
          className="font-semibold text-secondary text-[48px]"
        >
          Get back in
        </Typography>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Email Address"
            variant="outlined"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
            
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <p className="font-bold underline cursor-pointer">Forgot password?</p>
          <button
            className="py-[14px] text-white bg-tertiary w-full"
            type="submit"
          >
            Continue
          </button>
          <div className="flex w-full items-center justify-between">
            <img className="w-[40%]" src={Line} />
            <span>or</span>
            <img className="w-[40%]" src={Line} />
          </div>
          <button
            className="w-full flex items-center justify-center font-semibold py-[14px] bg-gray-100 text-black"
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
        </Stack>
      </form>
    </section>
  );
};

export default SignIn;
