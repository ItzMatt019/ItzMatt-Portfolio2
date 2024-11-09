export default function Projects() {
  const projects = [
    {
      name: 'Ezrinix, LLC',
      position: 'Co-Founder & Operations Manager',
      description: 'Premium, budget-friendly hosting solutions—VPS, web, dedicated servers, and colocation—all tailored to meet your specific needs.',
      logo: 'https://i.itzmattcdn.com/users/520599749456560140/IN6Cy9kr.png' // Add your logo path here
    },
    {
      name: 'Flairhost',
      position: 'Co-Founder & Operations Manager',
      description: 'Host your Minecraft & game servers on reliable hardware with fast NVMe SSDs and powerful CPUs. Instant setup, DDoS protection, and expert support included.' ,
      logo: 'https://i.itzmattcdn.com/users/520599749456560140/THhm8fBK.png' // Add your logo path here
    },
    {
      name: 'Arcanium', 
      position: 'Founder & Developer',
      description: 'Streamline your support with ease!',
      logo: 'https://i.itzmattcdn.com/api/user/520599749456560140/aySwIxCj.png' // Add your logo path here
    },
    { 
      name: 'Viper Bot List',
      position: 'Site Administrator & Lead Developer', 
      description: 'The bot list that prioritizes smaller bots over bigger ones.', 
      logo: 'https://i.itzmattcdn.com/users/520599749456560140/RfXlmz2L.png' // Add your logo path here
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-200 p-4 rounded shadow-lg flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className="object-contain rounded-full"
                  width={100}
                  height={100}
                />
                <div>
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="uppercase font-semibold">{project.position}</p>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}