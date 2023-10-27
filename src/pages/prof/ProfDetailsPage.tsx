import Header from "../../components/common/Header"
import { useState, useEffect } from "react"
import {AiOutlineLike, AiOutlineDislike}  from "react-icons/ai"
import {GoShare} from "react-icons/go"
import {GrFlag} from "react-icons/gr"
import { useParams } from 'react-router-dom';
import LoadingScreen from "../../components/LoadingScreen";
import axios from "axios"


const ProfDetailsPage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false)
    const [singleProfessor, setSingleProfessor] = useState("")
    useEffect(() => {
        setLoading(true)
        axios.get(
            `https://lecturer-rating.onrender.com/api/prof`
          )
          .then((response) => {
         setLoading(false)
            console.log(response)
            setSingleProfessor(response.data.data.filter((item) => item.userId.includes(id)))
           })
          .catch((err) => {
            console.log(err)
            setLoading(false)
           
          })
    }, [id])
    console.log(singleProfessor)
  return (
      <>
      {loading && (<LoadingScreen />)}
      <Header />

    <div className="flex items-center justify-center w-full h-full">
        {/* main */}
        <div className="w-[90%] h-full justify-center items-center  flex-col mt-16 headerMedium:mt-10">

{/* all ratings */}
<div className="flex w-full h-full mt-8 headerMedium:flex-col">
{/* first part */}

    <div className="w-[33%] h-full headerMedium:w-full ">
        <div className="font-[700] text-[80px]">4.3</div>

        <div className="font-[700] text-[14px] -mt-3">
        Overall Quality Based on 4  <span className="underline cursor-pointer">ratings</span>
        </div>

        <div  className="font-[700] text-[40px] mt-4">Harry James</div>

        <div className=" text-[14px] w-[400px]">Professor in the <span className="font-[700] underline cursor-pointer">Agronomy department</span> at <span className="font-[700] underline cursor-pointer">Missouri State University</span></div>

        <div className="flex mt-8">
            <div className="flex flex-col items-center justify-center" >
                <div className="font-[800] text-[30px] ">N/A</div>
                <div className=" text-[14px]">Would take again</div>
            </div>
            <div className="w-[1px] h-[80px] bg-black mx-4"></div>
            <div className="flex flex-col items-center justify-center">
            <div className="font-[800] text-[30px] ">3.3</div>
                <div className=" text-[14px]">Level of Difficulty</div>
            </div>
        </div>

        <div className="w-[250px] h-[45px] justify-center items-center flex bg-blue-600 text-white text-[14px] font-[500] rounded-full cursor-pointer hover:bg-blue-800 duration-300 mt-8">
            Rate Professor James
        </div>

        <div className="font-[500] text-[14px] mt-5 cursor-pointer underline">I'm Professor James</div>

   
    
    </div>

{/* second part */}
    <div className="w-[500px] headerMedium:ml-4 headerMedium:mt-5 headerMedium:w-full flex flex-col justify-center items-center">

{/* a */}
        <div className="w-full p-5 bg-gray-100 rounded-md ">
        <div className=" text-[16px] font-[700] ">
                Rating Distribution
        </div>
        <div className="flex items-center my-4">
            <div className="text-[15px] headerMedium:w-[90px] w-[100px] headerMedium:text-[13px] text-end">Awesome 5</div>
            <div className="w-[350px] h-[40px] bg-blue-600 mx-4 headerMedium:w-[200px]"></div>
            <div className="font-[500]">3</div>
        </div>
        
        <div className="flex items-center my-4">
            <div className="text-[15px] headerMedium:w-[90px] w-[100px] headerMedium:text-[13px] text-end">great 4</div>
            <div className="w-[350px] h-[40px] bg-gray-200 mx-4 headerMedium:w-[200px]"></div>
            <div className="font-[500]">0</div>
        </div>

        <div className="flex items-center my-4">
            <div className="text-[15px] headerMedium:w-[90px] w-[100px] headerMedium:text-[13px] text-end">good 3</div>
            <div className="w-[350px] h-[40px] bg-blue-600 mx-4 headerMedium:w-[200px]"></div>
            <div className="font-[500]">1</div>
        </div>

        <div className="flex items-center my-4">
            <div className="text-[15px] headerMedium:w-[90px] w-[100px] headerMedium:text-[13px] text-end">OK 2</div>
            <div className="w-[350px] h-[40px] bg-gray-200 mx-4 headerMedium:w-[200px]"></div>
            <div className="font-[500]">0</div>
        </div>

        <div className="flex items-center my-4">
            <div className="text-[15px] headerMedium:w-[90px] w-[100px] headerMedium:text-[13px] text-end">Awful 1</div>
            <div className="w-[350px] h-[40px] bg-gray-200 mx-4 headerMedium:w-[200px]"></div>
            <div className="font-[500]">0</div>
        </div>
        </div>

{/* similar professors */}
        <div className="mt-9">
            <div className="text-[16px] font-[700]">Check out Similar Professors in the Agronomy Department</div>

            <div className="w-full rounded-sm h-[80px] headerMediuheaderMedium:m:t9xt-[ w-[100px]13px] mt-2 bg-[#E8F1FF] flex items-center justify-center">
                <div className="flex ju headerMedium:w-[200px]stify-center items-center">
                    <div className="text-white font-[700] bg-blue-600 cursor-pointer duration-200 hover:bg-blue-700 w-[60px] h-[38px] flex justify-center items-center">5.00</div>
                    <div className="text-[13px] ml-3 mr-4">Aida Hass</div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="text-white font-[700] bg-blue-600 cursor-pointer duration-200 hover:bg-blue-700 w-[60px] h-[38px] flex justify-center items-center">5.00</div>
                    <div className="text-[13px] ml-3 mr-4">Aida Hass</div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="text-white font-[700] bg-blue-600 cursor-pointer duration-200 hover:bg-blue-700 w-[60px] h-[38px] flex justify-center items-center">5.00</div>
                    <div className="text-[13px] ml-3 mr-4">Aida Hass</div>
                </div>
                {/* <div>1</div>
                <div>1</div> */}
            </div>
        </div>

    </div>

</div>


{/* courses ratings */}
<div className="mt-7 w-[73%] headerMedium:w-full">
    <div className="cursor-pointer hover:text-gray-500">
    <div className="text-[15px] font-[700] mb-3">58 students Rating</div>
    <div className="w-[150px] h-[2px] bg-black hover:text-gray-500"></div>
    </div>
    <div className="w-full bg-gray-300 h-[2px]"></div>

    <select className="mt-5 mb-10 w-[150px] text-[15px] font-[700] border border-b-gray-500 h-[40px] outline-0 rounded-md px-3">
        <option value="">All courses</option>
        <option value="">Ba 2</option>
        <option value="">Ba 3</option>
    </select>

    {/* rating words */}
    
    <div className="w-full bg-[#F9F9F9] p-8 mb-5 flex headerMedium:flex-col">

    <div className="justify-between hidden mb-5 ml-4 headerMedium:flex">
                <div className="font-[700]">PHIL100</div>
                <div className="font-[600] text-[14px]">27 march 2020</div>
                </div>

{/* RATES */}
        <div className="headerMedium:flex">
            <div className="flex justify-center flex-col items-center w-[100px]">
                <div className="font-[600] headerMedium:text-[16px]">QUALITY</div>
                <div className="w-[75px] text-[30px] font-[800] h-[60px] flex justify-center items-center bg-[#7FF6C3]">4.0</div>
        </div>
            <div className="flex justify-center flex-col items-center w-[100px] mt-8 headerMedium:mt-0">
                <div className="font-[600] headerMedium:text-[16px]">DIFFICULTY</div>
                <div className="w-[75px] text-[30px] font-[800] h-[60px] flex justify-center items-center bg-[#7FF6C3]">4.0</div>
        </div>
            


        </div>

{/* WORDS */}
        <div className="ml-8 headerMedium:ml-3">
            <div className="mt-2">
                <div className="flex justify-between headerMedium:hidden">
                <div className="font-[700]">PHIL100</div>
                <div className="font-[600] text-[14px]">27 march 2020</div>
                </div>

{/* grade level */}
                <div className="flex mt-4 headerMedium:mt-6 headerMedium:flex-col ">
                    <div className="text-[16px] headerMedium:mb-2 headerMedium:text-[15px]">For Credit: <span className="font-[700] mr-5 ">YES</span></div>

                    <div className="text-[16px] headerMedium:mb-2 headerMedium:text-[15px]">Grade <span className="font-[700] mr-5">YES</span></div>

                    <div className="text-[16px] headerMedium:mb-2 headerMedium:text-[15px]">TextBook: <span className="font-[700] mr-5">YES</span></div>

                    <div className="text-[16px] headerMedium:mb-2 headerMedium:text-[15px]">Attendance: <span className="font-[700] mr-5">YES</span></div>
                </div>

{/* comment */}
                <div className="text-[15px] mt-7 headerMedium:mt-5 headerMedium:text-[14px]" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur quod laboriosam commodi? Voluptates magnam itaque consequatur quasi aliquam laborum! Sit vel iste voluptate doloremque dolores dignissimos suscipit fuga? Iure.</div>

{/* likes and unlike etc */}
                <div className="flex justify-between mt-8">

                    <div className="flex font-[700] text-[15px] items-center justify-center">
                        <div>Helpful</div>
                        <div className="flex text-[25px]"> 
                            <AiOutlineLike /> 
                            <div className="text-[18px]">1</div>
                        </div>
                        <div className="flex text-[25px] ml-5"> 
                            <AiOutlineDislike /> 
                            <div className="text-[18px]">1</div>
                        </div>
                    </div>

                    <div className="flex text-[25px]">
                        <div><GoShare /></div>
                        <div className="ml-5 text-[20px]"><GrFlag /></div>
                    </div>
                </div>

            </div>
        </div>

    </div>
    
    
</div>


        </div>
    </div>

      </>
  )
}

export default ProfDetailsPage