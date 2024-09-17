const Navbar = ({ brand, links, onButtonClick, buttonLabel }) => {
    return (
        <nav style={navbarStyle}>
            {/* Brand / Logo */}
            <div style={brandStyle}>
                <a href="/">{brand}</a>
            </div>

            {/* Links */}
            <ul style={navLinksStyle}>
                {links.map((link, index) => (
                    <li key={index} style={navLinkStyle}>
                        <a href={link.url} style={navLinkTextStyle}>{link.label}</a>
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button style={buttonStyle} onClick={onButtonClick}>
                {buttonLabel}
            </button>
        </nav>
    );
};

// Styling
const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
};

const brandStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
};

const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
};

const navLinkStyle = {
    marginLeft: '20px',
};

const navLinkTextStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
};

const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
};

export default Navbar;
