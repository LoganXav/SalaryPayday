import { Button, Stack, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../assets/GoogleIcon.png";
import Line from "../assets/Line.png";
import { theme } from "../utils/theme";

import * as Yup from "yup";

import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  phoneNumber: Yup.number()
    .typeError("Invalid phone number")
    .required("Phone Number is required"),
});

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  const navigate = useNavigate();

  return (
    <section className="w-[80%] mx-auto md:w-[55%] lg:w-[70%] xl:w-[60%] flex flex-col gap-5">
      <div className="w-full">
        <Typography variant="p" color={theme.palette.primary.light}>
          User Sign up
        </Typography>
        <Typography variant="h4" fontWeight={"700"} color="primary">
          Get Started
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
          <Stack direction="row" spacing={2}>
            <TextField
              className="w-full"
              label="First Name"
              variant="outlined"
              id="firstName"
              type="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              className="w-full"
              label="Last Name"
              variant="outlined"
              id="lastName"
              type="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Stack>
          <TextField
            className="w-full"
            label="Phone Number"
            variant="outlined"
            id="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
          <button
            type="submit"
            // className="bg-red-100 w-full h-14 mt-3"
            variant="contained"
            // sx={{ background: "#FC8900" }}
            className="py-[14px] text-white bg-tertiary w-full"
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
            Already have an account?{" "}
            <Link to="/signin">
              {" "}
              <span className="cursor-pointer text-tertiary font-semibold underline">
                Sign in
              </span>
            </Link>
          </Typography>
        </Stack>
      </form>
    </section>
  );
};

export default SignUp;
