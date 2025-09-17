import BannerCarousel from "./components/BannerCarousel/BannerCarousel";
import Button from "./components/common/button";

function App() {
  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      title: "Cloud & Sephiroth",
      description: "Pelea chida",
    },

    {
      image:
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
      title: "Clive & Jill",
      description: "Dying love",
    },

    {
      image: "https://images.unsplash.com/photo-1493244040629-496f6d136cc3",
      title: "Cloud limit break",
      description: "Die",
    },
  ];

  function click() {
    alert("OK");
  }

  return (
    <div className="App">
      <BannerCarousel banners={images}/>
      <Button type="submit" disabled={false} onClick={click}> OK </Button>
    </div>
  );
}

export default App;
