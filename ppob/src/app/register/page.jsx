import Link from "next/link";

const register = () => {
  return (
    <>
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
                  Lengkapi data untuk membuat akun
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
                        placeholder="masukkan email anda"
                        className="input input-bordered w-full max-w-none pl-12"
                      />
                    </div>

                    <div className="relative flex items-center  fill-gray-400 focus-within:text-gray-600 focus-within:fill-gray-600 mt-10">
                      <svg
                        width="20px"
                        className="w-5 h-5 absolute ml-4 "
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g clipPath="url(#clip0_15_82)">
                            <rect width="24" height="24" fill="white"></rect>
                            <g filter="url(#filter0_d_15_82)">
                              <path
                                d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
                                fill="#000000"
                              ></path>
                            </g>
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_15_82"
                              x="2.55444"
                              y="3.5"
                              width="18.8911"
                              height="19"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              ></feFlood>
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              ></feColorMatrix>
                              <feOffset dy="1"></feOffset>
                              <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_15_82"
                              ></feBlend>
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_15_82"
                                result="shape"
                              ></feBlend>
                            </filter>
                            <clipPath id="clip0_15_82">
                              <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </g>
                      </svg>
                      <input
                        type="text"
                        placeholder="name depan"
                        className="input input-bordered w-full max-w-none pl-12"
                      />
                    </div>

                    <div className="relative flex items-center  fill-gray-400 focus-within:text-gray-600 focus-within:fill-gray-600 mt-10">
                      <svg
                        width="20px"
                        className="w-5 h-5 absolute ml-4 "
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g clipPath="url(#clip0_15_82)">
                            <rect width="24" height="24" fill="white"></rect>
                            <g filter="url(#filter0_d_15_82)">
                              <path
                                d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
                                fill="#000000"
                              ></path>
                            </g>
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_15_82"
                              x="2.55444"
                              y="3.5"
                              width="18.8911"
                              height="19"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              ></feFlood>
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              ></feColorMatrix>
                              <feOffset dy="1"></feOffset>
                              <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_15_82"
                              ></feBlend>
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_15_82"
                                result="shape"
                              ></feBlend>
                            </filter>
                            <clipPath id="clip0_15_82">
                              <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </g>
                      </svg>
                      <input
                        type="text"
                        placeholder="nama belakang"
                        className="input input-bordered w-full max-w-none pl-12"
                      />
                    </div>

                    <div className="relative flex items-center  fill-gray-200 focus-within:text-gray-600 focus-within:fill-gray-400 mt-10">
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
                        placeholder="buat password"
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
                        placeholder="konfirmasi password"
                        className="input input-bordered w-full max-w-none pl-12"
                      />
                    </div>
                  </div>

                  <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-3 rounded w-full">
                    Registrasi
                  </button>
                </div>
              </form>

              <p className="text-center font-semibold">
                sudah punya akun? login{" "}
                <Link href="/" className="text-red-500 hover:text-red-700">
                  di sini
                </Link>
              </p>
            </div>
            <div className="w-6/12 hidden "></div>
            <img src="/Illustrasi Login.png" />
          </div>
        </div>
      </>
    </>
  );
};

export default register;
