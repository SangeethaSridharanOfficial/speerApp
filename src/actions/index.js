/*
*  We can add more actions here and reuse whereever we want
*/

export const goToPricing = (data) => { // It will change in state and this is to open the pricing page
    return {
    type: "GO_TO_PRICING",
    data
}}

export const openPayment = (data) => { // This is to open the payment
    return{
        type: "OPEN_PAYMENT",
        data
    }
}
