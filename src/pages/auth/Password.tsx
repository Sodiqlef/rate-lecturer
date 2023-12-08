import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import {BsArrowLeftShort} from "react-icons/bs"
import { createUser } from "../../global/GlobalState";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Password = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user : any = useSelector((state : any) => state.user)
  // console.log(user)
  const [password, setPassword] = useState<boolean>(false);
  const [passworded, setPassworded] = useState<any>(user?.password);

  const onPassword = () => {    
    setPassword(!password);
  };

  const onPassword2 = () => {
    if(password === true){
      setPassword(false)
    }
  };
  
  return (
    <div className="w-full h-[100vh] justify-center items-center flex bg-opacity-20 shadow-lg backdrop-blur-md backdrop-filter border border-opacity-18 border-white/5 rounded-10 fixed text-black z-[100]" 
    
    >
     
      <div className="w-[90%] tab:w-[550px] bg-white  p-3 desktop:flex desktop:justify-center desktop:items-center desktop:flex-col shadow-2xl"
      onClick={()=>{
        onPassword2()
      }}
      >
        <div className="text-[25px] flex justify-between desktop:flex desktop:w-full desktop:justify-between">
          <Link to="/register">
          <BsArrowLeftShort className="cursor-pointer" />
          </Link>
          <GrFormClose className="cursor-pointer" />
        </div>

        {/* main part */}
        <div className="justify-center items-center flex flex-col mt-2 desktop:w-[350px] duration-[400ms] px-8">
          {/* title */}
          <div className="flex items-center">
            <div className="font-[800] text-[30px] mr-2">Create Password</div>
          </div>

          {/* form */}
          <div className="mt-2 w-full">
            {/* input Email */}
            <div>
            <div className="ml-1 font-[600] text-[16px] duration-[300ms] h-[10px] mb-5">
           
              {password ? (
              <div className="">
                password
              </div>
            ) : null}
            </div>
            
            {!password ? (
              <input
                // type="password"
                placeholder="password"
                className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0"
                value={passworded}
                onChange={(e : any) =>{
                  setPassworded(e.target.value)
                }}
                onClick={() => {
                  onPassword();
                }}
              />
            ) : (
              <input
                type="password"
                
                className="w-full h-[40px] bg-white border border-black px-4 outline-0"
                value={passworded}
                onChange={(e : any) =>{
                  setPassworded(e.target.value)
                }}
                onClick={() => {
                  onPassword();
                }}
              />
            )}
            
            </div>
       

            <div className="my-1">
            minimum 8 characters 
          </div>

            
          <div className="w-full  justify-center items-center text-center flex flex-col text-[12px] mt-8">
          By clicking 'Continue' you agree to the Terms of Use and our Privacy Policy. RateMyProfessors is designed for and targeted to NGA. audiences and is governed by and operated in accordance with NGA. laws.
          </div>

          <button type="submit" className="w-full h-[45px] duration-[350ms] rounded-[25px] border border-[blue] mt-[30px] flex justify-center items-center text-white bg-black hover:cursor-pointer hover:scale-[1.1] mb-4 "
            onClick={()=>{
              const kkn:any = {email : user?.email, password : passworded}
            dispatch(createUser(kkn))
              // console.log(user);
              navigate("/school")
              
            }}
            >
              <div className="font-[700] text-[13px]">Register</div>
            </button>
          
           </div>

          
        </div>
      </div>
    </div>
  );
};

export default Password;