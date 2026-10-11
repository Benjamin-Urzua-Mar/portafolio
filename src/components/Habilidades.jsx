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
            <Card className="p-4 ltb:p-6 divide-y divide-default-200">
                {categorias.map(({ titulo, items }) => (
                    <div key={titulo} className="flex flex-col ltb:flex-row gap-3 ltb:gap-6 py-5 first:pt-0 last:pb-0">
                        <h3 className="text-lg font-bold ltb:w-40 ltb:shrink-0 ltb:pt-2">{titulo}</h3>
                        <ul className="grid grid-cols-2 tbt:grid-cols-3 ltb:grid-cols-5 gap-2 flex-1">
                            {items.map(({ icono: Icono, nombre }) => (
                                <li key={nombre} className="flex items-center gap-3 rounded-lg bg-[#6246ea]/10 px-3 py-2">
                                    <Icono className="shrink-0 text-[#6246ea]" size="22px" />
                                    <span className="text-sm font-semibold text-default-700 leading-tight">{nombre}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </Card>
        </section>
    )
}
export default Habilidades
