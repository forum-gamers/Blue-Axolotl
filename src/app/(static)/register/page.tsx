import { Mutate } from "@/actions";
import Container from "@/components/atoms/contents/container";
import FormRegisterLogin from "@/components/forms/FormRegisterLogin";
import { registerMutation } from "@/mutations/registerLogin";
import { redirect } from "next/navigation";

export default function RegisterPage() {
  const registerAction = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const fullname = formData.get("fullname") as string;
    const username = formData.get("username") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const role = formData.get("role") as string;

    const { data, errors } = await Mutate({
      mutation: registerMutation,
      variables: {
        payload: {
          email,
          password,
          confirmPassword,
          fullname,
          username,
          role,
        },
      },
    });
    if (!data && errors?.length) {
      let errorMessage = errors[0].message.split("\n")[0];
      return redirect(`/register?error=${errorMessage}`);
    }

    return redirect(`/login`);
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
