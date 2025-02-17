import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import CartTable from "../Components/CartTable";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <BreadCrumb name={"Your Shopping Cart"} />
      <div className="p-6">
        <div className="cart-table">
          <table className="w-full">
            <thead>
              <tr className="text-gray-500 text-sm text-left">
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <CartTable />
              <CartTable />
              <CartTable />
              <CartTable />
            </tbody>
          </table>
        </div>
        <div className="py-10">
          <Link className="py-3 px-6 bg-nav-color text-white rounded-full  hover:bg-hover hover:text-black">
            Continue Shopping
          </Link>
        </div>
        <div className="flex justify-between cart-checkout">
          <div>
            <p className="text-gray-600 leading-10">Other special Instruction</p>
            <textarea name="instructions" id="instructions" cols="30" rows="05" className="bg-gray-100 border border-black"></textarea>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-lg text-gray-600">Subtotal <span className="ml-8">$236.00</span></p>
            <p className="my-6 text-base text-gray-600">Taxes and shipping calculated at checkout</p>
            <Link className="py-3 px-6 bg-nav-color w-full text-center text-white rounded-full  hover:bg-hover hover:text-black">
            Check Out
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
