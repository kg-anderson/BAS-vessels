let shipData = document.querySelector('.jcr');
let positionButton = document.querySelector('.grid-ship1')
let heading1 = document.querySelector('.grid-header1')


//JCR data is currently always [0] but will to update this so vessel specific can be selected and filtered out. Unless vessel specific API works in the end.
let displayShipData = async () =>{ 
    try {
    const currentLocation = await getShipData()
    let latitude = currentLocation[0].latest_position.latitude;
    let longitude = currentLocation[0].latest_position.longitude;
    shipData.classList.add('map')
    heading1.innerText = ""
    shipData.innerHTML =
`<iframe width="100%" height="240" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=${latitude},${longitude}&amp;q=${latitude},${longitude}&amp;ie=UTF8&amp;t=&amp;z=6&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>`
    } catch {
        heading1.innerText = "API call failed"
    }
}

//Endpoint does not work on ship level so have to return all data for all ships
let getShipData = async () => {
    const config = {headers: {'Accept':'application/json','Content-Type': 'application/json'}}
    let result = await axios.get("http://api.bas.ac.uk/marine/v1/vessels/position/", config)
    return result.data.data
}

positionButton.addEventListener('click', displayShipData)

