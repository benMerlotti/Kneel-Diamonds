import { setSize } from "./TransientState.js"

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizeData = await response.json()

    document.addEventListener(
        "change",
        handleSizeChange
    )

    let optionsHTML = ""
    const sizeStringArray = sizeData.map(
        (size => {
            return `
            <div>
            <input type='radio' name='size' value='${size.id}' /> <strong>${size.carets} Carets</strong> Price: ${size.price}
            </div>
            `
        })
    )
    optionsHTML += sizeStringArray.join("")
    return optionsHTML
}

const handleSizeChange = (changeEvent) => {
    if (changeEvent.target.name === "size") {
        const sizeSelection = parseInt(changeEvent.target.value)
        setSize (sizeSelection)
    }
}