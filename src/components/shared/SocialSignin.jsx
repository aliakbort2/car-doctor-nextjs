import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SocialSignin = () => {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = async (provider) => {
    const resp = await signIn(provider, { redirect: false });
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, [router, session.status]);

  return (
    <div>
      <p className="text-center mt-3 mb-5">Or Sign In with</p>
      <div className="flex items-center justify-center gap-5">
        <button
          onClick={() => handleSocialLogin("google")}
          className="bg-slate-100 p-2 rounded-full"
        >
          <FcGoogle className="text-xl" />
        </button>
        <button
          onClick={() => handleSocialLogin("github")}
          className="bg-slate-100 p-2 rounded-full"
        >
          <FaGithub className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SocialSignin;
