import React, { useState } from "react";
import SubTitle from "../components/SubTitle";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import SelectGroup from "../components/SelectGroup";

export default function Enrolment() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <SubTitle
        title='자동차 유리 등록'
        exp='소장하고 계신 유리를 등록하고 재고관리와 판매 혜택을 누려보세요.'
      />
      <div class='container mx-auto my-5'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className='mb-3'>
            <SelectGroup />
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} md='8' controlId='validationCustom03'>
              <Form.Label>판매가격</Form.Label>
              <InputGroup>
                <Form.Control aria-label='Price' size='lg' />

                <InputGroup.Text>원</InputGroup.Text>
              </InputGroup>
              <Form.Control.Feedback type='invalid'>
                가격을 정확하게 입력해주세요.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='4' controlId='validationCustom04'>
              <Form.Label>수량</Form.Label>
              <InputGroup>
                <Form.Control
                  type='text'
                  size='lg'
                  placeholder='수량을 선택하세요'
                  required
                />
                <button className='btn btn-outline-secondary' type='button'>
                  <TiArrowSortedDown size='24' />
                </button>
                <button className='btn btn-outline-secondary' type='button'>
                  <TiArrowSortedUp size='24' />
                </button>
              </InputGroup>
              <Form.Control.Feedback type='invalid'>
                정확한 수량을 선택해 주세요
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className='text-center mt-5'>
            <Link to='/mypage' className=' btn btn-lg bgPurple2'>
              등록하기
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
}
