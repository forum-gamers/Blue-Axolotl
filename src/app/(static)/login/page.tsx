import { Mutate } from "@/actions";
import Container from "@/components/atoms/contents/container";
import FormRegisterLogin from "@/components/forms/FormRegisterLogin";
import { loginMutaion } from "@/mutations/registerLogin";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";
export default function LoginPage() {
  const actionLogin = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, errors } = await Mutate({
      mutation: loginMutaion,
      variables: {
        payload: {
          email,
          password,
          as: "Professional",
        },
      },
    });

    if (!data && errors?.length) {
      let errorMessage = errors[0].message.split("\n")[0];
      return redirect(`/login?error=${errorMessage}`, RedirectType.push);
    }
    const { login: token } = data as { login: string };
    console.log(token);
    return redirect(`/login?token=${token}`, RedirectType.replace);
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
