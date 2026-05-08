"use client"
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react"

import { FiUser } from "react-icons/fi";
import { toast } from "react-toastify";

const ProfileUp =  () => {
  const handleSubmit =async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    const {data, error} = await authClient.updateUser({
    name,
    image
})
  if(error){
    toast.error(error.message)
  }
  if(data){
    toast.success("Profile updated successfull")
    document.getElementById("my_modal_1").close()
  }
  }
  return (
    <>
      
      <button
        className="btn mt-3 rounded-full text-white bg-blue-600"
        onClick={() =>
          document.getElementById("my_modal_1").showModal()
        }
      >
        Update User
      </button>


      <dialog id="my_modal_1" className="modal">
        <div className="modal-box rounded-3xl">
          <div className="bg-blue-100 inline-block p-2 rounded-full"><FiUser className="text-blue-600"/></div>
          <h3 className="font-medium text-xl mb-4">Update User</h3>
          <form onSubmit={handleSubmit} className="space-y-4 px-4">
            <div>
              <label className="">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input border-none bg-blue-50 rounded-full outline-blue-600 w-full mt-2"
              />
            </div>
            <div>
              <label className="font-semibold ">Image URI</label>
              <input
                type="url"
                name="image"
                placeholder="https://"
                className="input border-none bg-blue-50 rounded-full outline-blue-600 w-full mt-2"
              />
            </div>
            {/* Actions */}
            <div className="flex  gap-4 justify-end w-full">
              <button
                type="button"
                className="btn text-blue-500 rounded-full"
                onClick={() =>
                  document.getElementById("my_modal_1").close()
                }
              >
                Close
              </button>
              <button type="submit" className="btn rounded-full bg-blue-500 text-white">
                Send
              </button>
            </div>

          </form>
        </div>
      </dialog>
    </>
  )
}

export default ProfileUp