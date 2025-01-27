'use client';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/Lambeau68-1024x690.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ 
        fontSize: '4rem',  // Base size for regular letters
        fontWeight: '700',
        color: '#FFD700',
        marginBottom: '2rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        fontFamily: "'Oswald', sans-serif",
        letterSpacing: '0.05em',
        lineHeight: '1',
        display: 'flex',  // Added to help with alignment
        alignItems: 'baseline',  // Align letters at their base
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <span style={{ 
          fontSize: '8rem', 
          lineHeight: '1',
          display: 'inline-block'
        }}>F</span>
        <span>OOTBALL</span>
        <span style={{ 
          fontSize: '8rem', 
          lineHeight: '1',
          display: 'inline-block'
        }}>H</span>
        <span>IGHLIGHTS</span>
        <span style={{ 
          fontSize: '8rem', 
          lineHeight: '1',
          display: 'inline-block'
        }}>M</span>
        <span>USIC.COM</span>
      </h1>

      <h4 style={{ 
        fontSize: '1.25rem',
        color: 'white',
        marginBottom: '2rem',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)'
      }}>
        The Songs And Artists That Contributed To The Golden Age (1966-1979) Of Music Used In Football Highlight Films
      </h4>

      <h2 style={{ 
        fontSize: '2.5rem',
        color: '#87CEEB',  // Light blue
        fontFamily: "'Righteous', cursive",
        textAlign: 'center',
        textShadow: `
          -4px -4px 0 #000,  
           4px -4px 0 #000,
          -4px  4px 0 #000,
           4px  4px 0 #000,
          -4px  0   0 #000,
           4px  0   0 #000,
           0   -4px 0 #000,
           0    4px 0 #000,
          -3px -3px 0 #000,  
           3px -3px 0 #000,
          -3px  3px 0 #000,
           3px  3px 0 #000,
          -2px -2px 0 #000,  
           2px -2px 0 #000,
          -2px  2px 0 #000,
           2px  2px 0 #000`  // Multiple layers of shadows for thicker outline
      }}>
        &ldquo;The Greatest Soundtrack Never Assembled!&rdquo;
      </h2>
    </main>
  );
}
