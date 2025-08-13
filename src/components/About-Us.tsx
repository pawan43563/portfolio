import { SiLeetcode, SiGithub } from 'react-icons/si';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div id="about-me" className="py-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-blue-900">About Me</h2>
                    
                    <div className="prose prose-lg text-gray-600 mb-8">
                        <p className="mb-4">
                            I am a full-stack developer with 4.1 years of experience in the tech industry, specializing in delivering innovative, user-centric solutions. At Contentstack, I&apos;ve built custom plugins for search personalization and translation, making these features more accessible for users.
                        </p>
                        <p className="mb-4">
                            I have hands-on experience working with the MERN stack, building scalable and efficient applications. Additionally, I&apos;ve worked with AWS, leveraging its services for deploying and managing applications.
                        </p>
                        <p className="mb-4">
                            I excel at switching between technologies, quickly adapting to new challenges. A fast learner, I&apos;m passionate about exploring new tools and methodologies to continuously grow my skills. I thrive in collaborative environments where I can contribute to driving innovation and delivering high-quality products that meet user needs.
                        </p>
                        <p className="mb-8">
                            Additionally, I was a winner of the Smart India Hackathon 2020, which showcases my ability to work effectively under pressure and deliver impactful solutions.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 justify-center py-6 border-t border-gray-200">
                        <Link 
                            href="https://leetcode.com/u/pawan007/" 
                            target="_blank"
                            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
                        >
                            <SiLeetcode className="w-6 h-6" />
                            <div>
                                <span className="font-semibold">LeetCode</span>
                                <span className="ml-2 px-2 py-1 bg-white/20 rounded text-sm">280+ solved</span>
                            </div>
                        </Link>

                        <Link 
                            href="https://github.com/pawan43563/lld-design-patterns/tree/main" 
                            target="_blank"
                            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black transition-all shadow-md hover:shadow-lg"
                        >
                            <SiGithub className="w-6 h-6" />
                            <span className="font-semibold">Design Patterns</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;