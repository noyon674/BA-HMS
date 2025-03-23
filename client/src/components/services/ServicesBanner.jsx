export default function ServicesBanner() {
  return (
    <div className="relative bg-[#0F2D26] text-center py-16">
      <h1 className="text-4xl font-bold text-[#E69C74]">Services</h1>
      <p className="text-white mt-2">
        Home <span className="text-[#E69C74]">»</span> Services
      </p>
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 border border-[#1E4B43] rounded-full"></div>
        <div className="absolute bottom-5 right-10 w-32 h-32 bg-[#1E4B43] rounded-full"></div>
      </div>
    </div>
  );
}
