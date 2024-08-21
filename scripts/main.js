import { MetalOptions } from "./MetalOptions.js";
import { Order } from "./Orders.js";
import { saveOrder } from "./SaveSubmission.js";
import { SizeOptions } from "./SizeOptions.js";
import { StyleOptions } from "./StyleOptions.js";

const container = document.querySelector('#container')

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const buttonHTML = saveOrder()
    const orderList = await Order()
    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${buttonHTML}

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${orderList}

        </article>
    `

    container.innerHTML = composedHTML
}


document.addEventListener("orderRefresh", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()
