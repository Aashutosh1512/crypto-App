import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/newsSlice';




const News = () => {

  const dispatch = useDispatch();
  // const news = useSelector((state) => state.news.data);
  const news = useSelector((state) => state.news);

 



  const newsStatus = useSelector((state) => state.news.status);
  const newsError = useSelector((state) => state.news.error);
   const [cryptos,setcryptos]=useState(news?.data);
    
    


    React.useEffect(() => {
      dispatch(fetchNews());
    }, [dispatch]);
    if (news!==undefined) console.log(news.data);


  return (
    <>
     

     <Row gutter={[100,100]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={23}
            sm={42}
            lg={90}
            className="crypto-card"
            key={currency.url}
          >

            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={currency.url} to={currency.url}>
              <Card
                title={` ${currency.title}`}
                
                hoverable
              >
                <p> {(currency.description
)}</p>
                
              </Card>
            </Link>
          </Col>
        ))}
      </Row>


    </>
  )
}

export default News