import Particles from "./Particles";
import TextPreasure from "./TextPreasure";
import PixelTransition from "./PixelTransition";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Anda bisa menambahkan konfigurasi di sini
  }, []);
  return (
    <div className="bg-[#060606] w-full min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Particles sebagai latar belakang utama */}
      <div className="absolute inset-0 z-0">
        <Particles particleColors={["#ffffff", "#ffffff"]} particleCount={200} particleSpread={10} speed={0.1} particleBaseSize={100} moveParticlesOnHover={true} alphaParticles={false} disableRotation={false} />
      </div>

      {/* Konten utama */}
      <div className="relative pt-42 flex flex-col items-center text-center px-4 pt-40">
        {TextPreasure ? (
          <TextPreasure text="XFazz" flex={true} alpha={false} stroke={false} width={true} weight={true} italic={true} textColor="#ffffff" strokeColor="#ff0000" minFontSize={100} />
        ) : (
          <p className="text-white text-xl">Loading...</p>
        )}

        <div data-aos="fade-up" className="text-lg font-semibold text-slate-200 py-5 w-full max-w-4xl">
          I am a Front-End Web Developer who also has expertise in the field of Cyber Security and Penetration Testing. With experience in building responsive and modern web interfaces, I also have skills in securing web applications from
          various security threats. Combining design aesthetics with strong security is my main focus in every project.
        </div>

        {/* Tombol */}
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" className="flex justify-center mt-5 gap-6">
          <Link to="/" className="px-6 py-2 border border-blue-500 rounded hover:rounded-xl text-white hover:bg-blue-500 hover:scale-110 transition-all duration-500">Portfolio</Link>
          <Link to="https://wa.me/6281217100477" className="px-6 py-2 border border-blue-500 rounded hover:rounded-xl text-white hover:bg-blue-500 hover:scale-110 transition-all duration-500">Contact Me</Link>
        </div>
      </div>

      {/* About Me */}
      <div id="about" className="relative bg-transparent z-10 w-full flex flex-col items-center mt-20 pb-5">
        <div className="flex flex-col items-center text-center pb-4 w-4/5">
          <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="text-3xl font-bold text-white mb-4">
            About <section className="inline text-blue-500">Me</section>
          </h1>
          <p className="md:text-lg text-sm font-semibold text-white max-w-2xl leading-relaxed border-2 border-blue-500 p-10 bg-slate-500/10 rounded-xl">
            Faiz – Seorang pengembang frontend berusia 15 tahun dengan semangat yang tak pernah padam. Perjalanan saya di dunia pengembangan web dimulai sejak tahun 2022. Awalnya, hanya sebatas rasa penasaran, namun seiring berjalannya
            waktu, saya semakin jatuh cinta dengan proses membangun tampilan dan interaksi yang menarik pada sebuah website. Dari proyek sederhana hingga yang lebih kompleks, setiap pengalaman telah membentuk saya menjadi seorang pengembang
            yang lebih baik. Saat ini, saya sedang fokus pada penguasaan <strong>React</strong> dan <strong>Next.js</strong> untuk menciptakan pengalaman pengguna yang semakin interaktif dan responsif.
          </p>
          <div className="flex justify-start pt-20">
            <h1 data-aos="fade-up"
     data-aos-duration="500" className="text-2xl font-semibold text-slate-100">My Skills</h1>
          </div>
          <div className="pt-10 grid grid-cols-1 md:grid-cols-4 gap-5">
            <PixelTransition 
              firstContent={<img src="https://img.icons8.com/plasticine/2x/react.png" data-aos="flip-down" alt="default pixel transition content, a cat!" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#111",
                  }}
                >
                  <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>ReactJS</p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
            <PixelTransition
              firstContent={
                <img
                  src="https://images.seeklogo.com/logo-png/35/2/tailwind-css-logo-png_seeklogo-354675.png?v=1957907763835204384" data-aos="flip-down"
                  alt="default pixel transition content, a cat!"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#111",
                  }}
                >
                  <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Tailwindcss</p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
            <PixelTransition
              firstContent={
                <img
                  src="https://th.bing.com/th/id/R.f7337d339216d05c1551688efb13a830?rik=m28qY9WE3BaKXQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnodejs-png-nodejs-icon-png-50-px-1600.png&ehk=XR9ktXGvw5svYVTEqemL7wSEUZL%2bihqTpYBLPSQn8GQ%3d&risl=&pid=ImgRaw&r=0" data-aos="flip-down"
                  alt="default pixel transition content, a cat!"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#111",
                  }}
                >
                  <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>NodeJS</p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
            <PixelTransition
              firstContent={<img src="https://logodix.com/logo/1005082.png" data-aos="flip-down" alt="default pixel transition content, a cat!" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#111",
                  }}
                >
                  <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Kali Linux</p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
