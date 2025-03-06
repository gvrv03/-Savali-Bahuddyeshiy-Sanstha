import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";
import { NAV_LINKS } from "@/JSONData/Navitem";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/logo.svg"
                alt="Savali Bahuddyeshiy Sanstha Logo"
                width={80}
                height={60}
                className=" rounded-full h-12 w-auto mr-2"
              />
              <span className="text-xl font-bold">Savali</span>
            </div>
            <p className="text-gray-300 mb-6">
              A registered, non-profit, secular, voluntary organization working
              for rural and urban development since 2020.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-gray-300 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-300 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-300 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                className="text-gray-300 hover:text-white"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="text-gray-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Our Activities</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/activities"
                  className="text-gray-300 hover:text-white"
                >
                  Child Friend Police Station
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="text-gray-300 hover:text-white"
                >
                  Village Cleanliness Campaign
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="text-gray-300 hover:text-white"
                >
                  Child Marriage-Free India Campaign
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="text-gray-300 hover:text-white"
                >
                  Campaign on Child Sexual Abuse
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-accent mr-3 mt-1" />
                <span className="text-gray-300">+91 9067050941</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-accent mr-3 mt-1" />
                <span className="text-gray-300">shendes969@gmail.com</span>
              </li>
              <li className="text-gray-300">
                सावली बहुद्देशिय संस्था कळंब छत्रपती नगर दत्त रोड, जि.
                कोल्हापूर, Kalamb, Maharashtra 445401
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Savali Bahuddyeshiy Sanstha Logo"
              width={40}
              height={30}
              className="h-8 w-auto rounded-full mr-2"
            />
            <span>Savali Bahuddyeshiy Sanstha</span>
          </div>
          <Link href="https://gvrv.in" target="_blank" className="text-gray-300 text-sm mt-2 md:mt-0">
            Designed and Developed by - @its_gvrv
          </Link>
        </div>
      </div>
    </footer>
  );
}
