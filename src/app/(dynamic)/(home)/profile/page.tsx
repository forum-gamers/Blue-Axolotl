import { getProfile } from "./action";

export default async function ProfileUserPage() {
  const userProfile = await getProfile();
  console.log(userProfile);
  return <div>ProfileUserPage</div>;
}
