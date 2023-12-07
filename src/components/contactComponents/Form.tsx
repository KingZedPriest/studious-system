const Form = () => {
  return (
    <main className="py-2 px-4 sm:px-6 lg:px-8 mt-10 text-black">
      <p className="text-center font-bold  text-sm sm:text-base md:text-lg lg:text-xl">
        Contact us
      </p>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-10 text-center">
        Drop us a line with any questions, inquiries or business proposals.
      </p>
      <form className="mt-10">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="firstName" className="text-xs sm:text-sm md:text-base font-medium cursor-pointer">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="border border-black rounded-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-3 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <label htmlFor="lastName" className="text-xs sm:text-sm md:text-base font-medium cursor-pointer">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="border border-black rounded-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-3 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <label htmlFor="email" className="text-xs sm:text-sm md:text-base font-medium cursor-pointer">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-black rounded-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-3 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <label htmlFor="telPhone" className="text-xs sm:text-sm md:text-base font-medium cursor-pointer">Phone</label>
          <input
            type="tel"
            name="telPhone"
            id="telPhone"
            className="border border-black rounded-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-3 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <label htmlFor="message" className="text-xs sm:text-sm md:text-base font-medium cursor-pointer">Leave us a message</label>
          <textarea name="message" className="resize-none border border-black rounded-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-3 focus:outline-none"></textarea>
        </div>
        <input type="submit" value="Submit" className="bg-black w-full py-3 md:py-4 text-center hover:bg-gray-900 duration-500 mt-8 rounded-xl text-white cursor-pointer"/>
      </form>
    </main>
  );
};

export default Form;
