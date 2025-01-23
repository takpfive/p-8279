import { FC } from 'react';

const AboutUs: FC = () => {
  return (
    <section className="bg-white flex flex-col items-center justify-center mt-[25px] px-20 py-[68px] max-md:max-w-full max-md:px-5">
      <div className="flex w-[1073px] max-w-full flex-col">
        <h2 className="text-[rgba(17,17,17,1)] text-[64px] font-extrabold leading-[1.2] text-center self-center ml-4 max-md:text-[40px]">
          About us
        </h2>
        <div className="mt-11 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="flex flex-col w-6/12 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3c729c416899d39f13a8c8f36c6877f5d34eca0abe529960d1ed4af43ccf661?placeholderIfAbsent=true"
                alt="About us illustration"
                className="aspect-[1] object-contain w-full max-md:max-w-full max-md:mt-2.5"
              />
            </div>
            <div className="flex flex-col w-6/12 ml-5 max-md:w-full">
              <div className="flex flex-col self-stretch text-base text-[rgba(18,24,43,1)] font-semibold whitespace-nowrap leading-[1.4] my-auto max-md:max-w-full max-md:mt-10">
                <h3 className="text-[rgba(19,22,30,1)] text-[32px] font-bold">
                  時間創出のお手伝い
                </h3>
                <p className="mt-[21px] max-md:max-w-full">
                  ChatGPTを始めとしたAIの登場は全産業に大きく影響を与えました。
                </p>
                <p className="mt-[17px]">
                  ですがAIは完璧な存在ではありません。
                </p>
                <p className="mt-[17px]">
                  人間にしか出来ないことは多く存在します。
                </p>
                <p className="self-stretch mt-[17px] max-md:max-w-full">
                  AIに任せられることは任せる。そうして時間を作り、本質的なことを人が行う。
                </p>
                <p className="mt-[18px]">
                  そのお手伝いを弊社にお任せください。
                </p>
                <button className="bg-black self-center w-[501px] max-w-full text-xl text-white font-bold text-center ml-[11px] mt-16 px-[70px] py-4 rounded-2xl max-md:mt-10 max-md:px-5">
                  私たちについて
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;