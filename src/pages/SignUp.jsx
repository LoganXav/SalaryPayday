import { Stack, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from "react-router-dom"
import GoogleIcon from "../assets/GoogleIcon.png"
import Line from "../assets/Line.png"
import { theme } from '../utils/theme';

const SignUp = () => {
  
  const navigate = useNavigate()

    return (
    <section className="w-[87%] mx-auto lg:w-[40%] xl:w-[56%] flex flex-col gap-5">
      <div className="w-full">
      <Typography variant="p" color={theme.palette.primary.light}>User Sign up</Typography>
      <Typography variant="h4" fontWeight={"700"} color="primary">Get Started</Typography>
      </div>
     <Stack spacing = {2}>
      <TextField label="Email Address" variant="outlined"/>
      <Stack direction="row" spacing= {2}>

      <TextField label="First Name" variant="outlined"/>
      <TextField label="Last Name" variant="outlined"/>
      </Stack>
      <TextField label="Phone Number" variant="outlined"/>
     </Stack>
     <p className="font-bold underline">Forgot password?</p>
     <button className="py-[11px] text-white bg-tertiary w-full"  onClick={() => navigate("/")} >Continue</button>
     <div className="flex w-full items-center justify-between">
      <img className="w-[40%]" src={Line}/>
      <span>or</span>
      <img className="w-[40%]" src={Line}/>
     </div>
     <button className="w-full flex items-center justify-center font-semibold py-[11px] bg-gray-100 text-black" onClick={() => navigate("/")}>
            <img className=" mr-[15px]" src={GoogleIcon} />
           Continue with Google
          </button>
          <p className="font-semibold text-primary">Already have an account? <Link to="/signin"> <span className="cursor-pointer text-tertiary font-semibold underline">Sign in</span></Link></p>
    </section>
    );
  };
  
  export default SignUp;
  