"use client"

import React from 'react';
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
const jobsPage = () => {
  const jobs = [
    {
      "id": 1,
      "title": "Front-End Developer",
      "image": "https://i.ibb.co/GnWW3c2/hand-drawn-web-developers-23-2148819604.jpg",
      "salary": "$70,000",
      "type": "Full-time"
    },
    {
      "id": 2,
      "title": "Back-End Developer",
      "image": "https://i.ibb.co/jVChg2k/What-is-back-end-development-2.webp",
      "salary": "$80,000",
      "type": "Part-time"
    },
    {
      "id": 3,
      "title": "Full-Stack Developer",
      "image": "https://i.ibb.co/G2q2hHK/untitlsssssed.png",
      "salary": "$90,000",
      "type": "Contract"
    },
    {
      "id": 4,
      "title": "UI/UX Designer",
      "image": "https://i.ibb.co/M6k7trb/blog-ui-ux-150223.jpg",
      "salary": "$65,000",
      "type": "Internship"
    },
    {
      "id": 5,
      "title": "Data Scientist",
      "image": "https://i.ibb.co/8dqtxHP/images-3.jpg",
      "salary": "$95,000",
      "type": "Full-time"
    },
    {
      "id": 6,
      "title": "DevOps Engineer",
      "image": "https://i.ibb.co/MRYvGCP/Dev-Ops-768x384.png",
      "salary": "$85,000",
      "type": "Contract"
    }
  ]

  return (
    <div className='lg:mt-2 mt-4  lg:w-full w-[300px]'>
      <div className="w-full text-center mb-10 lg:text-2xl text-lg font-semibold lg:font-extrabold uppercase text-purple-600">
        <h2>Job Listings</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-7 p-2 xl:p-0  ">
        {
          jobs.map((job) => {
            return (
              <Card key={job.id} className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 relative flex-col items-start">
                  <p className="text-tiny uppercase font-bold">{job.salary}</p>
                  <small className="text-default-500">{job.type}</small>
                  <h4 className="font-bold text-large">{job.title}</h4>
                  <div className='absolute top-0 left-44'>
                    <Button className='bg-purple-400'>
                save
                    </Button>
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
            )

          })
        }
      </div>
    </div>
  );
};

export default jobsPage;