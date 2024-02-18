"use client";
import { Button } from "@/app/_components/button/button";
import { SignIn } from "../types/sigin.types";
import { useForm } from "react-hook-form";
import { TextInput } from "@/app/_components/formInput";
import { useSignIn } from "../_api/signin";
import { useRouter } from "next/navigation";
import { useNotificationStore } from "@/stores/notification.stores";
import { useEffect } from "react";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignIn>();

  const router = useRouter();

  const signIn = useSignIn({
    onSuccess: () => {
      router.push(`/verify?mobile=${getValues("mobile")}`);
    },
  });

  const onSubmit = (data: any) => {
    signIn.submit(data);
  };

  const showNotifications = useNotificationStore(
    (state) => state.showNotification
  );

  useEffect(() => {
    showNotifications({ type: "error", message: "error", duration: 5000 });
  }, []);

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
          rules={{
            required: "شماره موبایل الزامی است",
            maxLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد",
            },
            minLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد",
            },
          }}
          errors={errors}
        />

        <Button type="submit" variant="primary" isLoading={signIn.isPending}>
          تایید و دریافت کد
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
