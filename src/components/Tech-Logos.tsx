import { SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiJavascript, SiPython, SiAmazonwebservices, SiRedis, SiExpress } from 'react-icons/si'

const technologies = [
  { name: 'React', icon: SiReact, color: 'text-blue-500' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'AWS', icon: SiAmazonwebservices, color: 'text-blue-400' },
  { name: 'Redis', icon: SiRedis, color: 'text-blue-500' },
  { name: 'Express', icon: SiExpress, color: 'text-blue-500' },
  { name: 'Python', icon: SiPython, color: 'text-blue-500' },
]

export default function TechLogos() {
  return (
    <div className="max-w-2xl px-4 py-8 mt-20">
      <div className="grid gap-6">
        <div className="grid grid-cols-3 gap-4">
          {technologies.slice(0, 3).map((tech) => (
            <TechBox key={tech.name} {...tech} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 justify-center">
          {technologies.slice(3, 6).map((tech) => (
            <TechBox key={tech.name} {...tech} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 justify-center">
          {technologies.slice(6, 9).map((tech) => (
            <TechBox key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TechBox({ name, icon: Icon, color }: { name: string; icon: React.ElementType; color: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center justify-center transition-transform hover:scale-105">
      <Icon className={`text-2xl ${color}`} aria-hidden="true" />
      <span className="mt-1 text-xs font-medium text-gray-700">{name}</span>
    </div>
  )
}