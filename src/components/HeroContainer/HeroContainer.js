import React from 'react';
import { Row, Col, Image } from 'antd';
import { ReactComponent as Img3v1 } from '../../assets/images/img3v1.svg';
import './HeroContainer.css';

const HeroContainer = () => {
  return (
    <Row
      className='hero_container'
      gutter={16}
      justify='space-between'
      align='middle'
    >
      <Col span={8}>
        <h1 className='hero_text'>
          We <span className='focus_text'>Design</span>, You Decorate
        </h1>
      </Col>
      <Col span={16}>
        <Row gutter={8} justify='end'>
          <Col span={12}>
            <Image src={require('../../assets/images/img1.png')} />
            <Image src={require('../../assets/images/img2.png')} />
          </Col>
          <Col span={12}>
            <Img3v1 />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HeroContainer;
