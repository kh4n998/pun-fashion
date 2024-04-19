import Image from 'next/image';
import tshirt from "../../public/imgs/products/men_tshirt.jpg";
import tshirt2 from "../../public/imgs/products/men_tshirt_2.jpg";
import tshirt3 from "../../public/imgs/products/men_tshirt_3.jpg";
import tshirt4 from "../../public/imgs/products/men_tshirt_4.jpg";
import cap from "../../public/imgs/products/cap.jpg";

export function FeatureProduct() {
    const products = [
        {
            id: 1,
            title: 'Áo thun cotton',
            price: '99000',
            number_of_sold: 34221,
            img: tshirt
        },
        {
            id: 2,
            title: 'Áo thun cotton',
            price: '99000',
            number_of_sold: 12221,
            img: tshirt2
        },
        {
            id: 3,
            title: 'Áo thun cotton',
            price: '99000',
            number_of_sold: 1534,
            img: tshirt3
        },
        {
            id: 4,
            title: 'Áo thun cotton',
            price: '99000',
            number_of_sold: 329,
            img: tshirt4
        },
        {
            id: 5,
            title: 'Mũ lưỡi chai',
            price: '149000',
            number_of_sold: 156233,
            img: cap
        },
    ]
    return (
        <section className="bg-white mb-[50px]">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Sản phẩm bán chạy</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product, idx) => (
                        <div key={idx} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <Image
                                    src={product.img}
                                    alt={product.title}
                                    width={370}
                                    height={370}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.id.toString()}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.title}
                                        </a>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}