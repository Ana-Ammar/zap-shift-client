import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router";
import { FaUserShield } from "react-icons/fa6";
import { BsFillShieldSlashFill } from "react-icons/bs";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // Role change button
  const handleRoleBtn = (user) => {
    const roleInfo = user.role === "user" ? { role: "admin" } : { role: "user" };
    axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {
        console.log(res.data)
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: `${user.displayName} marked as ${user.role === "user" ? "an admin" : "a user"}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div className="bg-base-100 p-8 m-4 rounded-lg">
      <h1 className="text-secondary text-5xl font-extrabold mb-8">
        Payment History
      </h1>

      {/*Data Table*/}
      <div className="overflow-x-auto bg-white rounded-xl shadow p-6">
        <table className="table w-full">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th>#</th>
              <th>User Image</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Role</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.createdAt.slice(0, 10)}</td>
                <td className="">
                  {user.role === "user" ? (
                    <button 
                    onClick={() => handleRoleBtn(user)}
                    className="button">
                      <FaUserShield />
                    </button>
                  ) : (
                    <button 
                    className="button bg-red-200! text-red-600!"
                    onClick={() => handleRoleBtn(user)}
                    >
                      <BsFillShieldSlashFill />{" "}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
