import Image from "next/image";
import sendioLogo from "@/assets/sendio.png";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50 font-sans">
      <main className="relative flex w-full max-w-5xl flex-col items-center gap-16 overflow-hidden rounded-3xl bg-white px-10 py-24 shadow-xl sm:px-16">

        {/* Decorative gradient */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-green-200 blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-green-300 blur-3xl opacity-50" />

        {/* Logo */}
       <div className="flex items-center gap-3">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
        <Image src={sendioLogo} alt="Sendio Logo" width={40} height={40} />
      </div>
      <span className="text-2xl font-semibold text-green-700">Sendio</span>
    </div>

        {/* Hero */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl">
            The Smart WhatsApp Wallet for{" "}
            <span className="text-green-600">Instant Crypto Payments</span>
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-zinc-600">
            Send, receive, and manage crypto directly inside WhatsApp.
            Powered by Cronos, AI agents, and the x402 protocol.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { title: "Chat-to-Pay", desc: "Send crypto as easily as sending a message." },
            { title: "AI-Powered", desc: "Smart agents guide payments & balances." },
            { title: "Secure & Fast", desc: "Low fees and instant settlement on Cronos." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-green-100 bg-green-50 p-6 text-center"
            >
              <h3 className="mb-2 text-lg font-semibold text-green-700">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA + QR */}
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-12">

          {/* Button */}
          <div className="flex flex-col items-center gap-3">
            <a
              href="https://wa.me/254794026363"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center gap-3 rounded-full bg-green-600 px-8 text-lg font-semibold text-white transition hover:bg-green-700"
            >
              Connect on WhatsApp
            </a>
            <span className="text-sm text-zinc-500">
              No downloads. Works instantly.
            </span>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-green-100 bg-green-50 p-6">
  <Image
    src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://wa.me/message/APRT6VTNTA3NO1"
    alt="Scan to connect with Sendio on WhatsApp"
    width={160}
    height={160}
    className="rounded-xl"
    unoptimized
  />
  <p className="text-sm font-medium text-green-700">
    Scan to start on WhatsApp
  </p>
</div>

        </div>

        {/* Footer */}
        <div className="pt-8 text-sm text-zinc-400">
          © {new Date().getFullYear()} Sendio — Chat. Pay. Done.
        </div>
      </main>
    </div>
  );
}
