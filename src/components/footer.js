export default function Footer() {
  return (
    <footer style={{ backgroundColor: "black", padding: '2rem', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <img src="logo.svg" alt="Esummit Logo" style={{ width: '30%', marginRight: '0.5rem', marginBottom: '2rem' }} />
          <img src="logo2.webp" alt="Ecell logo" style={{ width: '30%' }} /> 

          <p>The flagship event of the Entrepreneurship Cell, IIT Roorkee promoting entrepreneurship</p>
        </div>
        <div>
          <h3 style={{marginBottom:"1.5rem"}}>Our Address</h3>
          <p>E-Cell Office, SAC Building</p>
          <p>IIT Roorkee</p>
          <p>Roorkee, Uttarakhand - 247667</p>
        </div>
        <div>
          <h3 style={{marginBottom:"0.5rem"}}>Email</h3>
          <p style={{marginTop:"1rem"}}>esummit@iitr.ac.in</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '0' }}>
        <p >E-Summit 2024 IIT Roorkee. All rights reserved.</p>
      </div>
    </footer>
  );
}
