export default function AboutMeBox() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-8 flex items-center">
          <div className="flex-shrink-0 mr-8">
            <img
              src="https://i.itzmattcdn.com/users/520599749456560140/l0131GdN.png"  // Replace with your image path
              alt="ItzMatt019-Logo"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-3xl font-bold mb-4">ItzMatt019</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
            I am Matthew, but I go by ItzMatt019 online. I am 24 years old and live in the United States. 
            I currently work in IT. In my free time I am a System Admin, Website Developer,
            Discord Bot Developer. I am always looking to learn new things and I am always looking to improve my skills.</p>
          </div>
        </div>
      </div>
    </section>
  );
}