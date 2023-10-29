"use client"

import CommonListing from "@/components/commonListing"
import { getAllAdminProducts } from "@/services/product"




export default async function AdminViewProducts()
{
    const allAdminProducts = await getAllAdminProducts();
    return <CommonListing data={allAdminProducts && allAdminProducts.data}/>
}