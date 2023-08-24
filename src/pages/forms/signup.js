/* eslint-disable react-hooks/rules-of-hooks */
import Form from "@/components/auth/form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
const signup = () => {
  const router = useRouter();
  const onSubmit = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/user", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        toast.success("Sign up Succesful", {
          position: "top-left",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        setTimeout(() => {
          router.push("/forms/login");
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Form signin={false} onFormSubmit={onSubmit} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default signup;
