"use client";
import SmallHeader from "@/components/shared/SmallHeader";
import { getServicesDetails } from "@/services/getServices";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutPage = ({ params }) => {
  const { data } = useSession();
  const [service, setService] = useState();

  const actualParams = React.use(params);
  const { id } = actualParams;

  const loadService = async () => {
    const details = await getServicesDetails(id);
    setService(details.service);
  };

  const { _id, title, img, price, description, facility } = service || {};

  const handleBooking = async (event) => {
    event.preventDefault();

    const newBooking = {
      email: data?.user?.email,
      name: data?.user?.name,
      address: event.target.address.value,
      phone: event.target.phone.value,
      date: event.target.date.value,
      serviceTitle: title,
      serviceID: _id,
      price: price,
    };

    console.log("new booking:", newBooking);

    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/api/new-booking`,
      {
        method: "POST",
        body: JSON.stringify(newBooking),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const response = await resp?.json();
    toast.success(response.message);
    event.target.reset();
  };

  useEffect(() => {
    loadService();
  }, [params]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <SmallHeader title={"Check Out"} text={"Checkout"} />

      <div className="my-16 py-10 bg-[#F3F3F3]">
        <form onSubmit={handleBooking} className="max-w-screen-md mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                required
                defaultValue={data?.user?.name}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
                defaultValue={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                required
                defaultValue={data?.user?.email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Amount</span>
              </label>
              <input
                type="number"
                name="amount"
                readOnly
                className="input input-bordered"
                required
                defaultValue={price}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
