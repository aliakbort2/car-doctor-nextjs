"use client";
import SmallHeader from "@/components/shared/SmallHeader";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const session = useSession();

  const loadData = async () => {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/${session?.data?.user?.email}`
    );
    const data = await resp.json();
    setBookings(data.myBookings);
  };

  // delete func
  const handleDelete = async (id) => {
    const deleted = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/booking/${id}`,
      {
        method: "DELETE",
      }
    );
    const resp = await deleted.json();
    console.log(resp);
    if (resp?.response?.deletedCount > 0) {
      toast.success(resp.message);
      loadData();
    }
  };

  // useEffect(() => {
  //   loadData();
  // }, [session]);

  useEffect(() => {
    loadData();
  }, [session]);

  return (
    <div>
      <SmallHeader title={"My Bookings"} text={"My Bookings"} />
      <div className="my-10 max-w-screen-xl mx-auto">
        <mark>
          <h2 className="text-2xl font-bold my-3">My bookings Details</h2>
        </mark>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookings?.map((booking, idx) => (
                <tr key={booking._id}>
                  <th>{idx + 1}</th>
                  <td>{booking.serviceTitle}</td>
                  <td>$ {booking.price}</td>
                  <td>{booking.date}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <Link href={`/my-bookings/update/${booking._id}`}>
                        <button className="btn btn-primary text-white">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(booking._id)}
                        className="btn btn-error text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
