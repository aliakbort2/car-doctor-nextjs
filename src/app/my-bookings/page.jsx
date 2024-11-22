import SmallHeader from "@/components/shared/SmallHeader";
import React from "react";

const MyBookingsPage = () => {
  return (
    <div>
      <SmallHeader title={"My Bookings"} text={"My Bookings"} />
      <div className="my-10 max-w-screen-xl mx-auto">
        <p>My bookings page</p>

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
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Delete/updated</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
