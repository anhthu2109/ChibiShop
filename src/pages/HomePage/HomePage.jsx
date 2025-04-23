import React, { useEffect, useState } from 'react'
import TypeContent from '../../components/TypeContent/TypeContent'
import { WrapperButtonMore, WrapperProducts, WrapperTypeContent } from './style'
import SliderComponent from '../../components/Slider/SliderComponent'
import sl1 from '../../assets/images/sl1.webp'
import sl2 from '../../assets/images/sl2.webp'
import sl3 from '../../assets/images/sl3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../service/ProductService'
import { useSelector } from 'react-redux'
import Loading from '../../components/LoadingComponent/Loading'
import { useDebounce } from '../../hooks/useDebounce'

const HomePage = () => {
    const searchProduct = useSelector((state) => state?.product?.search)
    const searchDebounce = useDebounce(searchProduct, 500)
    const [loading, setLoading] = useState(false)
    const [limit, setLimit] = useState(10)
    const [typeProducts, setTypeProducts] = useState([])

    const fetchProductAll = async (context) => {
        const limit = context?.queryKey && context?.queryKey[1]
        const search = context?.queryKey && context?.queryKey[2]
        const res = await ProductService.getAllProduct(search, limit)
        return res
    }

    const fetchAllTypeProduct = async () => {
        const res = await ProductService.getAllTypeProduct()
        if (res?.status === 'OK') {
            setTypeProducts(res?.data)
        }
    }

    useEffect(() => {
        fetchAllTypeProduct()
    }, [])

    const { isPending, data: products, isPreviousData } = useQuery({ queryKey: ['products', limit, searchDebounce], queryFn: fetchProductAll, retry: 3, retryDelay: 1000, keepPreviousData: true })

    return (
        <Loading isPending={isPending || loading}>
            <div style={{ width: '1270px', margin: '0 auto' }}>
                <WrapperTypeContent>
                    {typeProducts.map((item) => {
                        return (
                            <TypeContent name={item} key={item} />
                        )
                    })}
                </WrapperTypeContent>
            </div>
            <div className='body' style={{ width: '100%', backgroundColor: '#efefef' }}>
                <div id="container" style={{ height: '100%', width: '1100px', margin: '0 auto' }}>
                    <SliderComponent arrImages={[sl1, sl2, sl3]} />
                    <WrapperProducts>
                        {products?.data?.map((product) => {
                            return (
                                <CardComponent
                                    key={product._id}
                                    countInStock={product.countInStock}
                                    description={product.description}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    rating={product.rating}
                                    type={product.type}
                                    selled={product.selled}
                                    id={product._id}
                                />
                            )
                        })}
                    </WrapperProducts>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
                        <WrapperButtonMore
                            textbutton={isPreviousData ? 'Load more' : "Xem thêm"} type="outline" styleButton={{
                                border: '1px solid rgb(224, 166, 159)', color: `${products?.total === products?.data?.length ? '#ccc' : 'rgb(87, 60, 57)'}`, background: 'rgb(204, 158, 139)',
                                width: '240px', height: '38px', borderRadius: '4px'
                            }}
                            disabled={products?.total === products?.data?.length || products?.totalPage === 1}
                            styletextbutton={{ fontWeight: 500, color: products?.total === products?.data?.length && '#fff' }}
                            onClick={() => setLimit((prev) => prev + 5)}
                        />
                    </div>
                </div>
            </div>
        </Loading>
    )
}

export default HomePage
