import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className="bg-white flex flex-col items-center pt-[169px] max-md:pt-[100px]">
      <div className="w-[1057px] max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="flex flex-col w-[57%] max-md:w-full">
            <div className="flex flex-col self-stretch text-[rgba(19,22,30,1)] my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-[90px] font-bold leading-[1.2] tracking-[-4.5px] max-md:max-w-full max-md:text-[40px]">
                Make It Simple.
              </h1>
              <p className="text-[22px] font-semibold leading-[31px] mr-[46px] mt-[43px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
                <span>AIを中心としたソリューションでアナログな作業を効率</span>
                <br />
                <span>化。本当に人がやるべき業務への時間創出のお手伝い。</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[43%] ml-5 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/995958ca5a9fffab3b972a198973920d4d7945849d51a6493dca9a91e8e9b462?placeholderIfAbsent=true"
              alt="Hero illustration"
              className="aspect-[1] object-contain w-full max-md:max-w-full max-md:mt-[13px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;