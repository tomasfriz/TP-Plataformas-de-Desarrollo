const InfoEvent = {
  evento: {
    nombre: 'Fútbol',
    fecha: '05/05/2024',
    hora: '22:00 hs',
    ubicacion: 'Boedo',
    jugadores: '1/10',
    nivel: 'Intermedio',
    genero: 'Masculino',
    imagen: '/banner-detalles.jpg',
  },
  eventosData: [
    { id: 1, titulo: "Fútbol", ubicacion: "Boedo", imagen: "/buscar-perfil.jpg", nivel: "Intermedio", genero: "Masculino", cupos: "1/10" },
    { id: 2, titulo: "Tenis", ubicacion: "Belgrano", imagen: "/buscar-perfil.jpg", nivel: "Intermedio", genero: "Mixto", cupos: "2/4" },
    { id: 3, titulo: "Pádel", ubicacion: "Caballito", imagen: "/buscar-perfil.jpg", nivel: "Intermedio", genero: "Mixto", cupos: "3/4" },
    { id: 4, titulo: "Squash", ubicacion: "Palermo", imagen: "/buscar-perfil.jpg", nivel: "Principiante", genero: "Femenino", cupos: "1/2" },
    { id: 5, titulo: "Running", ubicacion: "Parque Chacabuco", imagen: "/buscar-perfil.jpg", nivel: "Intermedio", genero: "Mixto", cupos: "3/12" },
    { id: 6, titulo: "Básquet", ubicacion: "Parque Patricios", imagen: "/buscar-perfil.jpg", nivel: "Intermedio", genero: "Mixto", cupos: "3/10" },
  ],
  otrosEventos: [
    { id: 1, titulo: 'Yoga', ubicacion: 'Varios lugares', imagen: "/yoga.jpg", url: "https://buenosaires.gob.ar/noticias/clases-de-yoga-gratuitas-en-la-ciudad" },
    { id: 2, titulo: 'Zumba', ubicacion: 'Barracas', imagen: "/zumba.jpg", url: "https://buenosaires.gob.ar/cultura/usina-del-arte/clase-de-zumba" },
    { id: 3, titulo: 'Bicicleta', ubicacion: 'Retiro', imagen: "/bicicleta.jpg", url: "https://www.biketours.com.ar/" },
    { id: 4, titulo: 'Patin', ubicacion: 'Palermo', imagen: "/patin.jpg", url: "https://www.meetup.com/es/buenos-aires-roller-skating-meetup/" },
  ],
  misEventos: [
    { nombre: 'Fútbol', ubicacion: 'Boedo', jugadores: '1/10', nivel: 'Intermedio', genero: 'Masculino', imagen: "/equipo-perfil.jpg" },
    { nombre: 'Tenis', ubicacion: 'Belgrano', jugadores: '2/4', nivel: 'Intermedio', genero: 'Mixto', imagen: "/equipo-perfil.jpg" },
    { nombre: 'Pádel', ubicacion: 'Caballito', jugadores: '3/4', nivel: 'Intermedio', genero: 'Mixto', imagen: "/equipo-perfil.jpg" },
    { nombre: 'Squash', ubicacion: 'Palermo', jugadores: '1/2', nivel: 'Principiante', genero: 'Femenino', imagen: "/equipo-perfil.jpg" },
    { nombre: 'Running', ubicacion: 'Parque Chacabuco', jugadores: '3/12', nivel: 'Intermedio', genero: 'Mixto', imagen: "/equipo-perfil.jpg" },
    { nombre: 'Básquet', ubicacion: 'Parque Patricios', jugadores: '4/10', nivel: 'Avanzado', genero: 'Mixto', imagen: "/equipo-perfil.jpg" },
]
};

export default InfoEvent;