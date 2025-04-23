import React from 'react';
import { Col, Row } from 'antd';
import {
    Footer1,
    Footer1Left,
    Footer1ListItem,
    Footer2,
    Footer2Heading,
    Footer2List,
    Footer2ListItem,
    Footer2Link,
    Footer3,
    Footer3Heading,
    Footer3Form,
    WrapperFooter
} from './style';

const FooterComponent = () => {
    return (
        <WrapperFooter>
            <div className="container">
                <Row>
                    <Col span={8}>
                        <Footer1>
                            <Footer1Left to='/'>CHIBI SHOP</Footer1Left>
                            <ul>
                                <Footer1ListItem>Địa chỉ: Thôn Hà My Đông B, Điện Dương, Điện Bàn, Quảng Nam</Footer1ListItem>
                                <Footer1ListItem>Phone: 0765256037</Footer1ListItem>
                                <Footer1ListItem>Email: chibishop@gmail.com</Footer1ListItem>
                            </ul>
                        </Footer1>
                    </Col>
                    <Col span={8}>
                        <Footer2>
                            <Footer2Heading>Nội dung</Footer2Heading>
                            <Footer2List>
                                <Footer2ListItem>
                                    <Footer2Link>Trang chủ</Footer2Link>
                                </Footer2ListItem>
                                <Footer2ListItem>
                                    <Footer2Link>Cửa hàng</Footer2Link>
                                </Footer2ListItem>
                                <Footer2ListItem>
                                    <Footer2Link>Sản phẩm</Footer2Link>
                                </Footer2ListItem>
                                <Footer2ListItem>
                                    <Footer2Link>Bài viết</Footer2Link>
                                </Footer2ListItem>
                            </Footer2List>
                        </Footer2>
                    </Col>
                    <Col span={8}>
                        <Footer3>
                            <Footer3Heading>Liên hệ</Footer3Heading>
                            <Footer3Form>
                                <div></div>
                            </Footer3Form>
                        </Footer3>
                    </Col>
                </Row>
            </div>
        </WrapperFooter>
    );
};

export default FooterComponent;
