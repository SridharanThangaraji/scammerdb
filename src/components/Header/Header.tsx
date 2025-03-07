// import Image from "next/image";
import Link from "next/link";

export default function Header() {

    const signedUs = "Prince";
    return(
        <div className="header flex justify-between items-center p-1">

            <div className="left-navbar flex items-center justify-center p-2 gap-5">

                {/* <div className="logo">
                    <Image src={"./globe.svg"} alt="can't fetch image" width={50} height={50}/>
                </div> */}

                <div className="title">
                    <p className="font-bold">SCAMMER DB</p>
                </div>

            </div>

            <div className="right-navbar flex gap-5 p-2 items-center">

                <div className="nav-links flex gap-5">

                    <Link href="/about" className="hover:text-green-300">About</Link>
                    <Link href="/contact-us" className="hover:text-green-300">Contact</Link>
                    <Link href="/report-scammer" className="hover:text-green-300">Report</Link>

                </div> 

               <div className="signin-by flex gap-2 items-center">
                    <span>{signedUs}</span>
                    <div className="circle"></div>

                    {/* <Image src={"./836.jpg"} width={50} height={50} alt="can't'  load image"/> */}
               </div>

            </div>
        </div>
    );
}