import React from "react";

const UserInfo = ({ customer }) => {
  console.log(customer);
  return (
    <div className="h-400px dark:bg-black dark:text-white">
      <div className="grid grid-cols-3">
        <div className="col border rounded-l-lg p-5">
          <h1 className="text-2xl font-bold my-3 border-b">Customer Name</h1>
          <h1 className="text-2xl font-bold my-3 border-b">Mobile Number</h1>
          <h1 className="text-2xl font-bold my-3 border-b">Credit Amount</h1>
          <h1 className="text-2xl font-bold my-3 border-b">Credit Type</h1>
          <h1 className="text-2xl font-bold my-3 border-b">Interest rate</h1>
        </div>
        <div className="col border-b border-t border-r p-5">
          <h1 className="text-2xl font-bold my-3 border-b">
            {customer.customerName?.toUpperCase()}
          </h1>
          <h1 className="text-2xl my-3 border-b">
            +91 {customer.mobileNumber}
          </h1>
          <h1 className="text-2xl my-3 border-b">
            &#8377;. {customer.creditAmount?.toFixed(2)}
          </h1>
          <h1 className="text-2xl my-3 border-b">{customer.creditType}</h1>
          <h1 className="text-2xl my-3 border-b">
            {customer.interestRate * 100} %
          </h1>
        </div>
        <div className="col border-t border-b border-r rounded-r-lg">
          <img
            className="dark:bg-white"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png"
            alt=""
            width={250}
          />
          <p className="text-gray-600 text-center ">Scan to Pay</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
