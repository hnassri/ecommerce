import React from 'react'





const Options = (props)=>{

          const options = [
              {
                  name : "vert"
              },
              {
                name : "vert"
              }
          ]

          const OptionView = options.map((item, key) =>{
              console.log(key)
              return <option value={item.name} >{item.name}</option>
          })

    return(
        <div className="selector-wrap color-option">
        <span className="selector-title border-bottom-0">"couleur</span>
        <select className="nice-select wide border-bottom-0 rounded-0">
            {OptionView}
        </select>
      </div>
    )
}

export default Options ;