import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 max-w-7xl mx-auto ">
        <div className="flex-1">
          <Link
            href="/dashboard"
            className="normal-case text-xl flex justify-center items-center"
          >
            <img src="/logo.png" className="pr-1 scale-75" />
            <p className="font-semibold">SIMS PPOB</p>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link href="/dashboard/topup">Top Up</Link>
            </li>
            <li>
              <Link href="/dashboard/transaction">Transaction</Link>
            </li>
            <li>
              <Link href="/dashboard/account">Account</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
