import Button from "antd/es/button/button";
import Card from "antd/es/card/Card";
import Layout, { Content } from "antd/es/layout/layout";

export default function Home() {
    return (
        <Layout>
        <Content className="min-h-[calc(100vh_-_7.5rem)]">
          <section className="aspect-21/9 bg-cover flex items-center bg-[url('../public/imgs/banner/hero_banner.png')] bg-center bg-no-repeat">
            <div className="container mx-auto ">
              <Card bordered={false} style={{ width: 350 }} className="shadow-sm">
                <h5 className="mb-4 text-5xl text-shadow font-bold">HOT SALE</h5>
                <div className="mb-8">
                <p className="mb-2 font-medium">Đừng bỏ lỡ chương trình giảm giá mùa hè này</p>
                <p className="font-medium">Giảm giá lên tới 66%</p>
                </div>
                <Button type="primary" size="large" href="/hot-sale">Mua ngay</Button>
              </Card>
            </div>
          </section>
          {/* <Banner heading="HOT SALE" button="Mua ngay" bgImg="../public/imgs/banner/hero_banner.png"/> */}
        </Content>
      </Layout>
    );
}