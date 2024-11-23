"use client";
import SmallHeader from "@/components/shared/SmallHeader";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const MyBookingsUpdatePage = ({ params }) => {
  const { data } = useSession();
  const [booking, setBooking] = useState([]);

  const actualParams = React.use(params);
  const { id } = actualParams;

  const loadBooking = async () => {
    const bookingDetail = await fetch(
      `http://localhost:3000/my-bookings/api/booking/${id}`
    );

    console.log(bookingDetail);

    const data = await bookingDetail.json();
    setBooking(data.data);
  };

  useEffect(() => {
    loadBooking();
  }, [params]);

  //update
  const handleUpdateBooking = async (event) => {
    event.preventDefault();

    const updatedBooking = {
      date: event.target.date.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
    };

    const resp = await fetch(
      `http://localhost:3000/my-bookings/api/booking/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedBooking),
      }
    );

    if (resp.status === 200) {
      toast.success("Updated Successfully");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <SmallHeader title={"Update Service"} text={"Update"} />

      <div className="my-16 py-10 bg-[#F3F3F3]">
        <form
          onSubmit={handleUpdateBooking}
          className="max-w-screen-md mx-auto"
        >
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
                defaultValue={booking?.date}
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
                defaultValue={booking?.price}
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
                defaultValue={booking?.phone}
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
                defaultValue={booking?.address}
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Update Service"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyBookingsUpdatePage;
