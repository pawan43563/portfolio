import Link from "next/link";
import Image from "next/image";
import "./styles.scss";

const Banner = () => {
    return (
      <section className="w-full banner__container bg-muted">
        <div className="container banner__container mx-auto px-4">

        <div className="grid banner__container  grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Left Section (Image) */}

          <div className="w-full profile__pic">
          <Image
            className="rounded-sm h-auto"
            src="/pawan2.png"
            width={500}
            height={500}
            alt="Portfolio"
            />
          </div>
        
          
          {/* Right Section (Text & Timeline) */}
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-bold">Hi! I am</h1>
            <h2 className="text-7xl font-extrabold text-gray-800 mb-4">Pawan Sharma</h2>
            {/* <a href="#" className="text-lg font-semibold text-blue-500">View Portfolio →</a> */}
            
            <div className="mt-6">
              <div className="timeline-item mb-4">
                {/* <p className="text-lg font-semibold">Based In Mumbai, India.</p> */}
                {/* <h3 className="text-2xl font-bold">Smart India Hackathon Winner</h3> */}
                {/* <p>Contentstack</p> */}
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="/Pawan_resume.pdf"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                download="Pawan_resume.pdf"
              >
                Download CV
              </a>
              
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
          
        </div>
      </section>
      
    )
  }

export default Banner;