"use client"

import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='lg:mt-2 mt-4 lg:w-full w-[300px]'>
      <div className="w-full text-center mb-10 lg:text-2xl text-lg font-semibold lg:font-extrabold uppercase text-purple-600">
        <h2>Job Listings</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7 p-2 xl:p-0">
        {jobs.map((job) => (
          <Card key={job._id} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 relative flex-col items-start">
              <p className="text-tiny uppercase font-bold">{job.salary}</p>
              <small className="text-default-500">{job.type}</small>
              <h4 className="font-bold text-large">{job.title}</h4>
              <div className='absolute top-0 left-44'>
                <Button className='bg-purple-400'>save</Button>
              </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={job.image}
                width={270}
                height={100}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
