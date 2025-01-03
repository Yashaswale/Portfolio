import React, { useCallback } from 'react';

export function Footer() {
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  };

  const taglineStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
    background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap', // Allow items to wrap on smaller screens
    marginTop: '1rem',
  };

  const socialLinkStyle = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '50px',
    textDecoration: 'none',
    color: 'white',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    whiteSpace: 'nowrap', // Prevent text overflow
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yash-aswale-591a69249/' },
    { name: 'GitHub', url: 'https://github.com/Yashaswale' },
    { name: 'Instagram', url: 'https://www.instagram.com/yashaswale12/' },
    { name: 'Leetcode', url: 'https://leetcode.com/u/Yash_Aswale/' },
  ];

  const createRipple = useCallback((event) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.style.position = 'absolute';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    circle.style.transform = 'scale(0)';
    circle.style.animation = 'ripple 0.6s linear';

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }, []);

  return (
    <footer style={footerStyle}>
      <div style={taglineStyle}>
        Innovate. Create. Inspire.
      </div>
      <div style={socialLinksStyle}>
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={createRipple}
          >
            {link.name}
            <span className="ripple"></span>
          </a>
        ))}
      </div>
      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .ripple {
            width: 100%;
            height: 100%;
          }

          ${socialLinkStyle} {
            font-size: 0.9rem; /* Adjust font size for smaller screens */
            padding: 0.5rem; /* Reduce padding for mobile screens */
          }
        }
      `}</style>
    </footer>
  );
}
