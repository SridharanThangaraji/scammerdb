import Link from "next/link"

export default function Footer(){
    return(
        <div className="footer flex justify-evenly align-middle text-center bg-gray-950 p-5">
            
            <div className="policies footer-containers flex-1 ">
                <h3 className="p-2 font-semibold">Legal & Policy</h3>

                <Link href='/terms-condition' className="block hover:underline p-2">Terms and condition</Link>
            </div>

            <div className="navigation-links footer-containers flex-1">
                <h3 className="p-2 font-semibold">Navigation Links</h3>

                <Link href='/report-scammer' className="block hover:underline p-2">Report Scammer</Link>
                <Link href='/contact-us' className="block hover:underline p-2">Contact Us</Link>
                <Link href='/terms-condition' className="block hover:underline p-2">Terms and condition</Link>

            </div>

            <div className="support footer-containers flex-1">
                <h3 className="p-2 font-semibold" >Contact & Support</h3>

                <Link href='/contact-us' className="block hover:underline">Contact</Link>
                <p className="p-2">support@scammerdb</p>
                <p className="p-2">False claim : appeal@scammerdb</p>
            </div>

            <div className="social-media footer-containers flex-1">
                <h3 className="p-2 font-semibold">Social Media Links</h3>

                <Link href='#' className="block hover:underline p-2">Instagram</Link>
                <Link href='#' className="block hover:underline p-2">Twitter | X</Link>
                <Link href='#' className="block hover:underline p-2">Telegram</Link>

            </div>
        </div>
    )
}