import { saveSubmission } from "./TransientState.js"

export const saveOrder = () => {
    

    document.addEventListener(
        "click",
        handleOrderClick
    )
    
    return "<button id='order'>Order</button>"
}

 /*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
     const handleOrderClick = (clickEvent) => {
        if (clickEvent.target.id === "order") {
            saveSubmission()
        }
    }