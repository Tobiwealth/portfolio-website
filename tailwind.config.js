/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'dmsans': ['DM Sans', 'sans-serif'],
        'tektur' : ['Tektur', 'cursive'],
        'montserrat' : ['Montserrat', 'sans-serif'],
      },
      colors : {
        'cool-black' : '#1c1d20',
        'charcoal' : '#28231D',
        'sky-white' : '#d8def0',
        "light-grayish-blue" : "hsl(280, 87%, 65%)",
        "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "very-dark-grayish-bluee": "hsl(235, 19%, 35%)",
      },
      backgroundImage : {
        'ehya' : "url('/src/images/ehya.PNG')",
        'fraudit' : "url('/src/images/fraudit.PNG')",
        'todo' : "url('/src/images/todo.PNG')",
        'robofriend' : "url('/src/images/robofriend.PNG')",
        'burger' : "url('/src/images/burger.PNG')",
        'weda' : "url('/src/images/weda.PNG')",
        'quil' : "url('/src/images/quil.PNG')",
        'comfy' : "url('/src/images/comfy3.PNG')",
        'black' : "url('/src/images/black.PNG')",
        'tutcov' : "url('/src/images/tutcov.PNG')",
      },
    },
  },
  plugins: [],
}

