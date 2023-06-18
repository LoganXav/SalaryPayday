import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material';


const Footer= () => {
    const navLinks = ["Solution", "About Us", "Contact Us"]
    return (
    <section className="w-full min-h-[475px] h-[300px] mt-[8rem] bg-black py-[50px] invisible lg:visible">
        <div className="w-[94%] lg:w-[95%] xl:w-[90%] max-w-[1315px] h-full mx-auto flex flex-col justify-between">
            <div className="flex gap-[10rem]">
                <h2 className="text-tertiary font-semibold text-[32px]">Salary <span className="text-white">Payday</span></h2>
                <div className="flex flex-col gap-10 text-white mt-[2rem]">
                    <p>Solution</p>
                    <ul className="flex flex-col gap-6">
                        {navLinks.map((link, i) => (
                            <Typography key={i} variant="p" color={"white"}>{link}</Typography>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-10 text-white mt-[2rem]">
                    <p>Solution</p>
                    <ul className="flex flex-col gap-6">
                    {navLinks.map((link, i) => (
                            <Typography key={i} variant="p" color={"white"}>{link}</Typography>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <div className="flex items-center justify-between mt-[1rem]">
                    <p className="font-bold text-[13px] text-white">Copyright © 2022 EmployerPay. All Rights Reserved.</p>
                    <ul className="text-tertiary flex items-center gap-6">
                        <li><FacebookIcon /></li>
                        <li><InstagramIcon /></li>
                        <li><LinkedInIcon /></li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
    );
  };
  
  export default Footer;
  