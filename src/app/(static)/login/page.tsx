import { Mutate } from "@/actions";
import Container from "@/components/atoms/contents/container";
import FormRegisterLogin from "@/components/forms/FormRegisterLogin";
import type { RegisterLoginFormFields } from "@/interfaces/loginregister";
import { loginMutaion } from "@/mutations/registerLogin";

export default function LoginPage() {
  const actionLogin = async ({ email, password }: RegisterLoginFormFields) => {
    "use server";
    const { data, errors } = await Mutate({
      mutation: loginMutaion,
      variables: {
        payload: { email, password, as: "Professional" },
      },
    });
    if (data) {
      console.log(data);
    }

    if (errors && errors.length) {
      let errorMessage = errors[0].message.split("\n")[0];
      console.log(errors);
      return { message: errorMessage };
    }
    return { message: "success" };
  };
  return (
    <Container className="min-h-[90%]" as="section">
      <div className="flex flex-col w-full lg:h-[58vh]  items-center justify-center">
        <h1>Login to your account</h1>
        <FormRegisterLogin formType="login" formAction={actionLogin} />
      </div>
    </Container>
  );
}

export const dynamic = "force-static";
