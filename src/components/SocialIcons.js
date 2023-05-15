const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/clarimartin97">
        <i className="fa-brands fa-github" aria-hidden="true" title="Clara Martin' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/clara-martinn/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Clara Martin' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/clarimartinnnn/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Clara Martin' Instagram Profile"></i>
      </a>

    </div>
  );
};

export default SocialIcons;
