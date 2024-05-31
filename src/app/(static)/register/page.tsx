import { registerAction } from "@/actions/user";
import Container from "@/components/commons/Container";
import FormRegisterLogin from "@/components/commons/Forms/FormRegisterLogin";

export default function RegisterPage() {
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
