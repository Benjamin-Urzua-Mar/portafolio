import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardHeader, CardBody, Image, Chip } from '@nextui-org/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const CarouselProyectos = () => {
  return (
    <>
      <section className='hidden hd:block'>
        <Swiper slidesPerView={2} spaceBetween={30} grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className='h-[430px]'
        >
          <SwiperSlide>
            <Card className="col-span-12 sm:col-span-4 h-[400px]">
              <CardHeader className="card-header absolute z-10 top-0 flex-col !items-start bg-gradient-to-b from-[#353535bb] to-transparent">
                <h3 className="text-white font-semibold text-xl">Emplify</h3>
              </CardHeader>
              <CardBody className="absolute z-10 bottom-0 flex-col !items-start bg-white rounded-t-sm shadow-inner">
                <p className="text-default-700 font-medium font-century-gothic text-medium">Fue mi proyecto de título. Plataforma de red social de servicios laborales para conectar clientes con profesionales en servicios variados.</p>
                <section className='inline-flex gap-1 font-medium'>
                  <Chip size='sm' className="mt-2 bg-[#f06529] text-white ">#HTML5</Chip>
                  <Chip size='sm' className="mt-2 bg-[#2965f1] text-white ">#CSS3</Chip>
                  <Chip size='sm' className="mt-2 bg-[#f0db4f] text-white ">#JavaScript</Chip>
                  <Chip size='sm' className="mt-2 bg-[#563d7c] text-white ">#Tailwind</Chip>
                  <Chip size='sm' className="mt-2 bg-[#16becb] text-white ">#React</Chip>
                  <Chip size='sm' className="mt-2 bg-[#3c873a] text-white ">#Node.js</Chip>
                  <Chip size='sm' className="mt-2 bg-default-600 text-white ">#Express.js</Chip>
                  <Chip size='sm' className="mt-2 bg-[#b32134] text-white ">#Mongoose</Chip>
                  <Chip size='sm' className="mt-2 bg-[#049024] text-white ">#MongoDB</Chip>
                  <Chip size='sm' className="mt-2 bg-default-600 text-white ">#Socket.io</Chip>
                </section>
              </CardBody>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover cursor-pointer transition duration-[1] ease-in-out hover:brightness-90"
                src="./emplify.jpeg"
                onClick={() => window.open('https://emplify.burzua.lat/')}
              />
            </Card>
          </SwiperSlide>
        </Swiper >
      </section>
      <section className='block hd:hidden'>
        <Swiper direction={'vertical'} slidesPerView={1} spaceBetween={30} grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className='h-[430px]'
        >
          <SwiperSlide>
            <Card className="col-span-12 sm:col-span-4 h-[400px]">
              <CardHeader className="card-header absolute z-10 top-0 flex-col !items-start bg-gradient-to-b from-[#353535bb] to-transparent">
                <h3 className="text-white font-semibold text-xl">Emplify</h3>
              </CardHeader>
              <CardBody className="absolute z-10 bottom-0 flex-col !items-start bg-white rounded-t-sm shadow-inner">
                <p className="text-default-700 font-medium font-century-gothic text-medium">Fue mi proyecto de título. Plataforma de red social de servicios laborales para conectar clientes con profesionales en servicios variados.</p>
                <section className='inline-flex gap-1 font-medium'>
                  <Chip size='sm' className="mt-2 bg-[#f06529] text-white ">#HTML5</Chip>
                  <Chip size='sm' className="mt-2 bg-[#2965f1] text-white ">#CSS3</Chip>
                  <Chip size='sm' className="mt-2 bg-[#f0db4f] text-white ">#JavaScript</Chip>
                  <Chip size='sm' className="mt-2 bg-[#563d7c] text-white ">#Tailwind</Chip>
                  <Chip size='sm' className="mt-2 bg-[#16becb] text-white ">#React</Chip>
                  <Chip size='sm' className="mt-2 bg-[#3c873a] text-white ">#Node.js</Chip>
                  <Chip size='sm' className="mt-2 bg-default-600 text-white ">#Express.js</Chip>
                  <Chip size='sm' className="mt-2 bg-[#b32134] text-white ">#Mongoose</Chip>
                  <Chip size='sm' className="mt-2 bg-[#049024] text-white ">#MongoDB</Chip>
                  <Chip size='sm' className="mt-2 bg-default-600 text-white ">#Socket.io</Chip>
                </section>
              </CardBody>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover cursor-pointer transition duration-[1] ease-in-out hover:brightness-90"
                src="./emplify.jpeg"
                onClick={() => window.open('https://dashing-croquembouche-08f896.netlify.app/')}
              />
            </Card>
          </SwiperSlide>
        </Swiper >
      </section>


    </>
  );
}
export default CarouselProyectos 