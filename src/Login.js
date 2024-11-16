import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa'; // Only keep Gmail icon
import axios from 'axios';


function Login() {
  // State to manage hover effects
  const [hoverFacebook, setHoverFacebook] = useState(false);
  const [hoverGmail, setHoverGmail] = useState(false);

  // Inline styles for the buttons
  const buttonStyle = {
    width: '100%',
    borderColor: '#ffffff',
    color: '#ffffff',
    backgroundColor: 'transparent',
    borderRadius: '25px',
    fontFamily: 'Lexend Deca',
    transition: 'all 0.3s ease', // Smooth transition for color and opacity
  };

  // Hover effect styles for both color and opacity
  const hoverStyle = {
    backgroundColor: '#ffffff',  // White background on hover
    color: '#000000',            // Change text color to black
    opacity: 0.8,                // Set opacity to 0.8 on hover
  };
// Function to handle Facebook button click
const handleFacebookClick = async () => {
    try {
      const response = await fetch('https://openai.com/index/chatgpt/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ platform: 'Facebook' }),
      });
      const data = await response.json();
      console.log('Facebook API Response:', data);
    } catch (error) {
      console.error('Error calling Facebook API:', error);
    }
  };

  // Function to handle Gmail button click
  const handleGmailClick = async () => {
    try {
      const response = await fetch('https://www.google.com/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ platform: 'Gmail' }),
      });
      const data = await response.json();
      console.log('Gmail API Response:', data);
    } catch (error) {
      console.error('Error calling Gmail API:', error);
    }
  };
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: 'url(./assets/backgroundimage.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Row>
        <Col>
          <Card style={{
            width: '500px',
            padding: '42px 83px 40px 83px',
            borderRadius: '25px',
            border: '1px solid #000000',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(4px)',
          }}>
            <Card.Body>
              {/* Welcome and Logo Section */}
              <div
                className="welcome-container"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <span
                  style={{
                    color: '#ffffff',
                    fontFamily: 'Lexend Deca',
                    fontSize: '40.9px',
                    fontWeight: '900',
                    lineHeight: '53.75px',
                    textAlign: 'left',
                    margin: 0, // Remove default margin
                  }}
                >
                  Welcome To
                </span>

                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfY3xNi52oJKnFFi1yzP6dZ71N6LRiNLXI9g&s'
                  alt="Logo"
                  style={{
                    width: '52.31px',
                    height: '54px',
                    marginLeft: '10px',
                    boxShadow: '0px 4px 4px 0px #00000040',
                    border: '2px solid #FFFFFF',
                  }}
                />
              </div>

              {/* Centered "Login to continue" Text with Underline */}
              <div
                style={{
                  width: '100%',
                  height: '25px',
                  marginTop: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: '1',
                  fontFamily: 'Lexend Deca',
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  lineHeight: '25px',
                  textAlign: 'center',
                  textDecorationSkipInk: 'none',
                }}
              >
                <span style={{ borderBottom: '1px solid #ffffff' }}>
                  Login to continue
                </span>
              </div>

              {/* Button Tabs for Facebook and Gmail */}
              <div className="d-flex flex-column mt-3">
                {/* Continue with Facebook Button */}
                <Button
                  variant="outline-light"
                  className="mb-2 d-flex align-items-center justify-content-center"
                  style={{
                    ...buttonStyle,
                    ...(hoverFacebook ? hoverStyle : {}),
                  }}
                  onMouseEnter={() => setHoverFacebook(true)}
                  onMouseLeave={() => setHoverFacebook(false)}
                  onClick={handleFacebookClick}

                >
                  {/* SVG Icon for Facebook */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none" style={{ marginRight: '10px' }}>
                    <g clipPath="url(#clip0_140_830)">
                      <path d="M27 13.5C27 6.04422 20.9558 0 13.5 0C6.04422 0 0 6.04422 0 13.5C0 19.831 4.35888 25.1435 10.2389 26.6026V17.6256H7.45524V13.5H10.2389V11.7223C10.2389 7.12746 12.3185 4.9977 16.8296 4.9977C17.685 4.9977 19.1608 5.16564 19.7645 5.33304V9.07254C19.4459 9.03906 18.8924 9.02232 18.205 9.02232C15.9916 9.02232 15.1362 9.86094 15.1362 12.0409V13.5H19.5458L18.7882 17.6256H15.1362V26.9012C21.8209 26.0939 27.0005 20.4023 27.0005 13.5H27Z" fill="white"/>
                      <path d="M18.7877 17.6255L19.5453 13.4999H15.1357V12.0408C15.1357 9.8608 15.991 9.02218 18.2045 9.02218C18.8919 9.02218 19.4454 9.03892 19.764 9.0724V5.3329C19.1603 5.16496 17.6845 4.99756 16.8291 4.99756C12.318 4.99756 10.2384 7.12732 10.2384 11.7222V13.4999H7.45471V17.6255H10.2384V26.6024C11.2828 26.8616 12.3752 26.9999 13.4995 26.9999C14.053 26.9999 14.5989 26.9658 15.1351 26.901V17.6255H18.7872H18.7877Z" fill="#161616"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_140_830">
                        <rect width="27" height="27" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  
                  Continue with Facebook
                </Button>

                {/* OR Divider */}
                <div
                  style={{
                    width: '100%',
                    height: '25px',
                    marginTop: '-7px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: '1',
                    fontFamily: 'Lexend Deca',
                    fontSize: '12px',
                    color: '#FFFFFF',
                    lineHeight: '25px',
                    textAlign: 'center',
                    textDecorationSkipInk: 'none',
                  }}
                >
                  OR
                </div>

                {/* Continue with Gmail Button */}
                <Button
                  variant="outline-light"
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    ...buttonStyle,
                    ...(hoverGmail ? hoverStyle : {}),
                  }}
                  onMouseEnter={() => setHoverGmail(true)}
                  onMouseLeave={() => setHoverGmail(false)}
                  onClick={handleGmailClick}

                >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8357 7.45704C14.8032 6.47232 13.4253 5.93587 11.9997 5.95792C9.3909 5.95792 7.17528 7.71792 6.3853 10.0879C5.96643 11.3298 5.96643 12.6746 6.3853 13.9165H6.38898C7.18263 16.2828 9.39457 18.0428 12.0033 18.0428C13.35 18.0428 14.5061 17.6983 15.4021 17.0899V17.0874C16.4566 16.3893 17.1768 15.2907 17.4009 14.0488H11.9997V10.1981H21.4316C21.5492 10.8668 21.6043 11.5502 21.6043 12.23C21.6043 15.2714 20.5174 17.8428 18.6261 19.5844L18.6281 19.586C16.971 21.1145 14.6966 22 11.9997 22C8.21879 22 4.76125 19.8689 3.06372 16.4922C1.64543 13.6666 1.64543 10.3377 3.06372 7.51215C4.76125 4.13178 8.21879 2.00067 11.9997 2.00067C14.4835 1.97128 16.8828 2.90456 18.6906 4.60209L15.8357 7.45704Z" fill="black"/>
