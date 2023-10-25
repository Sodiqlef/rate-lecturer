import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import {BsArrowLeftShort} from "react-icons/bs"
import { createUser, logOut } from "../../global/GlobalState";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../api/studentApis";
// import * as yup from 'yup'
// import { yupResolver } from "@hookform/resolvers/yup";
// import {useForm} from "react-hook-form"

const School = () => {
  const dispatch = useDispatch()
//   const navigate = useNavigate()
  const user : any = useSelector((state : any) => state.user)
  // console.log(user)
  const [school, setSchool] = useState<boolean>(false);
  const [schooled, setSchooled] = useState<any>();

  const onSchool = () => {    
    setSchool(!school);
  };

  const onSchool2 = () => {
    if(school === true){
      setSchool(false)
    }
  };
  
//   const Schema = yup.object({
//     email : yup.string().email().required(),
//     password : yup.string().required()
//   })

//   const { register, handleSubmit} = useForm({
//     resolver : yupResolver(Schema)
//   })

//   const onHandleSubmit = handleSubmit((data : any) =>{
//     const {} = data
    
//   })

  return (
    <div className="w-full h-[100vh] justify-center items-center flex bg-opacity-20 shadow-lg backdrop-blur-md backdrop-filter border border-opacity-18 border-white/5 rounded-10 fixed text-black z-[100]" 
    
    >
     
      <div className="w-[90%] tab:w-[550px] bg-white  p-3 desktop:flex desktop:justify-center desktop:items-center desktop:flex-col shadow-2xl"
      onClick={()=>{
        onSchool2()
      }}
      >
        <div className="text-[25px] flex justify-between desktop:flex desktop:w-full desktop:justify-between">
          <Link to="/password">
          <BsArrowLeftShort className="cursor-pointer" />
          </Link>
          <GrFormClose className="cursor-pointer" />
        </div>

        {/* main part */}
        <div className="justify-center items-center flex flex-col mt-2 desktop:w-[350px] duration-[400ms] px-8">
          {/* title */}
          <div className="flex items-center">
            <div className="font-[800] text-[30px] mr-2">Create school</div>
          </div>

          {/* form */}
          <div className="mt-2 w-full">
            {/* input Email */}
            <div>
            <div className="ml-1 font-[600] text-[16px] duration-[300ms] h-[10px] mb-5">
           
              {school ? (
              <div className="">
                school
              </div>
            ) : null}
            </div>
            
            {!school ? (
              <input
                // type="school"
                placeholder="school"
                className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0"
                value={schooled}
                onChange={(e : any) =>{
                  setSchooled(e.target.value)
                }}
                onClick={() => {
                  onSchool();
                }}
              />
            ) : (
              <input
                type="school"
                
                className="w-full h-[40px] bg-white border border-black px-4 outline-0"
                value={schooled}
                onChange={(e : any) =>{
                  setSchooled(e.target.value)
                }}
                onClick={() => {
                  onSchool();
                }}
              />
            )}
            
            </div>
       

            {/* <div className="my-1">
            minimum 8 characters 
          </div> */}

            
          <div className="w-full  justify-center items-center text-center flex flex-col text-[12px] mt-14">
          By clicking 'Continue' you agree to the Terms of Use and our Privacy Policy. RateMyProfessors is designed for and targeted to U.S. audiences and is governed by and operated in accordance with U.S. laws.
          </div>

          <button className="w-full h-[45px] duration-[350ms] rounded-[25px] border border-[blue] mt-[30px] flex justify-center items-center text-white bg-black hover:cursor-pointer hover:scale-[1.1] mb-4 font-[700] text-[13px]"
            onClick={()=>{
              const kkn:any = {email : user?.email, password : user?.password, school : schooled}
              dispatch(createUser(kkn))
              console.log("dd");
              
              dispatch(logOut())
              registerUser({email : user?.email, password : user?.password, school : schooled}).then(()=>{
                console.log("clicked");
                dispatch(logOut())
                
              })
              // console.log("kkn", kkn);
              
            //   navigate("/school")
            }}
            >
              Register
            </button>
          
           </div>

          
        </div>
      </div>
    </div>
  );
};

export default School;