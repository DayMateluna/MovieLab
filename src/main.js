//aqui va el manejo del dom
const coaches = {
commoncore: [
  {
    name: 'Marcia',
    age: 20,
    skills: ['JS', 'HTML', 'CSS', 'React'],
    hobbie: {
      week: ['Mateo', 'Cocinar', 'Leer', 'Programar'],
      weekend: ['Mateo', 'Bailar', 'Películas']
    },
    pets: ['Pepito', 'Pepe', 'Pepa', 'Guardián']
  },
  {
    name: 'Domi',
    age: 24,
    skills: ['React', 'JS', 'HTML', 'CSS'],
    hobbie: {
      week: ['Programar', 'Leer', 'Youtube'],
      weekend: ['Pintar', 'Montañismo']
    },
    pets: ['Ganjah']
  },
   {
    name: 'Allison',
    age: 21,
    skills: ['JS', 'HTML', 'CSS', 'UX', 'Research'],
    hobbie: {
      week: ['Leer', 'UX'],
      weekend: ['Cocinar', 'Netflix']
    },
    pets: ['Liz']
  },
   {
    name: 'Alexandra',
    age: 19,
    skills: ['JS', 'React', 'HTML', 'CSS', 'Java', 'C#'],
    hobbie: {
      week: ['Tutoriales', 'Programar', 'Leer'],
      weekend: ['Netflix', 'Memes']
    },
    pets: ['Chica', 'Negra', 'Jaspe', 'Rubio']
  },
]
}

let hola = coaches.commoncore
holi='';
for(let i=0; i<hola.length;i++) {
holi += hola[i].hobbie.week
//console.log(holi)
}
chau=""
for(let i=0; i<holi.length;i++){
chau += holi[i];
console.log(chau)
}