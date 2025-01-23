export interface NewsItem {
  date: string;
  category: 'Press' | 'Info';
  title: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}