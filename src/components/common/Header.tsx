import pics from "../../assets/rmp 2.svg"
import pics2 from "../../assets/apple logo.svg"
import pics3 from "../../assets/dropdown main.svg"
import pics4 from "../../assets/apple black.png"
import {RiGraduationCapFill} from "react-icons/ri"
import { useState } from "react"

const Header = () => {
    const [show, setShow] = useState<boolean>(false)
    const [show2, setShow2] = useState<boolean>(false)
    const [dropdown, setDropdown] = useState<boolean>(false)
    const [dropdown2, setDropdown2] = useState<boolean>(false)

    const onDropDown = () =>{
        setDropdown(!dropdown)
    }
    
    const onDropDown2 = () =>{
        setDropdown2(!dropdown2)
    }

    const onShow2 = () =>{
        setShow2(!show2)

    }
    const onShow = () =>{
        setShow(!show)

    }
 
  return (
    <div className="w-full h-[65px] bg-black text-white justify-center items-center flex">
        
{/* main */}
        <div className="w-[95%] flex items-center justify-between">

                {/* logo / search */}
        <div className="flex h-full items-center">
            {/* logo */}
            <img className="mr-12" src={pics} alt="logo"/>

            {
                show2 ?
                    //  search1 
                    ( 
             <div className="flex justify-center items-center h-full"> 

                 <div className="flex items-center cursor-pointer"> 
               
                <div className="flex"
               onClick={()=>{
                onDropDown()
                onShow()
               }}
               >
               <img src={pics2} alt="logo" />

<span className="text-[18px] ml-1">Professors</span>
               </div> 

                 {
                    show ? (
                        <img src={pics3} alt="dropdown" className="ml-3 "/>
                    ) : (
                        <img src={pics3} alt="dropdown" className="ml-3 rotate-180"/>
                    )
                } 

                 {/* search bar  */}

                 <div className="flex ml-10 text-black">

                    <input type="text"
                    placeholder="professor name" className="w-[350px] h-[40px] rounded-full px-5 outline-none" />

                    <input type="text"
                    placeholder="professor name" className="w-[350px] h-[40px] rounded-full px-5 ml-5 outline-none" />

                </div> 
                
                 </div> 

             </div> 
               ) : (
                <div className="flex justify-center items-center h-full">

                <div className="flex items-center cursor-pointer">
               
               <div className="flex justify-center items-center"
               onClick={()=>{
                onDropDown2()
                onShow()
               }}
               >
               {/* <img src={pics2} alt="logo" />  */}
               <div className="text-[20px] "><RiGraduationCapFill /></div>

<span className="text-[18px] ml-1">School</span>
               </div> 

                {
                    !show ? (
                        <img src={pics3} alt="dropdown" className="ml-3 "/>
                    ) : (
                        <img src={pics3} alt="dropdown" className="ml-3 rotate-180"/>
                    )
                } 

                {/* search bar  */}

                <div className="flex ml-5 text-black">

                    <input type="text"
                    placeholder="Your School" className="w-[350px] h-[40px] rounded-full px-5 outline-none" />

                </div>
                
                </div>

            </div> 
               )
            } 


{/* dropdown for school */}
{
                dropdown ? (
                    <div className="w-[180px] h-[65px] bg-white absolute left-[150px] hover:bg-[blue]  shadow-lg top-[55px] flex items-center px-4 rounded-md cursor-pointer  text-black hover:text-white font-[500]"
                    onClick={()=>{
                        onDropDown()
                        onShow2()
                      }}
                    >
  <div className="flex items-center"
  
               >
               {/* <img src={pics2} alt="logo" className="bg-black"/> */}
               <div className="text-[20px] "><RiGraduationCapFill /></div>

<span className="text-[18px] ml-3">Schools</span>
               </div>
            </div>
                ) : null
            }

         
            {/* dropdown for professor */}
            {
                dropdown2 ? (
                    <div className="w-[180px] h-[65px] bg-white absolute left-[150px] hover:bg-[blue]  shadow-lg top-[55px] flex items-center px-4 rounded-md cursor-pointer  text-black hover:text-white font-[500]"
                    onClick={()=>{
                        onShow2()
                        onDropDown2()
                    
                    }}
                    >
 <div className="flex items-center"
               >
               <div className="text-[20px] ">
                <img src={pics4} alt="" />
               </div>

<span className="text-[18px] ml-3">Professors</span>
               </div>
            </div>
                ) : null
            }

        </div>

                {/* buttons */}
        <div className="flex">
            {/* login */}
            <div className="text-[15px] font-[500] rounded-full h-[30px] px-3 cursor-pointer hover:bg-gray-900 flex justify-center items-center">
                Log in
            </div>

            {/* Sign in */}
            <div className="text-[15px] font-[500] rounded-full h-[35px] w-[85px] cursor-pointer hover:bg-gray-900 flex justify-center items-center border border-white hover:border-0 ">
                Sign in
            </div>
        </div>
        </div>

    </div>
  )
}

export default Header