import Profile from "@/app/components/profile";

export default function Transaction() {
  return (
    <>
      <Profile />

      <div>
        <p className="font-semibold text-xl mb-5">Semua transaksi</p>
        <div className="flex justify-between border-2 p-4 bg-white rounded-md items-center mb-4">
          <div>
            <p className="text-xl font-semibold text-green-500 mb-2">
              + Rp. 10.000
            </p>
            <p className="text-xs text-gray-400">11 September 2023 12:20 WIB</p>
          </div>
          <div className="flex space-x-4">
            <p className="text-sm">Top Up Saldo</p>
          </div>
        </div>

        <div className="flex justify-between border-2 p-4 bg-white rounded-md items-center  mb-4">
          <div>
            <p className="text-xl font-semibold text-red-500 mb-2">
              - Rp. 10.000
            </p>
            <p className="text-xs text-gray-400">11 September 2023 12:20 WIB</p>
          </div>
          <div className="flex space-x-4">
            <p className="text-sm">Pulsa Prabayar</p>
          </div>
        </div>
      </div>
    </>
  );
}
