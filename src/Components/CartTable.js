import React, { useState } from "react";

const CartTable = () => {
    const [num, setNum] = useState(1);
    const itemNum = (e) => {
      e === "add" ? setNum(num + 1) : (num>1 ? setNum(num - 1) : setNum(num))
    };
  return (
    <tr>
      <td className="flex gap-8 items-center">
        <img
          className="w-16 h-16 object-cover"
          src="./images/camera.jpg"
          alt=""
        />
        <div className="w-1/3">
          <p className="text-gray-600 text-sm leading-7">
            Hero Session Action Camera with 8MP Photos
          </p>
          <p className="text-gray-600 text-sm leading-7">Size:L</p>
          <p className="text-gray-600 text-sm leading-7">Color:#7D858C</p>
        </div>
      </td>
      <td className="font-medium">$16.00</td>
      <td>
        <div className="flex gap-6">
          <div className=" flex flex-row cart-item-quantity border h-10 w-16 bg-white border-black text-gray-500 justify-center items-center">
            <div className="flex flex-col flex-grow-0 justify-center ">
              <div className="w-8 h-5 flex border-b border-gray-200 justify-center items-center">
                <i
                  className="fa-solid  fa-plus fa-xs"
                  onClick={(e) => itemNum("add")}
                ></i>
              </div>
              <div className="w-8 h-5 flex justify-center items-center">
                <i
                  className="fa-solid  fa-minus fa-xs"
                  onClick={(e) => itemNum("minus")}
                ></i>
              </div>
            </div>
            <div className="w-8 h-10 flex justify-center items-center">
              {num}
            </div>
          </div>
          <div className="h-10 w-10 bg-nav-color rounded-full flex justify-center items-center hover:bg-hover hover:text-black text-white">
            <i class="fa-solid fa-trash-can "></i>
          </div>
        </div>
      </td>
      <td className="font-medium">{"$"+num*16.00+".00"}</td>
    </tr>
  );
};

export default CartTable;
