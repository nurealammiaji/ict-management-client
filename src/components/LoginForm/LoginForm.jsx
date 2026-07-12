import { useContext, useState } from 'react';
import { AuthContext } from './../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '/dscsc.png';
import bg from '/bg.png';
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setAuthenticated, setLoading, loading, userLogin } = useContext(AuthContext);
    const [eyeClose, setEyeClose] = useState(true);

    const location = useLocation();
    const navigate = useNavigate();
    const destination = location?.state?.from?.pathname || "/";

    const handleLogin = async (data) => {
        const { username, password } = data;
        try {
            setLoading(true);
            await userLogin(username, password)
                .then(({ data }) => {
                    localStorage.setItem('accessToken', data.accessToken);
                    localStorage.setItem('userId', data.id);
                    setAuthenticated(true);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Logged In !!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(destination, { replace: true });
                })
                .catch((error) => {
                    if (error.response) {
                        // Server responded with a status other than 200 range
                        console.error('Server responded with:', error.response.status);
                    } else if (error.request) {
                        // Request was made but no response received
                        console.error('No response received:', error.request);
                    } else {
                        // Something happened in setting up the request
                        console.error('Error setting up request:', error.message);
                    }
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: `${error.message}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setLoading(false);
                });
        } catch (error) {
            console.log(error);
            Swal.fire({
                position: "center",
                icon: "error",
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500
            });
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    //     return (
    //         <div
    //             className=" bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-10"
    //             style={{
    //                 backgroundImage: `linear-gradient(rgba(9,25,18,.65), rgba(9,25,18,.65)), url(${bg})`
    //             }}
    //         >
    //             <div className="w-full max-w-6xl rounded-4xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,.45)] bg-white/90 backdrop-blur-xl">

    //                 <div className="grid lg:grid-cols-2">

    //                     {/* ================= LEFT PANEL ================= */}

    //                     <div className="hidden lg:flex flex-col justify-center items-center relative bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-16">

    //                         <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_#16a34a_1px,_transparent_1px)] bg-[length:24px_24px]"></div>

    //                         <div className="relative z-10 text-center">

    //                             <img
    //                                 src={logo}
    //                                 alt="DSCSC"
    //                                 className="w-36 mx-auto drop-shadow-xl"
    //                             />

    //                             <h1 className="mt-8 text-5xl font-extrabold tracking-wide text-emerald-700">
    //                                 DSCSC ICT
    //                             </h1>

    //                             <div className="w-24 h-1 rounded-full bg-emerald-600 mx-auto mt-5 mb-6"></div>

    //                             <p className="text-gray-600 text-lg leading-8">
    //                                 Digital Campus
    //                                 <br />
    //                                 Management System
    //                             </p>

    //                             <div className="space-y-4 mt-14">

    //                                 <div className="bg-white rounded-2xl shadow-md px-6 py-4 flex items-center gap-4">

    //                                     <div className="w-12 h-12 rounded-full bg-green-100 flex justify-center items-center text-2xl">
    //                                         🛡️
    //                                     </div>

    //                                     <div className="text-left">
    //                                         <h3 className="font-semibold">
    //                                             Secure Authentication
    //                                         </h3>

    //                                         <p className="text-sm text-gray-500">
    //                                             Enterprise Grade Security
    //                                         </p>
    //                                     </div>

    //                                 </div>

    //                                 <div className="bg-white rounded-2xl shadow-md px-6 py-4 flex items-center gap-4">

    //                                     <div className="w-12 h-12 rounded-full bg-green-100 flex justify-center items-center text-2xl">
    //                                         🌐
    //                                     </div>

    //                                     <div className="text-left">
    //                                         <h3 className="font-semibold">
    //                                             Centralized ICT
    //                                         </h3>

    //                                         <p className="text-sm text-gray-500">
    //                                             All Services in One Place
    //                                         </p>
    //                                     </div>

    //                                 </div>

    //                                 <div className="bg-white rounded-2xl shadow-md px-6 py-4 flex items-center gap-4">

    //                                     <div className="w-12 h-12 rounded-full bg-green-100 flex justify-center items-center text-2xl">
    //                                         ⚡
    //                                     </div>

    //                                     <div className="text-left">
    //                                         <h3 className="font-semibold">
    //                                             Fast & Reliable
    //                                         </h3>

    //                                         <p className="text-sm text-gray-500">
    //                                             Optimized Performance
    //                                         </p>
    //                                     </div>

    //                                 </div>

    //                             </div>

    //                         </div>

    //                     </div>

    //                     {/* ================= RIGHT PANEL ================= */}

    //                     <div className="bg-white p-8 md:p-16 flex items-center">

    //                         <form
    //                             onSubmit={handleSubmit(handleLogin)}
    //                             className="w-full"
    //                         >

    //                             <div className="text-center mb-10">

    //                                 <div className="lg:hidden mb-6">
    //                                     <img
    //                                         src={logo}
    //                                         className="w-24 mx-auto"
    //                                         alt="logo"
    //                                     />
    //                                 </div>

    //                                 <div className="w-16 h-16 rounded-full bg-emerald-100 flex justify-center items-center mx-auto mb-5">

    //                                     <FaLock className="text-3xl text-emerald-700" />

    //                                 </div>

    //                                 <h2 className="text-4xl font-bold text-gray-800">
    //                                     Welcome Back
    //                                 </h2>

    //                                 <p className="mt-2 text-gray-500">
    //                                     Sign in to continue to your account
    //                                 </p>

    //                             </div>

    //                             {/* ====================
    //                            Username Field
    //                            Part-2 এ থাকবে
    //                         ===================== */}
    //                             {/* =======================
    //         Username
    // ======================== */}

    //                             <div className="form-control">

    //                                 <label className="label">
    //                                     <span className="label-text font-semibold text-gray-700">
    //                                         Username
    //                                     </span>
    //                                 </label>

    //                                 <div className="flex items-center rounded-xl border-2 border-gray-200 bg-white overflow-hidden transition-all duration-300 focus-within:border-emerald-500 focus-within:shadow-lg focus-within:shadow-emerald-100">

    //                                     <div className="px-5 text-emerald-600">
    //                                         <FaUser className="text-xl" />
    //                                     </div>

    //                                     <input
    //                                         {...register("username", {
    //                                             required: true
    //                                         })}
    //                                         type="text"
    //                                         placeholder="Enter your username"
    //                                         className="w-full h-14 outline-none bg-transparent"
    //                                     />

    //                                 </div>

    //                                 {
    //                                     errors.username?.type === "required" &&
    //                                     <span className="text-red-500 text-sm mt-2">
    //                                         Username is required.
    //                                     </span>
    //                                 }

    //                             </div>

    //                             {/* =======================
    //         Password
    // ======================== */}

    //                             <div className="form-control mt-6">

    //                                 <label className="label">
    //                                     <span className="label-text font-semibold text-gray-700">
    //                                         Password
    //                                     </span>
    //                                 </label>

    //                                 <div className="flex items-center rounded-xl border-2 border-gray-200 bg-white overflow-hidden transition-all duration-300 focus-within:border-emerald-500 focus-within:shadow-lg focus-within:shadow-emerald-100">

    //                                     <div className="px-5 text-emerald-600">
    //                                         <FaLock className="text-xl" />
    //                                     </div>

    //                                     <input
    //                                         {...register("password", {
    //                                             required: true,
    //                                             minLength: 6,
    //                                             pattern: /.{6}$/
    //                                         })}
    //                                         type={eyeClose ? "password" : "text"}
    //                                         placeholder="Enter your password"
    //                                         className="w-full h-14 outline-none bg-transparent"
    //                                     />

    //                                     <button
    //                                         type="button"
    //                                         onClick={() => setEyeClose(!eyeClose)}
    //                                         className="px-5 text-gray-500 hover:text-emerald-600 duration-300"
    //                                     >
    //                                         {
    //                                             eyeClose
    //                                                 ?
    //                                                 <RiEyeCloseLine className="text-2xl" />
    //                                                 :
    //                                                 <RiEyeLine className="text-2xl" />
    //                                         }
    //                                     </button>

    //                                 </div>

    //                                 {
    //                                     errors.password?.type === "required" &&
    //                                     <span className="text-red-500 text-sm mt-2">
    //                                         Password is required.
    //                                     </span>
    //                                 }

    //                                 {
    //                                     errors.password?.type === "minLength" &&
    //                                     <span className="text-red-500 text-sm mt-2">
    //                                         Password must be at least 6 characters.
    //                                     </span>
    //                                 }

    //                                 {
    //                                     errors.password?.type === "pattern" &&
    //                                     <span className="text-red-500 text-sm mt-2">
    //                                         Invalid password format.
    //                                     </span>
    //                                 }

    //                             </div>

    //                             {/* =======================
    // Remember & Forgot
    // ======================== */}

    //                             <div className="flex justify-between items-center mt-6">

    //                                 <label className="flex items-center gap-2 cursor-pointer">

    //                                     <input
    //                                         type="checkbox"
    //                                         className="checkbox checkbox-success checkbox-sm"
    //                                     />

    //                                     <span className="text-sm">
    //                                         Remember me
    //                                     </span>

    //                                 </label>

    //                                 <Link
    //                                     to="/forgot-password"
    //                                     className="text-sm text-emerald-600 hover:underline"
    //                                 >
    //                                     Forgot Password?
    //                                 </Link>

    //                             </div>

    //                             {/* =======================
    // Login Button
    // ======================== */}

    //                             <div className="mt-8">

    //                                 <button
    //                                     type="submit"
    //                                     className="btn w-full h-14 rounded-xl border-0 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-green-700 hover:scale-[1.02] hover:from-green-700 hover:to-emerald-800 transition-all duration-300 shadow-xl"
    //                                 >

    //                                     {
    //                                         loading
    //                                             ?
    //                                             <>
    //                                                 <span className="loading loading-spinner loading-sm"></span>
    //                                                 <span className="ml-2">
    //                                                     Signing In...
    //                                                 </span>
    //                                             </>
    //                                             :
    //                                             <>
    //                                                 <FaSignInAlt />
    //                                                 <span className="ml-2">
    //                                                     Login
    //                                                 </span>
    //                                             </>
    //                                     }

    //                                 </button>

    //                             </div>

    //                             {/* =======================
    // Register
    // ======================== */}

    //                             <div className="text-center mt-8">

    //                                 <span className="text-gray-500">
    //                                     New here?
    //                                 </span>

    //                                 <Link
    //                                     to="/register"
    //                                     className="ml-2 font-semibold text-emerald-700 hover:underline"
    //                                 >
    //                                     Create Account
    //                                 </Link>

    //                             </div>

    //                             {/* =======================
    // Footer
    // ======================== */}

    //                             <div className="text-center mt-10 border-t pt-6">

    //                                 <p className="text-xs text-gray-400">
    //                                     Powered by
    //                                 </p>

    //                                 <h4 className="font-bold text-emerald-700 tracking-wide">
    //                                     DSCSC ICT Cell
    //                                 </h4>

    //                             </div>

    //                         </form>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );

    // return (
    //     <div className="grid md:grid-cols-2">

    //         {/* =====LEFT PANEL =====*/}

    //         <div className="hidden lg:flex flex-col justify-center items-center relative bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-16">

    //             <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_#16a34a_1px,_transparent_1px)] bg-[length:24px_24px]"></div>

    //             <div className="relative z-10 text-center">

    //                 <img
    //                     src={logo}
    //                     alt="DSCSC"
    //                     className="w-36 mx-auto drop-shadow-xl"
    //                 />

    //                 <h1 className="mt-8 text-5xl font-extrabold tracking-wide text-emerald-700">
    //                     DSCSC ICT
    //                 </h1>

    //                 <div className="w-24 h-1 rounded-full bg-emerald-600 mx-auto mt-5 mb-6"></div>

    //                 <p className="text-gray-600 text-lg leading-8">
    //                     ICT Section Automation
    //                 </p>

    //                 <div className="space-y-4 mt-14">

    //                     {/* <div className="bg-white rounded-2xl shadow-md px-6 py-4 flex items-center gap-4">

    //                         <div className="w-12 h-12 rounded-full bg-green-100 flex justify-center items-center text-2xl">
    //                             🛡️
    //                         </div>

    //                         <div className="text-left">
    //                             <h3 className="font-semibold">
    //                                 Secure Authentication
    //                             </h3>

    //                             <p className="text-sm text-gray-500">
    //                                 Enterprise Grade Security
    //                             </p>
    //                         </div>

    //                     </div> */}

    //                     <div className="bg-white rounded-2xl shadow-md px-6 py-4 flex items-center gap-4">

    //                         <div className="w-12 h-12 rounded-full bg-green-100 flex justify-center items-center text-2xl">
    //                             🌐
    //                         </div>

    //                         <div className="text-left">
    //                             <h3 className="font-semibold">
    //                                 Centralized ICT
    //                             </h3>

    //                             <p className="text-sm text-gray-500">
    //                                 All Services in One Place
    //                             </p>
    //                         </div>

    //                     </div>
    //                     {/* 
    //                     <div className="bg-white rounded-2xl shadow-md px-6 py-4 flex items-center gap-4">

    //                         <div className="w-12 h-12 rounded-full bg-green-100 flex justify-center items-center text-2xl">
    //                             ⚡
    //                         </div>

    //                         <div className="text-left">
    //                             <h3 className="font-semibold">
    //                                 Fast & Reliable
    //                             </h3>

    //                             <p className="text-sm text-gray-500">
    //                                 Optimized Performance
    //                             </p>
    //                         </div>

    //                     </div> */}

    //                 </div>

    //             </div>

    //         </div>

    //         {/* == RIGHT PANEL === */}

    //         <div className="bg-white p-8 md:p-16 flex items-center">

    //             <form
    //                 onSubmit={handleSubmit(handleLogin)}
    //                 className="w-full"
    //             >

    //                 <div className="text-center mb-10">

    //                     <div className="lg:hidden mb-6">
    //                         <img
    //                             src={logo}
    //                             className="w-24 mx-auto"
    //                             alt="logo"
    //                         />
    //                     </div>

    //                     <div className="w-16 h-16 rounded-full bg-emerald-100 flex justify-center items-center mx-auto mb-5">

    //                         <FaLock className="text-3xl text-emerald-700" />

    //                     </div>

    //                     <h2 className="text-4xl font-bold text-gray-800">
    //                         Welcome Back
    //                     </h2>

    //                     <p className="mt-2 text-gray-500">
    //                         Sign in to continue to your account
    //                     </p>

    //                 </div>

    //                 {/* =username */}

    //                 <div className="form-control">

    //                     <label className="label">
    //                         <span className="label-text font-semibold text-gray-700">
    //                             Username
    //                         </span>
    //                     </label>

    //                     <div className="flex items-center rounded-xl border-2 border-gray-200 bg-white overflow-hidden transition-all duration-300 focus-within:border-emerald-500 focus-within:shadow-lg focus-within:shadow-emerald-100">

    //                         <div className="px-5 text-emerald-600">
    //                             <FaUser className="text-xl" />
    //                         </div>

    //                         <input
    //                             {...register("username", {
    //                                 required: true
    //                             })}
    //                             type="text"
    //                             placeholder="Enter your username"
    //                             className="w-full h-14 outline-none bg-transparent"
    //                         />

    //                     </div>

    //                     {
    //                         errors.username?.type === "required" &&
    //                         <span className="text-red-500 text-sm mt-2">
    //                             Username is required.
    //                         </span>
    //                     }

    //                 </div>

    //                 {/* password= */}

    //                 <div className="form-control mt-6">

    //                     <label className="label">
    //                         <span className="label-text font-semibold text-gray-700">
    //                             Password
    //                         </span>
    //                     </label>

    //                     <div className="flex items-center rounded-xl border-2 border-gray-200 bg-white overflow-hidden transition-all duration-300 focus-within:border-emerald-500 focus-within:shadow-lg focus-within:shadow-emerald-100">

    //                         <div className="px-5 text-emerald-600">
    //                             <FaLock className="text-xl" />
    //                         </div>

    //                         <input
    //                             {...register("password", {
    //                                 required: true,
    //                                 minLength: 6,
    //                                 pattern: /.{6}$/
    //                             })}
    //                             type={eyeClose ? "password" : "text"}
    //                             placeholder="Enter your password"
    //                             className="w-full h-14 outline-none bg-transparent"
    //                         />

    //                         <button
    //                             type="button"
    //                             onClick={() => setEyeClose(!eyeClose)}
    //                             className="px-5 text-gray-500 hover:text-emerald-600 duration-300"
    //                         >
    //                             {
    //                                 eyeClose
    //                                     ?
    //                                     <RiEyeCloseLine className="text-2xl" />
    //                                     :
    //                                     <RiEyeLine className="text-2xl" />
    //                             }
    //                         </button>

    //                     </div>

    //                     {
    //                         errors.password?.type === "required" &&
    //                         <span className="text-red-500 text-sm mt-2">
    //                             Password is required.
    //                         </span>
    //                     }

    //                     {
    //                         errors.password?.type === "minLength" &&
    //                         <span className="text-red-500 text-sm mt-2">
    //                             Password must be at least 6 characters.
    //                         </span>
    //                     }

    //                     {
    //                         errors.password?.type === "pattern" &&
    //                         <span className="text-red-500 text-sm mt-2">
    //                             Invalid password format.
    //                         </span>
    //                     }

    //                 </div>

    //                 {/* remember and forgot */}

    //                 {/* <div className="flex justify-between items-center mt-6">

    //                     <label className="flex items-center gap-2 cursor-pointer">

    //                         <input
    //                             type="checkbox"
    //                             className="checkbox checkbox-success checkbox-sm"
    //                         />

    //                         <span className="text-sm">
    //                             Remember me
    //                         </span>

    //                     </label>

    //                     <Link
    //                         to="/forgot-password"
    //                         className="text-sm text-emerald-600 hover:underline"
    //                     >
    //                         Forgot Password?
    //                     </Link>

    //                 </div> */}

    //                 {/* ===Login Button === */}

    //                 <div className="mt-8">

    //                     <button
    //                         type="submit"
    //                         className="btn w-full h-14 rounded-xl border-0 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-green-700 hover:scale-[1.02] hover:from-green-700 hover:to-emerald-800 transition-all duration-300 shadow-xl"
    //                     >

    //                         {
    //                             loading
    //                                 ?
    //                                 <>
    //                                     <span className="loading loading-spinner loading-sm"></span>
    //                                     <span className="ml-2">
    //                                         Signing In...
    //                                     </span>
    //                                 </>
    //                                 :
    //                                 <>
    //                                     <FaSignInAlt />
    //                                     <span className="ml-2">
    //                                         Login
    //                                     </span>
    //                                 </>
    //                         }

    //                     </button>

    //                 </div>

    //                 {/* == Register === */}

    //                 <div className="text-center mt-8">

    //                     <span className="text-gray-500">
    //                         New here?
    //                     </span>

    //                     <Link
    //                         to="/register"
    //                         className="ml-2 font-semibold text-emerald-700 hover:underline"
    //                     >
    //                         Create Account
    //                     </Link>

    //                 </div>

    //                 {/* ==== Footer ===== */}

    //                 <div className="text-center mt-10 border-t pt-6">

    //                     <p className="text-xs text-gray-400">
    //                         Powered by
    //                     </p>

    //                     <h4 className="font-bold text-emerald-700 tracking-wide">
    //                         DSCSC ICT Cell
    //                     </h4>

    //                 </div>

    //             </form>
    //         </div>
    //     </div>
    // );

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-8"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)), url(${bg})`
            }}
        >
            <div className="w-full max-w-5xl overflow-hidden bg-white rounded-2xl shadow-2xl">

                <div className="grid md:grid-cols-2">

                    {/* Left Side */}

                    <div className="hidden md:flex flex-col justify-center items-center bg-[#454B2C] glass text-white p-10">

                        <img
                            src={logo}
                            alt="DSCSC"
                            className="w-28 mb-6"
                        />

                        <h2 className="text-3xl font-bold">
                            DSCSC ICT
                        </h2>

                        <p className="mt-2 text-green-100 text-center">
                            Section Management System
                        </p>

                        <div className="w-16 h-1 bg-white rounded-full my-8"></div>

                        <div className="space-y-5 w-full">

                            <div className="bg-white/10 rounded-xl p-4">
                                <h4 className="font-semibold">
                                    🎬 Tutorials
                                </h4>
                                <p className="text-sm text-green-100 mt-1">
                                    <ul className='list-disc ml-10 list'>
                                        <li><a href="http://" target='_blank'>Videos</a></li>
                                        <li><a href="http://" target='_blank'>Manuals</a></li>
                                        <li><a href="http://" target='_blank'>Users List</a></li>
                                    </ul>
                                </p>
                            </div>

                            <div className="bg-white/10 rounded-xl p-4">
                                <h4 className="font-semibold">
                                    📞 Helpline
                                </h4>
                                <p className="text-sm text-green-100 mt-1">
                                    <ul className='list-disc ml-10 list'>
                                        <li><p>+8801685044055 (Asst. Programmer)</p></li>
                                        <li><p>+8801674732264 (Programmer)</p></li>
                                    </ul>
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div className="p-8 md:p-10">

                        <div className="md:hidden text-center mb-6">
                            <img
                                src={logo}
                                alt=""
                                className="w-20 mx-auto mb-3"
                            />

                            <h2 className="text-2xl font-bold text-emerald-700">
                                DSCSC ICT
                            </h2>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-800">
                            Welcome Back
                        </h3>

                        <p className="text-gray-500 mt-2 mb-8">
                            Login to continue
                        </p>

                        <form
                            onSubmit={handleSubmit(handleLogin)}
                            className="space-y-5"
                        >
                            {/* ================= Username ================= */}

                            <div>
                                <label className="block mb-2 text-sm font-semibold text-gray-700">
                                    Username
                                </label>

                                <div className="flex items-center h-12 px-4 border border-gray-300 rounded-xl focus-within:border-emerald-700 focus-within:ring-2 focus-within:ring-emerald-700 transition-all">

                                    <FaUser className="text-emerald-700 mr-3 text-lg" />

                                    <input
                                        {...register("username", { required: true })}
                                        type="text"
                                        placeholder="Enter your username"
                                        className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
                                    />

                                </div>

                                {
                                    errors.username?.type === "required" &&
                                    <p className="mt-1 text-sm text-red-500">
                                        Username is required.
                                    </p>
                                }

                            </div>

                            {/* ================= Password ================= */}

                            <div>
                                <label className="block mb-2 text-sm font-semibold text-gray-700">
                                    Password
                                </label>

                                <div className="flex items-center h-12 px-4 border border-gray-300 rounded-xl focus-within:border-emerald-700 focus-within:ring-2 focus-within:ring-emerald-700 transition-all">

                                    <FaLock className="text-emerald-700 mr-3 text-lg" />

                                    <input
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            pattern: /.{6}$/
                                        })}
                                        type={eyeClose ? "password" : "text"}
                                        placeholder="Enter your password"
                                        className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setEyeClose(!eyeClose)}
                                        className="ml-2 text-gray-500 hover:text-emerald-700 transition"
                                    >
                                        {
                                            eyeClose
                                                ? <RiEyeCloseLine className="text-xl" />
                                                : <RiEyeLine className="text-xl" />
                                        }
                                    </button>

                                </div>

                                {
                                    errors.password?.type === "required" &&
                                    <p className="mt-1 text-sm text-red-500">
                                        Password is required.
                                    </p>
                                }

                                {
                                    errors.password?.type === "minLength" &&
                                    <p className="mt-1 text-sm text-red-500">
                                        Password must be at least 6 characters.
                                    </p>
                                }

                                {
                                    errors.password?.type === "pattern" &&
                                    <p className="mt-1 text-sm text-red-500">
                                        Password format is invalid.
                                    </p>
                                }

                            </div>
                            {/* ================= Options ================= */}

                            <div className="flex items-center justify-end text-sm">

                                {/* <label className="flex items-center gap-2 cursor-pointer">

                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-success checkbox-sm"
                                    />

                                    <span className="text-gray-600">
                                        Remember me
                                    </span>

                                </label> */}

                                <Link
                                    to="/forgot-password"
                                    className="text-emerald-700 hover:underline"
                                >
                                    Forgot Password?
                                </Link>

                            </div>

                            {/* ================= Login Button ================= */}

                            <button
                                type="submit"
                                className="btn bg-emerald-700 hover:bg-emerald-900 glass text-white w-full h-12 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >

                                {
                                    loading
                                        ?
                                        <>
                                            <span className="loading loading-spinner loading-sm"></span>
                                            <span className="ml-2">
                                                Processing...
                                            </span>
                                        </>
                                        :
                                        <>
                                            <FaSignInAlt className="mr-2" />
                                            Login
                                        </>
                                }

                            </button>

                            {/* ================= Register ================= */}

                            <div className="text-center pt-4">

                                <span className="text-sm text-gray-500">
                                    New here?
                                </span>

                                <Link
                                    to="/register"
                                    className="ml-2 text-sm font-semibold text-emerald-700 hover:underline"
                                >
                                    Create Account
                                </Link>

                            </div>

                            {/* ================= Footer ================= */}

                            <div className="pt-6 mt-6 border-t border-gray-200 text-center">

                                <p className="text-xs text-gray-500">
                                    Developed by
                                </p>

                                <h4 className="font-bold tracking-wide text-emerald-700">
                                    <a href="https://nurealam.pro.bd" target='_blank'>
                                        Md. Nure Alam</a>
                                </h4>

                                <p className="mt-1 text-xs text-gray-400">
                                    Programmer, ICT Sec, DSCSC
                                </p>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default LoginForm;