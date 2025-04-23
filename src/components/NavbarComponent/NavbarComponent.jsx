import React, { useEffect, useState } from "react";
import TypeContent from '../../components/TypeContent/TypeContent'
import * as ProductService from '../../service/ProductService'
import { WrapperContent, WrapperLableText, WrapperTextValue, WrapperTypeContent } from "./style";

const NavbarComponent = () => {
    // const renderContent = (type, options) => {
    //     switch (type) {
    //         case 'text':
    //             return options.map((options) => {
    //                 return <WrapperTextValue>{options}</WrapperTextValue>
    //             })
    //         default:
    //             return {}
    //     }
    // }
    const [typeProducts, setTypeProducts] = useState([])
    const fetchAllTypeProduct = async () => {
        const res = await ProductService.getAllTypeProduct()
        if (res?.status === 'OK') {
            setTypeProducts(res?.data)
        }
    }
    useEffect(() => {
        fetchAllTypeProduct()
    }, [])

    return (
        <div>
            <WrapperLableText style={{ paddingTop: '5px' }}>Danh mục sản phẩm
                {typeProducts.map((item) => {
                    return (
                        <TypeContent name={item} key={item} />
                    )
                })}
            </WrapperLableText>
            <WrapperContent>
                {/* {renderContent('text', ['Băng đô len', 'Gấu bông', 'Hoa', 'Kẹp tóc', 'Móc khóa', 'Phụ kiện'])} */}
                {/* <div style={{ width: '1270px', margin: '0 auto' }}>
                    <WrapperTypeContent>
                        {typeProducts.map((item) => {
                            return (
                                <TypeContent name={item} key={item} />
                            )
                        })}
                    </WrapperTypeContent>
                </div> */}
            </WrapperContent>
        </div>
    )
}

export default NavbarComponent