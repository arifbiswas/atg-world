import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import loginImage from "../../../Assets/loginImage.png";
import RegisterModal from "../RegisterModal/RegisterModal";
const LoginModal = (props) => {
  const {setLoginModal ,setRegisterModal,registerModal}=props;
  if(registerModal){
    setLoginModal(false)
  }
  return (
  <div>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <div
          id="contained-modal-title-vcenter"
          className="modal-heading-custom-color text-center d-none d-md-none d-lg-block"
        >
          <span>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </span>
        </div>
      </Modal.Header>
      <Modal.Body className="mx-3">
        <div className="d-flex justify-content-between flex-column flex-lg-row">
          <h4 className="fw-bolder">Sign In</h4>
          <small>
          <p className="">
            Don’t have an account yet? {" "}
              <button
              onClick={()=>{
                setRegisterModal(true)
              }}
              className="btn btn-link btn-sm">Create new for free!</button>
            </p>
          </small>
        </div>
        <div className="row">
          <div className="col">
            <div className="w-100 mt-3">
              <form>
                <div>
                  <div class="input-group ">
                  </div>
                  <div>
                    <input
                      type="email"
                      class="form-control py-2 w-100"
                      placeholder="Email"
                    />
                   <div className="position-relative">
                   <label className="password-show-button"><svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#8A8A8A"/>
</svg>
</label>
                    <input
                      type="password"
                      class="form-control py-2 w-100"
                      placeholder="Password"
                    />
                   </div>
                  
                  </div>
                </div>
                <div className="mt-4 ">
                  <button  className="btn btn-primary rounded-pill w-100">
                  Sign In
                  </button>
                  <div className="mt-3">
                    <button className="btn btn-white border mb-1  rounded w-100">
                      <span>
                        {" "}
                        <img
                          className="facebook-icon-sizing"
                          src="https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1671408000&Signature=eD6xcsUoBBHcCYXMJoWShqVUR9z2jUgMmMWJeC11ZOjGww03tulwZkfKKMuB-rxRZx9BlTrtulqkygIRG-rni48oO1031Z15VYiSiXQOh1epZC4OzFPFuY07yjDCDcYUo9YNfAz6C1fzglAwcYpQDQCUIRbTOR88DkvBx1xB73BcEpSykFwjoxpyo~Ofkp5OCRcLRwkciJY1yWOwHfzvfO2nzUvWgL3SEAt3gD9cfuWTk6tb1ZclbxpoL8hNDPB6YHuIbpKmevWyIRS15PgsdOsHr64d4-GEGFTqPRDOo5qxfFEyaC9878N1cfr3zUeNzs9t68e9QrvsDgKHVu8yzg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                          alt=""
                        />
                      </span>{" "}
                      <small>Sign up with Facebook</small>
                    </button>
                    <button className="btn btn-white border  rounded w-100">
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1_2217)">
                            <path
                              d="M3.54594 9.66905L2.989 11.7482L0.953406 11.7912C0.345063 10.6629 0 9.37192 0 8.00005C0 6.67345 0.322625 5.42245 0.8945 4.32092H0.894938L2.70719 4.65317L3.50106 6.45455C3.33491 6.93895 3.24434 7.45895 3.24434 8.00005C3.24441 8.5873 3.35078 9.14995 3.54594 9.66905Z"
                              fill="#FBBB00"
                            />
                            <path
                              d="M15.8602 6.50562C15.9521 6.98955 16 7.48933 16 8.00012C16 8.57287 15.9398 9.13155 15.8251 9.67046C15.4357 11.5043 14.4181 13.1056 13.0084 14.2388L13.008 14.2384L10.7253 14.1219L10.4023 12.1052C11.3377 11.5566 12.0687 10.6981 12.4537 9.67046H8.1759V6.50562H12.5161H15.8602Z"
                              fill="#518EF8"
                            />
                            <path
                              d="M13.0081 14.2382L13.0085 14.2386C11.6375 15.3406 9.89596 15.9999 8.00015 15.9999C4.95355 15.9999 2.30477 14.2971 0.953552 11.7911L3.54608 9.66895C4.22168 11.472 5.96102 12.7555 8.00015 12.7555C8.87662 12.7555 9.69774 12.5186 10.4023 12.105L13.0081 14.2382Z"
                              fill="#28B446"
                            />
                            <path
                              d="M13.1064 1.84175L10.5148 3.9635C9.78553 3.50769 8.92353 3.24438 8.00003 3.24438C5.91475 3.24438 4.14288 4.58678 3.50113 6.4545L0.894969 4.32088H0.894531C2.22597 1.75384 4.90816 0 8.00003 0C9.94112 0 11.7209 0.691438 13.1064 1.84175Z"
                              fill="#F14336"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_2217">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>{" "}
                      <small>Sign up with Google</small>
                    </button>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="forgot-font-sizing bolder">Forgot Password?</p>
                </div>
              </form>
            </div>
          </div>
          <div className="col d-none d-md-none d-lg-block">
            <div className="d-flex justify-content-center">
              <img src={loginImage} alt="" />
            </div>
            <p className="login-custom-text-sizing">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
     {/* <RegisterModal
     show={registerModal}
     onHide={() => setRegisterModal(false)}
    ></RegisterModal> */}
  </div>
  );
};

export default LoginModal;
