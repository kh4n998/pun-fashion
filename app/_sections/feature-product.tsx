import Image from 'next/image';
import tshirtorange from "../../public/imgs/products/tshirt/men_tshirt_orange.webp";
import hoodie_sweatshirt from "../../public/imgs/products/hoodie_sweatshirt/hoodie_sweatshirt_yellow.webp";
import shoes from "../../public/imgs/products/shoes/wood_boots.webp";
import cap from "../../public/imgs/products/cap.jpg";
import { TransformCurrency } from '../_widgets/transformCurrency';

export function FeatureProduct() {
    const products = [
        {
            id: 5,
            slug: 'ao-thun-cotton',
            title: 'Áo thun cotton',
            price: '99000',
            number_of_sold: 3229,
            img: tshirtorange
        },
        {
            id: 1312412,
            title: 'Áo hoodie nỉ',
            slug: 'ao-hoodie-ni',
            price: '159000',
            number_of_sold: 124,
            img: hoodie_sweatshirt
        },
        {
            id: 51333123,
            title: 'Giày da lộn',
            slug: 'giay-da-lon',
            price: '149000',
            number_of_sold: 156233,
            img: shoes
        },
    ]
    return (
        <section className="bg-white mb-[50px]">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Sản phẩm bán chạy</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product, idx) => (
                        <div key={idx} className="group relative">
                            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200">
                                <Image
                                    src={product.img}
                                    alt={product.title}
                                    width={370}
                                    height={370}
                                    className="object-cover object-center group-hover:scale-125 transition-all duration-500"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={`/san-pham/${product.slug.toString()}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.title}
                                        </a>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{TransformCurrency(product.price)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}