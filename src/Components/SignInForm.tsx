import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase/firebaseConfig";
import { useState } from "react";

const SignInForm = () => {
  // UseState Hooks for form Data assigning variables
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // handleSignUp function for handling the form(storing credientials in firebase)
  const handleSigns = async (e: React.FormEvent) => {
    e.preventDefault();

    // getAuth from Firebase to signup
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <>
      {/*Form Starts */}
      <div className="min-h-screen flex justify-center items-center">
        {/*Form Starts */}
        <form
          onSubmit={handleSigns}
          className="flex flex-col gap-5 w-96 min-h-96 p-4 border-2 border-black rounded-md shadow-2xl"
        >
          <h1 className="text-center font-bold text-3xl py-3">Sign Up</h1>
          {/*Name Input field */}
          <input
            type="text"
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
            placeholder="Full Name"
            className="py-4 px-2 rounded-md border-2 border-gray-400 focus:outline-none"
          />
          {/*email Input field */}
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Gmail"
            className="py-4 px-2 rounded-md border-2 border-gray-400 focus:outline-none"
          />
          {/* password Input Field */}
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className="py-4 px-2 rounded-md border-2 border-gray-400 focus:outline-none"
          />
          {/* Confirm Password Input Field*/}
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            placeholder="Confirm Password"
            className="py-4 px-2 rounded-md border-2 border-gray-400 focus:outline-none"
          />

          {/*Submit Button */}
          <button
            type="submit"
            className="bg-red-400 w-full py-4 font-semibold cursor-pointer"
          >
            Sign Up
          </button>

          <p>
            Already Have Account?{" "}
            <a href="#" className="text-blue-800 font-semibold">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
