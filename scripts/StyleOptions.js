import { setStyle } from "./TransientState.js"

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styleData = await response.json()

    document.addEventListener(
        "change",
        handleStyleChange
    )

    let optionsHTML = ""
    const styleStringArray = styleData.map(
        (style) => {
            return  `<div>
            <input type='radio' name='style' value='${style.id}' /> <strong>${style.style}</strong> Price: $${style.price}
            </div>`
        }
    )
    optionsHTML += styleStringArray.join("")
    return optionsHTML
}

const handleStyleChange = (changeEvent) => {
    if (changeEvent.target.name === "style") {
        const styleSelection = parseInt(changeEvent.target.value)
        setStyle(styleSelection)
    }
}