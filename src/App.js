
import './App.css';
import ImageSlider from './components/ImageSlider';
import images from './data'  


function App() {
  const containerStyle={
    width:'500px',
    height:'280px',
    margin:'0 auto',
  }


   
  return (
    <div style={containerStyle} >
      <ImageSlider images={images}/>
    </div>
  );
}

export default App;
