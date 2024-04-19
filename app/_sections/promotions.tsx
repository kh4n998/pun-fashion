
import React from "react";

export function Promotions() {
    const promotions = [
        {
            heading: "Miễn phí vận chuyển",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, porro temporibus. Voluptate eum earum, labore minima quia numquam necessitatibus quaerat."
        },
        {
            heading: "15 ngày đổi trả",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-repeat"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>',
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, porro temporibus. Voluptate eum earum, labore minima quia numquam necessitatibus quaerat."
        },
        {
            heading: "Quà tặng đi kèm",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>',
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, porro temporibus. Voluptate eum earum, labore minima quia numquam necessitatibus quaerat."
        },
    ]
    return <section className="container mx-auto bg-white mb-[50px]">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {promotions.map((promotion, idx) => (
                <div key={idx} className="mx-auto max-w-[85%] lg:max-w-full">
                    <div className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl flex-center gap-2 mb-5">
                        <span dangerouslySetInnerHTML={{ __html: promotion.icon }}></span>
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