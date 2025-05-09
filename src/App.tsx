import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, Menu, X } from 'lucide-react';
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Chunhui Gu</h1>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              <a href="#about" className="py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>About</a>
              <a href="#experience" className="py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Experience</a>
              <a href="#education" className="py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Education</a>
              <a href="#skills" className="py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Skills</a>
              <a href="#contact" className="py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" 
              alt="Chunhui Gu" 
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Chunhui Gu</h1>
            <h2 className="text-xl md:text-2xl mb-6">Software Engineer</h2>
            <div className="flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-700 p-3 rounded-full hover:bg-blue-50 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/chunhui-gu-60b524177" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-700 p-3 rounded-full hover:bg-blue-50 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="bg-white text-blue-700 p-3 rounded-full hover:bg-blue-50 transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="bg-white text-blue-700 p-3 rounded-full hover:bg-blue-50 transition-colors">
                <FileText size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-4">
                I am a passionate Software Engineer with experience in developing innovative solutions and applications. 
                My expertise spans across multiple programming languages and frameworks, with a focus on creating efficient, 
                scalable, and user-friendly software.
              </p>
              <p className="text-lg">
                I thrive in collaborative environments and enjoy tackling complex problems with creative approaches. 
                My goal is to leverage technology to create meaningful impact and deliver exceptional results.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Experience Item 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <div className="text-gray-600 mt-1 md:mt-0">Jan 2022 - Present</div>
                </div>
                <h4 className="text-blue-600 font-medium mb-4">Tech Company Inc.</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Developed and maintained web applications using React, Node.js, and MongoDB</li>
                  <li>Collaborated with cross-functional teams to design and implement new features</li>
                  <li>Improved application performance by optimizing database queries and frontend code</li>
                  <li>Participated in code reviews and mentored junior developers</li>
                </ul>
              </div>
              
              {/* Experience Item 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h3 className="text-xl font-bold">Junior Developer</h3>
                  <div className="text-gray-600 mt-1 md:mt-0">Jun 2020 - Dec 2021</div>
                </div>
                <h4 className="text-blue-600 font-medium mb-4">Startup Solutions LLC</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Built responsive user interfaces using HTML, CSS, and JavaScript</li>
                  <li>Assisted in the development of RESTful APIs using Express.js</li>
                  <li>Implemented automated testing using Jest and React Testing Library</li>
                  <li>Participated in daily stand-ups and sprint planning meetings</li>
                </ul>
              </div>
              
              {/* Experience Item 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h3 className="text-xl font-bold">Software Engineering Intern</h3>
                  <div className="text-gray-600 mt-1 md:mt-0">May 2019 - Aug 2019</div>
                </div>
                <h4 className="text-blue-600 font-medium mb-4">Global Tech Solutions</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Assisted in the development of internal tools using Python and Django</li>
                  <li>Conducted code reviews and bug fixes for existing applications</li>
                  <li>Participated in team meetings and contributed to project planning</li>
                  <li>Gained experience with version control systems and CI/CD pipelines</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Education Item 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h3 className="text-xl font-bold">Master of Science in Computer Science</h3>
                  <div className="text-gray-600 mt-1 md:mt-0">2018 - 2020</div>
                </div>
                <h4 className="text-blue-600 font-medium mb-4">University of Technology</h4>
                <p>Focused on software engineering, machine learning, and distributed systems. Graduated with honors.</p>
              </div>
              
              {/* Education Item 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h3 className="text-xl font-bold">Bachelor of Science in Computer Engineering</h3>
                  <div className="text-gray-600 mt-1 md:mt-0">2014 - 2018</div>
                </div>
                <h4 className="text-blue-600 font-medium mb-4">State University</h4>
                <p>Completed coursework in programming, algorithms, data structures, and computer architecture. Participated in various hackathons and coding competitions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Technical Skills */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-blue-600">Technical Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Programming Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">JavaScript</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">TypeScript</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Python</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Java</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">C++</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">React</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Angular</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Vue.js</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">HTML5</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">CSS3</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Tailwind CSS</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Node.js</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Express</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Django</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Flask</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Spring Boot</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Databases</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">MongoDB</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">PostgreSQL</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">MySQL</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Redis</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Soft Skills */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-blue-600">Soft Skills</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Team Collaboration
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Project Management
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Problem Solving
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Critical Thinking
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Communication
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Time Management
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Adaptability
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Leadership
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mb-4 mt-8 text-blue-600">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Git</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Docker</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Kubernetes</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">AWS</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Azure</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">CI/CD</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Jira</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Figma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-blue-600">Get In Touch</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="mr-3 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">contact@example.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Linkedin className="mr-3 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/chunhui-gu-60b524177" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/chunhui-gu</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Github className="mr-3 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">GitHub</h4>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/chunhuigu</a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-blue-600">Send a Message</h3>
                  
                  <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                      <textarea 
                        id="message" 
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Chunhui Gu</h2>
              <p className="text-gray-400">Software Engineer</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/chunhui-gu-60b524177" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Chunhui Gu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;