import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://img.freepik.com/fotos-premium/vista-angulo-alto-vertical-equipo-desarrollo-ti-multietnico-que-colabora-proyecto-empresarial-mientras-trabaja-estudio-produccion-software_236854-29548.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Despliega más rápido con Nova Tech</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Un Mejor Flujo de Trabajo para Tus Proyectos</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
            Mejora tu proceso de desarrollo con una integración sin fisuras y prácticas de despliegue eficientes. 
            En Nova Tech, nos esforzamos por la excelencia en cada proyecto que emprendemos. 
            
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
              Nuestro flujo de trabajo está diseñado para ayudarte a entregar más rápido y de manera más 
            efectiva, asegurando que tu trabajo se destaque. Nuestro equipo de expertos está aquí para 
            apoyarte en cada paso del camino.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Despliegue con un Clic.</strong>  Simplifica tu proceso de despliegue con nuestro eficiente sistema de despliegue con un clic, permitiéndote centrarte más en el desarrollo y menos en el despliegue.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Certificados SSl.</strong> Asegura la protección de tus proyectos con nuestra integración completa de certificados SSL, brindando tranquilidad para ti y tus clientes.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Copias de Seguridad de Base de Datos.</strong> Las copias de seguridad regulares de la base de datos son una parte crucial de nuestro servicio, asegurando que tus datos siempre estén seguros y recuperables.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              En Nova Tech, estamos dedicados a proporcionar servicios de primera calidad que impulsen el éxito. Nuestro equipo está equipado con las últimas herramientas y tecnologías para asegurar que tus proyectos se completen con los más altos estándares. Entendemos la importancia de la fiabilidad y la eficiencia, por lo que las priorizamos en cada aspecto de nuestro trabajo.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">¿Sin Servidor? No Hay Problema.</h2>
              <p className="mt-6">
              En Nova Tech, ofrecemos soluciones flexibles que se adaptan a tus necesidades, incluso si no tienes un servidor. Nuestros servicios en la nube aseguran que tus proyectos puedan ser desplegados y gestionados con facilidad, proporcionándote la flexibilidad y escalabilidad requeridas en el entorno acelerado de hoy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
