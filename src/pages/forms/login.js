import Form from "@/components/auth/form";
import { signIn } from "next-auth/react";

import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SignIn() {
  const router = useRouter();
  const onSubmit = async (email, password) => {
    const data = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    console.log(data);
    if (data.error) {
      toast.error("Please check the Email or Password", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success("Sign In Succesful", {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      setTimeout(() => {
        router.replace("/");
      }, 2000);
    }
  };

  return (
    <>
      <Form signin={true} onFormSubmit={onSubmit} />
      <ToastContainer
        position="top-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
      />
    </>
  );
}
