import { Card, CardHeader, CardBody, Chip, Image } from '@nextui-org/react';
const Experiencia = () => {
    return (
        <section id='experiencia' className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Experiencia</h2>
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <div className='p-2'>
                            <img
                                alt="Efebyte logo"
                                width={80}
                                src="./efebyte.jpg"
                            />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className="text-xl ltb:text-2xl font-semibold justify-self-start">Desarrollador Full-Stack para EfeByte <small className='text-sm text-foreground-500'>2 meses</small></h3>
                            <Chip size='sm' className="mt-2 bg-[#6246ea] text-white ">2022 - 2022</Chip>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p className="text-gray-600 pb-2">
                            Me desempeñé trabajando principalmente en el Front-End, pero de igual forma involucrándome constantemente en el Back-End durante el desarrollo de una solución web de operaciones internas para la empresa del sector eléctrico Colbún. Hice uso de Vue.js y Vuetify en el Front-End, y Django en el Back-End.
                        </p>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader>
                    <div className='p-2'>
                            <img
                                alt="Efebyte logo"
                                width={80}
                                src="./logo_CDS.png"
                            />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className="text-xl ltb:text-2xl font-semibold justify-self-start">Desarrollador Full-Stack para Certificadora del Sur <small className='text-sm text-foreground-500'>7 meses</small></h3>
                            <Chip size='sm' className="mt-2 bg-[#6246ea] text-white ">2024 - Actualidad</Chip>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p className="text-gray-600 pb-2">
                            Desempeño labores de desarrollo web aplicando patrón de desarrollo RestDAO,
                            con tecnologías como Java 8, Hibernate y PostgresSQL en back-end, y JavaScript
                            Nativo + Jquery en front-end.
                        </p>
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}
export default Experiencia