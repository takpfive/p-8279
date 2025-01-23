import { FC } from 'react';
import { ServiceCard } from '@/lib/types';

const serviceCards: ServiceCard[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7a8c3c93c528668ac5e0c55359000ddf2a52ba885932f6c7aea4ded82194609?placeholderIfAbsent=true",
    title: "法人向け生成AI研修",
    description: `ChatGPTをはじめとしたAI研修を提供しています。これまでに、東証
プライム上場企業含む数十社の実績がございます。動画講座を渡して終
わりの研修ではなく、ヒアリングに基づき企業ごとに最適な研修をお
作りします。まずはお気軽にお問い合わせください。`
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3d71070a5b50f612bc088225b7ba75ad340c5e476fc7ea7db9fc04f8df67996?placeholderIfAbsent=true",
    title: "生成AI導入支援",
    description: `「社内に生成AIを導入したいけれど、どうす
ればいいかわからない」そんな方向けに最
適なAIを提案いたします。業務内容をヒアリ
ングした上で、他社での導入事例や最新の性
能などを参考にサポートします。`
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/359a9fe5e0911d4f91aef2df66ad87b095a6acca13b9a314848a86761168248d?placeholderIfAbsent=true",
    title: "生成AI受託開発",
    description: `生成AI、LLMを用いた製品の開発を担当して
います。最新の開発環境を整えた生産性の高
いエンジニアチームが、要件定義から伴走
いたします。`
  }
];

const Services: FC = () => {
  return (
    <section className="bg-white flex flex-col items-center">
      <h2 className="text-[rgba(18,24,43,1)] text-[64px] font-extrabold leading-[1.2] tracking-[-1.28px] text-center mt-[247px] max-md:text-[40px] max-md:mt-10">
        Services
      </h2>
      <div className="w-[1141px] max-w-full mt-[182px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {serviceCards.map((card, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:w-full">
              <div className="bg-white border flex grow flex-col text-[rgba(18,24,43,1)] whitespace-nowrap w-full pt-9 pb-[68px] px-[31px] rounded-[10px] border-[rgba(18,24,43,0.1)] border-solid max-md:mt-5 max-md:px-5">
                <img
                  src={card.icon}
                  alt={`${card.title} icon`}
                  className="aspect-[1] object-contain w-[190px] self-center max-w-full"
                />
                <h3 className="text-[22px] font-extrabold leading-[1.4] tracking-[-0.44px] mt-[9px]">
                  {card.title}
                </h3>
                <p className="text-base font-semibold leading-[27px] tracking-[-0.32px] mt-[31px] whitespace-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;