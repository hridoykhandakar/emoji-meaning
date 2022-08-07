const Footer = () => {
  return (
    <div className="footer">
      <span className="copyright">
        <span>
          made with ❤️ by <strong>Hridoy Khandakar </strong>
        </span>
        <span>© </span>
        {new Date().getFullYear()}
      </span>
    </div>
  );
};

export default Footer;
