const transientState = {
        "metalId": 0,
        "sizeId": 0,
        "styleId": 0
}

export const setMetal = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const setSize = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

export const setStyle = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}

export const saveSubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("orderRefresh")
    document.dispatchEvent(customEvent)
}