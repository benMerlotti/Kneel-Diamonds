export const Order = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await response.json()
    console.log(orders)
    
    document.addEventListener(
        "click",
        displayOrderClick
    )

    let html = ""
    const ordersStringArray  = orders.map(
        (order) => {
            console.log(order)
            const orderPrice = order.metal.price + order.style.price + order.size.price
            return `<li>Order #${order.id} cost $${orderPrice}</li>`
            // console.log(order.id)
        }
    )
    
    html += ordersStringArray.join(" ")

    return html

}
 /*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
     const displayOrderClick = (clickEvent) => {
        if (clickEvent.target.id === "order") {
            Order()
        }
    }