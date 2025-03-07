
export default function Profile(){

    const scammer = {
        name: "scammer",
        reports : "20",
        alias : "money return",
        scamType : 'money laundery',
        amountLost : 20000,
        lastReported : "27 mar 2024",
        reviews : ["scam as bank manager","loan fraud"]

    }
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-red-500 mb-4">Scammer Profile</h2>
      <div className="border-b border-gray-700 pb-4 mb-4">
        <h3 className="text-2xl font-semibold">{scammer.name}</h3>
        <p className="text-gray-400 text-sm">Reported {scammer.reports} times</p>
      </div>
      <div className="space-y-3">
        <p><span className="font-bold">Alias:</span> {scammer.alias || "Unknown"}</p>
        <p><span className="font-bold">Scam Type:</span> {scammer.scamType}</p>
        <p><span className="font-bold">Amount Involved:</span> ${scammer.amountLost.toLocaleString()}</p>
        <p><span className="font-bold">Last Reported:</span> {scammer.lastReported}</p>
      </div>
      <div className="mt-4">
        <h4 className="text-xl font-semibold mb-2">User Reports</h4>
        <div className="max-h-40 overflow-y-auto space-y-2 bg-gray-800 p-4 rounded-md">
          {scammer.reviews.length > 0 ? (
            scammer.reviews.map((review, index) => (
              <p key={index} className="text-sm text-gray-300 border-b border-gray-700 pb-2">{review}</p>
            ))
          ) : (
            <p className="text-gray-400">No reports yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

