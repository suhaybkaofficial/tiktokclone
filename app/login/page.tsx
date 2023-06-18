"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";
function Login() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <h1>Loading.....</h1>;
  }

  if (status === "authenticated") {
    redirect("/");
  }

  return (
      <div className=" w-full h-[80vh] flex items-center justify-center">
       <div className="flex flex-col items-center space-y-4 border border-primary/40 py-4 px-6">
       <FcGoogle size={100} />
        <h1 className="text-2xl font-bold mb-4">Sign in with Google</h1>
        <button
          className="bg-secondary hover:bg-secondary/60 text-white font-semibold py-2 px-4 rounded"
          onClick={() => signIn("google")}
        >
          Sign In
        </button>
        <p>Next Auth & Firebase Authentication</p>
       </div>
      </div>
  );
}

export default Login;
