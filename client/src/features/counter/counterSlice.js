import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    data: localStorage.getItem("storeBage"),
  },
  reducers: {
    add: (state, article) => {
      if (state.data == null) {
        state.data = article.payload
        localStorage.setItem("storeBage", JSON.stringify(state.data));
      }
      const idArticle = parseInt(Object.keys(article.payload)[0])
      const quantite = Object.values(article.payload)[0].quantite
      //article local storage 

      const data = JSON.parse(state.data)
      const global = Object.entries(data)
      const idtrouver = false
      function verifpagnier() {
        for (let index = 0; index < global.length; index++) {
          const id = global[index];
          console.log(id)
          if (id == idArticle) {
            global[index][1].quantite = quantite;
            return true
          }
        }
        return false;
      }


      if (!verifpagnier()) {
        let newArticle = Object.entries(article.payload)
        global.push(newArticle);
      }

      /* let obGolbal = JSON.stringify(global)
      localStorage.setItem("storeBage", obGolbal)*/
    },

  },
})

// Action creators are generated for each case reducer function
export const { add } = counterSlice.actions

export default counterSlice.reducer