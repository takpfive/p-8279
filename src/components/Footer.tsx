import { FC } from 'react';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  return (
    <footer className="bg-[rgba(19,22,30,1)] self-stretch flex flex-col items-center justify-center mt-[81px] px-20 py-[94px] max-md:max-w-full max-md:mr-0.5 max-md:mt-10 max-md:pt-[100px] max-md:px-5">
      <div className="flex w-[1180px] max-w-full flex-col">
        <div className="w-[1069px] max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="flex flex-col w-[33%] max-md:w-full">
              <div className="flex flex-col text-white font-extrabold max-md:mt-10">
                <div className="text-xs leading-[1.4] text-center">
                  Michikusa
                </div>
                <div className="text-[27px] leading-[1.2] tracking-[-0.54px] mt-12 max-md:mt-10">
                  Make it Simple.
                </div>
              </div>
            </div>
            <nav className="flex flex-col w-1/5 ml-5 max-md:w-full">
              <div className="flex grow flex-col text-[17px] text-white font-bold leading-[1.8] max-md:mt-10">
                <div className="text-xs font-extrabold leading-[1.4] text-center">
                  NAVIGATION
                </div>
                <Link to="/" className="text-center mt-[53px] max-md:mt-10">
                  Home
                </Link>
                <div className="bg-[rgba(102,160,56,1)] flex w-[50px] h-px mt-[9px]" />
                <Link to="/company" className="text-center mt-2">
                  Company
                </Link>
                <Link to="/news" className="text-center mt-4">
                  News
                </Link>
                <Link to="/blog" className="mt-[19px]">
                  Blog
                </Link>
                <Link to="/privacy-policy" className="text-center self-stretch mt-[15px]">
                  Privacy Policy
                </Link>
                <Link to="/contact" className="text-center mt-4">
                  Contact
                </Link>
              </div>
            </nav>
            <div className="flex flex-col w-[47%] ml-5 max-md:w-full">
              <div className="flex w-full flex-col text-white font-bold leading-[1.4] max-md:mt-10">
                <div className="text-xs font-extrabold text-center">
                  Contact
                </div>
                <h3 className="text-[22px] self-stretch mt-[66px] max-md:mt-10">
                  Feel Free to Ask Anything.
                </h3>
                <Link
                  to="/contact"
                  className="flex w-[166px] max-w-full gap-5 text-[17px] whitespace-nowrap text-center tracking-[-0.34px] justify-between mt-[29px] px-[23px] py-[19px] rounded-[5px] border-white border-solid border-2 max-md:px-5"
                >
                  <span>Contact</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ef12257aa3b04c2b5d2a07275409ecf6957398e7f612e763bf6a4d31b0ae0fb?placeholderIfAbsent=true"
                    alt="Contact arrow"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex h-px mt-[70px] max-md:max-w-full max-md:mt-10" />
        <div className="flex gap-5 text-sm text-[rgba(255,255,255,0.7)] font-semibold leading-[1.7] flex-wrap justify-between mt-[23px] max-md:max-w-full max-md:mr-0.5">
          <div>Michikusa, Inc. ©2023. All rights reserved.</div>
          <Link to="/legal">特定商取引法に基づく表記</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;