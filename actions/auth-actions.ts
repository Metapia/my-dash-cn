"use server"

import { signIn } from "@/auth";
import { z } from "zod";
import { loginSchema } from "@/lib/zod";


export const loginAction = async (values: z.infer<typeof loginSchema>) => {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  // console.log(values);

  try {
    await signIn("credentials", {
    email: values.email,
    password: values.password,
    redirect: true,
  });
    
  } catch (error) {

    console.error("Login error:", error);
    
  }
  
}