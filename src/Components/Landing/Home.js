import React from 'react'
import { Carousel } from 'antd';

function Home() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img src='https://static.vecteezy.com/system/resources/thumbnails/026/664/084/small_2x/ai-generated-ai-generative-retro-illustration-of-sunflower-sun-flower-field-landscape-nature-outdoor-farm-harvest-plant-vibe-graphic-art-photo.jpg' style={{width:'1400px',height:'80vh'}}/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?cs=srgb&dl=pexels-%C3%A1kos-szab%C3%B3-440731.jpg&fm=jpg"style={{width:'1400px',height:'80vh'}}/>
        </div>
        <div>
          <img src="https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-images-of-nature-download.jpg"style={{width:'1400px',height:'80vh'}}/>
          </div>    
        <div>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/059/016/203/small_2x/serene-landscape-featuring-tranquil-lake-wooden-boat-and-vibrant-autumn-foliage-with-mount-fuji-in-background-scene-evokes-sense-of-peace-and-natural-beauty-photo.jpeg"style={{width:'1400px',height:'80vh'}}/>
        </div>
      </Carousel>
    </div>
  )
}

export default Home