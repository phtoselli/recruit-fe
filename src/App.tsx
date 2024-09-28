import { Button } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getJobs } from "./service/job";

export default function App() {
  const [jobsList, setJobsList] = useState(null);

  useEffect(() => {
    getJobs()
      .then((result: any) => {
        setJobsList(result);
      });
  }, [])

  console.log(jobsList);

  return (
    <div>
      <Link to="/admin">
        <Button>Ir para Admin</Button>
      </Link>
      <Link to="/client">
        <Button>Ir para Client</Button>
      </Link>
    </div>
  );
}
