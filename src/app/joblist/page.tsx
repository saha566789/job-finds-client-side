"use client"

import React, { useEffect, useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        if (res.ok) {
          const data = await res.json();
          setJobs(data);
        } else {
          console.error("Failed to fetch jobs");
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="max-w-[1450px] w-[90%] mx-auto min-h-screen mt-20">
      <div className="w-full mt-5 text-center">
        <Table aria-label="Job listings table">
          <TableHeader>
            <TableColumn>Job Title</TableColumn>
            <TableColumn>Author</TableColumn>
            <TableColumn>Location</TableColumn>
            <TableColumn>Type</TableColumn>
            <TableColumn>Salary</TableColumn>
            <TableColumn>Action</TableColumn>
          </TableHeader>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job._id}>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.author}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.type}</TableCell>
                <TableCell>{job.salary}</TableCell>
                <TableCell className='flex gap-2'>
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FiEdit />
              </span>
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <AiFillDelete />
              </span>
              </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default JobsPage;
