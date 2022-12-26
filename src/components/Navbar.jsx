import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import logoOnly from "../img/logo_only.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function NavWrap() {
  const [mdShow, setMdShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <header data-scrollto-offset='0'>
      <Navbar key='md' variant='dark' expand='md' className='mb-3'>
        <Container fluid>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt='유리찾자' />
            </Link>
          </div>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            className='text-bg-dark'
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement='end'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <img src={logo} alt='유리찾자' />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className='d-flex align-items-md-end flex-column flex-grow-1 pe-5 py-3'>
                <div className=''>
                  <Button
                    onClick={() => setMdShow(true)}
                    className='button btnFade bgPurple'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    로그인
                  </Button>

                  <Button
                    onClick={() => setLgShow(true)}
                    className='button btnFade bgPurple ms-1'
                    data-bs-toggle='modal'
                    data-bs-target='#staticBackdrop'
                  >
                    회원가입
                  </Button>
                  <Link to='/mypage' className='button btnFade bgPurple ms-1'>
                    마이페이지
                  </Link>
                </div>
                <Nav className='headerNav'>
                  <Nav.Link href='Company' className='links'>
                    회사소개
                  </Nav.Link>
                  <Nav.Link href='Enrolment' className='links'>
                    자동차 유리 등록
                  </Nav.Link>
                  <Nav.Link href='Search' className='links'>
                    자동차 유리 검색
                  </Nav.Link>
                  <Nav.Link href='Cooperation' className='links'>
                    우수 협력점
                  </Nav.Link>
                  <Nav.Link href='Contact' className='links'>
                    연락처
                  </Nav.Link>
                </Nav>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Modal
        size='md'
        show={mdShow}
        onHide={() => setMdShow(false)}
        aria-labelledby='example-modal-sizes-title-md'
      >
        <Modal.Header closeButton>
          <Modal.Title
            className='text-center p-4'
            id='example-modal-sizes-title-md'
          >
            <img src={logoOnly} alt='유리찾자' className='d-inline pe-3' />
            <h1 className='h3 fw-normal d-inline'>로그인</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='pb-5 px-5'>
          <form>
            <div className='form-floating mb-2'>
              <input
                type='email'
                className='form-control'
                id='floatingInput'
                placeholder='ID'
                required
              />
              <label for='floatingInput'>아이디</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='password'
                className='form-control'
                id='floatingPassword'
                placeholder='Password'
                required
              />
              <label for='floatingPassword'>비밀번호</label>
            </div>

            <div className='checkbox mb-3 '>
              <label>
                <input type='checkbox' value='remember-me' /> 로그인 유지
              </label>
            </div>
            <button className='w-100 btn btn-lg bgPurple' type='submit'>
              로그인
            </button>
            <div className='mt-3 text-center'>
              <button type='button' className='btn_style_no'>
                아이디찾기
              </button>
              /
              <button type='button' className='btn_style_no'>
                비밀번호찾기
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <Modal
        dialogClassName='modal-90w'
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg' className='p-4'>
            <img src={logoOnly} alt='유리찾자' className='d-inline pe-3' />
            <h1 className='h3 fw-normal d-inline'>회원가입</h1>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className='px-5'>
          <div className='join_container m-auto'>
            <div className=''>
              <form className='needs-validation' novalidate>
                <div className='mb-3'>
                  <label for='' className='form-label'>
                    아이디
                  </label>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='ID를 입력하세요.'
                      required
                    />
                    <div className='invalid-feedback'>
                      중복된 아이디가 존재합니다.
                    </div>
                    <button type='' className='btn btn-secondary'>
                      중복확인
                    </button>
                  </div>
                </div>
                <div className='mb-3'>
                  <label for='firstName' className='form-label'>
                    이름
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='firstName'
                    placeholder='이름을 입력하세요.'
                    value=''
                    required
                  />
                  <div className='invalid-feedback'>
                    정확한 이름을 입력하세요.
                  </div>
                </div>
                <div className='mb-1'>
                  <label for='floatingPassword' className='form-label'>
                    비밀번호
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='floatingPassword'
                    placeholder='비밀번호'
                    value=''
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label for='floatingPassword2' className='form-label'>
                    비밀번호 확인
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='floatingPassword2'
                    placeholder='비밀번호 확인'
                    value=''
                    required
                  />
                  <div className='invalid-feedback'>
                    비밀번호가 일치하지 않습니다.
                  </div>
                </div>

                <div className='mb-3'>
                  <label for='' className='form-label'>
                    휴대전화
                  </label>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='휴대전화번호를 - 없이 숫자만 입력하세요.'
                      required
                    />
                    <button type='submit' className='btn btn-secondary'>
                      인증
                    </button>
                  </div>
                </div>

                <div className='mb-3'>
                  <label for='email' className='form-label'>
                    이메일
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='you@example.com'
                    required
                  />
                  <div className='invalid-feedback'>
                    이메일 양식이 올바르지 않습니다.
                  </div>
                </div>

                <div className='mb-1'>
                  <label for='' className='form-label'>
                    우편번호
                  </label>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='우편번호를 검색하세요.'
                    />
                    <button type='submit' className='btn btn-secondary'>
                      우편번호
                    </button>
                  </div>
                </div>

                <div className='mb-1'>
                  <label for='address' className='form-label'>
                    주소
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='address'
                    placeholder='우편번호 입력 후 자동입력 됩니다.'
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label for='address2' className='form-label'>
                    상세주소
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='address2'
                    placeholder='건물, 아파트, 동/호수 입력'
                  />
                </div>

                <hr className='my-3' />
                <button
                  className='w-100 btn btn-lg bgPurple mb-4'
                  type='submit'
                >
                  회원가입 하기
                </button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </header>
  );
}
