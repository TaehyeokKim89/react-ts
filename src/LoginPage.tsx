import React, { useEffect, useState } from "react";
import { Input } from "./Input";
import { FormProvider, useForm } from 'react-hook-form'

const Wrapper = ({children}: any) : any=> (
    <div className="d-flex flex-row w-100">
        {children }
    </div>
)
    


export const signin_userid_validation = {
    name: 'userId',
    label: 'ID',
    type: 'text',
    id: 'userId',
    placeholder: 'Please enter ID.',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      minLength: {
        value: 3,
        message: 'Must be at least 3 characters.',
      },
      maxLength: {
        value: 30,
        message: 'Must be 30 characters or fewer.',
      },
      pattern: {
        value: /^[a-z0-9_-]{3,30}$/,
        message: 'ID can only consist of lowercase letters, numbers, and special characters (_), (-).',
      },
    },
    labelStyle: {
      width: "350px",
      height: "20px",
      letterSpacing: "0px",
      color: "#1E1014",
      opacity: 1,
      marginBottom: "5px",
      fontSize: "14px",
    },
    inputStyle: {
      width: '350px',
      height: '48px',
      background: "#FFFFFF 0% 0 % no-repeat padding-box",
      border: "1px solid #D7D7D7",
      borderRadius: "8px",
      opacity: 1,
      padding: "12px 16px",
    },
  }

  const BlueButtonStyle = {
    width: "350px",
    height: "48px",
    background: "#3B6BF6 0% 0% no-repeat padding-box",
    borderRadius: "8px",
    opacity: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    letterSpacing: "0px",
    fontSize: "16px",
    marginBottom: "15px",
    border: "none",
};

export const Login = () => {
    const [loading, setLoading] = useState(false);
    const methods = useForm()
    const { setFocus } = methods;

    useEffect(() => {
        setFocus("userId");
    }, [setFocus]);

    const onSubmit =  methods.handleSubmit(data => {
        setLoading(true)
    })
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    height: "100vh" 
                }}
            >
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "350px",
                    height: "51px",
                    opacity: 1,
                    marginBottom: "47px",
                }}>
                    <h1
                        className="text-center"
                        style={{
                            letterSpacing: '0px',
                            color: '#0F0609',
                            opacity: 1,
                            fontSize: "16px",
                            lineHeight: '24px',
                        }}
                    >ROUTi AR
                    </h1>
                    <span style={{ width: '56px' }}></span>
                </div>
            <FormProvider {...methods}>
                <form
                    onSubmit={e => e.preventDefault()}
                    noValidate
                    autoComplete="off"
                    className="d-flex flex-column w-100" 
                >
                    <div className="d-flex flex-column w-100" style={{marginBottom: '27px'}}>
                      <Wrapper children = {<Input {...signin_userid_validation} />  }/>
                      <Wrapper children = {<Input {...signin_userid_validation} />  }/>
                    </div>
                    <div className="mt-2 d-flex flex-column justify-content-center align-items-center">
                    <button
                        id = "login-button"
                        disabled={loading}
                        onClick={onSubmit}
                        style={BlueButtonStyle}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <span> 로그인</span>
                   
                    </button>
                    <button
                        id = "login-button"
                        disabled={loading}
                        onClick={onSubmit}
                        style={BlueButtonStyle}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <span> 로그인</span>
                   
                    </button>
                    </div>
                    
                </form>
                </FormProvider>
               
            </div>
        </>
    )
}