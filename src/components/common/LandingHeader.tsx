import {AiFillFacebook, AiOutlineInstagram, AiOutlineMenu, AiOutlineTwitter} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import Register from "../../pages/auth/Register";
import SignIn from "../../pages/auth/SignIn";
import { logOut, toggleState, toggleState2, toggleState3 } from "../../global/GlobalState";
import LandingDropDown from "./LandingDropDown";
import { useState } from "react";



const LandingHeader = () => {
  const [drop, setDrop] = useState<boolean>(false)
    const dispatch = useDispatch()
    const user = useSelector((state : any) => state.user)
    const toggle = useSelector((state: any) => state.toggle);
  const toggle2 = useSelector((state: any) => state.toggle2);
  const toggle3 = useSelector((state: any) => state.toggle3);

  const onDrop = () =>{
    setDrop(!drop)
  }


  return (
    <>
        {toggle && <Register />}
      {toggle2 && <SignIn />}
      {toggle3 && <LandingDropDown />}
      
    <div className='w-full flex justify-center h-[240px] bg-[#FFFFFF]'>
        <div className="w-[90%] justify-between mt-5 flex h-[50px]  items-center">
                <div className="flex w-[110px] justify-between text-[23px] cursor-pointer">
                    <AiFillFacebook />
                    <AiOutlineInstagram />
                    <AiOutlineTwitter />
                </div>

                <div className="flex w-[180px] justify-between items-center cursor-pointer headerMedium:hidden">
                        {
                          !user? (
                      <>
                          <div className="font-[700]" 
                        onClick={()=>{
                            dispatch(toggleState2())
                        }}
                        >Log In</div>

                    <div className=" w-[110px] h-[38px] bg-black flex justify-center items-center text-[17px] rounded-full text-white font-[700] hover:bg-slate-900"
                    onClick={()=>{
                        dispatch(toggleState())
                    }}
                    >sign up</div>
                       </>
                          ) : (

                            <div className=" w-[110px] h-[38px] bg-black flex justify-center items-center text-[17px] rounded-full text-white font-[700] hover:bg-slate-900"
                            onClick={()=>{
                              onDrop()
                            }}
                            >Hey, {user?.name} Henry</div>
                          )
                        }
                </div>

                {
                  user? (
                    <>
                      {
                  drop ? (
                    <>
                      <div className="w-[180px] rounded-md bg-white shadow-2xl absolute right-[90px] top-[65px] z-[100] text-[13px] font-[700] headerMedium:hidden flex flex-col ">
                 <div className="w-full h-[40px] hover:text-white  hover:bg-blue-700 cursor-pointer flex items-center px-3 rounded-t-md">Profile</div>

                 <div className="w-full h-[40px] hover:text-white  hover:bg-blue-700 cursor-pointer flex items-center px-3">Account Settings</div>

                 <div className="w-full h-[40px] hover:text-white  hover:bg-blue-700 cursor-pointer flex items-center px-3">Your Ratings</div>

                 <div className="w-full h-[40px] hover:text-white  hover:bg-blue-700 cursor-pointer flex items-center px-3">Saved Professors</div>

                 <div className="w-full h-[40px] hover:text-white  hover:bg-blue-700 cursor-pointer flex items-center px-3"
                 onClick={()=>{
                  dispatch(logOut())
                 }}
                 >Logout</div>
                </div>
                    </>
                  ) : null
                }
                    </>
                  ) : null
                }

                <div className="headerMedium:flex hidden cursor-pointer text-[20px]"
                onClick={()=>{
                  dispatch(toggleState3())
                }}
                ><AiOutlineMenu /></div>
        </div>
    </div>
    </>
  )
}

export default LandingHeader