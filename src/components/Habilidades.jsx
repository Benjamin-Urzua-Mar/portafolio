import { Card } from '@nextui-org/react';
import { FaJava } from "react-icons/fa";
import {
    SiJavascript, SiTypescript, SiHtml5, SiCss3, SiPython,
    SiReact, SiNextdotjs, SiAstro, SiRemix, SiTailwindcss, SiMui, SiRadixui, SiNextui, SiBootstrap, SiJquery,
    SiNodedotjs, SiExpress, SiSocketdotio, SiFastapi, SiSqlalchemy, SiHibernate, SiSequelize, SiMongoose,
    SiMongodb, SiPostgresql, SiMysql, SiMariadb,
    SiGit, SiGithub, SiGithubactions, SiDocker, SiVite, SiJest, SiVercel
} from "react-icons/si";

const categorias = [
    {
        titulo: 'Lenguajes',
        items: [
            { icono: SiJavascript, nombre: 'JavaScript' },
            { icono: SiTypescript, nombre: 'TypeScript' },
            { icono: SiHtml5, nombre: 'HTML5' },
            { icono: SiCss3, nombre: 'CSS3' },
            { icono: SiPython, nombre: 'Python' },
            { icono: FaJava, nombre: 'Java' },
        ],
    },
    {
        titulo: 'Front-End',
        items: [
            { icono: SiReact, nombre: 'React' },
            { icono: SiNextdotjs, nombre: 'Next.js' },
            { icono: SiAstro, nombre: 'Astro' },
            { icono: SiRemix, nombre: 'Remix' },
            { icono: SiTailwindcss, nombre: 'Tailwind' },
            { icono: SiMui, nombre: 'Material UI' },
            { icono: SiRadixui, nombre: 'Radix UI' },
            { icono: SiNextui, nombre: 'NextUI' },
            { icono: SiBootstrap, nombre: 'Bootstrap' },
            { icono: SiJquery, nombre: 'jQuery' },
        ],
    },
    {
        titulo: 'Back-End',
        items: [
            { icono: SiNodedotjs, nombre: 'Node.js' },
            { icono: SiExpress, nombre: 'Express.js' },
            { icono: SiSocketdotio, nombre: 'Socket.io' },
            { icono: SiFastapi, nombre: 'FastAPI' },
            { icono: FaJava, nombre: 'Java EE' },
            { icono: SiHibernate, nombre: 'Hibernate' },
            { icono: SiSqlalchemy, nombre: 'SQLAlchemy' },
            { icono: SiSequelize, nombre: 'Sequelize' },
            { icono: SiMongoose, nombre: 'Mongoose' },
        ],
    },
    {
        titulo: 'Bases de datos',
        items: [
            { icono: SiPostgresql, nombre: 'PostgreSQL' },
            { icono: SiMysql, nombre: 'MySQL' },
            { icono: SiMariadb, nombre: 'MariaDB' },
            { icono: SiMongodb, nombre: 'MongoDB' },
        ],
    },
    {
        titulo: 'Herramientas',
        items: [
            { icono: SiGit, nombre: 'Git' },
            { icono: SiGithub, nombre: 'GitHub' },
            { icono: SiGithubactions, nombre: 'GitHub Actions' },
            { icono: SiDocker, nombre: 'Docker' },
            { icono: SiVite, nombre: 'Vite' },
            { icono: SiJest, nombre: 'Jest' },
            { icono: SiVercel, nombre: 'Vercel' },
        ],
    },
];

const Habilidades = () => {
    return (
        <section id='habilidades' className="mb-12 mt-12">
            <h2 className="text-3xl font-bold mb-4">Habilidades y conocimientos</h2>
            <Card className="grid grid-cols-1 gap-8 text-center p-4 md:p-6">
                {categorias.map(({ titulo, items }) => (
                    <div key={titulo}>
                        <h2 className="text-xl font-bold mb-4">{titulo}</h2>
                        <div className="flex gap-1.5 md:gap-2 flex-wrap text-center justify-center">
                            {items.map(({ icono: Icono, nombre }) => (
                                <Card key={nombre} className='bg-[#6246ea] text-white w-[72px] md:w-[96px]'>
                                    <div className='flex flex-col p-2 md:p-4 items-center'>
                                        <Icono className='w-10 h-10 md:w-16 md:h-16' />
                                        <h3 className="text-xs md:text-medium font-semibold mt-2 md:mt-4 leading-tight">{nombre}</h3>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </Card>
        </section>
    )
}
export default Habilidades
