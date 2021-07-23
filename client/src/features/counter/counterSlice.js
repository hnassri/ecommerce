import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    data: localStorage.getItem("storeBag"),
  },
  reducers: {
    add: (state, article) => {
      const idArticle = article.payload.id;
      const quantite = article.payload.quantite
      //premier article dans le panier
      if (state.data == null) {
        let newArticle = [];
        newArticle.push(article.payload);
        newArticle = JSON.stringify(newArticle);
        localStorage.setItem('storeBag', newArticle);
        return true;
      }
      const dataStorage = JSON.parse(state.data);
      let elmentTrouver = false
      for (let i = 0; i < dataStorage.length; i++) {
        const element = dataStorage[i];
        if (element.id == idArticle) {
          element.quantite = quantite;
          localStorage.setItem('storeBag', JSON.stringify(dataStorage))
          elmentTrouver = true;
        }
      }
      console.log(elmentTrouver);
      if (elmentTrouver === false) {
        dataStorage.push(article.payload);
        localStorage.setItem('storeBag', JSON.stringify(dataStorage));
      }
      return true;
    },


    deleteBag : (state)=>{

         if(state.data === null){
           return false;
         }
         localStorage.removeItem('storeBag');
         return true;

         
    }

  },
})

// Action creators are generated for each case reducer function
export const { add, deleteBag} = counterSlice.actions

export default counterSlice.reducer