"use client";
import EditProfile from "@/components/dashboard/EditProfile";
import UserProfile from "@/components/dashboard/UserProfile";
import { useSession } from "next-auth/react";

const Profile = () => {
  const user = useSession();

  return (
    <div>
      <h2>profie</h2>
      <div className="flex py-12 px-12 gap-8 h-full ">
        <div className="w-1/3">
          <UserProfile user={user} />
        </div>
        <div className="w-2/3">
          <EditProfile user={user} />
        </div>
      </div>
    </div>
  );
};

export default Profile;