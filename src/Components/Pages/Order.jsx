import React from 'react';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from '../../Context';
const Order = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
const context  = useGlobalContext();
const products = context.Cart;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='flex items-center ml-5 justify-around '>
      {/* <h1 className='text-3xl w-full border text-center'>Order</h1> */}
      <div> 
      <div className="w-[30vw]  border border-black h-[70vh] overflow-y-auto bg-slate-50 ">
        <ul>
          {products.map((items)=>(
            <li className="flex items-center justify-around border m-3 bg-white shadow-md z-10">
               <div>
                  <div
                    style={{
                      backgroundImage: `url(${items.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "90px",
                      width: "90px",
                    }}
                  ></div>
                  {items.name}
                </div>
                <h1>{items.price}/-</h1>
            </li>
          ))}
        </ul>

      </div>
          <h1 className='text-3xl w-full border text-center rounded text-white bg-[#DB4444] mt-2 '>Total : {products.reduce((acc, item) => acc + item.price*item.quantity, 0)}/-</h1>
          </div>

    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Billing Details</h2>

      {/* First Name */}
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name *</label>
        <input
          id="firstName"
          type="text"
          {...register('firstName', { required: 'First Name is required' })}
          className={`w-full px-3 py-2 border rounded-lg ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
      </div>

    
      <div className="mb-4">
        <label htmlFor="companyName" className="block text-gray-700 mb-2">Company Name</label>
        <input
          id="companyName"
          type="text"
          {...register('companyName')}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

     
      <div className="mb-4">
        <label htmlFor="streetAddress" className="block text-gray-700 mb-2">Street Address *</label>
        <input
          id="streetAddress"
          type="text"
          {...register('streetAddress', { required: 'Street Address is required' })}
          className={`w-full px-3 py-2 border rounded-lg ${errors.streetAddress ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.streetAddress && <p className="text-red-500 text-sm mt-1">{errors.streetAddress.message}</p>}
      </div>

     
      <div className="mb-4">
        <label htmlFor="apartment" className="block text-gray-700 mb-2">Apartment, Floor, etc. (Optional)</label>
        <input
          id="apartment"
          type="text"
          {...register('apartment')}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

     
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 mb-2">Town/City *</label>
        <input
          id="city"
          type="text"
          {...register('city', { required: 'Town/City is required' })}
          className={`w-full px-3 py-2 border rounded-lg ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">Phone Number *</label>
        <input
          id="phoneNumber"
          type="text"
          {...register('phoneNumber', { required: 'Phone Number is required' })}
          className={`w-full px-3 py-2 border rounded-lg ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
      </div>

      {/* Email Address */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
        <input
          id="email"
          type="email"
          {...register('email', { required: 'Email is required' })}
          className={`w-full px-3 py-2 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Save Info */}
      <div className="mb-4 flex items-center">
        <input
          id="saveInfo"
          type="checkbox"
          {...register('saveInfo')}
          className="mr-2"
        />
        <label htmlFor="saveInfo" className="text-gray-700">Save this information for faster checkout next time</label>
      </div>

      <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
        Place Order
      </button>
    </form>

    </div>
  );
};

export default Order;
