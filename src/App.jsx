// src/App.jsx
import React from 'react';
import { motion } from 'framer-motion';
//import bookIcon from './assets/book-svgrepo1.svg';
import bookIcon from './assets/book-3.svg';
import './App.css'; // ייבוא הקובץ שיצרת

const App = () => {
  const scrollVariant = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div className="container">
      
      {/* פתיח */}
      <header className="hero">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <h1 className="heroTitle">ספי עודי</h1>
          <p className="heroSubtitle">מחבר הספר "ביקור במרפאה"</p> {/* הטקסט המעודכן */}
          <p className="heroSubtitle">סופר | יוצר | חולם במילים</p>
          <div className="divider"></div>
        </motion.div>
      </header>

      <main className="mainContent">
        
        {/* אודות */}
        <motion.section 
          className="section aboutFlex"
          initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }} variants={scrollVariant}
        >
          <div className="textBlock">
            <h2 style={{ color: '#d97706', fontSize: '2rem', marginBottom: '1.5rem' }}>המסע שלי</h2>
            <p>
              נעים מאוד, אני ספי עודי. מאז שאני זוכר את עצמי, מילים היו עבורי דרך לחקור את העולם. 
              כיוצר, אני מאמין שהסיפורים הכי טובים נמצאים בפרטים הקטנים של היום-יום.
            </p>
          </div>
          <img 
    src={bookIcon} 
    alt="איור של הספר ביקור במרפאה" 
    className="imagePlaceholder" 
    style={{ objectFit: 'contain' }} 
  />
         
        </motion.section>

        {/* הספר והרעיון */}
        <motion.section 
          className="section"
          initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }} variants={scrollVariant}
        >
          <div className="ideaCard">
            <h2 style={{ marginBottom: '1.5rem' }}>איך נולד הרעיון?</h2>
            <p className="quote">
              "הספר התחיל ממשפט אחד ששמעתי במקרה ברחוב, משפט שפתח דלת לעולם שלם של דמויות שביקשו להיכתב..."
            </p>
            <p>הספר מזמין את הקורא למסע שבו הגבולות בין מציאות לדמיון מטשטשים.</p>
          </div>
        </motion.section>

        {/* רכישה */}
        <motion.section 
          className="section"
          initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }} variants={scrollVariant}
        >
          <div className="ctaBox">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>מוכנים לצאת למסע?</h2>
            <p style={{ marginBottom: '2.5rem' }}>הספר זמין כעת לרכישה מאובטחת באמצעות Bit או Paybox.</p>
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="buyButton"
              onClick={() => window.location.href = '#'}
            >
              לרכישת הספר עכשיו
            </motion.button>
          </div>
        </motion.section>

      </main>

      <footer style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} ספי עודי - כל הזכויות שמורות
      </footer>
    </div>
  );
};

export default App;