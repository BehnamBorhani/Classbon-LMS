"use server";

import { signInSchema } from "@/app/(auth)/signin/types/signin.schema";
import { redirect } from "next/navigation";

export async function signInAction(mobile: string) {
  const validatedData = signInSchema.safeParse({ mobile });

  if (validatedData.success) {
    console.log(mobile);
    redirect("/");
  } else {
    console.log("Validation Error");
  }
}
