"use server";

import { redirect } from "next/navigation";

export async function signInAction(mobile: string) {
  redirect("/");
}
