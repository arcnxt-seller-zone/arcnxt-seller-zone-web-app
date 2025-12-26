export default function Benefits() {
  const benefits = [
    { 
      title: "0% Commission Fee", 
      desc: "Suppliers selling on ARCNXT keep 100% of their profit by not paying any commission.", 
      icon: "💰" 
    },
    { 
      title: "0 Penalty Charges", 
      desc: "Sell online without the fear of order cancellation charges with 0 penalty.", 
      icon: "✅" 
    },
    { 
      title: "7-Day Payment Cycle", 
      desc: "Payments are deposited directly to your bank account 7 days from delivery.", 
      icon: "🏦" 
    },
    { 
      title: "Lowest Shipping Cost", 
      desc: "Access our pan-India logistics network at the most affordable rates.", 
      icon: "🚚" 
    }
  ];

  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#6B44AF] text-center mb-16 italic">Why Suppliers Love ARCNXT</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-50 hover:shadow-lg transition-all group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{b.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}