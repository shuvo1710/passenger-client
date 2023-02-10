import React, { useContext } from "react";
import google from "../Resource/google.png";
import github from "../Resource/github.png";
import facebook from "../Resource/facebook.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../UserContext/UseContext";
import { toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    createUser,
    updateUserProfile,
    googleLogin
  } = useContext(AuthContext);

  const registerButton = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.Password.value;
  
    const image = form.photo.files[0];
    const formData = new FormData();

    formData.append("image", image);
    const url =
      "https://api.imgbb.com/1/upload?=600&key=7bfed1b127f1b0296e21aab609f45785";
    fetch(url, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl=imageData.data.display_url;
        createUser(email,password)
        .then(result=>{
          updateUserProfile(name, imageUrl)
         toast.success('successfully Register')
         navigate(from, { replace: true });
         saveUser(name, email,imageUrl)
          form.reset();
        })
        .catch(error=>{
          toast.error(error.message);
        })
       
      });
  };

  const googleLoginButton=()=>{
    googleLogin()
    .then(data=>{
      toast.success('successfully created User')
      navigate(from, { replace: true });
      saveUser(data.user.photoURL, data.user.displayName, data.user.email)
    })
    .catch(error=>{
      toast.error(error.message)
    })
  }

  const saveUser = (imageUrl, name, email) => {
    const user = {
        imageUrl, name, email
    };
    fetch('http://localhost:5000/setUser', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {

        

        })
        .catch(error => {
            console.error(error);
        })
}
  return (
    <div className="flex justify-center my-28 ">
      <div className=" w-full md:w-6/12 lg:w-3/12 bg-white shadow-lg p-10 rounded-md   ">
        <form onSubmit={registerButton} className=" ">
          <h1 className="text-2xl text-center font-bold text-black">
            Register Now
          </h1>
          <div className="flex flex-col w-full ">
            <label className="mb-2" htmlFor="firstName">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="rounded w-full p-3"
              placeholder="Type Your Name......"
              required
            />
          </div>

          <div className="flex flex-col w-full mt-1">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded w-full p-3"
              placeholder="Type Your Email......
            required"
            />
          </div>

          <div className="flex flex-col w-full mt-1">
            <label className="mb-2" htmlFor="Photo">
              Photo
            </label>
            <input
              type="file"
              name="photo"
              id="photo"
              className="p-1 border rounded "
              required
            />
          </div>

          <div className="flex flex-col w-full mt-1">
            <label className="mb-2" htmlFor="email">
              Password
            </label>
            <input
              type="Password"
              name="Password"
              id="Password"
              className="rounded w-full p-3"
              placeholder="Type Your Password...
            required..."
            />
          </div>
         
          <button
            className="px-4 py-3 bg-black mt-6 w-full rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
          >
            Register
          </button>
          <p className="my-3">
            Already Have An Account?{" "}
            <Link className="hover:underline" to={"/login"}>
              Log In
            </Link>{" "}
          </p>
          <hr />
        </form>
        <div className="mt-5 flex gap-12 justify-center items-center">
          <button onClick={googleLoginButton} className="w-10 h-10">
            <img src={google} alt="" />
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default Register;
