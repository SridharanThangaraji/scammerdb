import Head from "next/head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import Profile from '@/components/ProfileCard/ProfileCard'

export default function Home() {
  return (
    <div className="home bg-gray-900 text-white">
      <Head>
        <title>Scammer DB - Expose Fraudsters & Stay Safe</title>
        <meta
          name="description"
          content="Search and report scammers. Stay informed and protect yourself from fraud."
        />
      </Head>

      <Header />

      <div className="hero-container text-center flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-600 to-blue-900p-6">
        <h1 className="text-5xl font-bold">
        A Smarter Way to Stay Safe from Scams  
        </h1>
        <p className="mt-3 text-lg text-gray-300">
          Search for scammers or report suspicious activities.
        </p>

        <div className="hero-content flex flex-col mt-6 w-full max-w-md">
          <input
            type="text"
            placeholder="Search scammer by name, email, or phone number..."
            className="p-3 w-full text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <Link
            href="#"
            className="mt-4 py-3 px-6 bg-red-600 hover:bg-red-800 text-white font-bold rounded-lg"
          >
            Report a Scammer
          </Link>
        </div>
      </div>

      {/* Scam stats section */}
      <section className="scam-stats-section text-center p-10 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-5">Scam Statistics</h2>
        <p className="text-gray-300 text-lg mb-8">
          Live stats on reported scams worldwide and in India.
        </p>

        <div className="scam-stat-wrapper">

        </div>
        <div className="flex flex-col  justify-center items-center gap-8">
          {/* Global Scam Stats */}
          <div className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-red-500 mb-4 text-center">
              Global Scam Stats
            </h3>
            <div className="flex gap-4">
              <p className="bg-gray-700 p-4 rounded-lg shadow">
                1.03 Trillion USD lost globally in scams (2024)
              </p>
              <p className="bg-gray-700 p-4 rounded-lg shadow">
                58,329 scam cases reported worldwide
              </p>
              <p className="bg-gray-700 p-4 rounded-lg shadow">
                $10 Billion lost in the US alone (2023)
              </p>
              <p className="bg-gray-700 p-4 rounded-lg shadow">
                4.6 Billion USD lost to investment scams
              </p>
            </div>
          </div>

          {/* India Scam Stats */}
          <div className="flex flex-col bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-red-500 mb-4 text-center">
              India Scam Stats
            </h3>
            <div className="flex  gap-4">
              <p className="bg-gray-700 p-4 rounded-lg shadow">
                ₹1.25 Lakh Crore lost to scams (2024)
              </p>
              <p className="bg-gray-700 p-4 rounded-lg shadow">
                15,000+ online fraud cases per month
              </p>
              <p className="bg-gray-700 p-4 rounded-lg shadow">
                ₹1,500+ Crore lost to UPI frauds annually
              </p>
              <p className="bg-gray-700 p-4 rounded-lg shadow">
                45% rise in cybercrime reports
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="top-scammers-section text-center p-10 bg-gray-800">
        <h2 className="text-3xl font-bold">Top Reported Scammers</h2>
        <p className="text-gray-300 mt-2">
          Most reported fraudsters in the database.
        </p>

        <div className="scammer-profiles flex justify-evenly items-center gap-3 p-5">
          <Profile />
          <Profile />
          <Profile />
        </div>
      </section>

      <section className="user-review-section text-center p-20">
        <h2 className="text-3xl font-bold">What People Are Saying</h2>
        <p className="text-gray-300 mt-2">
          Real stories from victims & survivors.
        </p>

        <div className="review-wrapper grid md:grid-cols-3 gap-5 mt-5">
          {[
            "Almost fell for a fake crypto investment. This site saved me!",
            "Checked a seller before paying. Turns out he was a scammer!",
            "I lost $500 to a PayPal phishing scam. Reported it here!",
            "I wish I had checked this site before sending money...",
            "Scammers are getting smarter. This database is a lifesaver!",
          ].map((review, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded shadow-lg">
              <p>{review}</p>
              <p className="text-gray-400 mt-2">- Alex B.</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
