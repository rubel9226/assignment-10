// import { Facebook, Linkedin, Youtube } from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";


export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="container mx-auto px-4 py-20">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-indigo-300">
              Digital Life Lessons
            </h2>

            <p className="text-slate-400 mt-4">
              Preserve your experiences and help
              others learn from them.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Platform
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Home</li>
              <li>Public Lessons</li>
              <li>Dashboard</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Resources
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Support</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Newsletter
            </h3> 

            <div className="flex gap-4 mt-6">
              <FaFacebook size={20} />
              <FaLinkedin size={20} />
              <IoLogoYoutube size={20} />

              {/* X Logo */}
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
              </svg>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-500">
          © 2026 Digital Life Lessons. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}