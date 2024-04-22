import Layout, { Content } from "antd/es/layout/layout";

export default function Page() {
    console.log(1)
    return (
        <Layout>
            <Content className="min-h-[calc(100vh_-_7.5rem)]">
                <h1>This is hot sales 1</h1>
            </Content>
        </Layout>
    );
}
