import React from 'react';
import { SearchOutlined } from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';


const ButtonInputSearch = (props) => {
    const {
        size, placeholder, textbutton,
        bordered, backgroundColorInput = '#fff',
        backgroundColorButton = 'rgb(135, 84, 73)',
        colorButton = '#fff'
    } = props

    return (
        <div style={{ display: 'flex' }}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                bordered={bordered}
                style={{ backgroundColor: backgroundColorInput }}
                {...props}
            />
            <ButtonComponent
                size={size}
                style={{ background: backgroundColorButton, border: !bordered && 'none' }}
                icon={<SearchOutlined color={colorButton} style={{ color: '#fff' }} />}
                textbutton={textbutton}
                styletextbutton={{ color: colorButton }}
            />
        </div>
    )

}

export default ButtonInputSearch