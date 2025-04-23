import { Button } from 'antd';
import React from 'react';

const ButtonComponent = ({ size, styleButton, styletextbutton, textbutton, disabled, ...rests }) => {
    return (
        <Button
            size={size}
            style={{
                ...styleButton,
                background: disabled ? 'rgb(204, 158, 139)' : (styleButton && styleButton.background ? styleButton.background : 'initial')
            }}
            {...rests}
        >
            <span style={styletextbutton}>{textbutton}</span>
        </Button>

    )
}

export default ButtonComponent