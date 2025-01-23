import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  privacyPolicy: boolean;
}

const ContactForm: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section className="bg-white flex flex-col items-center">
      <h2 className="text-[rgba(17,17,17,1)] text-[64px] font-extrabold leading-[1.2] text-center mt-[191px] max-md:text-[40px] max-md:mt-10">
        Contact
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[600px] max-w-full mt-[79px] max-md:mt-10">
        <div className="mb-6">
          <label className="text-[rgba(51,51,51,1)] text-base font-semibold leading-[1.6]">
            お名前<span className="text-[rgba(18,24,43,1)]">*</span>
          </label>
          <Input
            {...register('name', { required: true })}
            placeholder="名字 名前"
            className="mt-4 border-black border-2"
          />
        </div>

        <div className="mb-6">
          <label className="text-[rgba(51,51,51,1)] text-base font-semibold leading-[1.6]">
            メール<span className="text-[rgba(18,24,43,1)]">*</span>
          </label>
          <Input
            {...register('email', { required: true })}
            type="email"
            placeholder="Email@address"
            className="mt-4 border-black border-2"
          />
        </div>

        <div className="mb-6">
          <label className="text-[rgba(51,51,51,1)] text-base font-semibold leading-[1.6]">
            電話番号<span className="text-[rgba(18,24,43,1)]">*</span>
          </label>
          <Input
            {...register('phone', { required: true })}
            placeholder="000 0000 000"
            className="mt-4 border-black border-2"
          />
        </div>

        <div className="mb-6">
          <label className="text-[rgba(51,51,51,1)] text-base font-semibold leading-[1.6]">
            詳細<span className="text-[rgba(18,24,43,1)]">*</span>
          </label>
          <Textarea
            {...register('message', { required: true })}
            placeholder="お問い合わせ内容を記入してください"
            className="mt-4 border-black border-2 min-h-[150px]"
          />
        </div>

        <div className="flex items-center gap-2.5 mb-6">
          <Checkbox
            {...register('privacyPolicy', { required: true })}
            id="privacy"
            className="border-[rgba(118,118,118,1)]"
          />
          <label
            htmlFor="privacy"
            className="text-[15px] text-[rgba(51,51,51,1)] font-medium"
          >
            プライバシーポリシーに同意する
          </label>
        </div>

        <Button
          type="submit"
          className="bg-black text-[15px] text-white font-bold px-[31px] py-3.5 rounded-lg"
        >
          送信
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;