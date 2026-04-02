
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#7F7F7F] text-[#A3CCA3] shadow-md">
      <div className="text-2xl font-bold">MyLogo</div>
      <ul className="flex space-x-6 text-xl items-center">
        <li>
          <a href="#" className="hover:text-white transition">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-white transition">About</a>
        </li>
        <li>
          <a href="#" className="hover:text-white transition">Login</a>
        </li>
        <li>
          <a
            href="#"
            className="bg-[#CFCFE6] text-[#7F7F7F] font-semibold px-5 py-2 rounded-full hover:bg-[#A3CCA3] hover:text-white transition"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}