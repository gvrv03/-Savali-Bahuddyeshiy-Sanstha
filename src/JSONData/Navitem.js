
import {
  Menu, X, Phone, Mail, Facebook, Instagram, Youtube, 
  Home, Activity, Award, Info, PhoneCall, FileText
} from "lucide-react"

export const NAV_LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/Activities", label: "Activities", icon: Activity },
  { href: "/Awards", label: "Achievement", icon: Award },
  { href: "/AboutUs", label: "About", icon: Info },
  { href: "/ContactUs", label: "Contact", icon: PhoneCall },
  { href: "/TermsCondition", label: "Terms & Condition", icon: FileText },
];

export const SOCIAL_LINKS = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
];