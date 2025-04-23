import React, { useEffect, useState } from "react";
import { WrapperContainerLeft, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import truong from '../../assets/images/truong.png'
// import imageLogo from '../../assets/images/logo.png'
import imgBG from '../../assets/images/background.jpg'
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import * as UserService from '../../service/UserService';
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from '../../components/Message/Message'

const SignUpPage = () => {
    const navigate = useNavigate()

    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }

    const mutation = useMutationHooks(
        data => UserService.signupUser(data)
    )

    const { data, isPending, isSuccess, isError } = mutation

    const handleNavigateSignIn = () => {
        navigate('/sign-in')
    }
    useEffect(() => {
        if (isSuccess) {
            message.success()
            handleNavigateSignIn()
        } else if (isError) {
            message.error()
        }
    }, [isSuccess, isError])

    const handleOnchangePassword = (value) => {
        setPassword(value)
    }

    const handleOnchangeConfirmPassword = (value) => {
        setConfirmPassword(value)
    }

    const handleSignUp = () => {
        mutation.mutate({ email, password, confirmPassword })
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', top: '0', paddingRight: '15px', background: 'rgba(0, 0, 0, 0.53', height: '100vh' }}>
            <img src={imgBG} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} alt="" />
            <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', width: '400px', height: '445px', borderRadius: '6px', background: '#fff', marginLeft: '100px' }}>
                    <WrapperContainerLeft>
                        <div style={{ textAlign: 'center', marginBottom: '5px' }}>
                            <Image src={truong} alt="" height="70px" width="70px" />
                            <label style={{ fontSize: '30px' }}>Xin chào</label>
                            {/* <h1>Xin chào</h1> */}
                        </div>
                        {/* <p>Đăng nhập và Tạo tài khoản</p> */}
                        <label className="name">Nhập email</label>
                        <InputForm style={{ margin: '10px 10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
                        <div style={{ position: 'relative' }}>
                            <span
                                onClick={() => setIsShowPassword(!isShowPassword)}
                                style={{
                                    zIndex: 10,
                                    position: 'absolute',
                                    top: '4px',
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
                            <label className="name">Nhập password</label>
                            <InputForm placeholder="password" style={{ margin: '10px 10px' }} type={isShowPassword ? "text" : "password"}
                                value={password} onChange={handleOnchangePassword} />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span
                                onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                                style={{
                                    zIndex: 10,
                                    position: 'absolute',
                                    top: '4px',
                                    right: '8px'
                                }}
                            >
                                {/* {
                                    isShowConfirmPassword ? (
                                        <EyeFilled />
                                    ) : (
                                        <EyeInvisibleFilled />
                                    )
                                } */}
                            </span>
                            <label className="name">Nhập lại password</label>
                            <InputForm style={{ margin: '10px 10px' }} placeholder="comfirm password" type={isShowConfirmPassword ? "text" : "password"}
                                value={confirmPassword} onChange={handleOnchangeConfirmPassword} />
                        </div>
                        {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
                        <Loading isPending={isPending}>
                            <ButtonComponent
                                disabled={!email.length || !password.length || !confirmPassword.length}
                                onClick={handleSignUp}
                                size={40}
                                styleButton={{
                                    background: 'rgb(224, 136, 94)',
                                    height: '48px',
                                    width: '100%',
                                    border: 'none',
                                    borderRadius: '4px',
                                    margin: '20px 0 10px'
                                }}
                                textbutton={'Đăng ký'}
                                styletextbutton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                            ></ButtonComponent>
                        </Loading>
                        <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn}> Đăng nhập</WrapperTextLight></p>
                    </WrapperContainerLeft>
                    {/* <WrapperContainerRight>
                        <Image src={imageLogo}  alt="" height="203px" width="203px" />
                    </WrapperContainerRight> */}
                </div>
            </div>
        </div>
    )
}

export default SignUpPage