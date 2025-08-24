"use client";

import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../../public/assets/images/logo-black.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { zSchema } from "@/lib/zodSchema";
import { useForm } from "react-hook-form";

import { FaEyeSlash, FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

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
import { Button } from "@/components/ui/button";
import { isAbsoluteUrl } from "next/dist/shared/lib/utils";
import Link from "next/link";
import { WEBSITE_LOGIN } from "../../../../../routes/WebsiteRoute";

const Registerpage = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setsShowPassword] = useState(false);
  const formSchema = zSchema
    .pick({
      name: true,
      email: true,
      password: true,
    })
    .extend({
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password and confirm password mus be same",
      path: ["confirmPassword"],
    });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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
          <h1 className="text-3xl font-bold mt-2.5">Create Account</h1>
          <p className="text-xs mt-4">
            Create new account by filling out the form below
          </p>
        </div>
        <div className="mt-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLoginSubmit)}>
              {/* fullname */}
              <div className="mb-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Mr. Das" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
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
              {/* password */}
              <div className="mb-5">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="*****" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* confirm password */}
              <div className="mb-5">
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="*****"
                          {...field}
                        />
                      </FormControl>
                      <button
                        type="button"
                        className="absolute top-1/2 right-2 cursor-pointer"
                        onClick={() => setsShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                      </button>
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
                  text={"Cretae account"}
                  className="w-full cursor-pointer"
                />
              </div>

              <div className="mb-3 text-center">
                <div className="flex justify-center gap-2 text-neutral-600 text-sm">
                  <p>Already have an account?</p>
                  <Link href={WEBSITE_LOGIN} className="text-blue-700">
                    Login here
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

export default Registerpage;
