import SmallHeader from "@/components/shared/SmallHeader";
import { getServicesDetails } from "@/services/getServices";
import React from "react";

const CheckoutPage = async ({ params }) => {
  const details = await getServicesDetails(params.id);
  const { _id, title, img, price, description, facility } = details.service;

  return (
    <div>
      <SmallHeader title={"Check Out"} text={"Checkout"} />

      <div className="my-16 py-10 bg-[#F3F3F3]">
        <div className="max-w-screen-xl mx-auto">
          <form className="max-w-screen-md mx-auto">
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
                  placeholder="First Name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered"
                  required
                  placeholder="Last Name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Phone</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered"
                  required
                  placeholder="Your Phone"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered"
                  required
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                type="text"
                name="name"
                className="input input-bordered textarea h-20"
                required
                placeholder="Your Message"
              ></textarea>
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
    </div>
  );
};

export default CheckoutPage;
