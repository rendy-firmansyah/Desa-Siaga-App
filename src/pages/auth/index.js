import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer,toast } from "react-toastify";
import nookies from 'nookies';
import 'react-toastify/dist/ReactToastify.css';

//islogin
export async function getServerSideProps(ctx){
    const cookies = nookies.get(ctx)
    if(cookies.role === 'super admin'){
        return{
          redirect:{
            destination : '/dashboard/superAdmin'
          }
        }
    }
    else if(cookies.role === 'user'){
        return{
          redirect:{
            destination : '/dashboard'
          }
        }
    }
    return{
      props: {}
    }
  }




const Login = () => {
  //define router 
  const router = useRouter();
  //define variable to send 
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  // function api login 
  async function login(){
    const send = await axios.post("/api/userManagement",{email,password});
    if(send.data.status === 'success'){
      //notification
      toast(`✅ ${send.data.message}`, {
        position: "top-right",
        autoClose: 1,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress:1,
        theme: "light",
      });
      //save token login in browser
      nookies.set(null,'role',send.data.user)
      nookies.set(null,'desa_id',send.data.desa_id)
      //redirect to dashboard
      router.push('/dashboard')
    }
    else{
      //notification
      toast(`❌ ${send.data.message}`, {
        position: "top-right",
        autoClose: 0.1,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress:1,
        theme: "light",
        });
    }
  }


  return (
    <div className="container-fluid bg-white flex justify-center">
      <ToastContainer />
      <div className="grid grid-cols-12 h-screen">
        <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12 flex justify-center xl:h-full lg:h-full md:h-[150px] h-[150px] relative">
          <Image
            src="/bg-right.png"
            width={800}
            height={1000}
            alt="image"
            className="object-cover filter brightness-50"
          />
          <div className="absolute inset-0 flex xl:flex-col lg:flex-col md:flex-row flex-row items-center justify-center">
            <div className="font-extrabold xl:text-[64px] lg:text-[52px] md:text-[32px] text-[20px]">DESA SIAGA</div>
            <div className="font-extrabold xl:text-[64px] lg:text-[52px] md:text-[32px] text-[20px] xl:ms-0 lg:ms-0 md:ms-[10px] ms-[5px] text-primary-default">
              DESA TANGGUH
            </div>
          </div>
        </div>
        <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12 flex justify-center items-center">
          <div className="w-[550px]">
            <div className="flex justify-center">
              <div className="font-bold xl:text-[32px] lg:text-[28px] md:text-[28px] text-[24px] text-gray-800 mb-[45px]">
                Selamat Datang
              </div>
            </div>
            <div className="flex justify-center">
              <form className="mt-4" onSubmit={(e)=>{e.preventDefault(); login()}}>
                <div className="mb-[24px]">
                  <label
                    htmlFor="username"
                    className="block xl:text-xl lg:text-lg md:text-md text-sm font-semibold text-gray-800"
                  >
                    Username
                  </label>
                  <input
                    type="username"
                    placeholder="Masukan Username"
                    onChange={(e)=> setEmail(e.target.value)}
                    className="xl:w-[550px] lg:w-[480px] md:w-[480px] w-[350px] h-[60px] mt-3 rounded-[50px] px-[20px] text-gray-700 border-[2px] border-[#757575]"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block xl:text-xl lg:text-lg md:text-md text-sm font-semibold text-gray-800"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Masukan Password"
                    onChange={(e)=>setPassword(e.target.value)}
                    className="xl:w-[550px] lg:w-[480px] md:w-[480px] w-[350px] h-[60px] mt-3 rounded-[50px] px-[20px] text-gray-700 border-[2px] border-[#757575]"
                  />
                </div>
                <div className="flex justify-center mt-[40px]">
                    <button
                      type="submit"
                      className="xl:w-[370px] lg:w-[330px] md:w-[330px] w-[230px] h-[55px] bg-secondary-default rounded-[10px] text-[24px] font-bold"
                    >
                      Login
                    </button>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-center mt-[55px]">
              <div className="mr-[10px] font-bold text-gray-800 text-[24px]">
                Powered by:{" "}
              </div>
              <Image src="/brand.png" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
