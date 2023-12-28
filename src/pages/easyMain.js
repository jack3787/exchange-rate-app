import React from "react";
import { Link, useLocation } from "react-router-dom"; // Link - 컴포넌트 클릭 시 페이지 전환
import { useState } from "react";
import {
  Tooltip,
  Button,
  Space,
  Card,
  Empty,
  Col,
  Divider,
  Row,
  Layout,
  Carousel,
  Slider,
  Avatar,
  Badge,
  Switch,
  Spin,
  Drawer,
  theme,
  Radio,
  message,
} from "antd";
import {
  WalletOutlined,
  BellOutlined,
  SearchOutlined,
  MenuOutlined,
  SoundOutlined,
  AccountBookOutlined,
  QrcodeOutlined,
  BellFilled,
  CopyOutlined,
  LoadingOutlined,
  BankOutlined,
  AlertOutlined,
  AlertFilled,
  SettingOutlined,
  SettingTwoTone,
  SettingFilled,
  ConsoleSqlOutlined,
  SafetyOutlined,
  RobotOutlined,
  BookOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import useApi from "../../../common/hooks/useApi";
import { getAccountsById, getMemberById } from "../../../common/modules/getApi";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// 모달창 불러오기 (리덕스 사용)
// 리덕스의 값을 바꾸기 위해 dispatch 선언 및 action import 시키기

import { useDispatch } from "react-redux";
import EasyMainModalList from "./easyMainModalList";
import { modalAction } from "../../../stores/modalReducer";

import useWooriRouter from "../../../common/modules/wooriRouter";

const CustomCarousel = styled(Carousel)`
  .slick-dots li button {
    width: 80%;
    background-color: gray;
    margin-right: 5px;
  }
  .slick-dots li.slick-active button {
    // background-color: RGB(255,0,0);
    width: 80%;
    background-color: #6e6e6e;
    margin-right: 5px;
  }
`;

// .slick-dots li{
//     margin: 0 0.25rem;
// }

function EasyMain(setPopup) {
  const wooriNavigate = useWooriRouter();
  const dispatch = useDispatch(); // 모달창을 부를 컴포넌트 내에 선언

  // 번역
  const { t } = useTranslation();

  // bold style 정의
  const boldTextStyle = {
    fontWeight: "bold",
  };

  // 계좌 데이터조회
  const [account, fetchAccount] = useApi(() => getAccountsById(2), [], false);
  const {
    loading: transferAccountLoading,
    data: transferAccount,
    // error: transferError,
  } = account;
  // console.log("result = ", transferAccount);

  // member name 조회
  const [member, fetchValue] = useApi(() => getMemberById(2), [], false);
  const {
    loading: transferNameLoading,
    data: transferName,
    // error: transferError,
  } = member;
  // console.log("result = ", transferName);

  // 계좌번호 조회
  const [accNum, fetchAccNum] = useApi(() => getAccountsById(2), [], false);
  const {
    loading: transferAccNumLoading,
    data: transferAccNum,
    // error: transferError,
  } = accNum;
  // console.log("result = ", transferAccNum);

  // 계좌잔액 조회
  const [accBal, fetchAccBal] = useApi(() => getAccountsById(2), [], false);
  const {
    loading: transferAccBalLoading,
    data: transferAccBal,
    // error: transferError,
  } = accBal;
  console.log("result = ", transferAccBal);

  // console.log('계좌상세 InqAccountInfo');
  // const location = useLocation();
  // const acctInfo = location.state;
  // // console.log(JSON.stringify(acctInfo));

  const [size, setSize] = useState("8"); // default is 'middle'
  const carouselStyle = {
    margin: 0,
    height: "60px",
    color: "#fff",
    lineHeight: "70px",
    // textAlign: 'center',
    // background: '#364d79',
    // background: '#3296D7',
    background: "white",
    borderRadius: "10px 10px 0 0",
  };
  const carouselStyle2 = {
    margin: 0,
    height: "40px",
    color: "#fff",
    lineHeight: "5px",
    // textAlign: 'center',
    textIndent: "-225px",
    // background: '#3296D7',
    background: "white",
  };
  const carouselStyle3 = {
    margin: 0,
    height: "80px",
    color: "#fff",
    lineHeight: "110px",
    textAlign: "center",
    // background: '#3296D7',
    background: "white",
  };
  const carouselStyle4 = {
    margin: 0,
    height: "80px",
    // color: '#fff',
    lineHeight: "20px",
    textAlign: "center",
    // background: '#3296D7',
    // background: 'lightgray',
    borderRadius: "0 0 10px 10px",
  };
  const carouselStyle2nd = {
    margin: 0,
    height: "130px",
    color: "#fff",
    lineHeight: "220px",
    textAlign: "center",
    // background: '#3296D7',
    background: "white",
    borderRadius: "10px 10px 0 0",
  };
  const carouselStyle2nd_2 = {
    margin: 0,
    height: "130px",
    color: "#fff",
    lineHeight: "0px",
    textAlign: "center",
    // background: '#3296D7',
    // background: 'black',
    borderRadius: "0 0 10px 10px ",
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  // 알림 뱃지
  const ButtonGroup = Button.Group;
  const [show, setShow] = useState(true);
  const badge = (checked) => {
    setShow(checked);
  };

  // 로딩 아이콘
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  // Click 시, 페이지 이동
  const clickKBPay = () => {
    document.location.href("/kbpayPage");
  };

  // 사이드메뉴 클릭 시, Drawer
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showsideMenuDrawer = () => {
    setOpen(true);
  };
  const sideMenuClose = () => {
    setOpen(false);
  };
  const sideMenuChange = (e) => {
    setPlacement(e.target.value);
  };

  // sidemenu 모달 교체

  // message ("복사되었습니다.")
  const [messageApi, contextHolder] = message.useMessage();
  const successCopy = () => {
    messageApi.open({
      type: "success",
      content: t("계좌번호가 복사되었습니다"),
      style: { marginTop: "25vh" },
      // maxCount: 1
    });
  };

  // alert 클릭 시, icon 변경(AlertFilled <-> AlertOutlined)하는 함수
  const [icon, setIcon] = useState(<AlertOutlined />);

  const changeIcon = () => {
    if (icon.type === AlertOutlined) {
      setIcon(<AlertFilled />);
      messageApi.open({
        type: "success",
        content: t("해당 계좌의 입출금 알림 신청이 완료되었습니다."),
        className: "custom-class",
        style: {
          marginTop: "25vh",
        },
      });
    } else {
      setIcon(<AlertOutlined />);
      messageApi.open({
        type: "success",
        content: t("해당 계좌의 입출금 알림 해제가 완료되었습니다."),
        className: "custom-class",
        style: {
          marginTop: "25vh",
        },
      });
    }
  };

  // alert 클릭 시, 바텀 모달 출력하는 함수
  // const [messageApi, contextHolder] = message.useMessage();
  // const alertOn = () => {
  //     messageApi.open({
  //         type: 'success',
  //         content: '해당 계좌의 입출금 알림 신청이 완료되었습니다.',
  //         className: 'custom-class',
  //         style: {
  //             marginBottom: '20vh',
  //         },
  //     });
  // };
  // const alertOff = () => {
  //     messageApi.open({
  //         type: 'success',
  //         content: '해당 계좌의 입출금 알림 해제가 완료되었습니다.',
  //         className: 'custom-class',
  //         style: {
  //             marginBottom: '20vh',
  //         },
  //     });
  // };

  // "보기" 클릭 시, 출력되는 text(데이터) 변경 (잔액 숨김 <-> ???,???원)
  const [displayText, setDisplayText] = useState(t("잔액 숨김"));
  // function us(){
  //     return [99, function(){console.log("1234")}]
  // }
  // let [tv, tf] = us();
  //
  // *** useState에 대한 이해 필요
  const changeText = () => {
    if (displayText === t("잔액 숨김")) {
      // setDisplayText('??,???원');
      // 계좌 잔액
      setDisplayText(
        !transferAccBalLoading && transferAccBal
          ? transferAccBal.data[0].accountData[0].curlBal.toLocaleString() +
              t("원")
          : ""
      );
    } else {
      setDisplayText(t("잔액 숨김"));
    }
  };

  // 클릭 시, 버튼 이름 변경
  const [displayButton, setDisplayButton] = useState(t("보기"));
  const changeButton = () => {
    if (displayButton === t("보기")) {
      setDisplayButton(t("숨김"));
    } else {
      setDisplayButton(t("보기"));
    }
  };

  // 한 번의 클릭으로 두 가지 동작
  function displayTextandButton(displayText, displayButton) {
    changeText(displayText);
    changeButton(displayButton);
  }

  return (
    <div>
      {/* Header */}
      <Row>
        <Col span={12}>
          <Link to="/kbpayPage">
            <Button shape="round" icon={<QrcodeOutlined />} size={""}>
              KB Pay
            </Button>
          </Link>
        </Col>
        <Col span={12}>
          <Row
            justify="end"
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
            }}
          >
            <Col>
              <Tooltip placement="bottom" title="KB wallet">
                <Link to="/kbwalletPage">
                  <Button
                    type="text"
                    icon={<WalletOutlined />}
                    size={size}
                  ></Button>
                </Link>
              </Tooltip>
            </Col>
            <Col>
              <Tooltip placement="bottom" title={t("알림함")}>
                <Link to="/alertBox">
                  <Row size="small">
                    <Badge dot={show}>
                      <Button
                        type="text"
                        icon={<BellOutlined />}
                        size={size}
                      ></Button>
                    </Badge>
                  </Row>
                </Link>
              </Tooltip>
            </Col>
            <Col>
              <Tooltip placement="bottom" title={t("검색")}>
                <Link to="/searchBox">
                  <Button
                    type="text"
                    icon={<SearchOutlined />}
                    size={size}
                  ></Button>
                </Link>
              </Tooltip>
            </Col>
            <Col>
              <Tooltip placement="bottom" title={t("사이드메뉴")}>
                <Button
                  type="text"
                  icon={<MenuOutlined />}
                  size={size}
                  // 함수 매핑
                  onClick={() => {
                    dispatch(
                      modalAction({
                        what: "middle",
                        title: "사이드메뉴",
                        message: <EasyMainModalList />,
                      })
                    );
                  }}
                ></Button>
              </Tooltip>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* 사이드메뉴 Drawer 방식 */}
      {/* <Drawer
                title="사이드메뉴"
                placement={placement}
                width={500}
                // sideMenuClose={sideMenuClose}
                onClose={sideMenuClose}
                open={open}
                extra={
                    <Row>
                        <Button onClick={sideMenuClose}>
                            Cancel
                        </Button>
                        <Button type="primary" onClick={sideMenuClose}>
                            OK
                        </Button>
                    </Row>
                }
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer> */}

      {/* Top */}
      <Row>
        <Col span={12}>
          <Row>
            <Link to="/myPage">
              {!transferNameLoading && transferName ? (
                <Button type="text">
                  <span style={boldTextStyle}>{t(transferName.data.name)}</span>{" "}
                  {t("님")} {">"}
                </Button>
              ) : (
                ""
              )}
            </Link>
          </Row>
        </Col>
        <Col span={12}>
          <Row
            justify="end"
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
            }}
          >
            <Link to="/kbStarClub">
              <Button type="text">
                <u>{t("KB스타클럽")}</u>
              </Button>
            </Link>
          </Row>
        </Col>
      </Row>

      {/* 캐러셀 */}
      <CustomCarousel
        afterChange={onChange}
        style={{
          border: "1px solid #F1F1F1",
          borderRadius: "8px 8px 8px 8px",
        }}
      >
        {/* 캐러셀 슬라이드 1 */}
        <div>
          {/* 슬라이드 1-1 */}
          <h3 style={carouselStyle}>
            <Row>
              <Col span={1}></Col>
              <Col span={1}>
                <Link to="/transactionHistory">
                  <Button
                    shape="circle"
                    icon={<BankOutlined />}
                    size={"small"}
                  ></Button>
                </Link>
              </Col>
              <Col span={10}>
                <Link to="/transactionHistory">
                  <Button type="text" style={{ color: "black" }}>
                    {/* 계좌 이름 */}
                    <span style={boldTextStyle}>
                      {t(
                        !transferAccountLoading && transferAccount
                          ? transferAccount.data[0].accountData[0].acctName
                          : ""
                      )}
                    </span>
                    {/* transferAccount.data.acctName */}
                  </Button>
                </Link>
              </Col>

              <Col span={11}>
                <Row
                  justify="end"
                  gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                  }}
                >
                  <Col>
                    <Button
                      shape="circle"
                      icon={icon}
                      size={"small"}
                      onClick={changeIcon}
                    ></Button>
                  </Col>
                </Row>
              </Col>
              <Col span={1}></Col>
            </Row>
          </h3>

          {/* 슬라이드 1-2 */}
          <h3 style={carouselStyle2}>
            <Row>
              <Col span={2}></Col>
              {contextHolder}
              <Button
                type="text"
                style={{ color: "black" }}
                onClick={successCopy}
              >
                {/* 계좌 번호 */}
                <span style={boldTextStyle}>
                  {!transferAccNumLoading && transferAccNum
                    ? transferAccNum.data[0].accountData[0].acctNum
                    : ""}
                </span>

                {/* 복사 icon */}
                <Button
                  shape="circle"
                  icon={<CopyOutlined />}
                  size={"small"}
                  style={{
                    color: "lightgray",
                    background: "none",
                    border: "none",
                  }}
                ></Button>
              </Button>
            </Row>
          </h3>

          {/* 슬라이드 1-3 */}
          <h3 style={carouselStyle3}>
            <div>
              {/* <span style={{ fontSize: '18px' }}>{displayText} </span> &nbsp; */}
              {/* '잔액 숨김' = 회색, '잔액' = 검은 색 */}
              <span style={{ color: "#a9a9a9", fontSize: "20px" }}>
                {displayText !== "잔액 숨김" && (
                  <span style={{ color: "black" }}>{displayText}</span>
                )}
                {displayText === "잔액 숨김" && displayText}
              </span>{" "}
              &nbsp;
              <Button
                shape="round"
                size={"small"}
                onClick={displayTextandButton}
                style={{
                  color: "#a9a9a9",
                  fontSize: "8px",
                  padding: "2px 7px",
                }}
              >
                {" "}
                {displayButton}
              </Button>
            </div>
          </h3>

          {/* 슬라이드 1-4 */}
          {/* <h3 style={carouselStyle4}>
                        <Link to={"/transfers"} state={account}>
                            <Button type='primary' style={{ color: 'white', backgroundColor: '#3296D7', fontSize: '13px', padding: '1px 25px' }}> {t("이체")}
                            </Button>
                        </Link>
                    </h3> */}
          <h3 style={carouselStyle4}>
            <Button
              onClick={() => wooriNavigate("/transfers", {}, "stack")}
              type="primary"
              style={{
                color: "white",
                backgroundColor: "#3296D7",
                fontSize: "13px",
                padding: "1px 25px",
              }}
            >
              {t("이체")}
            </Button>
          </h3>
        </div>

        {/* 캐러셀 슬라이드 2 */}
        <div>
          {/* 슬라이드 2-1 */}
          <h3 style={carouselStyle2nd}>
            {/* <div style={{ display: "flex", flexDirection: "column" }}> */}
            <Link to="/accountSet">
              <Button
                shape="circle"
                icon={<SettingOutlined />}
                style={{ color: "white", backgroundColor: "lightgray" }}
              ></Button>
              {/* <Button type="text">대표계좌를 설정해주세요.</Button> */}
            </Link>
            {/* </div> */}
          </h3>

          {/* 슬라이드 2-2 */}
          <h3 style={carouselStyle2nd_2}>
            <Link to="/accountSet">
              <Button type="text" style={{ color: "lightgray" }}>
                {t("대표계좌를 설정해주세요.")}
              </Button>
            </Link>
          </h3>
        </div>
      </CustomCarousel>

      {/* <Space
                direction="vertical"
                size={'4'}>
            </Space> */}
      {/* 위 아래 간격 만들기 */}
      <div style={{ marginBottom: 20 }}></div>

      {/* Bottom */}
      <div
        style={{
          // display: "block",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
        }}
      >
        <Card
          title=""
          // style={{ width: 800, height: 190 }}
        >
          <Row>
            <Col span={2}></Col>
            <Col span={9}>
              <Row
                justify="end"
                gutter={{
                  xs: 8,
                  sm: 16,
                  md: 24,
                }}
              >
                <Link to="/allAcount">
                  <Button icon={<AccountBookOutlined />} size={"large"}>
                    {t("전체 계좌")}
                  </Button>
                </Link>
              </Row>
            </Col>

            <Col span={2}></Col>

            <Col span={9}>
              <Row
                justify="start"
                gutter={{
                  xs: 8,
                  sm: 16,
                  md: 24,
                }}
              >
                <Link to="/manageAsset">
                  <Button icon={<BulbOutlined />} size={"large"}>
                    {t("자산 관리")}
                  </Button>
                </Link>
              </Row>
            </Col>
            <Col span={2}></Col>
          </Row>

          <div style={{ marginBottom: 15 }}></div>

          <Row>
            <Col span={2}></Col>
            <Col span={9}>
              <Row
                justify="end"
                gutter={{
                  xs: 8,
                  sm: 16,
                  md: 24,
                }}
              >
                <Link to="/financialProduct">
                  <Button icon={<BookOutlined />} size={"large"}>
                    {t("금융 상품")}
                  </Button>
                </Link>
              </Row>
            </Col>

            <Col span={2}></Col>

            <Col span={9}>
              <Row
                justify="start"
                gutter={{
                  xs: 8,
                  sm: 16,
                  md: 24,
                }}
              >
                <Link to="/chatbot">
                  <Button icon={<RobotOutlined />} size={"large"}>
                    {t("챗봇 상담")}
                  </Button>
                </Link>
              </Row>
            </Col>
          </Row>

          <div style={{ marginBottom: 15 }}></div>

          <Row justify={"center"}>
            <Link to="/securityService">
              <Button icon={<SafetyOutlined />} size={"large"}>
                {t("내 자산을 위한 보안서비스")}
              </Button>
            </Link>
          </Row>
        </Card>
      </div>

      <div style={{ marginBottom: 10 }}></div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/event">
          <Button
            size="large"
            style={{ color: "white", backgroundColor: "#2C952C" }}
          >
            {" "}
            {t("KB가 준비한 혜택가득 이벤트")}{" "}
          </Button>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5vh",
        }}
      >
        <Link to="/announcement">
          <Button type="text">
            <SoundOutlined />
            {t("공지")}
          </Button>
        </Link>
        <Link to="/announcement2">
          <Button type="link" style={{ color: "black" }}>
            {t("영업점 영업시간 정상운영 안내")}
          </Button>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5vh",
        }}
      >
        <Link to="/">
          <Button>{t("기본모드 보기")}</Button>
        </Link>
      </div>

      <div style={{ height: "20px" }}></div>
    </div>
  );
}

export default EasyMain;
