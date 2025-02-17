import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { Image } from 'lucide-react';
import { aw } from 'framer-motion/dist/types.d-CdW9auKD';
import axios from 'axios';

const CreateTweet = () => {
  const [description, setDescription] = useState("");
  const submitHandler = (e)  => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/tweet/create`,{description},{headers:})
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-[100%]">
      <div className="">
        <div className="flex items-center justify-evenly border-b border-gray-200">
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center p-2 rounded-sm">
            <h1 className="font-bold text-gray-600 text-xl">For You</h1>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center p-2 rounded-sm">
            <h1 className="font-bold text-gray-600 text-xl">Following</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center p-4">
          <div className="">
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dEhbjgmjNQc_JAJJYvv4waAPpHilh4Ps8A&s"
              size="50"
              round={true}
            />
          </div>
          <input
            type="text"
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What is happening?!"
            className="w-full outline-none border-none text-xl ml-2"
          />
        </div>
        <div  className="flex items-center justify-between p-4 border-b border-gray-200">
          <div>
            <Image size={"25px"} />
          </div>
          <button onClick={submitHandler} className="px-4 bg-blue-500 hover:bg-blue-400 font-bold text-white py-2 border-none rounded-full text-right text-lg">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
