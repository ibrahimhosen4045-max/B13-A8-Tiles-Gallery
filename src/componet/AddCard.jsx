"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import Image from "next/image";
import { FiDelete } from "react-icons/fi";
import { toast } from "react-toastify";

const AddCard = () => {
  const { cart, deletAddCart } = useCart();

  return (
    <div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle"
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
                2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 
                100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            <span className="badge badge-sm indicator-item">
              {cart.length}
            </span>
          </div>
        </div>

        <div
          tabIndex={0}
          className="dropdown-content z-50 mt-3 w-[350px] rounded-xl bg-base-100 shadow-xl p-3 max-h-[500px] overflow-y-auto right-[-220%]"
        >
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 py-6 uppercase">
              Cart is empty
            </p>
          ) : (
            <div className="space-y-4 uppercase">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 border border-gray-200 rounded-xl p-3 hover:shadow-md transition"
                >
                  <div className="w-24 h-24 relative overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase text-gray-500">
                      {item.category}
                    </p>

                    <h2 className="font-semibold text-sm line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-sm text-gray-600 mt-1">
                      {item.currency}. {item.price}
                    </p>

                    <Link href={`/tilesCard/${item.id}`}>
                      <button className="btn btn-sm mt-3 bg-white hover:bg-[#5C1621] hover:text-white border border-[#5C1621] text-[#5C1621] group">
                        View
                        <HiArrowUpRight className="transition duration-300 group-hover:rotate-45" />
                      </button>
                    </Link>
                  </div>
                  <button onClick={()=> {
                    deletAddCart(item.id)
                    toast.success("Removed Card")
                  }} className="btn border-none bg-white p-1 text-lg"><FiDelete /> </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCard;