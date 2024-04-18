"use client";
import { MenuIcon, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Drawer } from "antd";
import { useState } from "react";

export function PunHeader() {
  const [drawer, setDrawer] = useState(false)

  const openDrawer = () => {
    setDrawer(true);
  }
  const onClose = () => {
    setDrawer(false)
  }
  return (
    <header className="bg-white relative">
      <nav className="py-4 px-4 lg:px-6 flex-center gap-4 lg:flex-col">
        <a className="lg:ml-auto mr-auto hover:text-inherit" href="/trang-chu">
          <span className="font-bold text-2xl lg:text-3xl">
            PUN FASHION
          </span>
        </a>
        <ul className="hidden lg:flex-center gap-8 text-xl font-medium">
          <li>
            <Link href="/demo">Trang chủ</Link>
          </li>
          <li>
            <Link href="/hot-sales">Hot sales</Link>
          </li>
          <li>
            <Link href="/ao">Áo</Link>
          </li>
          <li>
            <Link href="/quan">Quần</Link>
          </li>
          <li>
            <Link href="/phu-kien">Phụ kiện</Link>
          </li>
          <li>
            <Link href="/gio-hang">
              <ShoppingBag size={24} />
            </Link>
          </li>
        </ul>
        <Link href="/gio-hang" className="lg:hidden">
          <ShoppingBag size={24} />
        </Link>
        <button className="lg:hidden" onClick={openDrawer}>
          <MenuIcon size={24} />
        </button>
      </nav>
      <Drawer title="PUN FASHION" onClose={onClose} placement="left" open={drawer}>
      <ul className="text-xl font-medium">
          <li>
            <Link className="py-3 block" href="/trang-chu">Trang chủ</Link>
          </li>
          <li>
            <Link className="py-3 block" href="/hot-sales">Hot sales</Link>
          </li>
          <li>
            <Link className="py-3 block" href="/ao">Áo</Link>
          </li>
          <li>
            <Link className="py-3 block" href="/quan">Quần</Link>
          </li>
          <li>
            <Link className="py-3 block" href="/phu-kien">Phụ kiện</Link>
          </li>
        </ul>
      </Drawer>
    </header>
  );
}
