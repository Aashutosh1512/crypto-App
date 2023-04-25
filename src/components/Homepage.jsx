
import React from 'react';
import millify from "millify";
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../redux/coinsSlice';
import { fetchNews } from '../redux/newsSlice';
import News from '../components/News'
import Topten from '../components/Topten';
import Top5 from '../components/Top5';
const { Title } = Typography;

const Homepage = () => {
  const dispatch = useDispatch();
  // const coins = useSelector((state) => state.coins.data);
  const coins = useSelector((state) => state.coins);
  const coinsStatus = useSelector((state) => state.coins.status);
  const coinsError = useSelector((state) => state.coins.error);

  //console.log(coins.data.coins);
  // 

  React.useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  if (coinsStatus === 'loading') {
    return <div>Loading...</div>;
  }
    if (coinsStatus === 'failed') {
    return <div>Error: {coinsError}</div>;
  }
  // console.log(coins.data.coins);
  // const x=coins.data.coins;
  
 const globalStats=coins?.data?.data?.stats; //globalStats
//  console.log(coins.data.data.stats);
//console.log(globalStats)
   if (globalStats===undefined)
   {
    return <div>Loading...</div>;
   }
  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Topten/>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <Top5/>


    </>
  );
};

export default Homepage;
