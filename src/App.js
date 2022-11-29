import './default.css';
import './App.css';
import SubNav from './pages/SubNav';
import { useState } from 'react';
import Carousel from './pages/Carousel';
import { eventData, data, firstData, saleData } from './data.js';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [hidden, setHidden] = useState('hidden');
  const [eventItem] = useState(eventData);
  const [item] = useState(data);
  const [firstItem] = useState(firstData);
  const [saleItem] = useState(saleData);
  
  const navigate = useNavigate();

  return (
    <div className="App">
      <title>배민문방구</title>
      <div className='header-container bgOff'>
        <header className=''>
          <img src="../assets/logo.png" alt="로고" />
          <nav>
            <Link onClick={() => { navigate('/') }}>전체</Link>
            <Link onClick={() => { navigate('/') }}>문구</Link>
            <Link onClick={() => { navigate('/') }}>리빙</Link>
            <Link onClick={() => { navigate('/') }}>책/메거진F</Link>
            <Link onClick={() => { navigate('/') }}>배민그린</Link>
            <Link onClick={() => { navigate('/') }}>배달이친구들</Link>
            <Link onClick={() => { navigate('/') }}>콜라보레이션</Link>
            <Link onClick={() => { navigate('/') }}>명예의 전당</Link>
          </nav>
          <ul>
            <li><button className='icon search-btn'>검색</button></li>
            <li><button className='icon cart-btn'>장바구니</button></li>
            <li><button className='login-btn'>로그인</button></li>
            <li><button onClick={() => { setHidden(''); bodyHold(1)}} className='icon menu-btn'>햄버거메뉴</button></li>
          </ul>
        </header>
      </div>
      <div className={hidden}>
        <SubNav />
        <div onClick={() => {setHidden('hidden'); bodyHold(0)}} className='close-btn'>닫기</div>
      </div>
      <Carousel />
      <section className='main-container'>
        <article className='event-content'>
          <img src="./../assets/img/card-banner1.jpg" alt="" />
          {/* <button>〈</button> */}
          <div className='event-list'>
            <div className='card-box'>
              {
                eventItem && eventItem.map((a, i) => {
                  return (
                    <Card item={eventItem[i]} />
                  )
                })
              }
            </div>
          </div>
          <div className='btn-box'>
            <button className='item-btn item-prev-btn'>prev</button>
            <button className='item-btn item-next-btn'>next</button>
          </div>
          {/* <button>〉</button> */}
        </article>
        <article className='main-content'>
          <h3 className='main-title'>요즘 잘 나가요</h3>
          <div className='card-list'>
            {
              item && item.map((a, i) => {
                return (
                  <CardIndex item={item[i]} />
                )
              })
            }
          </div>
        </article>
        <article className='event-content'>
          <img src="./../assets/img/card-banner2.png" alt="" />
          <div className='event-list'>
            <div className='card-box'>
              {
                firstItem && firstItem.map((a, i) => {
                  return (
                    <Card item={firstItem[i]} />
                  )
                })
              }
            </div>
          </div>
          <div className='btn-box'>
            <button className='item-btn item-prev-btn'>prev</button>
            <button className='item-btn item-next-btn'>next</button>
          </div>
        </article>
        <article className='main-content'>
          <h3 className='main-title'>지금은 할인중</h3>
          <div className='card-list'>
            {
              saleItem && saleItem.map((a, i) => {
                return (
                    <CardIndex item={saleItem[i]} />
                )
              })
            }
          </div>
        </article>
      </section>
      <footer className='footer'>
        <div className='footer-container'>
          <h2 className='footer-logo'>
            <span>배민문방구</span>
          </h2>
          <div>
            <nav className='footer-nav'>
              <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>공지사항</a></li>
                <li><a href='#'>이용약관</a></li>
                <li><a href='#'><b>개인정보처리방침</b></a></li>
                <li><a href='#'>대량구매/제휴안내</a></li>
              </ul>
              <p className='link-sns'>
                <a href='https://www.instagram.com/baemin_store/?hl=ko' target='_blank'>@baemin_store</a>
              </p>
            </nav>
            <div className='footer-content'>
              <p>상호 : (주)우아한형제들</p>
              <p>대표 : 김범준</p>
              <p>사업자등록번호 : 120-87-65763</p>
              <p>통신판매업신고번호 : 2021-서울송파-0515</p>
              <p>사업자정보확인</p>
              <p>대표번호 : 1670-9902</p>
              <p>이메일 : marketing_store@woowahan.com</p>
              <p>주소 : 서울특별시 송파구 위례성대로 2 장은빌딩</p>
              <p>호스팅제공 : (주)우아한형제들</p>
              <p>© Woowa Brothers Corp. All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Card(props){
  
  return (
    <div className='event-card'>
      <img src={props.item.thumbnail1} alt="" />
      <div className='badge'>
        { props.item.state == '' ? '' : props.item.state }
      </div>
      <div className='info'>
        <h4>{props.item.title}</h4>
        <p>{props.item.price}원</p>
      </div>
    </div>
  )
}

function CardIndex(props){
  // console.log(props.item.state)
  const discount = props.item.discount;
  const price = props.item.price;
  const sale = price * (100 - discount) * 0.01;

  return (
    // <div className='card-list'>
      <div className='card-list-box'>
          <img src={props.item.thumbnail1} alt="" />
          <div className='badge'>
            <span className='discount'>
              { discount == null ? '' : discount + '% SALE' }
            </span>
            <span className='badge-name'>
              { props.item.state == '' ? '' : props.item.state }
            </span>
          </div>
          <div className='info'>
            <h4>{props.item.title}</h4>
            <div>
              <p>
                <strike className='sale-price'>{ discount == null ? '' : price + ' '}</strike>
                { discount == null ? price + '원' : sale + '원' }
              </p>
            </div>
          </div>
      </div>
    // </div>
  )
}

function bodyHold(state){
  const body = document.querySelector('body').style;
  if (state == 1) {
    body.overflow = 'hidden';
    body.height = '100%';
  } else {
    body.overflow = '';
    body.height = '';
  }
}

export default App;
