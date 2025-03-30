import { TiTick } from "react-icons/ti";
export default function ServicesSection() {
  const services = [
    {
      title: "Cardiology Clinic",
      description:
        "Expert consultations with board-certified cardiologists to assess heart health, discuss symptoms, and develop personalized treatment.",
      points: [
        "Cardiac Electrophysiology",
        "Cardiac Catheterization",
        "Arrhythmia Management",
      ],
      icon: "❤️",
    },
    {
      title: "Pathology Clinic",
      description:
        "Comprehensive tests to analyze body fluids, aiding in the diagnosis and monitoring of organ function and metabolic disorders.",
      points: ["Molecular Pathology", "Cytogenetics", "Immunology"],
      icon: "🧪",
    },
    {
      title: "Laboratory Analysis",
      description:
        "Our Laboratory Analysis Services offer a comprehensive range of advanced tests to aid in the accurate diagnosis of metabolic disorders.",
      points: [
        "Comprehensive Test Menu",
        "Timely Turnaround",
        "Advanced Diagnostic Tests",
      ],
      icon: "🔬",
    },
    {
      title: "Pediatric Clinic",
      description:
        "Comprehensive well-child checkups, growth monitoring, and developmental assessments to ensure your child's health track.",
      points: [
        "Nutrition Counseling",
        "Pediatric Dermatology",
        "Developmental Evaluations",
      ],
      icon: "👶",
    },
    {
      title: "Cardiac Clinic",
      description:
        "Find comprehensive care and support for heart failure patients, including lifestyle recommendations and advanced therapies.",
      points: [
        "Heart Failure Program",
        "Cardiac Rehabilitation",
        "Lipid Management",
      ],
      icon: "❤️",
    },
    {
      title: "Neurology Clinic",
      description:
        "Consultations with specialized neurologists to address various neurological concerns, symptoms, and disorders.",
      points: [
        "Epilepsy Management",
        "Headache and Migraine Clinic",
        "Neurological Examinations",
      ],
      icon: "🧠",
    },
  ];

  return (
    <section className="bg-[#FFF6F2] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-4 mb-20">
        <h3 className="text-[#E69C74] uppercase tracking-widest text-2xl">
          Our Services
        </h3>
        <h2 className="text-5xl font-bold text-[#0F2D26] mt-2">
          Providing Medical Care For The Sickest <br /> In Our Community.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#0F2D26] p-6 rounded-xl text-white shadow-lg space-y-5"
          >
            <div className="text-5xl">{service.icon}</div>
            <h3 className="text-3xl font-semibold mt-4">{service.title}</h3>
            <p className="text-sm mt-2 text-gray-400">{service.description}</p>
            <ul className="mt-4 space-y-5">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-[#E69C74]">
                  <TiTick className="text-2xl bg-[#e69c7454] rounded-full" />
                  <span className="text-white">{point}</span>
                </li>
              ))}
            </ul>
            <button className="mt-4 px-4 py-2 text-[#E69C74] border border-[#E69C74] rounded-full hover:bg-[#E69C74] hover:text-[#0F2D26] transition">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
