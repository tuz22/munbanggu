import styled from 'styled-components';

let Container = styled.div`
width: 1200px;
height: 100%;
margin: 0px auto;
padding: 80px 0px 200px;
font-family: sans-serif;
display: flex;
flex-direction: column;
`

function Cart(){

  return (
    <Container className='cart-container'>
      <header>
        <div className='cart-title'>
          <h4 className='active'>장바구니</h4>
        </div>
      </header>
        <section className='cart-box'>
        {/* 선택한 상품 */}
          <article className="cart-content">
            <div className='cart-header'>
              <div className='check-box'>
                <input type='checkbox' id='@checkAll' />
                <label htmlFor='@checkAll'>전체선택(0/0)</label>
              </div>
              <button className='select-del-btn'>선택삭제</button>
            </div>
            <CartItem />
            <CartItem />
          </article>
          {/* 총 상품 금액 */}
          <article className='payment-box'>
            <div className='box-sticky'>
              <div className="payment-result">
                <dl className='amount'>
                  <dt className='amount-item'>총 상품금액</dt>
                  <dd className='amount-price'>0원</dd>
                  <dt>배송비</dt>
                  <dd>+0원</dd>
                </dl>
                <dl className='total'>
                  <dt>결제예상금액</dt>
                  <dd>0원</dd>
                </dl>
              </div>
              <div className="order-box">
                <button className='order-btn'>
                  <strong>0원</strong>
                  주문하기
                </button>
              </div>
            </div>
          </article>
        </section>
    </Container>
  )
}

function CartItem(){

  return (
    <ul className='cart-list'>
      <li>
        <div className='check-box'>
          <input type='checkbox' id='@check0' />
          <label htmlFor='@check0' />
        </div>
        <div className="list-box">
          <div className="thumbnail">
            <img src="" alt="" />
          </div>
          <div className='list-info'>
            <p className="list-name">
              <a href="#">아이템이름이들어가야함</a>
            </p>
          </div>
        </div>
        <div className="cart-info">
          <div className="quantity">
            <input type="text" value="1"/>
            <button className='btn-minus'>-</button>
            <button className='btn-plus'>+</button>
          </div>
          <div className='price-info'>
            <div className="price">
              <span>1000원</span>
            </div>
            <button className='cart-del-btn'>삭제</button>
          </div>
        </div>
      </li>
    </ul>
  )
}
export default Cart