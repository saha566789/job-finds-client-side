"use client";

import React from 'react';
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/react";
import { useForm, Controller } from 'react-hook-form';
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const CreateForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const postInfo = {
      title: data?.title,
      description: data?.description,
      salary: data?.salary,
      image: data?.image,
      author: data?.author,
      type: data?.type,
      location: data?.location,
    };

    console.log(postInfo);
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postInfo),
      });

      if (res.status === 201) {
        toast.success('Job added successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        reset(); 
        router.push("/joblist"); 
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const type = [
    { key: "full-time", label: "Full-time" },
    { key: "contract", label: "Contract" },
    { key: "part-time", label: "Part-time" },
    { key: "internship", label: "Internship" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      <div className="flex flex-col sm:gap-10 gap-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <Input
            isRequired
            id="title"
            label="Job Title"
            {...register("title", { required: true })}
          />
          <Input
            isRequired
            id="author"
            label="Company Name"
            {...register("author", { required: true })}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Input
            isRequired
            id="salary"
            label="Salary"
            {...register("salary", {
              required: true,
              validate: (value) => {
                const parsedValue = parseFloat(value.replace(/,/g, ""));
                return !isNaN(parsedValue) || "Must be a number";
              },
            })}
          />
          <Input
            isRequired
            id="image"
            label="Image"
            {...register("image", { required: true })}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Controller
            name="type"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                isRequired
                items={type}
                label="Employment-Type"
                className="max-w-xs"
                {...field}
              >
                {type.map((item) => (
                  <SelectItem key={item.key} value={item.key}>
                    {item.label}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
          <Input
            isRequired
            id="location"
            label="Location"
            {...register("location", { required: true })}
          />
        </div>

        <Textarea
          isRequired
          labelPlacement="outside"
          placeholder="Enter your description"
          {...register("description", { required: true })}
          className="w-full"
        />
      </div>

      <input type="hidden" id="img" {...register("img")} />
      <Button className="mt-4 bg-purple-600 text-white" type="submit">
        Add job
      </Button>
    </form>
  );
};

export default CreateForm;
