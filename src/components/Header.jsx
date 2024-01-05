import { Button, Link, Divider } from '@nextui-org/react';
import { SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";
import { FaRegEnvelope } from "react-icons/fa";
const Header = () => {
  return (
    <header className="w-full pt-10 bg-gray-100 ">
      <div className="container flex flex-col mx-auto text-center">
        <section>
          <h1 className="text-4xl font-bold">Benjamín Urzúa</h1>
          <Button href="../../public/BenjaminUrzua_CV.pdf" download="BenjaminUrzua_CV.pdf" as={Link} className="mt-5 font-semibold border-[0.5px] border-[#6246ea] bg-white" variant='bordered' radius='sm'>
            Descargar CV
          </Button>
        </section>

        <p className="text-medium ltb:text-2xl mt-6">Desarrollador Full-Stack apasionado por la informática</p>
        <div className="mt-6 space-x-5 mb-5">
          <Link isExternal href='https://www.linkedin.com/in/benjam%C3%ADn-andr%C3%A9s-urz%C3%BAa-mart%C3%ADnez-722215206/' className='text-[#6246ea] hover:cursor-pointer'><SlSocialLinkedin size='20px' /></Link>
          <Link isExternal href='https://github.com/Benjamin-Urzua' className='text-[#6246ea] hover:cursor-pointer'><SlSocialGithub size='20px' /></Link>
          <Link isExternal href='mailto:b.urzua.mar@gmail.com' className='text-[#6246ea] hover:cursor-pointer'><FaRegEnvelope size='20px' /></Link>
        </div>

        <nav className="hidden ltb:flex h-6 mb-4  items-center space-x-4 text-small self-center">
          <div>
            <Link className="text-[#6246ea]" href="#sobremi">Sobre mi</Link>
          </div>
          <Divider orientation="vertical" />
          <div>
            <Link className="text-[#6246ea]" href="#experiencia">Experiencia</Link>
          </div>
          <Divider orientation="vertical" />
          <div>
            <Link className="text-[#6246ea]" href="#habilidades">Habilidades y conocimientos</Link>
          </div>
          <Divider orientation="vertical" />
          <div>
            <Link className="text-[#6246ea]" href="#proyectos">Proyectos</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Header
