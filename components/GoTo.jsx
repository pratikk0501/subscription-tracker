"use client";
import useAuth from "@/context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function GoTo() {
  const { currentUser, signout } = useAuth();

  const isAuthenticated = !!currentUser;
  const path = usePathname();

  return (
    <div className="goto">
      {path == "/" && (
        <>
          <Link href={"/dashboard?register=true"}>
            <p>Sign up!</p>
          </Link>
          <Link href={"/dashboard"}>
            <button>Login &rarr;</button>
          </Link>
        </>
      )}
      {isAuthenticated && path == "/dashboard" && (
        <Link href={"/"}>
          <button onClick={signout}>&larr; Logout</button>
        </Link>
      )}
    </div>
  );
}

export default GoTo;
