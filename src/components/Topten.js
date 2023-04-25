import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../redux/coinsSlice';




const Topten = () => {

  const dispatch = useDispatch();
  // const coins = useSelector((state) => state.coins.data);
  const coins = useSelector((state) => state.coins);
  const coinsStatus = useSelector((state) => state.coins.status);
  const coinsError = useSelector((state) => state.coins.error);
   const [cryptos,setcryptos]=useState(coins?.data?.data?.coins)
  //  console.log(cryptos);

  return (
    <>
     <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.slice(0, 10).map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >

            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>


    </>
  )
}

export default Topten;