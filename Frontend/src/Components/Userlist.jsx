import { useEffect, useState } from "react";

const UserList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((result) => {
        console.log("RESULT:", result);
        setData(result);
      });
  }, []);

  return (
    <div>
      <h2>Backend Response</h2>

      {data ? (
        <>
          <p>{data.message}</p>
          <ul>
            {data.users.map((u, i) => (
              <li key={i}>{u}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserList;
