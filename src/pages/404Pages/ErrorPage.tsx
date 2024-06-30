const ErrorPage = () => {
  return (
    <div className="my-8 mx-auto max-w-screen-lg px-4 md:px-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
          <h1 className="text-4xl font-bold text-pink-600 mb-5">
            404 - Page Not Found
          </h1>
          <p className="text-gray-txt mb-5 dark:text-white">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <a
            href="https://spacema-dev.com/elevate-free-tailwind-business-template/"
            className="bg-pink-600 hover:bg-secondary text-white font-semibold px-4 py-2 rounded-full inline-block"
          >
            Main page
          </a>
        </div>

        <div className="relative h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <img
            src="https://spacema-dev.com/elevate/assets/images/404.jpg"
            alt="Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
