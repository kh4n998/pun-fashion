
import { Repeat, ShieldCheck, Truck } from "lucide-react";

export function Promotions() {
    const promotions = [
        {
            heading: "Miễn phí vận chuyển",
            icon: <Truck size={28}/>,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, porro temporibus. Voluptate eum earum, labore minima quia numquam necessitatibus quaerat."
        },
        {
            heading: "15 ngày đổi trả",
            icon: <Repeat size={28}/>,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, porro temporibus. Voluptate eum earum, labore minima quia numquam necessitatibus quaerat."
        },
        {
            heading: "Bảo hành 1+ năm",
            icon: <ShieldCheck size={28}/>,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, porro temporibus. Voluptate eum earum, labore minima quia numquam necessitatibus quaerat."
        },
    ]
    return <section className="container mx-auto bg-white mb-[50px]">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {promotions.map((promotion, idx) => (
                <div key={idx} className="mx-auto max-w-[85%] lg:max-w-full">
                    <div className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl flex-center gap-2 mb-5">
                        {/* <span dangerouslySetInnerHTML={{ __html: promotion.icon }}></span> */}
                        {promotion.icon}
                        {promotion.heading}
                    </div>
                    <p className="text-base text-gray-600">
                        {promotion.content}
                    </p>
                </div>
            ))}
        </div>
    </section>
}