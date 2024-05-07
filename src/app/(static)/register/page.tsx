import { Mutate } from "@/actions";
import Container from "@/components/atoms/contents/container";
import FormRegisterLogin from "@/components/forms/FormRegisterLogin";
import type { RegisterLoginFormFields } from "@/interfaces/loginregister";
import { registerMutation } from "@/mutations/registerLogin";
import { redirect } from "next/navigation";

export default function RegisterPage() {
  const registerAction = async (registerData: RegisterLoginFormFields) => {
    "use server";
    const { data, errors } = await Mutate({
      mutation: registerMutation,
      variables: { payload: registerData },
    });
    if (data) {
      redirect("/login");
    }
    if (errors && errors.length) {
      let errorMessage = errors[0].message.split("\n")[0];
      return { message: errorMessage };
    }
    return { message: "success" };
  };
  return (
    <Container as="section">
      <div className="flex flex-col w-full h-full items-center justify-center">
        <h1>Register your account</h1>
        <FormRegisterLogin formType="register" formAction={registerAction} />
      </div>
    </Container>
  );
}

export const dynamic = "force-static";
