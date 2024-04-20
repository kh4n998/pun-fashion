export function TransformCurrency(price: number | string) {
    const oPrice = (+price).toLocaleString("vi-VN", {style:"currency", currency:"VND", maximumFractionDigits: 0})
    return <>{oPrice}</>
}