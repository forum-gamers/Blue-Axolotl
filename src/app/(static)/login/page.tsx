import Container from "@/components/atoms/contents/container";
import FormRegisterLogin from "@/components/forms/FormRegisterLogin";
import { redirect } from "next/navigation";
import { getServerSideSession } from "@/helper/session";
import { actionLogin } from "@/actions/user";

export default async function LoginPage() {
  if (await getServerSideSession()) return redirect("/");

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
