import Image from "next/image";
import Profile from "../components/profile";

const Dashboard = () => {
  return (
    <>
      <Profile />

      <div className="flex flex-nowrap justify-between text-center text-xs">
        <div className="w-20">
          <Image src={"/PBB.png"} alt="ppob" width={100} height={100} />
          <p className="pt-2">PBB</p>
        </div>
        <div className="w-20">
          <Image src={"/Listrik.png"} alt="ppob" width={100} height={100} />
          <p className="pt-2">Listrik</p>
        </div>
        <div className="w-20">
          <Image src={"/Pulsa.png"} alt="ppob" width={100} height={100} />
          <p className="pt-2">Pulsa</p>
        </div>
        <div className="w-20">
          <Image src={"/PDAM.png"} alt="ppob" width={100} height={100} />
          <p className="pt-2">PDAM</p>
        </div>
        <div className="w-20">
          <Image src={"/PGN.png"} alt="ppob" width={100} height={100} />
          <p className="pt-2">PGN</p>
        </div>
        <div className="w-20">
          <Image src={"/Televisi.png"} alt="ppob" width={100} height={100} />
          <p className="pt-2">TV Langganan</p>
        </div>
        <div className="w-20">
          <Image src={"/Musik.png"} alt="ppob" width={100} height={100} />
          <p className="pt-2">Musik</p>
        </div>
        <div className="w-20">
          <Image src={"/Game.png"} alt="ppob" width={100} height={100} />
          <p className="pt-2">Voucher Game</p>
        </div>
        <div className="w-20">
          <Image
            src={"/Voucher Makanan.png"}
            alt="ppob"
            width={100}
            height={100}
          />
          <p className="pt-2">Voucher Makanan</p>
        </div>
        <div className="w-20">
          <Image src={"/Kurban.png"} alt="ppob" width={100} height={100} />
          <p className="pt-2">Kurban</p>
        </div>
        <div className="w-20">
          <Image src={"/Zakat.png"} alt="ppob" width={100} height={100} />
          <p className="pt-2">Zakat</p>
        </div>
        <div className="w-20">
          <Image src={"/Paket Data.png"} alt="ppob" width={100} height={100} />
          <p className="pt-2">Paket Data</p>
        </div>
      </div>

      <div className="mt-5">
        <p className="font-semibold text-xl">Temukan promo menarik</p>
      </div>

      <div className="mt-5">
        <div className="carousel space-x-14">
          <div className="carousel-item">
            <img src="/Banner 1.png" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="/Banner 2.png" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="/Banner 3.png" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="/Banner 4.png" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="/Banner 5.png" alt="Burger" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
