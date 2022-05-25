let form = () => {
    return `
    <div>
        <h1>
            Visszajelzés
        </h1>
    </div>

    <input type="text" placeholder="Tárgy"> 

    <textarea placeholder="Megjegyzés">
    </textarea> 
    
    <div>
        <input id="form" type="checkbox"> 

        <label>
            Elolvastam és elfogadom az <a href="#">Adatkezelési Tájékoztatót.<a>
        </label>

    </div>

    <div>
        <button>
            MENTÉS
        </button>
    <div>
    `
}

const loadEvent = () => {
    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", form() )
  };
  
  window.addEventListener('load', loadEvent);