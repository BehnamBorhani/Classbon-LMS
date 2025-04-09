"use client";
import { Button } from "@/app/_components/button/button";
import { SignIn } from "../types/sigin.types";
import { useForm } from "react-hook-form";
import { TextInput } from "@/app/_components/formInput";
import { useRouter } from "next/navigation";
import { useNotificationStore } from "@/stores/notification.stores";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../types/signin.schema";
import { signInAction } from "@/actions/auth";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignIn>({
    defaultValues: { mobile: "" },
    resolver: zodResolver(signInSchema),
  });

  const router = useRouter();

  const showNotification = useNotificationStore(
    (state) => state.showNotification
  );

  /* router.push(`/verify?mobile=${getValues("mobile")}`);
  showNotification({
    message: "کد تایید به شماره شما ارسال شد",
    type: "info",
  }); */

  const onSubmit = (data: SignIn) => {
    signInAction(data.mobile);
  };

  return (
    <>
      <h5 className="text-2xl">ورود | ثبت نام</h5>
      <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
      <form
        className="flex flex-col gap-6 mt-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput<SignIn>
          register={register}
          name={"mobile"}
          errors={errors}
        />
        استفاده از کلاسبن به معنای پذیرش قوانین و مقررات این پلتفرم آموزشی است.
        <Button type="submit" variant="primary">
          تایید و دریافت کد
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
