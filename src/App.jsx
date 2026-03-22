import React from 'react';
import { motion } from 'framer-motion';
//import bookIcon from './assets/book-svgrepo1.svg';
import bookIcon from './assets/book-3.svg';import './App.css';

const App = () => {
  const scrollVariant = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const handlePayment = () => {
    // כאן תדביק את הלינק שתקבל מחברת הסליקה
    window.location.href = "https://your-payment-link.co.il";
  };

  return (
    <div className="container">
      
      {/* פתיח - Hero */}
      <header className="hero">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <h1 className="heroTitle">צהלה במרפאה</h1>
          <p className="heroSubtitle">סיפור ילדים על יצירתיות, אומץ וחיוך</p>
          <div className="divider"></div>
        </motion.div>
      </header>

      <main className="mainContent">
        
        {/* רקע לסיפור */}
        <motion.section 
          className="section aboutFlex"
          initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={scrollVariant}
        >
          <div className="textBlock">
            <h2 className="sectionTitle">על הסיפור</h2>
            <p>
              <strong>"צהלה במרפאה"</strong> הוא ספר ילדים שלוקח אותנו לטיול במקום שעלול להיות מאיים. 
              דרך דמויות ססגוניות השומרות על יצירתיות ועזרה הדדית, אנו מגלים מחדש איך דברים תמיד מסתדרים על הצד הטוב ביותר כאשר באים (ושומרים) על גישה בריאה.
            </p>
            <p>
              זהו ספרו הראשון של <strong>ספי עודי</strong>, אשר בחינניות והומור מעלה חיוך גם בפנינו המבוגרים המקריאים, ומסיים את הסיפור עם טעם של עוד.
            </p>
          </div>
          <img src={bookIcon} alt="איור הספר צהלה במרפאה" className="imagePlaceholder" />
        </motion.section>

        {/* על המחבר */}
        <motion.section 
          className="section"
          initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={scrollVariant}
        >
          <div className="authorCard">
            <h2 className="sectionTitle">על המחבר</h2>
            <p>"אני שמח שיש לי זמן לחשוב על סיפורים לספר לבנותיי"</p>
            <p>
              <strong>ספי עודי</strong> – סופר, יוצר, מעצב ומרצה, אוהב ילדים ומרבה להפליג איתם בדמיונו. 
              לספי אישה ו-3 בנות אשר נותנות בו אהבה והשראה לכתוב סיפורי ילדים.
            </p>
          </div>
        </motion.section>

        {/* רכישה */}
        <motion.section 
          className="section"
          initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={scrollVariant}
        >
          <div className="ctaBox">
            <h2 className="ctaTitle">רוצים להצטרף לצהלה?</h2>
            <p>ניתן לרכוש את הספר ולקבלו במשלוח עד הבית. התשלום מאובטח בביט, פייבוקס או אשראי.</p>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#d97706' }} 
              whileTap={{ scale: 0.95 }}
              className="buyButton"
              onClick={handlePayment}
            >
              לרכישת הספר עכשיו
            </motion.button>
          </div>
        </motion.section>

      </main>

      <footer className="footer">
        © {new Date().getFullYear()} ספי עודי | כל הזכויות שמורות
      </footer>
    </div>
  );
};

export default App;