import { UserAuth } from "@repo/auth-domain/types";
import { UserProfileContainer } from "./(components)/user-profile-container";
import { UserEntity } from "@repo/events-domain/user-types";
import { cookies } from "next/headers";
import { events } from "@repo/events-domain/events-cli";

const UserProfile = async () => {

  const user: UserAuth | null = JSON.parse(cookies().get('user')?.value ?? 'null');
  const userEntity: UserEntity | null = user ? await events.forServerComponent().users().auth_id(user.id).get() : null;

  return (
    <>
      <UserProfileContainer user={userEntity} />
    </>
  ) 
}

export default UserProfile;