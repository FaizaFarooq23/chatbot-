import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const router = useRouter();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const adminCredentials = {
      email: "admin@gmail.com",
      password: "admin",
    };
  
    if (
      formData.email === adminCredentials.email &&
      formData.password === adminCredentials.password
    ) {
      router.push({
        pathname: "/dashboard",
        query: { isAdmin: true },
      });
    } else {
      router.push({
        pathname: "/dashboard",
        query: { isAdmin: false },
      });
    }
  };
  

  return (
    <div className="flex justify-center items-center h-full min-h-screen bg-gray-100 gap-x-10 p-4">
      <div className="max-w-sm w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-8 bg-opacity-85 bg-white px-6 pt-6 pb-10 shadow-[0_2px_16px_-3px_rgba(173, 216, 230, 0.3))]"
        >
          <div className="text-center">
            <h3 className="text-gray-800 text-3xl font-extrabold">تسجيل الدخول</h3>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="relative flex flex-row-reverse items-center">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none text-right placeholder:text-gray-800"
                placeholder="أدخل البريد الإلكتروني"
              />
              <HiOutlineMail className="w-5 h-5 absolute left-2 text-gray-600" />
            </div>
            <div className="relative flex flex-row-reverse items-center">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                required
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none text-right placeholder:text-gray-800"
                placeholder="أدخل كلمة المرور"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute left-2 text-gray-600 focus:outline-none transition-transform duration-300 scale-90 hover:scale-100"
              >
                {showPassword ? (
                  <IoEyeOffOutline className="w-5 h-5" />
                ) : (
                  <IoEyeSharp className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-4 text-right">
            <div className="flex flex-row-reverse items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="h-4 w-4 shrink-0 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="mr-3 block text-sm text-gray-800"
              >
                تذكرني
              </label>
            </div>
          </div>
          <div className="space-y-8">
            <button
              type="submit"
              className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 focus:outline-none transform transition duration-300 scale-90 hover:scale-100"
            >
              تسجيل الدخول
            </button>
            <p className="text-gray-800 text-sm text-right">
              ليس لديك حساب؟
              <Link
                href="/signup"
                className="text-pepsi-blue font-semibold hover:underline mr-1"
              >
                قم بالتسجيل هنا
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className='bg-pepsi-blue bg-[url("/looper.svg")] bg-no-repeat bg-contain bg-left rotate-180 max-w-md w-full h-[440px]'></div>
    </div>
  );
}
