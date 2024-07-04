"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { Select, SelectItem } from "@nextui-org/react";

const UpdateForm = ({ postId }) => {
  const { register, handleSubmit, setValue, control } = useForm();
  const [postInfo, setPostInfo] = useState({
    title: "",
    description: "",
    salary: "",
    image: "",
    type: "",
    location: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/jobs/${postId}`);
        if (res.ok) {
          const postData = await res.json();
          setPostInfo(postData);
          setValue("title", postData.title);
          setValue("description", postData.description);
          setValue("salary", postData.salary);
          setValue("image", postData.image);
          setValue("type", postData.type);
          setValue("location", postData.location);
        } else {
          console.error("Failed to fetch post");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [postId, setValue]);

  const handleUpdatePost = async (data) => {
    try {
      const res = await fetch(`/api/jobs/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        console.log("Post updated successfully");
      } else {
        console.error("Failed to update post");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const type = [
    { key: "full-time", label: "Full-time" },
    { key: "contract", label: "Contract" },
    { key: "part-time", label: "Part-time" },
    { key: "internship", label: "Internship" },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdatePost)} className="mt-10">
        <div className="flex flex-col sm:gap-10 gap-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              isRequired
              id="title"
              label="Job Title"
              defaultValue={postInfo.title}
              {...register("title", { required: true })}
            />
            <Input
              isRequired
              id="author"
              label="Company Name"
              defaultValue={postInfo.author}
              {...register("author", { required: true })}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              isRequired
              id="salary"
              label="Salary"
              defaultValue={postInfo.salary}
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
              defaultValue={postInfo.image}
              {...register("image", { required: true })}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <Controller
              name="type"
              control={control}
              defaultValue={postInfo.type}
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
              defaultValue={postInfo.location}
              {...register("location", { required: true })}
            />
          </div>

          <Textarea
            isRequired
            labelPlacement="outside"
            placeholder="Enter your description"
            defaultValue={postInfo.description}
            {...register("description", { required: true })}
            className="w-full"
          />
        </div>

        <Button className="mt-4 bg-purple-600 text-white" type="submit">
          Update job
        </Button>
      </form>
    </div>
  );
};

export default UpdateForm;
