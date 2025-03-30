import { MdDoubleArrow } from "react-icons/md";

export default function ServicesBanner() {
  return (
    <div className="relative bg-[#0F2D26] text-center py-24 overflow-hidden">
      <h1 className="text-6xl font-bold text-[#E69C74]">Departments</h1>
      <p className="text-white mt-4 flex justify-center items-center gap-2 text-xl">
        Home
        <MdDoubleArrow className="text-2xl text-[#E69C74] inline-block" />
        Departments
      </p>

      {/* Abstract shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 border border-[#1E4B43] rounded-full"></div>
        <div className="absolute bottom-5 right-10 w-32 h-32 bg-[#1E4B43] rounded-full opacity-50"></div>
      </div>
    </div>
  );
}
