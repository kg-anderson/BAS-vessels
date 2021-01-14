let map = document.querySelector('.map');
let heading = document.querySelector("#heading");
let jcr = document.querySelector('.grid-ship1 > .btn');
let discovery = document.querySelector('.grid-ship2 > .btn');
let jamesCook = document.querySelector('.grid-ship3 > .btn');
let apiText = document.querySelector('.update-text');


let getShipData = async (callSign) => {
    try {
        const allShipData = await getAllShipData()
        let filteredVessel = shipFilter(callSign, allShipData)
        let latitude = filteredVessel.latest_position.latitude;
        let longitude = filteredVessel.latest_position.longitude;
        let vesselName = filteredVessel.callsign;
        map.classList.add('map')
        heading.remove()
        map.innerHTML =
            `<iframe width="500px" height="240" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=${latitude},${longitude}&amp;q=${latitude},${longitude}&amp;ie=UTF8&amp;t=&amp;z=6&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>`
        displayText(vesselName)
    } catch {
        heading.innerText = "API call failed"
    }
}

//Endpoint does not work on ship level so have to return all data for all ships
let getAllShipData = async () => {
    const config = { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } }
    let result = await axios.get("http://api.bas.ac.uk/marine/v1/vessels/position/", config)
    return result.data.data
}

function shipFilter(callSign, allShipData) {
    for (vessel of allShipData) {
        if (vessel.callsign == callSign) {
            return vessel
        }
    }
}

function displayText(vesselName) {
    if(vesselName != "ZDLP") {
        apiText.classList.remove("hidden")
    }
    else {
        apiText.classList.add("hidden")
    }
}



discovery.addEventListener('click', () => { getShipData("2FGX5") })
jamesCook.addEventListener('click', () => { getShipData("MLRM6") })
jcr.addEventListener('click', () => { getShipData("ZDLP") })
