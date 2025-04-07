import React from "react";

export function AddNewMovie() {
  return (
    <>
      <main className="w-full h-full bg-(--secondary-color)/20 py-13">
        <form className="bg-white w-10/11 py-9.5 px-6 rounded-[10px] mx-auto md:px-0 md:py-13 md:w-3/5">
          <h2 className="text-2xl font-bold md:mx-10">Add New Movie</h2>
          <section className="md:mx-15 mt-10">
            <div className="flex flex-col">
              <label className="text-16px text-[#4E4B66] mb-3.5">
                Upload Image
              </label>

              <button
                type="submit"
                className="py-3 w-1/2 bg-(--primary-color) cursor-pointer hover:scale-[1.05] text-[12px] text-white font-bold rounded-[10px] md:w-28"
              >
                Upload
              </button>
            </div>
            <div className="flex flex-col w-full mt-6.25">
              <label
                htmlFor="movieName"
                className="text-16px text-[#4E4B66] mb-3.5"
              >
                Movie Name
              </label>
              <input
                type="text"
                name="movieName"
                id="movieName"
                className="h-16 bg-[#FCFDFE] rounded-[10px] outline-none border border-[#dedede] indent-9 text-[16px]"
              />
            </div>
            <div className="flex flex-col w-full mt-6.25">
              <label
                htmlFor="category"
                className="text-16px text-[#4E4B66] mb-3.5"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                className="h-16 bg-[#FCFDFE] rounded-[10px] outline-none border border-[#dedede] indent-9 text-[16px]"
              />
            </div>
            <div className="flex flex-col gap-11.25 w-full mt-6.25 md:flex-row">
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="releaseDate"
                  className="text-16px text-[#4E4B66] mb-3.5"
                >
                  Release date
                </label>
                <input
                  type="date"
                  name="releaseDate"
                  id="releaseDate"
                  className="h-16 bg-[#FCFDFE] rounded-[10px] outline-none border border-[#dedede] px-9 text-[16px]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="duration"
                  className="text-16px text-[#4E4B66] mb-3.5"
                >
                  Duration (hour/ minute)
                </label>
                <div className="flex flex-col gap-6.25 md:flex-row">
                  <input
                    type="text"
                    name="duration"
                    id="duration"
                    className="h-16 bg-[#FCFDFE] rounded-[10px] outline-none border border-[#dedede] indent-9 text-[16px]"
                  />
                  <input
                    type="text"
                    name="duration"
                    id="duration"
                    className="h-16 bg-[#FCFDFE] rounded-[10px] outline-none border border-[#dedede] indent-9 text-[16px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-6.25">
              <label
                htmlFor="direct"
                className="text-16px text-[#4E4B66] mb-3.5"
              >
                Director Name
              </label>
              <input
                type="text"
                name="direct"
                id="direct"
                className="h-16 bg-[#FCFDFE] rounded-[10px] outline-none border border-[#dedede] indent-9 text-[16px]"
              />
            </div>
            <div className="flex flex-col w-full mt-6.25">
              <label htmlFor="cast" className="text-16px text-[#4E4B66] mb-3.5">
                Cast
              </label>
              <input
                type="text"
                name="cast"
                id="cast"
                className="h-16 bg-[#FCFDFE] rounded-[10px] outline-none border border-[#dedede] indent-9 text-[16px]"
              />
            </div>
            <div className="flex flex-col w-full mt-6.25">
              <label
                htmlFor="synopsis"
                className="text-16px text-[#4E4B66] mb-3.5"
              >
                Synopsis
              </label>

              <textarea
                name="synopsis"
                id="synopsis"
                cols="30"
                rows="10"
                className="bg-[#FCFDFE] rounded-[10px] outline-none border border-[#dedede] p-2 text-[16px]"
              ></textarea>
            </div>
            <div className="flex flex-col w-full mt-6.25">
              <label
                htmlFor="location"
                className="text-16px text-[#4E4B66] mb-3.5"
              >
                Add location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="h-16 bg-[#FCFDFE] rounded-[10px] outline-none border border-[#dedede] indent-9 text-[16px]"
              />
            </div>
            <div className="flex flex-col w-full mt-6.25">
              <label
                htmlFor="dateShow"
                className="text-16px text-[#4E4B66] mb-3.5"
              >
                Set Date & Time
              </label>
              <input
                type="date"
                name="dateShow"
                id="dateShow"
                className="h-12 w-3/10 bg-[#FCFDFE] rounded-[10px] outline-none border border-[#dedede] px-9 text-[16px]"
              />
            </div>
            <div className="flex items-center gap-7.5 w-full mt-6.25">
              <button className="px-10 border rounded-[5px] border-(--primary-color) text-[30px] text-(--primary-color) cursor-pointer hover:scale-[1.05]">
                +
              </button>
              <button className="text-[14px] font-semibold cursor-pointer hover:scale-[1.05]">
                08:30 am
              </button>
              <button className="text-[14px] font-semibold cursor-pointer hover:scale-[1.05]">
                08:30 am
              </button>
            </div>
            <div className="flex flex-col w-full mt-6.25 h-1 border-b border-(--secondary-color)/60" />
            <div className="flex flex-col w-full mt-6.25">
                <button type="submit" className="py-4.5 text-[16px] text-white font-bold bg-(--primary-color) rounded-[5px] cursor-pointer hover:scale-[1.05]">Save Movie</button>
            </div>
          </section>
        </form>
      </main>
    </>
  );
}
