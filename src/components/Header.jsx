export default function Header() {
  const headerStyle = {
    color: "#edc84b",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "4.2rem",
    fontWeight: 300,
    letterSpacing: "3px",
    position: "relative",
    width: "100%",
    display: "block",
  }
  return (
    <header className="header">
      <h1 style={headerStyle}>Fast React Pizza Company</h1>;
    </header>
  );
}

