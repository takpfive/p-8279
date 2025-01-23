import { FC } from 'react';
import { FAQItem } from '@/lib/types';

const faqItems: FAQItem[] = [
  {
    question: "具体的な悩みがなくても問題ないですか？",
    answer: `全く問題ございません。「何もわかってないけど、AIとか使ってみた
い」
といった段階からぜひご相談ください。
業務内容のヒアリングから始め、最適な施策のご提案をさせていただ
きます。`
  },
  {
    question: "どれくらいの料金ですか？",
    answer: `サービスごとに異なります。お問い合わせ頂きましたら、すぐにご連
絡差し上げます。要件についてお伺いした上でお見積りをお出ししま
す。`
  },
  {
    question: "上記のこと以外でも、DX全般をみて頂けますか？",
    answer: `勿論可能です。中小企業様の包括的なアナログ業務改善をお手伝いさ
せて頂きます。`
  }
];

const FAQ: FC = () => {
  return (
    <section className="bg-white flex flex-col items-center">
      <h2 className="text-[rgba(17,17,17,1)] text-[64px] font-extrabold leading-[1.2] text-center mt-[75px] max-md:text-[40px] max-md:mt-10">
        FAQ
      </h2>
      <div className="w-[1030px] max-w-full mt-[71px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="flex flex-col w-6/12 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e2a8664367de1370e479610679db0884d565c3247d780bcc29bfa05cf84c3a2?placeholderIfAbsent=true"
              alt="FAQ illustration"
              className="aspect-[1.07] object-contain w-full max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col w-6/12 ml-5 max-md:w-full">
            <div className="flex grow flex-col text-[22px] text-black font-bold whitespace-nowrap leading-[26px] max-md:max-w-full">
              {faqItems.map((item, index) => (
                <div key={index} className="mb-10">
                  <h3 className="leading-[1.2] max-md:max-w-full">
                    Q.{item.question}
                  </h3>
                  <p className="text-[rgba(51,51,51,1)] text-base font-semibold mt-[22px] max-md:max-w-full whitespace-normal">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;