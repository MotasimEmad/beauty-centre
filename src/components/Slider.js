import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://images.unsplash.com/photo-1682687981974-c5ef2111640c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" },
    { url: "https://images.unsplash.com/photo-1693732288374-87ab8eec79d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" },
    { url: "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  ];

const Slider = () => {
  return (
    <div>
    <SimpleImageSlider
      width={1600}
      height={600}
      images={images}
      showBullets={true}
      showNavs={true}
      autoplay={true}
      autoplayInterval={3000}
      loop={true}
    />
  </div>
  );
};

export default Slider;
