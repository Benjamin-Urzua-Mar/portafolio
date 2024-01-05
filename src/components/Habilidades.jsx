import { Card} from '@nextui-org/react';
import { FaJava } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiFlask, SiDjango, SiMongodb, SiNextui, SiBootstrap, SiVuetify, SiJquery, SiMysql, SiMariadb, SiFastapi ,SiPostgresql, SiGithub, SiGitlab, SiReact, SiNodedotjs, SiVuedotjs, SiJavascript, SiPhp, SiCss3, SiHtml5, SiPython } from "react-icons/si";
const Habilidades = () => {
    return (
        <section id='habilidades' className="mb-12 mt-12">
            <h2 className="text-3xl font-bold mb-4">Habilidades y conocimientos</h2>
            <Card className="grid grid-cols-1 hd:grid-cols-2 gap-4 text-center p-6">
                <div>
                    <h2 className="text-xl font-bold mb-4 ">Lenguajes</h2>
                    <div className="flex flex-cols-6 gap-2 flex-wrap ltb:flex-nowrap text-center justify-center">
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiJavascript  size='64px'></SiJavascript>
                                <h3 className="text-md font-semibold mt-4">JavaScript</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiCss3  size='64px'></SiCss3>
                                <h3 className="text-md font-semibold mt-4">CSS3</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiHtml5  size='64px'></SiHtml5>
                                <h3 className="text-md font-semibold mt-4">HTML5</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiPython  size='64px'></SiPython>
                                <h3 className="text-md font-semibold mt-4">Python</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                            <FaJava  size='64px'></FaJava>
                                <h3 className="text-md font-semibold mt-4">Java</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiPhp  size='64px'></SiPhp>
                                <h3 className="text-md font-semibold mt-4">PHP</h3>
                            </div>
                        </Card>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Herramientas</h2>
                    <div className="flex flex-cols-6 gap-2  flex-wrap ltb:flex-nowrap text-center justify-center">
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiMongodb  size='64px'></SiMongodb>
                                <h3 className="text-md font-semibold mt-4">MongoDB</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiMysql  size='64px'></SiMysql>
                                <h3 className="text-md font-semibold mt-4">MySQL</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiMariadb  size='64px'></SiMariadb>
                                <h3 className="text-md font-semibold mt-4">MariaDB</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiPostgresql className='' size='64px'></SiPostgresql>
                                <h3 className="text-md font-semibold mt-4">PostgreSQL</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiGithub  size='64px'></SiGithub>
                                <h3 className="text-md font-semibold mt-4">GitHub</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiGitlab  size='64px'></SiGitlab>
                                <h3 className="text-md font-semibold mt-4">Gitlab</h3>
                            </div>
                        </Card>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Front-End</h2>
                    <div className="flex flex-cols-6 gap-2 flex-wrap ltb:flex-nowrap text-center justify-center">
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiReact  size='64px'></SiReact>
                                <h3 className="text-md font-semibold mt-4">React</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiVuedotjs  size='64px'></SiVuedotjs>
                                <h3 className="text-md font-semibold mt-4">Vue.js</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiNextui  size='64px'></SiNextui>
                                <h3 className="text-md font-semibold mt-4">NextUI</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiBootstrap  size='64px'></SiBootstrap>
                                <h3 className="text-md font-semibold mt-4">Bootstrap</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiVuetify  size='64px'></SiVuetify>
                                <h3 className="text-md font-semibold mt-4">Vuetify</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiJquery  size='64px'></SiJquery>
                                <h3 className="text-md font-semibold mt-4">JQuery</h3>
                            </div>
                        </Card>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Back-End</h2>
                    <div className="flex flex-cols-6 gap-2 flex-wrap ltb:flex-nowrap text-center justify-center">
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiNextdotjs  size='64px' />
                                <h3 className="text-md font-semibold mt-4">Next.js</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                            <SiNodedotjs  size='64px'></SiNodedotjs>
                                <h3 className="text-md font-semibold mt-4">Node.js</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiExpress  size='64px'></SiExpress>
                                <h3 className="text-md font-semibold mt-4">Express.js</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiDjango  size='64px'></SiDjango>
                                <h3 className="text-md font-semibold mt-4">Django</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiFlask  size='64px'></SiFlask>
                                <h3 className="text-md font-semibold mt-4">Flask</h3>
                            </div>
                        </Card>
                        <Card className='bg-[#6246ea] text-white max-w-[96px]'>
                            <div className='flex flex-col p-4 items-center'>
                                <SiFastapi  size='64px'></SiFastapi>
                                <h3 className="text-md font-semibold mt-4">FastAPI</h3>
                            </div>
                        </Card>
                    </div>
                </div>
            </Card>

        </section>
    )
}
export default Habilidades