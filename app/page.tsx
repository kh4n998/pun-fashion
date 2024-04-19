import Layout, { Content } from "antd/es/layout/layout";
import { Card, Button } from "antd";
import { Promotions } from "./_sections/promotions";
import { FeatureProduct } from "./_sections/feature-product";
export default function Home() {
  return (
    <Layout>
      <Content className="min-h-[calc(100vh_-_7.5rem)] bg-white">
        <section className="aspect-21/9 mb-[60px] bg-cover flex items-center bg-[url('../public/imgs/banner/hero_banner.png')] bg-center bg-no-repeat">
          <div className="container mx-auto ">
            <Card bordered={false} className="shadow-sm" style={{maxWidth: '50%', width: 'fit-content'}}>
              <h5 className="mb-4 text-5xl text-shadow font-bold">HOT SALE</h5>
              <div className="mb-8">
              <p className="mb-2 font-medium lg:text-2xl">Đừng bỏ lỡ chương trình giảm giá mùa hè này</p>
              <p className="font-medium lg:text-2xl">Giảm giá lên tới 66%</p>
              </div>
              <Button type="primary" size="large" href="/hot-sale">Mua ngay</Button>
            </Card>
          </div>
        </section>
        <Promotions/>
        <FeatureProduct/>
      </Content>
    </Layout>
  );
}
