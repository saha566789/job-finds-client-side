import React from 'react';
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/react";
import { useForm } from 'react-hook-form';
import { Select, SelectItem } from "@nextui-org/react";



const CreateForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            name: "",
            author: "",
            description: "",
            location: "",
            img: "",
            employmentType: "",
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    const type = [
        { key: "full-time", label: "Full-time" },
        { key: "contract", label: "Contract" },
        { key: "part-time", label: "Elephant" },
        { key: "internship", label: "Internship" },

    ];

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
                <div className="flex flex-col sm:gap-10 gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                        <Input
                            id="name"
                            label="Job Title"

                            {...register("title", { required: true })}
                        />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                        <Input
                            id="author"
                            label="Company Name"
                            {...register("author", { required: true })}
                        />
                        {errors.author && <span className="text-red-500">This field is required</span>}
                    </div>
                    {/* Uncomment and use these inputs as needed */}
                    <div className="grid sm:grid-cols-2 gap-5">

                        <Input
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
                        {errors.salary && <span className="text-red-500">{errors.salary.message}</span>}
                        <Input

                            type="file"
                            onChange={(e) => setFile(e.target.files?.[0])}
                            id="file"
                        />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">

                        <div>
                            <Select
                                items={type}
                                label="Employment-Type"

                                className="max-w-xs"
                                {...register("type", { required: true })}
                            >
                                {(type) => <SelectItem>{type.label}</SelectItem>}
                            </Select>
                            {errors.employmentType && <span className="text-red-500">This field is required</span>}

                        </div>
                        <Input
                            id="location"
                            label="Location"

                            {...register("location", { required: true })}
                        />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>
                    <Textarea
                        isRequired
                        labelPlacement="outside"
                        placeholder="Enter your description"
                        className="w-full"
                        register={{
                            ...register("description", {
                              required: true,
                            }),
                          }}
                    />
                    {errors.description && <span className="text-red-500">This field is required</span>}
                </div>
                <input type="hidden" id="img" {...register("img")} />
                <Button color="primary" className='mt-4' type="submit">
                    Submit
                </Button>
            </form>
        </>
    );
};

export default CreateForm;
