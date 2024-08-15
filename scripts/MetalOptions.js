export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metalData = await response.json()
    console.log(metalData)
    let optionsHTML = ""
    for (const metal of metalData) {
        optionsHTML += `
        <li><strong>${metal.metal}</strong> Price: $${metal.price}</li>
`
    }
    return optionsHTML
}