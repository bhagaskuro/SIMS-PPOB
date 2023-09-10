import Image from "next/image";

export default function Profile() {
  return (
    <>
      <div className="flex mb-10">
        <div className="flex w w-full">
          <div className="w-6/12 ">
            <Image
              src={"/Profile Photo.png"}
              width={80}
              height={80}
              alt="ppob"
              className="pb-2 rounded-full object-fill"
            />
            <p>Selamat datang,</p>
            <p className="font-semibold text-2xl">
              Bhagaskoro Putra Nindyalite
            </p>
          </div>
          <div className="w-6/12 ">
            {/* Background  */}
            <div className="relative w-full">
              <div className="absolute -z-10 w-full">
                <Image
                  src={"/Background Saldo.png"}
                  width={1000}
                  height={1000}
                  alt="ppob"
                />
              </div>
            </div>
            <div className="px-6 py-6">
              <p className="text-white">Saldo anda</p>
              <p className="text-white text-2xl font-semibold pt-3 pb-3">
                Rp. 0
              </p>
              <a href="#" className="text-white text-xs">
                Lihat saldo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
