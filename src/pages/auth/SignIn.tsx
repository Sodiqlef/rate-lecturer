import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GrFormClose } from "react-icons/gr";
import { Link, useNavigate, useParams } from "react-router-dom";
import {useAutoAnimate} from "@formkit/auto-animate/react"
import { useDispatch} from "react-redux";
import { changedToggle2, createUser } from "../../global/GlobalState";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form"
import { studentSignIn, studentVerify } from "../../api/studentApis";
import Swal from "sweetalert2";
import LoadingScreen from "../../components/LoadingScreen";
// import axios from "axios";


const SignIn = () => {
  const {userID, token} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [parent]  = useAutoAnimate()
  const [email, setEmail] = useState<boolean>(false);
  const [password, setPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState(false)

  const onEmail = () => {
    setEmail(!email);
  };
  const onPassword = () => {
    setPassword(!password);
  };
  const onEmail2 = () => {
    if(email === true){
      setEmail(false)
    }
  };
  const onPassword2 = () => {
    if(password === true){
      setPassword(false)
    }
  };

  const Schema = yup.object({
    email : yup.string().email().required(),
    password : yup.string().required()
  })

  const { register, handleSubmit} = useForm({
    resolver : yupResolver(Schema)
  })



  const onHandleSubmit = handleSubmit((data : any) =>{
    const {email, password} = data    
    setLoading(true)
    studentSignIn({email, password}).then((res : any) =>{
      console.log("handleRes", res);
      setLoading(false)
      if(res){
        Swal.fire({
          icon : 'success',
          title: 'Congratulations you have sucessfully signed in',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        dispatch(createUser(res.user))
        navigate("/")
          dispatch(changedToggle2())
      }else{
        Swal.fire({
          icon : 'error',
          title: 'Please check Your password or email and make sure your account is verified',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        dispatch(changedToggle2())
      }
    })
  })

  useEffect(()=>{
    if(userID && token){
      studentVerify(userID,token)
    }
  })


 

  return (

    <>
    {loading && (<LoadingScreen/>)}
      <div className="w-full h-[100vh] justify-center items-center flex bg-opacity-20 shadow-lg backdrop-blur-md backdrop-filter border border-opacity-18 border-white/5 rounded-10 fixed  text-black z-[1]" ref={parent}>
      {/* form the body */}
      <div className="w-[90%] tab:w-[550px] bg-white  p-3 desktop:flex desktop:justify-center desktop:items-center desktop:flex-col shadow-2xl"
      onClick={()=>{
        onEmail2()
        onPassword2()
      }}
      >
        <div className="text-[27px] flex justify-end cursor-pointer desktop:justify-end desktop:flex desktop:w-full px-8"
        onClick={()=>{
          dispatch(changedToggle2())
        }}
        >
          <GrFormClose />
        </div>

        {/* main part */}
        <div className="justify-center items-center flex flex-col mt-3 desktop:w-[350px] duration-[400ms]">
          {/* title */}
          <div className="flex items-center">
            <div className="font-[800] text-[30px] mr-2">LogIn</div>
          </div>

          {/* google sign up w-[350px] */}
          <div className="w-full h-[50px] rounded-[25px] border-gray-300 border mt-3 flex justify-center items-center hover:cursor-pointer hover:scale-[1.1] duration-[350ms] ">
            <div className="text-[25px] text-green-600">
              {" "}
              <FcGoogle />{" "}
            </div>
            <div className="font-[700] text-[13px] ml-2">
              Sign in with Google
            </div>
          </div>
            

          {/* options */}
          <div className="flex items-center justify-between w-full mt-7">
            <div className="w-[30%] desktop:w-[25%] h-[1px] bg-gray-300"></div>
            <div className="text-[10px] desktop:text-[15px] ">
              Or Login with email
            </div>
            <div className="w-[30%] desktop:w-[25%] h-[1px] bg-gray-300"></div>
          </div>

          {/* form */}
          <form onSubmit={onHandleSubmit} className="w-full mt-6">
            {/* input Email */}
            <div>
            <div className="ml-1 font-[600] text-[16px] duration-[300ms] h-[10px] mb-5">
            {email ? (
              <div className="duration-[350ms]">
                Email
              </div>
            ) : null}
            </div>
            {!email ? (
              <input
                type="text"
                placeholder="Email"
                className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0"
                {...register("email")}
                onClick={() => {
                  onEmail();
                }}
              />
            ) : (
              <input
                type="text"
                className="w-full h-[40px] bg-white border border-black px-4 outline-0"
                {...register("email")}
                onClick={() => {
                  onEmail();
                }}
              />
            )}
            </div>
            {/* input Password */}
            <div>
            <div className="ml-1 font-[600] text-[16px] duration-[300ms] h-[10px] mb-5">
            {password ? (
              <div className="duration-[350ms]">
                Password
              </div>
            ) : null}
            </div>
            {!password ? (
              <input
                type="password"
                placeholder="Password"
                className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0"
                {...register("password")}
                onClick={() => {
                  onPassword();
                }}
              />
            ) : (
              <input
                type="password"
                className="w-full h-[40px] bg-white border border-black px-4 outline-0"
                {...register("password")}
                onClick={() => {
                  onPassword();
                }}
              />
            )}
            </div>

            <div className="text-blue-700 font-[700] w-full flex justify-center items-cente mt-5 ml-1">Forgot your password?</div>

            <button type="submit" className="w-full h-[45px] duration-[350ms] rounded-[25px] border border-[blue] mt-[30px] flex justify-center items-center text-white bg-black hover:cursor-pointer hover:scale-[1.1] "
            onClick={()=>{
              console.log("clicked");
              
            }}
            >
              <div className="font-[700] text-[13px] ml-2">Continue</div>
            </button>
          </form>


          <div className="w-full  justify-center items-center text-center flex flex-col text-[11px] mt-3">
            Rate My Professors is designed for and targeted to NGA. audiences
            and is governed by and operated in accordance with NGA. laws
          </div>

          <div className="my-7">
            Don't have an account?
            <Link to="/register">
            <span className="text-blue-700 cursor-pointer font-[700] ml-1">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignIn;