import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { Loader } from "../../Loading/Loading";
import { AuthContext } from "../../UserContext/UseContext";


const Cart = () => {
  const { user } = useContext(AuthContext);
  const { data: bookingData = [], isLoading, refetch } = useQuery({
    queryKey: ["bookingData", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookingData?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  const deleteButton = (data) => {
    const aggree = window.confirm(`Are you sure to delete ${data.name}`);
    if (aggree) {
      fetch(`http://localhost:5000/delete/${data._id}`, {
        method: "DELETE",
      })
        .then((result) => {
          toast.success("deleted");
          refetch();
        })
        .catch((error) => {});
    }
  };
 

  return (
   

    <div className="my-8 container mx-auto">
      <div className="overflow-x-auto ">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookingData?.map((booking, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12">
                      <img
                        src={booking?.picture}
                        className="rounded-full"
                        alt=""
                      />
                    </div>
                  </div>
                </td>
                <td>{booking?.name}</td>
                <td>{booking?.email}</td>
                <td>${booking?.balance}</td>
                <td className="items-center flex mt-6">
                <button className="btn bg-sky-300 hover:bg-sky-300  text-black border-0 mx-3 btn-sm">
                    pay
                  </button>

                  <button onClick={()=>deleteButton(booking)} className="  text-black border-0">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
