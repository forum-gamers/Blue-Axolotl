import { checkToken } from "@/actions/user";
import VerifyTokenMessage from "@/components/verify/VerifyMessage";

export default function VerifyPage() {
  return (
    <div>
      <h1>Verify Account</h1>
      <VerifyTokenMessage checkToken={checkToken} />
    </div>
  );
}
