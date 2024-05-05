"use client";

import Container from "@/components/atoms/contents/container";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  accountType: z.string(),
  username: z.string(),
  fullName: z.string(),
});
const accountType = ["Admin", "Coach", "Proffesional"];
type FormFields = z.infer<typeof schema>;

type FormRegisterLoginProps = {
  formType: "register" | "login";
};
export default function FormRegisterLogin({
  formType,
}: FormRegisterLoginProps) {
  const form = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      accountType: "",
      username: "",
      fullName: "",
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);
  };
  return (
    <Container as="section">
      <div className="flex w-full h-full items-center justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex bg-lg-blue dark:bg-xl-blue  border-2 rounded-md flex-col p-4 max-w-md min-w-[300px] gap-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-slate-100"
                      placeholder="john@doe.com"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-slate-100"
                      placeholder="********"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {formType === "register" && (
              <>
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input className="bg-slate-100" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input className="bg-slate-100" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="accountType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue="">
                          <SelectTrigger className="bg-slate-100">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent className="bg-blue-300">
                            <SelectGroup className="bg-blue-100">
                              {accountType.map((type) => (
                                <SelectItem
                                  className="bg-slate-100 opacity-100"
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

            <Button variant="outline" className="bg-blue-100" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </Container>
  );
}
