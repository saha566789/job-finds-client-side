"use client"

import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
const SearchFrom = () => {
    return (
        <>
            <div className="bg-gray-50/50 shadow rounded-md p-5 w-full">
                <form>
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-12 lg:col-span-3">
                            <Input
                                placeholder="Job Title"
                                variant="bordered"

                                className="max-w-xs"
                            />
                        </div>
                        <div className="col-span-12 lg:col-span-3">
                            <Input

                                placeholder="location"
                                variant="bordered"

                                className="max-w-xs"
                            />
                        </div>
                        <div className="col-span-12 lg:col-span-3">
                            <Input
                                placeholder="company"
                                variant="bordered"

                                className="max-w-xs"
                            />
                        </div>
                        <div className="col-span-12 lg:col-span-3">
                            <Button className="bg-purple-500 text-white">
                            Search Jobs
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SearchFrom;