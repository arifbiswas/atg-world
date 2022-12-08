import React from "react";
import { Button, Card, CardImg } from "react-bootstrap";

const BannerSection = ({setModalShow}) => {
  return (
    <div>
      <Card className="bg-dark text-white img-opacity border-none">
        <div
          style={{
            background:
              "url('https://s3-alpha-sig.figma.com/img/756e/302b/7d56a759ac56bc165f65c40094aba4e8?Expires=1671408000&Signature=OZQK40xPDbfZW~KI0NGWZUfGcAntLoJ5u97GUhK3-dL~bCXLgFCDK8OaB-4CQyw0cE9qI4qq9~r90z3N-~QrCoimqXEG64mrYPHHw9w2WbFvaTXwAOk0RCAMIEMW-0Lc6MNAggST~1MyhiUSWl4Obm0RdbFmO61dVcukz2G-r7488CixtS7ClzLEWU5AtFT1UhRYSqpQSwpr2SrFpFfnfV-QQBQImsDOYEs-0XJ7FOvrI2DqLkhHgxaS15huHavMFwODUAAaM-T9z2jgozOKqxddDnJqmV4awWrO1mMFo8-a-ZgLqtWg94hiG2ggDdb5DhG99uDrZERYuMvdTyup5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')",
            width: "100%",
            height: "440px",
            backgroundSize: "cover",
            backgroundPosition : "center",
            backgroundRepeat: "no-repeat",
            opacity: "50%",
          }}
        />

        <Card.ImgOverlay>
          <div className="d-flex justify-content-between d-block  d-lg-none">
            <Card.Text>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                  fill="white"
                />
              </svg>
            </Card.Text>
            <Card.Text>
              <Button onClick={()=>setModalShow(true)} variant="outline-light">Join Group</Button>
            </Card.Text>
          </div>
          <div className="d-flex flex-column justify-content-end h-75 ms-lg-5">
            <div className="fs-2 fw-bold fs-fs-2 fs-lg-1 mb-0 mb-md-2 mb-lg-3">
              Computer Engineering
            </div>
            <div className="fs-5 fw-light fs-md-3 fs-lg-2">
              142,765 Computer Engineers follow this
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default BannerSection;
