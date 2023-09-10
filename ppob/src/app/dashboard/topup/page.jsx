import Profile from "@/app/components/profile";
import Image from "next/image";

export default function Topup() {
  return (
    <>
      <Profile />

      <p>Silahkan masukan</p>
      <p className="font-semibold text-2xl">Nominal Top Up</p>

      <div className="flex mb-5 mt-5">
        <div className="flex flex-row w-full">
          <div className="w-8/12 ">
            <form className="mr-10">
              <div className="w-full max-w-full">
                <div className="form-control w-full max-w-none">
                  <div className="relative flex items-center  fill-gray-100 focus-within:text-gray-600 focus-within:fill-gray-200 mb-5">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 absolute ml-4 "
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M13 14.0008L7 14M13 14.0008L10.5 11.5M13 14.0008L10.5 16.5M21 12V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H3M21 12V16M21 12H19C17.8954 12 17 12.8954 17 14C17 15.1046 17.8954 16 19 16H21M21 16V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8V8M18 8V7.2C18 6.0799 18 5.51984 17.782 5.09202C17.5903 4.71569 17.2843 4.40973 16.908 4.21799C16.4802 4 15.9201 4 14.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V8"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <input
                      type="number"
                      placeholder="Masukkan nominal topup"
                      className="input input-bordered w-full max-w-none pl-12"
                    />
                  </div>
                </div>

                <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-3 rounded w-full">
                  Masuk
                </button>
              </div>
            </form>
          </div>

          <div className="w-4/12 ">
            <div className="flex flex-wrap justify-between text-sm text-center">
              <div className="w-32">
                <button className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Rp. 10.000
                </button>
              </div>
              <div className="w-32">
                <button className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Rp. 20.000
                </button>
              </div>
              <div className="w-32">
                <button className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Rp. 50.000
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-between text-sm text-center pt-5">
              <div className="w-32">
                <button className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Rp. 100.000
                </button>
              </div>
              <div className="w-32">
                <button className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Rp. 250.000
                </button>
              </div>
              <div className="w-32">
                <button className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Rp. 500.000
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
