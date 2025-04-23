import React, { useEffect, useState } from "react";
import { WrapperContainerLeft, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
// import imageLogo from '../../assets/images/logo.png'
import truong from '../../assets/images/truong.png'
import img from '../../assets/images/test.jpg'
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import * as UserService from '../../service/UserService'
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/counter/userSlide";

const SignInPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const mutation = useMutationHooks(
        data => UserService.loginUser(data)
    )
    const { data, isPending, isSuccess } = mutation

    useEffect(() => {
        if (isSuccess) {
            if (location?.state) {
                navigate(location?.state)
            } else {
                navigate('/')
            }
            localStorage.setItem('access_token', JSON.stringify(data?.access_token))
            if (data?.access_token) {
                const decoded = jwtDecode(data?.access_token)
                if (decoded?.id) {
                    handleGetDetailsUser(decoded?.id, data?.access_token)
                }
            }
        }
    }, [isSuccess])
    const handleGetDetailsUser = async (id, token) => {
        const res = await UserService.getDetailsUser(id, token)
        dispatch(updateUser({ ...res?.data, access_token: token }))
    }

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnchangePassword = (value) => {
        setPassword(value)
    }

    const handleNavigateSignUp = () => {
        navigate('/sign-up')
    }

    const handleSignIn = () => {
        mutation.mutate({
            email,
            password
        })
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', top: '0', paddingRight: '15px', background: 'rgba(0, 0, 0, 0.53', height: '100vh' }}>
            <img src={img} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} alt="" />
            <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', width: '400px', height: '445px', borderRadius: '6px', background: '#fff', marginLeft: '100px' }}>
                    <WrapperContainerLeft>
                        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                            <Image src={truong} alt="" height="70px" width="70px" />
                            <label style={{ fontSize: '30px' }}>Xin chào</label>
                            {/* <h1>Xin chào</h1> */}
                        </div>
                        {/* <Image src={imgLogo}  alt="" height="50px" width="50px" />
                        <h1>Xin chào</h1> */}
                        {/* <p>Đăng nhập và Tạo tài khoản</p> */}
                        <label className="name">Nhập email</label>
                        <InputForm style={{ margin: '10px 10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
                        <label className="name">Nhập password</label>
                        <div style={{ position: 'relative' }}>
                            <span
                                onClick={() => setIsShowPassword(!isShowPassword)}
                                style={{
                                    zIndex: 10,
                                    position: 'absolute',
                                    top: '14px',
                                    right: '8px'
                                }}
                            >
                                {/* {
                                    isShowPassword ? (
                                        <EyeFilled />
                                    ) : (
                                        <EyeInvisibleFilled />
                                    )
                                } */}
                            </span>
                            {/* <label className="name">Nhập password</label> */}
                            <InputForm style={{ margin: '10px 10px' }} placeholder="password" type={isShowPassword ? "text" : "password"}
                                value={password} onChange={handleOnchangePassword} />
                        </div>
                        {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
                        <Loading isPending={isPending}>
                            <ButtonComponent
                                disabled={!email.length || !password.length}
                                onClick={handleSignIn}
                                size={40}
                                styleButton={{
                                    background: 'rgb(224, 136, 94)',
                                    height: '48px',
                                    width: '100%',
                                    border: 'none',
                                    borderRadius: '4px',
                                    margin: '26px 0 10px'
                                }}
                                textbutton={'Đăng nhập'}
                                styletextbutton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                            ></ButtonComponent>
                        </Loading>
                        <p><WrapperTextLight>Quên mật khẩu? </WrapperTextLight></p>
                        <p>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp}> Tạo tài khoản</WrapperTextLight></p>
                    </WrapperContainerLeft>
                    {/* <WrapperContainerRight>
                        <Image src={imageLogo}  alt="" height="203px" width="203px" />
                    </WrapperContainerRight> */}
                </div>
            </div>
        </div>
    )
}

export default SignInPage