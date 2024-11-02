const Frequently = () => {
  return (
    <section className="my-12">
      <div className="w-[90%] mx-auto max-w-[1600px]">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl my-8">
          Your Safety Matters
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-12">
          <div className="">
            <h1 className="font-bold my-4 text-xl">Safety features</h1>
            <p className="text-base md:text-lg">
              Tell your loved ones where you are. Get help with the tap of a
              button. Technology makes travel safer than ever before.
            </p>
          </div>
          <div className="">
            <h1 className="font-bold my-4 text-xl">An inclusive community</h1>
            <p className="text-base md:text-lg">
              We are millions of riders and drivers who share Community
              Guidelines and depend on one another to do the right thing.
            </p>
          </div>
          <div className="">
            <h1 className="font-bold my-4 text-xl">Help if you need it</h1>
            <p className="text-base md:text-lg">
              Get 24/7 support in the app for any questions or safety concerns
              you might have.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frequently;
