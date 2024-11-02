import iphone from "../../images/iphone.png";
import Ellispe from "../../images/dot.png";

const Parcel = () => {
  return (
    <section>
      <div className="w-[90%] mx-auto max-w-[1600px]">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="">
            <img src={iphone} alt="phonemap" className="-ml-4 lg:-ml-16" />
          </div>
          <div className="sm:w-full md:w-3/4 lg:w-2/5 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl">We Are Best</h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl">
              Parcel Service Ever
            </h1>
            <p className="my-4 text-base md:text-lg">
            At Delicart, we make deliveries effortless, ensuring your packages are transported with ease and efficiency. 
            With real-time tracking, you can trust us to handle deliveries smoothly, prioritizing safety, speed, and reliability 
            for a seamless experience.
            </p>
            <div className="flex justify-between">
              <div className="space-y-4">
                <div className="flex items-center">
                  <img
                    src={Ellispe}
                    alt="rounded-button"
                    width="15"
                    height="15"
                  />
                  <p className="ml-2 text-base md:text-lg">
                    Total free account
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src={Ellispe}
                    alt="rounded-button"
                    width="15"
                    height="15"
                  />
                  <p className="ml-2  text-base md:text-lg">Easy to use</p>
                </div>
                <div className="flex items-center">
                  <img
                    src={Ellispe}
                    alt="rounded-button"
                    width="15"
                    height="15"
                  />
                  <p className="ml-2 text-base md:text-lg">100% guaranteed</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <img
                    src={Ellispe}
                    alt="rounded-button"
                    width="15"
                    height="15"
                  />
                  <p className="text-lg ml-2 md:text-xl">
                    Cheap Delivery Price
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src={Ellispe}
                    alt="rounded-button"
                    width="15"
                    height="15"
                  />
                  <p className="ml-2 text-base md:text-lg">Safe & Secure</p>
                </div>
                <div className="flex items-center">
                  <img
                    src={Ellispe}
                    alt="rounded-button"
                    width="15"
                    height="15"
                  />
                  <p className="ml-2 text-base md:text-lg">
                    Total free account
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parcel;
