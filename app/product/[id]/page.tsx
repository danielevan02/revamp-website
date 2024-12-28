

const ProductDetail = async ({params}: {params: {id: number}}) => {
  const productId = params.id
  const { data: product } = await supabase.from('product').select().filter('id','like', productId)

  return (
    <div>{params.id}</div>
  )
}

export default ProductDetail