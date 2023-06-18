import Navbar from "../components/Navbar";

import camIcon from "../assets/Path.png";
import frame from "../assets/Frame.png";
import frame2 from "../assets/Frame2.png";
import vector from "../assets/Vector.png";

import step1 from "../assets/howItWorks/step1.png";
import step2 from "../assets/howItWorks/step2.png";
import step3 from "../assets/howItWorks/step3.png";
import step4 from "../assets/howItWorks/step4.png";
import line from "../assets/howItWorks/line.png";

import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { BlueButton, OrangeButton } from "../components/commons/Common";
import { theme } from "../utils/theme";

import { offerData } from "../utils/data";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-[100vw]">
      <Navbar />

      <div className="flex flex-col gap-8 items-center relative">
        <div className="w-[95%] lg:w-[95%] xl:w-[80%] max-w-[1288px] mx-auto mt-[6rem] flex flex-col gap-8 items-center text-center">
          <Box>
            <Typography variant="h2" color="primary"
            fontWeight={"400"}>
              Access Your Pay{" "}
            </Typography>
              <Typography variant="h2" color="secondary">
                Before PayDay
              </Typography>
          </Box>
          <Typography
            variant="p"
            maxWidth={"681px"}
            color={theme.palette.primary.light}
          >
            Unlock a portion of your earned pay to make life a little easier. We
            empower you to access your advance salary up to 70% of what you’ve
            earned every pay cycle.
          </Typography>
          <div className="flex items-center gap-4">
            <Link to="/signin">
            <OrangeButton>Get Started</OrangeButton>
            </Link>
            <BlueButton>
              <img className="w-[20px] h-[14px] mr-[5px]" src={camIcon} />
              Learn More
            </BlueButton>
          </div>
        </div>
        <img
          className="w-[100vw] object-center object-cover hidden md:flex mt-[-3rem]"
          src={frame}
        />
        <img
          className="w-[100vw] object-center object-cover md:hidden mt-[-3rem]"
          src={frame2}
        />
        <img
          className="absolute left-[140px] top-[270px] hidden xl:flex"
          src={vector}
        />
      </div>

      <div className="w-[94%] lg:w-[95%] xl:w-[80%] max-w-[1288px] mx-auto">
        <section className="w-full mt-[7rem] flex flex-col gap-[5rem]">
          <div className="flex flex-col gap-[1rem] text-center items-center">
            <Typography variant="h2" color={theme.palette.primary.main}>
              What we offer
            </Typography>
            <Typography
              variant="p"
              color={theme.palette.primary.light}
              maxWidth={"578px"}
            >
              SalaryPayDay is able to take away the pain of waiting for payday
              by giving you a new finan cial breathing space and less financial
              stress
            </Typography>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-6">
            {offerData.map((service) => (
              <div
                className="w-[calc(100%)] lg:w-[calc(100% / 3)] h-[319px] bg-background rounded-[40px] px-[32px] py-[56px]"
                key={service.id}
              >
                <div className="flex flex-col items-start gap-[16px]">
                  <img className="w-[72px] h-[72px]" src={service.img} />
                  <Typography variant="h3" color="primary" fontWeight={"400"}>
                    {service.title}
                  </Typography>
                  <Typography variant="p" color={theme.palette.primary.light}>
                    {service.details}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full mt-[7rem] flex flex-col gap-[5rem] lg:gap-[5rem]">
          <div className="flex flex-col gap-[1rem] text-center items-center">
            <Typography variant="h2" color="primary">
              How it Works?
            </Typography>
            <Typography variant="p" maxWidth={"416px"}>
              You can now take control of your finances even before your payday
              with our three simplify process
            </Typography>
          </div>
          <div className="lg:w-[90%] mx-auto">
            <div className="w-full flex flex-col gap-[3rem] lg:gap-[5rem] items-center">
              <div className="hidden w-full lg:flex flex-col gap-6 lg:flex-row lg:justify-between relative items-center">
                <img
                  className=" lg:absolute lg:left-[48%] lg:h-[1400px] lg:top-[0px]"
                  src={line}
                />
              </div>
              <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-6 relative items-center">
                <button className="button text-secondary hidden lg:flex lg:absolute lg:left-[43%] xl:left-[43.5%] top-[-35%]  bg-background">
                  Step 1
                </button>
                <div className="flex flex-col gap-6">
                  <Typography
                    variant="h2"
                    fontSize={"32px"}
                    color="primary"
                    maxWidth={"278px"}
                    fontWeight={"400"}
                  >
                    Sign Up On Salary PayDay
                  </Typography>
                  <Typography variant="p" maxWidth={"416px"}>
                    You'll need to complete a simple online registration with
                    your bio-data and employer details.
                  </Typography>
                </div>
                <img className="w-[400px] h-[292px]" src={step1} />
              </div>
              <div className="w-full flex flex-col gap-6 lg:flex-row-reverse lg:justify-between relative items-center">
                <button className="button text-tertiary hidden lg:flex lg:absolute lg:left-[43%] xl:left-[43.5%] top-[-15%] bg-background">
                  Step 2
                </button>
                <div className="flex flex-col gap-6 ">
                  <Typography
                    variant="h2"
                    fontSize={"32px"}
                    color="primary"
                    maxWidth={"278px"}
                    fontWeight={"400"}
                  >
                    Check your eligibility
                  </Typography>
                  <Typography variant="p" maxWidth={"416px"}>
                    Using your salary account financial statement, we prequalify
                    you for 50% if your monthly salary
                  </Typography>
                </div>
                <img className="w-[384px] h-[384px]" src={step2} />
              </div>
              <div className="w-full flex flex-col gap-6 lg:flex-row lg:justify-between relative items-center">
                <button className="button text-secondary hidden lg:flex lg:absolute lg:left-[43%] xl:left-[43.5%] top-[-15%]  bg-background">
                  Step 3
                </button>
                <div className="flex flex-col gap-6">
                  <Typography
                    variant="h2"
                    fontSize={"32px"}
                    color="primary"
                    maxWidth={"278px"}
                    fontWeight={"400"}
                  >
                    Access up to 50% of your Pay
                  </Typography>
                  <Typography variant="p" maxWidth={"416px"}>
                    Get paid when you need it, not just when it's payday. You
                    can access up to 50% of what you've earned, up to 3 times
                    every pay cycle.
                  </Typography>
                </div>
                <img className="w-[356px] h-[356px]" src={step3} />
              </div>
              <div className="w-full hidden lg:flex flex-col gap-6 lg:flex-row lg:justify-between relative items-center">
                <img
                  className="lg:absolute lg:left-[43.5%] top-[-15%] w-[84px] h-[84px]"
                  src={step4}
                />
              </div>
            </div>
          </div>
          <div className="bg-secondary rounded-[64px] px-[31px] py-[85px] mt-[5rem]">
            <div className="flex flex-col gap-6 text-center items-center px-[10px]">
              <Typography
                variant="h2"
                color={"white"}
                fontWeight={"500"}
                maxWidth={"550px"}
               
              >
                SalaryPayDay got you covered.
              </Typography>
              <Typography variant="p" color={"white"}>
                The countdown to payday just got shorter
              </Typography>
              <OrangeButton>
                <Link to="/signin">Get Started</Link>
              </OrangeButton>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
