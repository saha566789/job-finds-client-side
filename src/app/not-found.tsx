import Link from "next/link";


const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
      <Link href="/">
        <p className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Go back home
        </p>
      </Link>
    </div>
  );
};

export default Custom404;