import { PunHeader } from "./_core/header-bar";
import Layout, { Content } from "antd/es/layout/layout";

export default function Main() {
  return (
    <Layout>
      <PunHeader/>
      <Content className="min-h-screen">
      </Content>
    </Layout>
  );
}
