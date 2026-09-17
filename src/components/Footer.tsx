import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="px-4 pt-6 pb-10 text-center text-sm text-muted">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  );
}
