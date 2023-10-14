import React, { useEffect, useState } from "react";
import GroupTasks from "./components/GroupTasks";
import { groupsApi } from "./api";

const App = () => {
  const [groupsData, setGroupsData] = useState([]);

  const fetchData = async () => {
    await fetch(groupsApi)
      .then((response) => response.json())
      .then((data) => {
        setGroupsData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <GroupTasks data={groupsData} />
    </div>
  );
};

export default App;
