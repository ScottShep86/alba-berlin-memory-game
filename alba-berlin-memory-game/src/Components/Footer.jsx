export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>©{currentYear} - ALBA KIDS ZONE - Scott Shepherd</p>
    </footer>
  );
}
