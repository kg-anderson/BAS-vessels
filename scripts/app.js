let shipData = document.querySelector('.jcr');
let positionButton = document.querySelector('.button')


//JCR data is currently always [0] but may need to filter it out if the others start tracking
let displayShipData = async () =>{ 
    const currentLocation = await getShipData()
    let latitude = currentLocation[0].latest_position.latitude;
    let longitude = currentLocation[0].latest_position.longitude;
    shipData.innerHTML =
`${latitude}, ${longitude}. You can see this on googlemaps <a href="http://www.google.com/maps/place/${latitude},${longitude}/@${latitude},${longitude},8z">here</a>`
}

//Endpoint does not work on ship level so have to return all data for all ships
let getShipData = async () => {
    const config = {headers: {'Accept':'application/json','Content-Type': 'application/json'}}
    let result = await axios.get("http://api.bas.ac.uk/marine/v1/vessels/position/", config)
    return result.data.data
}

positionButton.addEventListener('click', displayShipData)

