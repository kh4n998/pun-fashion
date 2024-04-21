'use client';
import { Breadcrumb, Button, ConfigProvider } from 'antd';
import Image from 'next/image';
import hoodie_sweatshirt_orange from '/public/imgs/products/hoodie_sweatshirt/hoodie_sweatshirt_orange.webp';
import hoodie_sweatshirt_red from '/public/imgs/products/hoodie_sweatshirt/hoodie_sweatshirt_red.webp';
import hoodie_sweatshirt_yellow from '/public/imgs/products/hoodie_sweatshirt/hoodie_sweatshirt_yellow.webp';
import { useState } from 'react';
import { TransformCurrency } from '@/app/_widgets/transformCurrency';
import { NumericInput } from '@/app/_widgets/numberic-input';

export default function Product({params} : { params: {slug: string}} ) {
    const [qty, setQty] = useState("1");
    const product = {
        title: 'Hoodie nỉ',
        price: 159000,
        colors: [
            { color: "#ff0000", label: 'Đỏ'},
            { color: "#ffff00", label: 'Vàng'},
            { color: "#ffa500", label: 'Cam'},
        ],
        sizes: [
            { size: 'm', label: 'M' },
            { size: 'l', label: 'L' },
            { size: 'xl', label: 'XL' },
            { size: '2xl', label: '2XL' },
        ],
        variants: [
            { size: 'm', color: '#ff0000', image: hoodie_sweatshirt_red },
            { size: 'm', color: '#ffff00', image: hoodie_sweatshirt_yellow },
            { size: 'm', color: '#ffa500', image: hoodie_sweatshirt_orange },
            { size: 'l', color: '#ff0000', image: hoodie_sweatshirt_red },
            { size: 'l', color: '#ffff00', image: hoodie_sweatshirt_yellow },
            { size: 'l', color: '#ffa500', image: hoodie_sweatshirt_orange },
            { size: 'xl', color: '#ff0000', image: hoodie_sweatshirt_red },
            { size: 'xl', color: '#ffff00', image: hoodie_sweatshirt_yellow },
            { size: 'xl', color: '#ffa500', image: hoodie_sweatshirt_orange },
            { size: '2xl', color: '#ff0000', image: hoodie_sweatshirt_red },
            { size: '2xl', color: '#ffff00', image: hoodie_sweatshirt_yellow },
            { size: '2xl', color: '#ffa500', image: hoodie_sweatshirt_orange },
        ]
    }
    const selectedVariant = {
        size: 'm',
        color: '#ff0000',
        image: hoodie_sweatshirt_red,
        title: 'Hoodie nỉ',
        price: 159000,
        compare_price: 299000,
        qty: '1'
    }
    const [ variant, setVariant ] = useState(selectedVariant);
    const colors = product.colors || [];
    const sizes = product.sizes || [];
    const [ selectedSize, setSize ] = useState(sizes[0].size)
    const [ selectedColor, setColor ] = useState(colors[0].color)
    const changeQty = (value: string) => {
        setQty(value);
    }
    return <section className="bg-white container mx-auto max-w-screen-lg">
        <Breadcrumb items={[
            { title: <a href="/">Trang chủ</a>, },
            { title: <a href="/san-pham">Sản phẩm</a>,},
            { title: 'Áo hoodie nỉ',}
        ]} className="mb-8"></Breadcrumb>
        <div className="flex gap-8">
            <div className='aspect-square w-[500px]'>
                <Image src={variant.image} width={500} height={500} alt={product.title} priority></Image>
            </div>
            <div className='flex flex-col grow'>
                <h4 className='font-medium mb-6 text-3xl'>{variant.title}</h4>
                <div className='flex items-center mb-6 gap-2'>
                    <span className='text-gray-500 line-through'>{TransformCurrency(variant.compare_price)}</span>
                    <span className='font-bold text-xl'>{TransformCurrency(variant.price)}</span>
                </div>
                <div className='mb-6'>
                    <h5 className='font-medium'>Màu sắc</h5>
                    <ul className="flex items-center gap-2">
                        {colors.map((color, idx) => {
                            return <li key={idx} onClick={() => setColor(color.color)} className={'rounded-full w-9 h-9 border flex-center ' + (selectedColor === color.color ? '' : 'border-transparent')}>
                                <span className='block rounded-full w-7 h-7 cursor-pointer' style={{background: color.color}}></span>
                            </li>
                        })}
                    </ul>
                </div>
                <div className='mb-6'>
                    <h5 className='font-medium'>Kích cỡ</h5>
                    <ul className="flex items-center gap-2">
                        {sizes.map((size, idx) => {
                            return <li key={idx} onClick={() => setSize(size.size)} className={'rounded py-1 px-2 min-w-9 h-9 border flex-center ' + (selectedSize === size.size ? 'bg-gray-200' : 'bg-transparent cursor-pointer')}>
                                <span>{size.label}</span>
                            </li>
                        })}
                    </ul>
                </div>
                <div className='mb-6'>
                    <h5 className='font-medium'>Số lượng</h5>
                    <NumericInput value={qty} style={{width: 'min(120px, 100%)'}} min={1} size="large" onChange={changeQty}/>
                </div>
                <div className="mb-6 flex-center gap-4">
                    <ConfigProvider theme={{ 
                        token: { 
                            fontSize: 20,
                            controlHeightLG: 50,
                        },
                        components: {
                            Button: {
                                paddingBlockLG: 9,
                                fontWeight: 500,
                                contentFontSizeLG: 20,
                                contentLineHeightLG: 1.2
                            }
                        }
                        }}>
                        <Button type="primary" size="large" className='grow'>
                            Mua ngay
                        </Button>
                        <Button type="default" size="large" className='grow'>
                            Thêm vào giỏ hàng
                        </Button>
                    </ConfigProvider>
                </div>
            </div>
        </div>
    </section>
}