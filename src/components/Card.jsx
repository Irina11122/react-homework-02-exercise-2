export default function Card({ name, logo, url, alt }) {
  const cardStyle = {
    border: "2px solid #545454",
    borderRadius: "5px",
    margin: "5px",
    background: "#545454",
  };
  return (
    <div style={cardStyle}>
      <a href={url}>
        <img src={logo} alt={alt} className={`${name} logo`} />
      </a>
    </div>
  );
}
