export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styleData = await response.json()

    let optionsHTML = ""
    for (const style of styleData) {
        optionsHTML += `
        <li><strong>${style.style}</strong> Price: $${style.price}</li>
`
    }
    return optionsHTML
}