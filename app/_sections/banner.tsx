import Button from "antd/es/button/button";
import Card from "antd/es/card/Card";

export function Banner({bgImg, heading, button}: {bgImg: string, heading: string, button: string}) {
    console.log(bgImg)
    return <section className="aspect-21/9 bg-cover flex items-center bg-center bg-no-repeat"
        style={{backgroundImage: `url('${bgImg}')`}}>
        <div className="container mx-auto ">
        <Card bordered={false} style={{ width: 350 }} className="shadow-sm">
            <h5 className="mb-4 text-4xl text-shadow font-bold">{heading}</h5>
            <p className="mb-2 font-medium">Đừng bỏ lỡ chương trình giảm giá mùa hè này</p>
            <p className="mb-8 font-medium">Giảm giá lên tới 66%</p>
            <Button type="primary" size="large">{button}</Button>
        </Card>
        </div>
    </section>
}