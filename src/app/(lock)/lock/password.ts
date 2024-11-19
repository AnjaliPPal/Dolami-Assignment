"use server";

import { cookies } from "next/headers";

export async function unLock(password: string) {
    if (password === "fedev2024test") {
      //User need to enter fedev2024test to access my website
    (await cookies()).set("password", "fedev2024test");
    return true;
  }
  return false;
}


