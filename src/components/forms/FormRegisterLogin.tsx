"use client";

import Container from "@/components/atoms/contents/container";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  accountType,
  loginRegisterSchema,
  type RegisterLoginFormFields,
} from "@/interfaces/loginregister";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormRegisterLoginProps = {
  formType: "register" | "login";
  formAction: (data: FormData) => Promise<void>;
};

export default function FormRegisterLogin({
  formType,
  formAction,
}: FormRegisterLoginProps) {
  const form = useForm<RegisterLoginFormFields>({
    resolver: zodResolver(loginRegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "",
      username: "",
      fullname: "",
      confirmPassword: "",
    },
  });
  const router = useRouter();
  const searchParams = new URLSearchParams(useSearchParams()!);
  const token = searchParams.get("token");
  const error = searchParams.get("error");

  useEffect(() => {
    if (token) {
      (async () => {
        await signIn("Credentials", { access_token: token, redirect: false });
        window.history.replaceState({}, "", window.location.pathname);
        router.push("/");
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  const {
    formState: { errors },
  } = form;

  return (
    <Container as="section">
      <div className="flex w-full h-full items-center justify-center">
        <Form {...form}>
          <form
            className="flex bg-lg-blue dark:bg-xl-blue  border-2 rounded-md flex-col p-4 max-w-md min-w-[300px] gap-2"
            action={formAction}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-lg-blue dark:bg-xl-blue"
                      placeholder="john@doe.com"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-lg-blue dark:bg-xl-blue"
                      placeholder="********"
                      type="password"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {errors.password && <p>{errors.password.message}</p>}

            {formType === "register" && (
              <>
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-lg-blue dark:bg-xl-blue required"
                          placeholder="********"
                          type="password"
                          {...field}
                          required
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {errors.confirmPassword && (
                  <p>{errors.confirmPassword.message}</p>
                )}
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-lg-blue dark:bg-xl-blue"
                          {...field}
                          required
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {errors.fullname && <p>{errors.fullname.message}</p>}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-lg-blue dark:bg-xl-blue"
                          {...field}
                          required
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue=""
                          name="role"
                        >
                          <SelectTrigger className="bg-lg-blue dark:bg-xl-blue">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent className="bg-blue-300 dark:bg-d-lg-blue">
                            <SelectGroup className="bg-blue-100 dark:bg-d-lg-blue">
                              {accountType.map((type) => (
                                <SelectItem
                                  className="bg-blue-100 dark:bg-d-lg-blue"
                                  key={type}
                                  value={type}
                                >
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </>
            )}
            {errors && <p>{errors.root?.message}</p>}
            {error && <p className="text-red-400">{error}</p>}
            <Button
              variant="outline"
              className="bg-lg-blue dark:bg-xl-blue mt-5"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </Container>
  );
}
