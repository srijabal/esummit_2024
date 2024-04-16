export default function Footer() {
  return (
    <footer style={{ backgroundImage:"url(./E-Summit.webp)", padding: '2rem', color: 'white', backgroundSize: "cover" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex' }}>
            <img src="logo.svg" alt="Esummit Logo" style={{ height: '30%', marginRight: '0.5rem', marginBottom: '2rem' }} />
            <img src="logo2.webp" alt="Ecell logo" style={{ height: '30%', marginLeft: "10rem" }} /> 
          </div>
          <p>The flagship event of the Entrepreneurship Cell, IIT Roorkee promoting entrepreneurship</p>
        </div>
        <div style={{ display: 'flex', marginRight: "10rem" }}>
          <div style={{ marginRight: '4rem' }}>
            <h3>Our Address</h3>
            <p style={{marginTop: "1rem"}}>E-Cell Office, SAC Building</p>
            <p>IIT Roorkee</p>
            <p>Roorkee, Uttarakhand - 247667</p>
          </div>
          <div>
            <h3>Email</h3>
            <p style={{marginTop: "1rem"}}>esummit@iitr.ac.in</p>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '0', display: "flex", justifyContent: "space-between" }}>
        <p>E-Summit 2024 IIT Roorkee. All rights reserved.</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <img src="facebook.png" alt="Facebook" style={{ height: '20px', marginRight: '1rem' }} />
          <img src="instagram.webp" alt="Instagram" style={{ height: '20px', marginRight: '1rem' }} />
          <img src="twitter.webp" alt="Twitter" style={{ height: '20px', marginRight: '1rem' }} />
          <img src="linkicon.webp" alt="LinkedIn" style={{ height: '20px' }} />
        </div>
      </div>
    </footer>
  );
}