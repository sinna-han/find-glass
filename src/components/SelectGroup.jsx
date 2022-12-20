import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export default function SelectGroup() {
  return (
    <>
      <Form.Group as={Col} md='3' controlId='validationCustom01'>
        <Form.Label>제조사</Form.Label>
        <Form.Select aria-label='Default select' size='lg'>
          <option>제조사를 선택하세요.</option>
          <option value='1'>현대</option>
          <option value='2'>기아</option>
          <option value='3'>쌍용</option>
          <option value='4'>삼성</option>
          <option value='5'>아우디</option>
          <option value='6'>벤츠</option>
          <option value='7'>볼보</option>
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} md='3' controlId='validationCustom02'>
        <Form.Label>차종</Form.Label>
        <Form.Select aria-label='Default select' size='lg'>
          <option>차종 선택하세요.</option>
          <option value='1'>YF쏘나타</option>
          <option value='2'>EF쏘나타</option>
          <option value='3'>NF쏘나타</option>
          <option value='4'>그렌져</option>
          <option value='5'>싼타페</option>
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} md='6' controlId='validationCustomUsername'>
        <Form.Label>유리 모델</Form.Label>
        <Form.Select aria-label='Default select' size='lg'>
          <option>유리 모델을 선택하세요.</option>
          <option value='1'>
            전면유리-쏠라/열선/레인센서/습기/하이패스 86110 -3S073
          </option>
          <option value='2'>
            전면유리-쏠라/열선/레인센서/하이패스 86110- 3S072
          </option>
          <option value='3'>
            전면유리-쏠라/열선/습기/하이패스 86110- 3S053
          </option>
          <option value='4'>전면유리-쏠라/열선/하이패스 86110- 3S052</option>
        </Form.Select>
      </Form.Group>
    </>
  );
}
