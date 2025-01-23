import { FC } from 'react';
import { NewsItem } from '@/lib/types';

const newsItems: NewsItem[] = [
  {
    date: "2024年02月05日",
    category: "Press",
    title: "ミガロホールディングスとの業務提携契約に関するお知らせ"
  },
  {
    date: "2023年11月16日",
    category: "Info",
    title: "Microsoft Copilot Studioセミナー登壇のお知らせ"
  },
  {
    date: "2023年11月16日",
    category: "Info",
    title: "Schoo登壇のお知らせ"
  },
  {
    date: "2023年10月28日",
    category: "Info",
    title: "Michikusa株式会社の登記が完了"
  },
  {
    date: "2023年10月10日",
    category: "Info",
    title: "一般社団法人デジタル・ジャーナリスト育成機構主催セミナー登壇"
  }
];

const News: FC = () => {
  return (
    <section className="bg-white self-stretch flex flex-col items-center text-black justify-center px-20 py-[78px] max-md:max-w-full max-md:px-5">
      <div className="flex w-[960px] max-w-full flex-col">
        <h2 className="text-[rgba(17,17,17,1)] text-[64px] font-extrabold leading-[1.2] text-center self-center max-md:text-[40px]">
          News
        </h2>
        {newsItems.map((item, index) => (
          <article
            key={index}
            className="bg-white flex w-full flex-col whitespace-nowrap mt-3.5 pr-20 pt-[35px] pb-[13px] max-md:max-w-full max-md:pr-5"
          >
            <div className="flex gap-[40px_41px] font-bold">
              <time className="text-base leading-[1.4] basis-auto my-auto">
                {item.date}
              </time>
              <span className="bg-white border text-[15px] text-center leading-none px-[23px] py-2 rounded-xl border-black border-solid max-md:px-5">
                {item.category}
              </span>
            </div>
            <h3 className="text-[22px] font-medium leading-[1.2] mt-2 max-md:max-w-full">
              {item.title}
            </h3>
          </article>
        ))}
        <button className="bg-black self-center w-[282px] max-w-full text-base text-white font-bold whitespace-nowrap text-center leading-none mt-5 px-[70px] py-[13px] rounded-[20px] max-md:px-5">
          更に表示
        </button>
      </div>
    </section>
  );
};

export default News;