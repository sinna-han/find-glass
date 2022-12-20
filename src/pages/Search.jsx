import React from "react";
import SubTitle from "../components/SubTitle";
import SearchBar from "../components/SearchBar";
import Form from "react-bootstrap/Form";
import SelectGroup from "../components/SelectGroup";
import ListSearch from "../components/ListSearch";
import brandLogo1 from "../img/hyundai_logo.png";
import brandLogo2 from "../img/renault_logo.png";
import brandLogo3 from "../img/kia_logo.png";
import noProduct from "../img/logo_big_only.png";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Search() {
  return (
    <>
      <SubTitle
        title='자동차 유리 검색'
        exp='찾고 있는 유리를 빠르게 검색할 수 있습니다.'
      />
      <div className='container-xl mx-auto my-5'>
        <SearchBar />
        <div className='container-xl mx-auto my-4 bg-light p-5'>
          <Form className='needs-validation' novalidate>
            <div className='row g-3'>
              <SelectGroup />
            </div>
          </Form>
        </div>

        <div className='d-flex align-items-center justify-content-between m-1'>
          <p>
            전체 <span className='point_txt'>8</span>건
          </p>
          <ul className='nav justify-content-end nav_vr'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                최신등록순
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                낮은가격순
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                거리순
              </a>
            </li>
          </ul>
        </div>

        <div className='list-group w-auto search_list'>
          <ListSearch
            imgUrl={brandLogo1}
            imgName='현대자동차'
            carExp='YF 쏘나타 전면유리-쏠라/열선/습기/하이패스'
            carName='서울/현대/쏘나타'
            price='100,000'
          />
          <ListSearch
            imgUrl={brandLogo2}
            imgName='삼성르노자동차'
            carExp='YF 쏘나타 전면유리-쏠라/열선/습기/하이패스1'
            carName='서울/현대/쏘나타2'
            price='120,000'
          />
          <ListSearch
            imgUrl={brandLogo3}
            imgName='기아자동차'
            carExp='YF 쏘나타 전면유리-쏠라/열선/습기/하이패스2'
            carName='서울/현대/쏘나타3'
            price='130,000'
          />
        </div>

        <div className='text-center search_zero align-middle'>
          <img src={noProduct} />
          <p>아쉽게도 판매중인 재고가 없습니다.</p>
        </div>

        <nav className='m-4'>
          <ul className='pagination justify-content-center'>
            <li className='page-item'>
              <a className='page-link' href='#' aria-label='Previous'>
                <span aria-hidden='true'>
                  <GrFormPrevious />
                </span>
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                1
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                2
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                3
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#' aria-label='Next'>
                <span aria-hidden='true'>
                  <GrFormNext />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
