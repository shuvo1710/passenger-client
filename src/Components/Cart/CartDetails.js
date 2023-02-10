import React from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { AuthContext } from "../../UserContext/UseContext";
import HolidayStar from "../Home/HolidayStar";

const CartDetails = ({ booking }) => {
  const { refetch } = useContext(AuthContext);
  const {
    day,
    details,
    name,
    night,
    picture,
    price,
    rating,
    address,
    _id,
    balance,
  } = booking;
 
  return (
   
      <tbody>
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
      </tbody>
    
  );
};

export default CartDetails;
