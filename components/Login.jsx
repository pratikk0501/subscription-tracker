"use client";
import useAuth from "@/context/AuthContext";
import { auth } from "@/firebase";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function Login() {
  const { signup, signin, resetPassword } = useAuth();

  const params = useSearchParams();
  const isReg = params.get("register");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistration, setIsRegistration] = useState(isReg);
  const [msg, setMsg] = useState(null);
  const [authenticating, setAuthenticating] = useState(false);
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState(null);

  async function handleAuthenticate() {
    if (
      !email ||
      !password ||
      !email.includes("@") ||
      password.length < 6 ||
      authenticating
    ) {
      return;
    }

    setMsg(null);
    setAuthenticating(true);
    try {
      if (isRegistration) {
        // register user
        await signup(email, password);
      } else {
        // login user
        await signin(email, password);
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
      setMsg("❌" + error.message);
    } finally {
      setAuthenticating(false);
    }
  }

  useEffect(() => {
    async function checkEmail() {
      setMsg("");
      setResult(null);
      if (!email || checking) return;

      try {
        setChecking(true);
        const methods = await fetchSignInMethodsForEmail(auth, email.trim());
        setResult({ exists: methods.length > 0, methods });
      } catch (e) {
        setMsg(e?.message ?? "Failed to check email.");
      } finally {
        setChecking(false);
      }
    }
    checkEmail();
  }, [checking]);

  return (
    <div className="login">
      <h2>{isRegistration ? "Create an account" : "Login"}</h2>
      {msg && <p className="card">{msg}</p>}
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleAuthenticate} disabled={authenticating}>
        {authenticating ? "Loading data..." : "Submit"}
      </button>
      <div className="full-line" />
      <div>
        <p>
          {isRegistration
            ? "Already have an account?"
            : "Don't have an account?"}
        </p>
        <button
          onClick={() => {
            setIsRegistration(!isRegistration);
          }}
        >
          {isRegistration ? "Sign in" : "Sign up!"}
        </button>
        {!isRegistration && (
          <button
            disabled={checking}
            onClick={() => {
              if (!email) {
                setMsg("Please enter the email you signed up with.");
                return;
              }
              setMsg("✅ Reset password email sent! Check spam folder too.");
              resetPassword(email);
            }}
          >
            {checking ? "Checking..." : "Forgot Password?"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
