import { setMetal } from "./TransientState.js"

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metalData = await response.json()

    document.addEventListener(
        "change",
        handleMetalChange
    )
    
    let optionsHTML = ""
    const metalStringArray = metalData.map(
        (metal) => {
            return `
        <div>
        <input type='radio' name='metal' value='${metal.id}' /> <strong>${metal.metal}</strong> Price: $${metal.price}
        </div>`
        }
    )
    optionsHTML += metalStringArray.join("")

    return optionsHTML
}

 /*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
     const handleMetalChange = (changeEvent) => {
        if (changeEvent.target.name === "metal") {
            const metalSelection = parseInt(changeEvent.target.value)
            setMetal(metalSelection)
        }
    }