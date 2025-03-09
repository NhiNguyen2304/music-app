import { useFetchUser } from "../api/userAPI";

const Profile = (userId) => {
  const { profile } = useFetchUser(userId);

  return (
    <div className="flex flex-col w-[500px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        User Profile
      </h2>
      <p className="mt-4 font-semibold text-lg text-white truncate">
        First name: {profile.first_name}
      </p>
      <p className="mt-4 font-semibold text-lg text-white truncate">
        Last name: {profile.last_name}
      </p>
      <p className="mt-4 font-semibold text-lg text-white truncate">
        Email: {profile.email}
      </p>
    </div>
  );
};

export default Profile;
