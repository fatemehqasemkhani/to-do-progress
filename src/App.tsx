import React, { useEffect, useState } from "react";
import GroupTasks from "./components/GroupTasks";
import { groupsApi } from "./api";

const App = () => {
  const [groupsData, setGroupsData] = useState([]);

  const fetchData = async () => {
    await fetch(groupsApi)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        setGroupsData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <GroupTasks data={groupsData} />
    </div>
  );
};

export default App;
