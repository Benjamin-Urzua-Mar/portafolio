import { Card} from '@nextui-org/react';
import { LiaDumbbellSolid } from "react-icons/lia";
import { FaBookDead } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";
import { GrGamepad } from "react-icons/gr";
import { IoCodeSlash } from "react-icons/io5";
const SobreMi = () => {
    return (
        <section id="sobremi" className='mb-12'>
            <div className='ltb:grid gap-6 ltb:grid-cols-2 ltb:gap-12 hidden'>
                <h2 className="text-3xl font-bold md:mb-4">Sobre mi</h2>

                <h2 className="text-3xl font-bold mb-4">Intereses</h2>
            </div>

            <section className='ltb:hidden'>
                <h2 className="text-3xl font-bold mb-4">Sobre mi</h2>
                <Card className='p-5 mb-12'>
                    <p className="text-gray-600 pb-2">
                        Me llamo Benjamín, soy egresado de Analista Programador e Ingeniería en Informática. Mi interés por la tecnología ha sido una constante en mi vida, comenzando desde mi infancia. Tuve la suerte de crecer con acceso a un computador, lo que alimentó mi fascinación por la informática. Esta pasión me ha llevado a tener una gran habilidad para entender rápidamente las tecnologías y adaptarme a nuevas informaciones y herramientas en este campo. Mis estudios formales, combinados con mi capacidad para aprender de manera autodidacta, me han permitido seguir creciendo y manteniendo mi interés en aprender y dominar nuevas tecnologías en el siempre evolutivo mundo de la informática.
                    </p>
                </Card>
                <h2 className="text-3xl font-bold mb-4">Intereses</h2>
                <Card className='p-5 mb-12'>
                    <div className="space-y-3">
                        <div className="flex flex-row items-center space-x-4">
                            <LiaDumbbellSolid className='ml-2 text-[#6246ea]' size='30px'></LiaDumbbellSolid>
                            <span className="text-gray-600">
                                Gym
                            </span>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <BiSolidMoviePlay className='ml-2 text-[#6246ea]' size='25px'></BiSolidMoviePlay>
                            <span className="text-gray-600">
                                Anime, Series y Películas
                            </span>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <FaBookDead className='ml-2 text-[#6246ea]' size='25px'></FaBookDead>
                            <span className="text-gray-600">
                                Manga
                            </span>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <GrGamepad className='ml-2 text-[#6246ea]' size='25px'></GrGamepad>
                            <span className="text-gray-600">
                                Videojuegos
                            </span>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <IoCodeSlash className='ml-2 text-[#6246ea]' size='25px'></IoCodeSlash>
                            <span className="text-gray-600">
                                Programación
                            </span>
                        </div>
                    </div>
                </Card>
            </section>
            <Card className="ltb:grid gap-10 p-5 ltb:grid-cols-2 ltb:gap-12 hidden">
                <section className=''>
                    <p className="text-gray-600 pb-2">
                        Me llamo Benjamín, soy egresado de Analista Programador e Ingeniería en Informática. Mi interés por la tecnología ha sido una constante en mi vida, comenzando desde mi infancia. Tuve la suerte de crecer con acceso a un computador, lo que alimentó mi fascinación por la informática. Esta pasión me ha llevado a tener una gran habilidad para entender rápidamente las tecnologías y adaptarme a nuevas informaciones y herramientas en este campo. Mis estudios formales, combinados con mi capacidad para aprender de manera autodidacta, me han permitido seguir creciendo y manteniendo mi interés en aprender y dominar nuevas tecnologías en el siempre evolutivo mundo de la informática.
                    </p>
                </section>

                <section>
                    <div className="space-y-3">
                        <div className="flex flex-row items-center space-x-4">
                            <LiaDumbbellSolid className='ml-2 text-[#6246ea]' size='30px'></LiaDumbbellSolid>
                            <span className="text-gray-600">
                                Gym
                            </span>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <BiSolidMoviePlay className='ml-2 text-[#6246ea]' size='25px'></BiSolidMoviePlay>
                            <span className="text-gray-600">
                                Anime, Series y Películas
                            </span>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <FaBookDead className='ml-2 text-[#6246ea]' size='25px'></FaBookDead>
                            <span className="text-gray-600">
                                Manga
                            </span>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <GrGamepad className='ml-2 text-[#6246ea]' size='25px'></GrGamepad>
                            <span className="text-gray-600">
                                Videojuegos
                            </span>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <IoCodeSlash className='ml-2 text-[#6246ea]' size='25px'></IoCodeSlash>
                            <span className="text-gray-600">
                                Programación
                            </span>
                        </div>
                    </div>
                </section>
            </Card>
        </section>
    )
}
export default SobreMi

