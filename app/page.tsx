import Link from "next/link";
import { PunHeader } from "./_core/header-bar";
import Layout, { Content } from "antd/es/layout/layout";
import Demo from "./demo";

export default function Main() {
  return (
    <Layout>
      <PunHeader/>
      <Content className="min-h-screen">
        <Link href="/demo">Demo</Link>
        <Demo/>
      </Content>
    </Layout>
  );
}
