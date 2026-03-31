import React, { useState } from 'react';
import { 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Briefcase,
  ChevronRight,
  X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isWechatOpen, setIsWechatOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="mobile-app-container">

      {/* Main Content */}
      <div className="content-wrapper">
        
        {/* Profile Header */}
        <motion.div 
          className="profile-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="logo-container">
            <div className="logo-inner">
              <img src="/afec-logo.png" alt="AFEC Logo" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
            </div>
          </div>
          <h1 className="logo-sub" style={{ fontSize: '1.1rem', fontWeight: '500', color: 'white', marginTop: '0.5rem' }}>
            Association Francophone des Étudiants en Chine
          </h1>
        </motion.div>

        {/* Quick Intro */}
        <motion.div 
          className="about-card glass-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Rejoins la communauté !</h2>
          <p>
            Rejoins le réseau des étudiants francophones en Chine. 
            Événements, entraide, et opportunités professionnelles !
          </p>
        </motion.div>

        {/* Links Container */}
        <motion.div 
          className="links-container"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {/* WeChat QR Code Button */}
          <motion.button 
            onClick={() => setIsWechatOpen(true)}
            className="link-button glass-panel"
            variants={itemVariants}
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="icon-wrapper" style={{ background: 'linear-gradient(135deg, #07C160, #06ad56)' }}>
              <MessageCircle size={22} color="white" strokeWidth={2} />
            </div>
            <div className="link-title">
              <span className="link-title-text">WeChat</span>
              <span className="link-subtitle">Au cœur de la vie en Chine</span>
            </div>
            <ChevronRight size={20} className="chevron" />
          </motion.button>

          {/* Instagram */}
          <motion.a 
            href="https://www.instagram.com/afecchine/?hl=fr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link-button glass-panel"
            variants={itemVariants}
          >
            <div className="icon-wrapper" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
              <Instagram size={22} color="white" strokeWidth={2} />
            </div>
            <div className="link-title">
              <span className="link-title-text">Instagram</span>
              <span className="link-subtitle">Suis notre actualité au quotidien</span>
            </div>
            <ChevronRight size={20} className="chevron" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a 
            href="https://www.linkedin.com/company/association-francophone-des-etudiants-en-china/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link-button glass-panel"
            variants={itemVariants}
          >
            <div className="icon-wrapper" style={{ background: 'linear-gradient(135deg, #0077b5, #005e93)' }}>
              <Linkedin size={22} color="white" strokeWidth={2} />
            </div>
            <div className="link-title">
              <span className="link-title-text">LinkedIn</span>
              <span className="link-subtitle">Conférences et visites d'entreprises</span>
            </div>
            <ChevronRight size={20} className="chevron" />
          </motion.a>

          {/* Silklink - Highlighted Pro Solution */}
          <motion.a 
            href="https://tally.so/r/woXN7M" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link-button glass-panel"
            variants={itemVariants}
          >
            <div className="icon-wrapper" style={{ background: 'linear-gradient(135deg, #2563EB, #1D4ED8)' }}>
              <Briefcase size={22} color="white" strokeWidth={2.5} />
            </div>
            <div className="link-title">
              <span className="link-title-text">SilkLink</span>
              <span className="link-subtitle">Ta solution de recherche de stage</span>
            </div>
            <ChevronRight size={20} className="chevron" />
          </motion.a>

        </motion.div>
        
        {/* Partners Section */}
        <motion.div 
          className="partners-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ marginTop: '2rem', textAlign: 'center' }}
        >
          <h3 style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Universités Partenaires</h3>
          <div className="glass-panel" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            padding: '1.25rem',
            borderRadius: '20px'
          }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <div key={num} style={{ background: 'white', borderRadius: '8px', padding: '0.15rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px', minWidth: '85px', flex: '1 1 auto', maxWidth: '120px' }}>
                <img src={`/partner-${num}.png`} alt={`Université partenaire ${num}`} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </motion.div>

        <div className="footer-text">
          © {new Date().getFullYear()} AFEC Chine. Tous droits réservés.
        </div>
      </div>

      {/* WeChat QR Code Modal */}
      <div className={`modal-overlay ${isWechatOpen ? 'active' : ''}`} onClick={() => setIsWechatOpen(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <h3 style={{ color: 'white', marginBottom: '0.5rem', fontWeight: 600 }}>Rejoins-nous sur WeChat</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>Scanne ce QR code avec WeChat et ajoute la personne chargée de te rediriger vers le groupe qui te correspond</p>
          
          <div className="qr-placeholder">
            <span style={{color: '#999', fontSize: '0.9rem', textAlign: 'center'}}>
              [ Emplacement du <br/>QR Code WeChat ]
            </span>
            {/* <img src="/qr-code.jpg" alt="WeChat QR" style={{width: '100%', height: '100%', borderRadius: '4px'}} /> */}
          </div>
          
          <button className="modal-close" onClick={() => setIsWechatOpen(false)}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
