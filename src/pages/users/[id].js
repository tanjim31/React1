import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Details = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    if (id != undefined) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUserDetails(data));
    }
  }, [id]);

  return (
    <div>
      {id != null && (
        <>
          <h1>{userDetails.name}</h1>
          <p>{userDetails.email}</p>
          <p>{userDetails.username}</p>
        </>
      )}
    </div>
  );
};

export default Details;
