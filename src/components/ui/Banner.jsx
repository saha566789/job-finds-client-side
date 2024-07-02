import SearchFrom from "@/components/ui/SearchFrom"

const Banner = () => {
    return (
        <div 
            id="home"
            className="h-screen  lg:w-full w-[320px] bg-cover mt-[-127px]"
            style={{ backgroundImage: "url(/hero.png)" }}
        >
            <div className="flex flex-col h-full items-center justify-center pt-[82px] gap-10 md:gap-20 w-[90%] mx-auto max-w-[1450px]">
                <div className="text-center flex flex-col gap-3">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black">
                        Land The{" "}
                        <span className="text-purple-600 font-extrabold">
                            Dream Job
                        </span>
                        , You Deserve
                    </h1>
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-thin">
                        100,000 jobs listed here! Your dream job is waiting
                    </span>
                </div>
                <SearchFrom />
            </div>
        </div>
    );
};

export default Banner;
