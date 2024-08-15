export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizeData = await response.json()

    let optionsHTML = ""
    for (const size of sizeData) {
        optionsHTML += `
        <li><strong>${size.carets} Carets</strong> Price: $${size.price}</li>
`
    }
    return optionsHTML
}