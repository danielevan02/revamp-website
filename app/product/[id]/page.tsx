import { getCategory, getProduct } from "@/app/action/product.action.ts/productAction"
import ProductGallery from "@/components/product-components/ProductGallery"
import VariantSelector from "@/components/product-components/VariantSelector"
import ProductCard from "@/components/ProductCard"
import { Button } from "@/components/ui/Button"
import { IconArrowLeft, IconHeartFilled, IconShoppingCart } from "@tabler/icons-react"
import Link from "next/link"

const ProductDetail = async ({params}: {params: {id: string}}) => {
  const productId = params.id
  const product = await getProduct(productId)
  const others = await getCategory('67778fad3bebf3edd93370cb')
  const discount = product!.categories.reduce((total, category) => total + (category.discount || 0), 0)/100 || 0
  const variantPhoto = product?.variants.map((variant) => (variant.photo))

  let otherProduct
  if(product?.categories[0].products.filter((product) => product.id !== productId).length === 0) {
    otherProduct = others?.products
  } else {
    otherProduct = product?.categories[0].products
  }
  return (
    <div className="mt-28 p-5">
      <Link href='/product' className="fixed z-[9999] top-28 text-sm md:text-base bg-green-300 px-2 py-1 hover:underline capitalize flex items-center rounded-full gap-1 group">
        <IconArrowLeft size={15} className="group-hover:-translate-x-1 transition-all"/>
        back to product list
      </Link>
      {/* FOR SEO */}
      <div className="sr-only">
        <h1>
          {product?.variants.map((variant, idx)=> (
            <div key={idx}>{variant.name}</div>
          ))}
        </h1>
        <h1>{discount}</h1>
      </div>

      <section className="flex flex-col md:flex-row items-start justify-center gap-5 mx-auto max-w-6xl">
        <ProductGallery productPhoto={product?.photo} variantPhoto={variantPhoto} />
        <div className="flex flex-col">
          <span className="capitalize text-2xl">{product?.name}</span>
          <span className="capitalize text-neutral-400">{product?.categories[0].name}</span>
          <VariantSelector discount={discount} variants={product?.variants ?? []} productPrice={product?.price} />
          <div className="mt-10 flex flex-col gap-y-3">
            <Button className="uppercase w-full flex gap-3 py-6 rounded-full">
              Add to Cart
              <IconShoppingCart/>
            </Button>
            <Button className="uppercase w-full flex gap-3 py-6 rounded-full hover:text-white hover:bg-pink-300 group" variant="outline">
              Favorite
              <IconHeartFilled className="group-hover:text-red-500 transition-all"/>
            </Button>
          </div>
          <div className="w-full flex flex-col mt-10">
            <span className="font-bold">Product Description</span>
            <textarea className="antialiased mt-3 min-h-fit bg-neutral-50 field-sizing" disabled value={product?.desc ?? ''}/>
          </div>
        </div>
      </section>

      <section className="mt-28">
        <span className="text-2xl capitalize">You might also like</span>
        <div className="flex gap-x-2 overflow-x-scroll w-full mt-5">
          {otherProduct?.filter((product) => product.id !== productId).map((product) => (
            <ProductCard {...product} key={product.id}/>
          ))}
        </div>
      </section>
      
      <div className="w-full my-16 border border-neutral-200"/>
    </div>
  )
}

export default ProductDetail