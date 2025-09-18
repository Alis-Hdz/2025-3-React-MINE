import BannerCarousel from "./components/BannerCarousel/BannerCarousel";
import Button from "./components/common/button";

function App() {
  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Cloud & Sephiroth",
      description: "Pelea chida",
    },

    {
      image:
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Clive & Jill",
      description: "Dying love",
    },

    {
      image: "https://tse2.mm.bing.net/th/id/OIP.Y8KA4AnDlRX4w5qV6vohSwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
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
