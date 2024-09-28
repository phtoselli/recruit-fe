import { useEffect, useState } from "react";
import { getJobs } from "../../service/job";
import { Job } from "../../utils/types/job";

export default function List() {
  const [jobsList, setJobsList] = useState<Job[] | null>(null);

  useEffect(() => {
    getJobs().then((data: any) => {
      setJobsList(data);
    });
  }, []);

  return (
    <div>
      <p>List</p>
      {jobsList?.map((i) => {
        return <p>{i.name}</p>;
      })}
    </div>
  );
}
