import Image from "next/image";
import Link from "next/link";

const home = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex flex-row w-full">
          <div className="flex flex-1 flex-col max-w-full justify-center px-24 relative">
            <div className="absolute top-0 right-0 h-16 w-16 pt-10  justify-center items-center"></div>
            <div className="mb-7">
              <div className="normal-case text-xl flex justify-center items-center mb-8">
                <img src="/logo.png" className="pr-1 scale-75" />
                <p className="font-semibold">SIMS PPOB</p>
              </div>

              <p className="px-24 normal-case text-3xl font-semibold flex justify-center items-center text-center">
                Masuk atau buat akun untuk memulai
              </p>
            </div>

            <form className="mb-8">
              <div className="w-full max-w-full">
                <div className="form-control w-full max-w-none">
                  <div className="relative flex items-center  fill-gray-400 focus-within:text-gray-600 focus-within:fill-gray-600 mt-10">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 absolute ml-4 "
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M12,1a11,11,0,0,0,0,22,1,1,0,0,0,0-2,9,9,0,1,1,9-9v2.857a1.857,1.857,0,0,1-3.714,0V7.714a1,1,0,1,0-2,0v.179A5.234,5.234,0,0,0,12,6.714a5.286,5.286,0,1,0,3.465,9.245A3.847,3.847,0,0,0,23,14.857V12A11.013,11.013,0,0,0,12,1Zm0,14.286A3.286,3.286,0,1,1,15.286,12,3.29,3.29,0,0,1,12,15.286Z"></path>
                      </g>
                    </svg>
                    <input
                      type="text"
                      placeholder="Masukkan email anda"
                      className="input input-bordered w-full max-w-none pl-12"
                    />
                  </div>

                  <div className="relative flex items-center  fill-gray-200 focus-within:text-gray-600 focus-within:fill-gray-400 mt-10 mb-10">
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
                        <path
                          d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M6 10V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V10"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M8 16H8.009M11.991 16H12M15.991 16H16"
                          stroke="#1C274C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    <input
                      type="password"
                      placeholder="Masukkan password anda"
                      className="input input-bordered w-full max-w-none pl-12"
                    />
                  </div>
                </div>

                <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-3 rounded w-full">
                  Masuk
                </button>
              </div>
            </form>

            <p className="text-center font-semibold">
              belum punya akun? registrasi{" "}
              <Link
                href="/register"
                className="text-red-500 hover:text-red-700"
              >
                di sini
              </Link>
            </p>
          </div>

          <div className="w-6/12 hidden "></div>
          <img src="/Illustrasi Login.png" />
        </div>
      </div>
    </>
  );
};

export default home;
