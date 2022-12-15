import React from "react";

const Recommended = () => {
  return (
    <div className="w-75 mx-auto">
      <div className="mt-5 position-relative">
        <span className="position-leftSite">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_842)">
              <path
                d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z"
                fill="black"
              />
              <path
                d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_842">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span className="position-rightSite">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_848)">
              <path
                d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667V5.86667Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_848">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>

        <input
          type="text"
          className="form-control border-none border-bottom text-center"
          id="exampleFormControlInput1"
          placeholder="Enter your location"
        />
      </div>
      <p className="mt-5 text-center your-location-text-color">
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5" clipPath="url(#clip0_1_853)">
              <path
                d="M7.33337 10H8.66671V11.3334H7.33337V10ZM7.33337 4.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337 1.33337C4.31337 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.31337 14.6667 7.99337 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 7.99337 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_853">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>{" "}
        Your location will help us serve better and extend a personalised
        experience.
      </p>
      <div >
        <h6 className="text-center mt-5">
          {" "}
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_1263)">
                <path
                  opacity="0.3"
                  d="M15.75 9V7.5H9L10.005 3.495L6.75 6.75V14.25H13.5L15.75 9Z"
                  fill="black"
                />
                <path
                  d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1263">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>{" "}
          <span className="fw-semibold">RECOMMENDED GROUPS</span>
        </h6>
        <div className="my-4">
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="mt-1 d-flex gap-2 align-items-center">
                <img
                  className="rounded-full"
                  width="35px"
                  height="35px"
                  src="https://s3-alpha-sig.figma.com/img/bb0d/5f13/7ffa8afe7647578af2381ac9090c32e2?Expires=1671408000&Signature=WsAnOZPakxI1BcY~Os5b~oMmRfEqFFysvTxrkgbHta9MqrWp9amSEaenZkGK~FX9VFIRtWunKUwGIwAjTlPQr67-yllTAH5y0iPJ5NkiyM79IY9FqkJUYqpbzef3WU0nCIe6V8tcFrbHLoRPos85zQHPUhX0TXoYcaM8doSTzm~1KZBRQRtpjLnciOLZK0wI9pjb2et1Ex6buc88XOa4Ox7tcf0aLm18n9siCoPadwL~eFiWjM8SHcjDBSlyEsJajXiKlDnqCKZ0VeVeAaprFrzvnhCo4sWpn~wZBGFuO2nwZ7Ii2aN4DFAKHOrsxjVzgpbvNGG2GoMiM9-pAO0gZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <h6 className="fw-semibold">Leisure</h6>
              </div>
              <div>
                <div className="mt-3">
                 <button className="btn btn-dark rounded-pill btn-sm">
                  Follow
                  </button>
                </div>
              </div>
            </div>


            <div className="d-flex justify-content-between align-items-center">
              <div className="mt-3 d-flex gap-2 align-items-center">
                <img
                  className="rounded-full"
                  width="35px"
                  height="35px"
                  src="https://s3-alpha-sig.figma.com/img/bcef/452c/f2f96211f57819f3ef6b3922e0cd72cf?Expires=1671408000&Signature=FEDqHrLWvRARlxR9~XPG39N6bP-P-myAGd-uv~6GnpImkKyjS25JKDpJulkRBkFc4LmYG~GVIheLeF3AkoECU0XJHtuu~ky7cCcBq9cg2ZHDihgMek7f7fwCs20O4TZPtnWR9fdpOaLLLMoSnAdNt5jhFvkOJ5fc92fjVxiFzEvq~MRd1-RaPnbb-9ma3KQszWaF-mh1gVfUSyMJ7Xc72TRG7QQKF0lbQWavxLoiwICDld8oIb3pecSGCboExUT5SWxmvIMMycFRyOrjanUa-Er2AFn2zt0pxkNE4eCdreCXZsXFwzq1wDf~7HYD9G2rZ65ixHMP5BwMSg27RWAZjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <h6 className="fw-semibold">Activism</h6>
              </div>
              <div>
                <div className="mt-3">
                 <button className="btn btn-light rounded-pill btn-sm">
                  Follow
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="mt-3 d-flex gap-2 align-items-center">
                <img
                  className="rounded-full"
                  width="35px"
                  height="35px"
                  src="https://s3-alpha-sig.figma.com/img/8f0b/0ff9/829dac10d09fc377df6ec78c4098bc9a?Expires=1671408000&Signature=fKT7oDLAxzsmxaOfpkmQUKbAEctLMBfQjXqdQPT-JmC274r7LJFvrvD1E2JMEv4H5Ge80p4jSem1xM7JxbRtwWCgBTlFdJfNzP6rFM3K8gkxADH91Zq1oIGrXI2BTScKdi721gWMc63-AVG-hrvO5Urap~vTZCEDO~lcv8lcxW-1DgnmJFZB2NDCtVIkoBGtdSfYETlyLWHUGZIrefb3Y3KMyAdj5bo-5F0a0zD4GVjuQH~-BO4exaPfoyS3LdfETP4h6qkI4jxuxc3FBGdTodw4xGNpAAxHTZefJPFq6wyofVwg-kErVZS6ZVWo-vL4yycOF8SVLry3MPKxoJUWUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <h6 className="fw-semibold">MBA</h6>
              </div>
              <div>
                <div className="mt-3">
                 <button className="btn btn-light rounded-pill btn-sm">
                  Follow
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="mt-3 d-flex gap-2 align-items-center">
                <img
                  className="rounded-full"
                  width="35px"
                  height="35px"
                  src="https://s3-alpha-sig.figma.com/img/0533/15a9/cf46af0ebdaae2ffbbb5718726788a19?Expires=1671408000&Signature=AqjwgRqHxtvAp9gNrOnyi3Ym0lQkEYzo7R38si3BKOwRadZJEVZTFQFygVZ7MrGv5VxvJfg529nDTXu9m8JG2INW9PrbbbVaListno93SVM-5R43lItq~jhw52myVHB2rge0b4CwVT92KeR0gMFeICcvaN01nIwvr9vzElBDytiosH7tzloa7nRvEbmKSIq4kGHS5IlE2TC~wRSP5adoHYW6UAaG9UoPgtqApXKOYfrlRA3L-uLeaLT04LUEzgpoy~3UbUTxGUGWotO7cSpBFQ4RtzfNuTVoM~WYQPB7Hh5dZ7B2VgQuighqzs4mpdqLEG6O3Wmg1nO2rhTbkcN0tg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <h6 className="fw-semibold">Philosophy</h6>
              </div>
              <div>
                <div className="mt-3">
                 <button className="btn btn-light rounded-pill btn-sm">
                  Follow
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
     <div className="d-flex justify-content-end">
     <button className="btn btn-link  mt-5 text-primary">See More...</button>
     </div>
    </div>
  );
};

export default Recommended;
