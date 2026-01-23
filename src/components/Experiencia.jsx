import { Card, CardHeader, CardBody, Chip, Image } from '@nextui-org/react';
const Experiencia = () => {
    const experienciaActual = (fechaIngreso) => {
        const fechaIngresoDate = new Date(fechaIngreso);
        const fechaActual = new Date();

        let aniosDiferencia = fechaActual.getFullYear() - fechaIngresoDate.getFullYear();
        let mesesDiferencia = fechaActual.getMonth() - fechaIngresoDate.getMonth();

        if (mesesDiferencia < 0) {
            aniosDiferencia--;
            mesesDiferencia += 12;
        }

        if (fechaActual.getDate() < fechaIngresoDate.getDate()) {
            mesesDiferencia--;
            if (mesesDiferencia < 0) {
                aniosDiferencia--;
                mesesDiferencia += 12;
            }
        }

        let resultado = "";
        if (aniosDiferencia > 0) {
            resultado += `${aniosDiferencia} año${aniosDiferencia > 1 ? 's' : ''}`;
        }
        if (mesesDiferencia > 0) {
            if (resultado) resultado += " y ";
            resultado += `${mesesDiferencia} mes${mesesDiferencia > 1 ? 'es' : ''}`;
        }

        if (!resultado) {
            resultado = "Recién contratado";
        }
        return resultado;
    }

    return (
        <section id='experiencia' className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Experiencia</h2>
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <div className='p-2'>
                            <img
                                alt="Certificadora del sur logo"
                                width={80}
                                src="./logo_CDS.png"
                            />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className="text-xl ltb:text-2xl font-semibold justify-self-start">Desarrollador Full-Stack para Certificadora del Sur <small className='text-sm text-foreground-500'>{experienciaActual("2024-04-03")}</small></h3>
                            <Chip size='sm' className="mt-2 bg-[#6246ea] text-white">2024 - Actualidad</Chip>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p className="text-gray-600 pb-2">
                            Participé en el desarrollo de diversos sistemas. En mi estadía realicé integraciones con WebPay y WhatsApp, construí y consumí servicios REST y, de igual forma hice consumo de servicios WSDL. Todo lo anterior aplicando el patrón de desarrollo RestDAO,
                            con tecnologías como Java 8, Hibernate y PostgresSQL en back-end, y JavaScript
                            Nativo + Jquery en front-end. 
                        </p>
                    </CardBody>
                </Card>

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
                            <Chip size='sm' className="mt-2 bg-[#6246ea] text-white ">2021 - 2021</Chip>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p className="text-gray-600 pb-2">
                            Hice uso de Vue.js y Vuetify en el Front-End, y Django en el Back-End. Me desempeñé trabajando principalmente en el Front-End, pero de igual forma involucrándome constantemente en el Back-End durante el desarrollo de un proyecto de índole confidencial.
                        </p>
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}
export default Experiencia