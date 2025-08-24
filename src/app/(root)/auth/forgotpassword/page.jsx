"use client";

import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../../public/assets/images/logo-black.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { zSchema } from "@/lib/zodSchema";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ButtonLoading from "@/components/Application/ButtonLoading";
import z from "zod";
import Link from "next/link";
import {
  WEBSITE_FORGOT_PASSWORD,
  WEBSITE_LOGIN,
  WEBSITE_REGISTER,
} from "../../../../../routes/WebsiteRoute";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const formSchema = zSchema
    .pick({
      email: true,
    })
    .extend({
      password: z.string().min("3", "Password field is required"),
    });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginSubmit = async (e) => {
    console.log(e);
  };

  return (
    <Card className="w-[450px] shadow-xl">
      <CardContent>
        <div className="flex justify-center">
          <Image
            src={Logo.src}
            width={Logo.width}
            height={Logo.height}
            alt="logo"
            className="max-w-[150px]"
          />
        </div>
        <div className="text-center mb-3">
          <h1 className="text-3xl font-bold mt-2.5">Reset Your Password</h1>
          <p className="text-xs mt-4">
            An <strong>OTP</strong> will be sent to your registered email
          </p>
        </div>
        <div className="mt-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLoginSubmit)}>
              {/* email */}
              <div className="mb-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* button */}
              <div className="mb-5">
                <ButtonLoading
                  loading={loading}
                  type={"submit"}
                  text={"Send OTP"}
                  className="w-full cursor-pointer"
                />
              </div>

              <div className="mb-3 text-center">
                <div className="flex justify-center gap-2 text-neutral-600 text-sm">
                  <p>Already have an account?</p>
                  <Link href={WEBSITE_LOGIN} className="text-blue-700">
                    Login Here
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
