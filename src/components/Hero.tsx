function Hero() {
  return (
    <div>
      <img
        src="/hero.webp"
        alt="Hero Image"
        width={1200}
        height={500}
        fetchPriority="high"
        decoding="async"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}

export default Hero;