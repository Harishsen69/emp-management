import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const App = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        draggable={false}
        alt="example"
        src="https://images.pexels.com/photos/14960246/pexels-photo-14960246.jpeg?cs=srgb&dl=pexels-less-rock-14960246.jpg&fm=jpg"
      />
    }
  >
    <Meta title="Harish Sen" description="www.instagram.com" />
  </Card>
);
export default App;