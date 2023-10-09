import Link from "next/link";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
      <h1>Hello From Users Route </h1>
      <div className="row">
        {users.map((value, index) => (
          <div className="col-md-4" key={index}>
            <div className="border my-3 p-3">
              <p> {value.name} </p>
              <p> {value.email} </p>
              <p> {value.username} </p>
              <p> {value.phone} </p>
              <Link href={`/users/${value.id}`} className="btn btn-primary">
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
