const n = n => parseFloat(String(n).replace(/[^0-9.]/ig, ''))
const tagVERDADEROFALSO = 'VERDADERO O FALSO'
const optionResultVerdadero = [
  'Verdadero',
  'Falso',
]
const optionResultFalso = [
  'Falso',
  'Verdadero',
]

const sortAsc = (a, b) => a > b
const sortAscNumber = (a, b) => a.toString().padStart(50, '0') > b.toString().padStart(50, '0')
const sortAscReverse = (a, b) => a.split('').reverse().join('') > b.split('').reverse().join('')
const sortAlwaysEnd = (opt) => (a, b) => a === opt ? 1 : 0

/**
 * @typedef {{title:string,image:string,options:string[],sort?:Function,stag?:string}} Question
 */

/**
 * @type {Question[]}
 */
const questions = [
  {
    title: 'La siguiente definición: “Es cualquier situación fuera de control que atente contra la vida de las personas que trabajan en las instalaciones, a la propia instalación y que ocasiones daños a terceros e impactos negativos en el medio ambiente” ccorresponde a:',
    options: [
      'Emergencia',
      'Peligro',
      'Riesgo',
      'Alerta',
    ],
  },
  {
    title: 'La siguiente definición: “Es la planificación, organización, conjuntos de medios y procedimientos de actuación, previstos en una instalación, con el fin de prevenir los accidentes de cualquier tipo y en su caso, minimizar o mitigar sus efectos, protegiendo a las personas, medio ambiente y a las instalaciones” corresponde a:',
    options: [
      'Plan de Emergencias',
      'Procedimiento de trabajo',
      'Programa de actividades de trabajo',
      'Ninguna de las anteriores',
    ],
    sort: sortAlwaysEnd('Ninguna de las anteriores'),
  },
  {
    title: '¿Un Incendio corresponde a una amenaza o emergencia del tipo?',
    options: [
      'Técnica',
      'Natural',
      'Social',
      'Intencional',
    ],
  },
  {
    title: 'Los Planos de Emergencias de una empresa o planta en general, sirven para:',
    options: [
      'Todas las anteriores',
      'Para identificar las vías de evacuación y salidas de emergencias',
      'Para identificar la ubicación y tipos de extintores portátiles',
      'Para identificar la ubicación de las Zonas de Seguridad de la empresa',
    ],
    sort: sortAlwaysEnd('Todas las anteriores'),
  },
  {
    title: 'Para que un Plan de emergencias pueda implementarse de manera efectiva en una empresa, debe contar con:',
    options: [
      'Todas son correctas',
      'Personal capacitado en el Plan de emergencias y entrenado para responder a emergencias y realizar simulacros.',
      'Contar con vías, salidas y zonas de seguridad señalizadas',
      'Contar con sistemas de alarmas, equipamiento necesario para responder a emergencias',
    ],
    sort: sortAlwaysEnd('Todas son correctas'),
  },
  {
    title: 'Según la siguiente definición: “es un conjunto de procesos y acciones tendientes a que las personas amenazadas por un peligro, protejan su vida e integridad física, mediante su desplazamiento hasta y a través de lugares de menor riesgo en  el centro de trabajo de forma segura y ordenada, hasta una zona de seguridad” corresponde a:',
    options: [
      'Evacuación',
      'Accidente',
      'Emergencia',
      'Ninguna de las anteriores',
    ],
    sort: sortAlwaysEnd('Ninguna de las anteriores'),
  },
  {
    title: 'Si tenemos una emergencia en donde se ve afectado solo una dependencia de la empresa y la amenaza de la emergencia no es de mayor riesgo para las otras instalaciones, ¿Qué tipo de evacuación debemos realizar?',
    options: [
      'Una evacuación parcial',
      'Una evacuación total',
      'Una evacuación general',
      'Una evacuación universal',
    ],
  },
  {
    title: 'La siguiente definición: “Es aquel lugar físico de la infraestructura interna o externa que posee una mayor capacidad de protección masiva frente a los riegos derivados de una emergencia” corresponde a:',
    options: [
      'Zona de Seguridad',
      'Vía de Evacuación',
      'Salida de emergencia',
      'Ninguna de las anteriores',
    ],
    sort: sortAlwaysEnd('Ninguna de las anteriores'),
  },
  {
    title: '¿Cuál es la finalidad de preparar a las personas para casos de emergencia?',
    options: [
      'Permite a la persona responder de manera más adecuada',
      'No es buena porque asusta mucho a la gente',
      'Es más bien una pérdida de tiempo',
      'Ninguna de las anteriores',
    ],
    sort: sortAlwaysEnd('Ninguna de las anteriores'),
  },
  {
    title: 'Al hablar de asalto, robos amenaza de bomba o vandalismo, estas se catalogan dentro de amenaza de tipo:',
    options: [
      'Social',
      'Técnica',
      'Natural',
      'Simulada',
    ],
  },
  {
    title: 'Un derrame o escape de sustancias peligrosas, corresponde a una amenaza de tipo:',
    options: [
      'Técnica',
      'Natural',
      'Social',
      'Intencional',
    ],
  },
  {
    title: 'Dentro de las amenazas de tipo meteorológicas o climáticas y geológicas tenemos',
    options: [
      'Tsunami e inundaciones',
      'Incendio y explosiones',
      'Asalto y robo',
      'Vandalismo y erupción volcánica',
    ],
  },
  questionV('La Ordenanza General de Urbanismo y Construcciones dentro de sus indicciones establece las condiciones de seguridad en las construcciones como por ejemplo vías de evacuación, características de las escaleras, pasillos y señaléticas.'),
  questionV('Las puertas de escape deben abrir desde el interior sin la utilización de llaves o mecanismos que requieran algún esfuerzo o conocimiento especial.'),
  questionF('Las puertas de escape podrán estar cubiertas con decoraciones que disimulen su ubicación.'),
  questionV('El D.S. N° 594, establece que las puertas de escapes no podrán mantenerse cerradas con llave, candado u otro medio que impida su fácil apertura.'),
  questionV('El D.S. N° 594, establece que en todo lugar de trabajo en que exista algún riesgo de incendio, se deberá contar con extintores de incendio y deberán cumplir con los requisitos y características que establece el D.S. Nº 369.'),
  questionF('El D.S. N° 594, no obliga a que todo el personal que se desempeña en un lugar de trabajo deba ser instruido y entrenado sobre la manera de usar los extintores en caso de emergencia.'),
  questionF('Sobre la evacuación en edificios, en caso de sismo se recomienda utilizar los ascensores ya que son más rápidos.'),
  questionF('Durante la evacuación se recomienda apurar la marcha de evacuación y si es necesario correr.'),
  questionV('Los tipos de emergencias se agrupan en amenazas naturales, técnicas y sociales.'),
  questionF('Las amenazas como tsunami, aluvión, maremoto, sismo e inundaciones son del tipo sociales.'),
]

function questionV (title) {
  return {
    stag: tagVERDADEROFALSO,
    title,
    options: optionResultVerdadero,
  };
}

function questionF (title) {
  return {
    stag: tagVERDADEROFALSO,
    title,
    options: optionResultFalso,
  };
}

module.exports = questions