<path d="M11.9997 5.95792V6.20795L12.0035 6.20789L11.9997 5.95792ZM15.8357 7.45704L15.6631 7.63795L15.8398 7.80646L16.0124 7.63382L15.8357 7.45704ZM6.3853 10.0879L6.62219 10.1678L6.62247 10.1669L6.3853 10.0879ZM6.3853 13.9165L6.14841 13.9964L6.20578 14.1665H6.3853V13.9165ZM6.38898 13.9165L6.626 13.837L6.56881 13.6665H6.38898V13.9165ZM15.4021 17.0899L15.5425 17.2968L15.6521 17.2224V17.0899H15.4021ZM15.4021 17.0874L15.2641 16.879L15.1521 16.9531V17.0874H15.4021ZM17.4009 14.0488L17.6469 14.0932L17.7001 13.7988H17.4009V14.0488ZM11.9997 14.0488H11.7497V14.2988H11.9997V14.0488ZM11.9997 10.1981V9.94808H11.7497V10.1981H11.9997ZM21.4316 10.1981L21.6779 10.1548L21.6415 9.94808H21.4316V10.1981ZM18.6261 19.5844L18.4568 19.4005L18.2393 19.6008L18.473 19.782L18.6261 19.5844ZM18.6281 19.586L18.7976 19.7697L19.0148 19.5694L18.7813 19.3884L18.6281 19.586ZM3.06372 16.4922L2.84028 16.6043L2.84035 16.6045L3.06372 16.4922ZM3.06372 7.51215L2.8403 7.39996L2.84028 7.4L3.06372 7.51215ZM11.9997 2.00067V2.25069L12.0026 2.25066L11.9997 2.00067ZM18.6906 4.60209L18.8674 4.77887L19.0498 4.59645L18.8617 4.41985L18.6906 4.60209ZM16.0124 7.63382L18.8674 4.77887L18.5138 4.42532L15.6589 7.28026L16.0124 7.63382Z" fill="black" fill-opacity="1"/>

</svg>
                 Continue with Gmail
                </Button>
              </div>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
