import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

  especialidad = [
    {
      Id:0,
      Name: "Cardiologia",
      Descripcionbreve: "Rama de la medicina que se especiliza en el diagnóstico y tratamiento de enfermedades del corazón",
      Descripcion: "Rama de la medicina que se especiliza en el diagnóstico y tratamiento de enfermedades del corazón, los vasos sanguíneos y el sistema circulatorio. Estas enfermedades incluyen enfermedad de la arteria coronaria, problemas del ritmo del corazón e insuficiencia cardíaca.",
      precio: "90.00",
      atencion: "martes y miercoles de 3:00 pm a 7:00 pm",
      iconoespecialidad: "http://aplicacion.kayserjhamillex.com/assets/img/cardiologia.png",
      imagenespecialidad: ""
    },
    {
      Id:1,
      Name: "Gastroenterología",
      Descripcionbreve: "Parte de la medicina que se ocupa del estómago y los intestinos y sus enfermedades",
      Descripcion: "Rama de la medicina que se ocupa del estómago y los intestinos y sus enfermedades, así como del resto de los órganos del aparato digestivo.",
      precio: "85.00",
      atencion: "martes y miercoles de 3:00 pm a 7:00 pm",
      iconoespecialidad: "http://aplicacion.kayserjhamillex.com/assets/img/gastroenterologia.png",
      imagenespecialidad:""
    },
    {
      Id:2,
      Name: "Medicina General",
      Descripcionbreve: "La medicina general constituye el primer nivel de atención médica.",
      Descripcion: "a medicina general constituye el primer nivel de atención médica. El médico general es un profesional capacitado para diagnosticar y manejar diferentes patologías comunes y derivar al especialista indicado cuando corresponda.",
      precio: "80.00",
      atencion: "martes y miercoles de 3:00 pm a 7:00 pm",
      iconoespecialidad: "http://aplicacion.kayserjhamillex.com/assets/img/medicina.png",
      imagenespecialidad:""
    },
    {
      Id:3,
      Name: "Neumología",
      Descripcionbreve: "Es la especialidad médica que se encarga del estudio del sistema respiratorio",
      Descripcion: "Es la especialidad médica que se encarga del estudio del sistema respiratorio, también conocida como Neumonología, Pulmonología y Medicina respiratoria.",
      precio: "150.00",
      atencion: "martes y miercoles de 3:00 pm a 7:00 pm",
      iconoespecialidad: "http://aplicacion.kayserjhamillex.com/assets/img/neumologia.png",
      imagenespecialidad:""
    },
    {
      Id:4,
      Name: "Geriatría",
      Descripcionbreve: "Los geriatras son médicos expertos en el cuidado de los adultos mayores",
      Descripcion: "Los geriatras son médicos expertos en el cuidado de los adultos mayores, de la misma manera que los pediatras lo son de los niños. Tienen especial conocimiento de enfermedades que comúnmente aquejan a los ancianos.",
      precio: "90.00",
      atencion: "martes y miercoles de 3:00 pm a 7:00 pm",
      iconoespecialidad: "http://aplicacion.kayserjhamillex.com/assets/img/geriatria.png",
      imagenespecialidad:""
    },
    {
      Id:5,
      Name: "Dermatología",
      Descripcionbreve: "especialidad centrada en las enfermedades y en las funciones de la piel",
      Descripcion: "La dermatología es la especialidad de la medicina centrada en las enfermedades y en las funciones de la piel (el órgano más extenso del cuerpo humano)",
      precio: "120.00",
      atencion: "martes y miercoles de 3:00 pm a 7:00 pm",
      iconoespecialidad: "http://aplicacion.kayserjhamillex.com/assets/img/dermatologia.png",
      imagenespecialidad:""
    },
    {
      Id:6,
      Name: "Ginecología",
      Descripcionbreve: "La ginecología es la especialidad de la medicina dedicada al cuidado del sistema reproductor femenino.",
      Descripcion: "la ginecología es la especialidad de la medicina dedicada al cuidado del sistema reproductor femenino. Los ginecólogos, por lo tanto, son los especialistas que atienden las cuestiones vinculadas al útero, la vagina y los ovarios.",
      precio: "110.00",
      atencion: "martes y miercoles de 3:00 pm a 7:00 pm",
      iconoespecialidad: "http://aplicacion.kayserjhamillex.com/assets/img/ginecologia.png",
      imagenespecialidad:""
    },
    {
      Id:7,
      Name: "Reumatología",
      Descripcionbreve: "La Reumatología es la especialidad médica que se encarga de prevenir, diagnosticar y tratar las enfermedades musculo esqueléticas y autoinmunes sistémicas.",
      Descripcion: "La Reumatología es la especialidad médica que se encarga de prevenir, diagnosticar y tratar las enfermedades musculo esqueléticas y autoinmunes sistémicas. Se trata de una de las especialidades que más avances en diagnóstico y tratamiento ha experimentado en los últimos años.",
      precio: "130.00",
      atencion: "martes y miercoles de 3:00 pm a 7:00 pm",
      iconoespecialidad: "http://aplicacion.kayserjhamillex.com/assets/img/reumatologia.png",
      imagenespecialidad:""
    },
    {
      Id:8,
      Name: "Medicina Interna",
      Descripcionbreve: "La Medicina Interna es una especialidad médica que se dedica al estudio, diagnóstico y tratamiento de las enfermedades propias del adulto.",
      Descripcion: "La Medicina Interna es una especialidad médica que se dedica al estudio, diagnóstico y tratamiento de las enfermedades propias del adulto.",
      precio: "80.00",
      atencion: "martes y miercoles de 3:00 pm a 7:00 pm",
      iconoespecialidad: "http://aplicacion.kayserjhamillex.com/assets/img/medicina.png",
      imagenespecialidad:""
    },
    {
      Id:9,
      Name: "Endocrinología",
      Descripcionbreve: "Un endocrinólogo es un médico especializado en las enfermedades de las hormonas,",
      Descripcion: "Un endocrinólogo es un médico especializado en las enfermedades de las hormonas, del metabolismo y en los problemas nutricionales.",
      precio: "80.00",
      atencion: "martes y miercoles de 3:00 pm a 7:00 pm",
      iconoespecialidad: "http://aplicacion.kayserjhamillex.com/assets/img/endocrinologia.png",
      imagenespecialidad:""
    },
    {
      Id:10,
      Name: "Traumatología",
      Descripcionbreve: "La Traumatología es la especialidad médica que se encarga del cuidado, estudio y rehabilitación de la forma y función de las extremidades, columna y estructuras asociadas.",
      Descripcion: "La Traumatología es la especialidad médica que se encarga del cuidado, estudio y rehabilitación de la forma y función de las extremidades, columna y estructuras asociadas. Es una especialidad que abarca más allá del campo de lesiones traumáticas; contempla también el estudio de patologías congénitas.",
      precio: "130.00",
      atencion: "martes y miercoles de 3:00 pm a 7:00 pm",
      iconoespecialidad: "http://aplicacion.kayserjhamillex.com/assets/img/traumatologia.png",
      imagenespecialidad:""
    },
    {
      Id:11,
      Name: "Oftalmología",
      Descripcionbreve: "Es la especialidad médica que se encarga del tratamiento de las enfermedades de los ojos.",
      Descripcion: "Es la especialidad médica que se encarga del tratamiento de las enfermedades de los ojos. Esta disciplina también tiene aplicación en la veterinaria ya que los seres humanos y los animales suelen compartir, en este caso, procesos patológicos similares.",
      precio: "60.00",
      atencion: "martes y miercoles de 3:00 pm a 7:00 pm",
      iconoespecialidad: "http://aplicacion.kayserjhamillex.com/assets/img/oftalmologia.png",
      imagenespecialidad:""
    },
    {
      Id:12,
      Name: "Otorrinolaringología",
      Descripcionbreve: "Es la especialidad médica y quirúrgica que se encarga de la prevención, diagnóstico y tratamiento de las enfermedades del oído",
      Descripcion: "Es la especialidad médica y quirúrgica que se encarga de la prevención, diagnóstico y tratamiento de las enfermedades del oído, las vías aéreo-respiratorias superiores y las zonas próximas de la cara y el cuello.",
      precio: "70.00",
      atencion: "martes y miercoles de 3:00 pm a 7:00 pm",
      iconoespecialidad: "http://aplicacion.kayserjhamillex.com/assets/img/otorrinolaringologia.png",
      imagenespecialidad:""
    },
    {
      Id:13,
      Name: "Cirugia General",
      Descripcionbreve: "La cirugía general es la especialidad de la medicina que tiene competencia en el diagnóstico y tratamiento de las patologías que se resuelven mediante procedimientos quirúrgicos o potencialmente quirúrgicos.",
      Descripcion: "La cirugía general es la especialidad de la medicina que tiene competencia en el diagnóstico y tratamiento de las patologías que se resuelven mediante procedimientos quirúrgicos o potencialmente quirúrgicos, tanto electivos como de urgencia, de origen benigno, inflamatorio, traumático o neoplásico en los siguientes aparatos, sistemas y áreas anatómicas: aparato digestivo, pared abdominal, sistema endocrino, mama, piel y partes blandas, retroperitoneo y afecciones externas de la cabeza y el cuello.",
      precio: "130.00",
      atencion: "martes y miercoles de 3:00 pm a 7:00 pm",
      iconoespecialidad: "http://aplicacion.kayserjhamillex.com/assets/img/cirugia.png",
      imagenespecialidad:""
    },
    {
      Id:14,
      Name: "Neurología",
      Descripcionbreve: "La Neurología se ocupa de forma integral de la asistencia médica al enfermo neurológico,",
      Descripcion: "La Neurología se ocupa de forma integral de la asistencia médica al enfermo neurológico, de la docencia en todas las materias que afectan al sistema nervioso y de la investigación, tanto clínica como básica, dentro de su ámbito.",
      precio: "130.00",
      atencion: "martes y miercoles de 3:00 pm a 7:00 pm",
      iconoespecialidad: "http://aplicacion.kayserjhamillex.com/assets/img/neurologia.png",
      imagenespecialidad:""
    },
    {
      Id:15,
      Name: "Urologia",
      Descripcionbreve: "La Urología es una especialidad médico-quirúrgica que se ocupa del estudio, diagnóstico y tratamiento de las afecciones médicas y quirúrgicas del aparato urinario",
      Descripcion: "La Urología es una especialidad médico-quirúrgica que se ocupa del estudio, diagnóstico y tratamiento de las afecciones médicas y quirúrgicas del aparato urinario y retroperitoneo, en ambos sexos, y del aparato genital masculino, sin límite de edad, motivadas por padecimientos congénitos traumáticos, sépticos, metabólicos, obstructivos y oncológicos.",
      precio: "130.00",
      atencion: "martes y miercoles de 3:00 pm a 7:00 pm",
      iconoespecialidad: "http://aplicacion.kayserjhamillex.com/assets/img/urologia.png",
      imagenespecialidad:""
    },
  ];

  servicio = [
    {
      Id:0,
      Name: "LaboratorioClinico",
      Descripcionbreve: "laboratorios de análisis de rutina y laboratorios de análisis específicos.",
      Descripcion: "Nuestro equipo multidisciplinario, formado por el médico patólogo clínico o analista clínico, profesionales del laboratorio y técnicos en análisis clínicos, analizan muestras biológicas humanas que contribuyen al estudio, prevención, diagnóstico y tratamiento de las enfermedades.",
      iconoservicio: "http://aplicacion.kayserjhamillex.com/assets/img/laboratorio.png",
      imagenservicio:"https://irp-cdn.multiscreensite.com/e4ccdf67/MOBILE/jpg/005.jpg"
    },
    {
      Id:1,
      Name: "Radiografia",
      Descripcionbreve: "Las imágenes de rayos X muestran el interior de su cuerpo en diferentes tonos de blanco y negro.",
      Descripcion: "Las imágenes de rayos X muestran el interior de su cuerpo en diferentes tonos de blanco y negro. Esto es debido a que diferentes tejidos absorben diferentes cantidades de radiación. El calcio en los huesos absorbe la mayoría de los rayos X, por lo que los huesos se ven blancos. La grasa y otros tejidos blandos absorben menos, y se ven de color gris. El aire absorbe la menor cantidad, por lo que los pulmones se ven negros.",
      iconoservicio: "http://aplicacion.kayserjhamillex.com/assets/img/radiografia.png",
      imagenservicio:"http://kayserjhamillex.com/wp-content/uploads/2019/07/tomografia.jpg"
    },
    {
      Id:2,
      Name: "Ecografia",
      Descripcionbreve: "Es una técnica de exploración de los órganos internos del cuerpo que consiste en registrar el eco de ondas electromagnéticas o acústicas enviadas hacia el lugar que se examina.",
      Descripcion: "Es una técnica de exploración de los órganos internos del cuerpo que consiste en registrar el eco de ondas electromagnéticas o acústicas enviadas hacia el lugar que se examina. Este procedimiento de diagnóstico emplea el ultrasonido para crear imágenes tridimensionales, con la finalidad de visualizar órganos para diagnósticos exactos.",
      iconoservicio: "http://aplicacion.kayserjhamillex.com/assets/img/ecografia.png",
      imagenservicio:"http://kayserjhamillex.com/wp-content/uploads/2019/07/ecografia.jpg"
    },
    {
      Id:3,
      Name: "Farmacia",
      Descripcionbreve: "Es el servicio que brinda atención durante las 24 horas del día para la dispensación de productos químicos farmacéuticos.",
      Descripcion: "Una farmacia también puede ser utilizada como un centro de atención para primeros auxilios, contando en tal caso con el equipo para tomar presión, para aplicar inyecciones, etc. Esto prueba que las farmacias no pueden ser operadas por empleados si no que deben contar siempre en su staff con gente especialmente capacitada para atender las necesidades sanitarias de las personas que allí concurren.",
      iconoservicio: "http://aplicacion.kayserjhamillex.com/assets/img/farmacia.png",
      imagenservicio:"https://i1.wp.com/umetonline.com/wp-content/uploads/2019/02/03-farmacia.jpg?resize=1170%2C750&ssl=1"
    },
    {
      Id:4,
      Name: "Emergencia",
      Descripcionbreve: "El área de Emergencias brinda una buena e inmediata atención para restablecer la salud del paciente.",
      Descripcion: "El área de Emergencias brinda una buena e inmediata atención para restablecer la salud del paciente. Nuestro staff de médicos emergencistas y personal de enfermería cuenta con amplia experiencia y la convicción de brindar la mejor atención a los pacientes, con el mayor compromiso ético y profesional para solucionar los problemas urgentes de salud.",
      iconoservicio: "http://aplicacion.kayserjhamillex.com/assets/img/emergencia.png",
      imagenservicio:"https://thumbs.dreamstime.com/b/m%C3%A9dicos-com-mulher-na-marquesa-do-hospital-na-emerg%C3%AAncia-63738304.jpg"
    },
    {
      Id:5,
      Name: "Hospitalización",
      Descripcionbreve: "Nuestro objetivo es prestar una atención médica integral a aquellos pacientes adultos y pediátricos que se hospitalizan por una patología de baja o mediana complejidad",
      Descripcion: "Nuestro objetivo es prestar una atención médica integral a aquellos pacientes adultos y pediátricos que se hospitalizan por una patología de baja o mediana complejidad, tanto de causa médica como quirúrgica. Cumpliendo estándares exigentes de calidad técnica y profesional, el servicio de Hospitalización se lleva a cabo bajo el sello de servir a la persona enferma, con un trato humano y digno.",
      iconoservicio: "http://aplicacion.kayserjhamillex.com/assets/img/hospitaliacion.png",
      imagenservicio:"https://image.freepik.com/foto-gratis/mujer-hospitalizada-doctores_13339-88558.jpg"
    }
  ];
  doctor = [
    {
      Id:0,
      Fullname: "Rocio Del Pilar Valentin Bejarano",
      Fechanacimiento: "",
      Genero: "",
      Celular: "",
      Email: "",
      Imagendoctor:"http://aplicacion.kayserjhamillex.com/assets/img/doctor2.png",
      Password: "",
      Facebook: "",
      Instagram: "",
      Twitter: ""
    },
    {
      Id:1,
      Fullname: "John Henrry Valentin Bejarano",
      Fechanacimiento: "",
      Genero: "",
      Celular: "",
      Email: "",
      Imagendoctor:"http://aplicacion.kayserjhamillex.com/assets/img/doctor1.png",
      Password: "",
      Facebook: "",
      Instagram: "",
      Twitter: ""
    },
    {
      Id:2,
      Fullname: "Rocio Del Pilar Valentin Bejarano",
      Fechanacimiento: "",
      Genero: "",
      Celular: "",
      Email: "",
      Imagendoctor:"http://aplicacion.kayserjhamillex.com/assets/img/doctor2.png",
      Password: "",
      Facebook: "",
      Instagram: "",
      Twitter: ""
    },
    {
      Id:3,
      Fullname: "John Henrry Valentin Bejarano",
      Fechanacimiento: "",
      Genero: "",
      Celular: "",
      Email: "",
      Imagendoctor:"http://aplicacion.kayserjhamillex.com/assets/img/doctor1.png",
      Password: "",
      Facebook: "",
      Instagram: "",
      Twitter: ""
    }
  ];


  blog = [
    {
      Id:0,
      Titulo: "",
      Subtitulo: "",
      Descripcionbreve: "",
      Descripcion: "",
      imagenblog:"",
      videoblog:""
    },
    {
      Id:1,
      Titulo: "",
      Subtitulo: "",
      Descripcionbreve: "",
      Descripcion: "",
      imagenblog:"",
      videoblog:""
    }
  ];

  constructor() { }

  ObtenerEspecialidad(){
    return this.especialidad;
  }
  ObtenerServicio(){
    return this.servicio;
  }
  ObtenerDoctor(){
    return this.doctor;
  }
  ObtenerBlog(){
    return this.blog;
  }
}
