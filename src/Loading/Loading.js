import { ThreeCircles, ThreeDots } from "react-loader-spinner"

export const Loader = () => {
 
  
    return  <div className='flex justify-center items-center mt-[300px]'>
    <ThreeDots 
  height="80" 
  width="80" 
  radius="9"
  color=" #87ceeb" 
  
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
   />
  </div>
}