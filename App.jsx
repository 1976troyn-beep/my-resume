import React from 'react';
import { Code, Briefcase, Mail, Calendar, MapPin, Github, Send, Phone } from 'lucide-react';

function App() {
  const techStack = [
    { name: 'JavaScript / React', url: 'https://react.dev' },
    { name: 'Vite / Node.js', url: 'https://vitejs.dev' },
    { name: 'HTML / CSS / Tailwindcss', url: 'https://tailwindcss.com' },
    { name: 'Git / VS Code', url: 'https://code.visualstudio.com' },
    { name: 'Nest.js / Prisma', url: 'https://nestjs.com' },
  ];

  return (
    <div style={styles.wrapper}>
      {/* Стили анимаций и интерактивных эффектов */}
      <style>
        {`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          
          /* КНОПКИ СТЕКА */
          .tech-button {
            background-color: #61dafb !important;
            color: #1a365d !important;
            font-weight: 700 !important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            text-decoration: none;
            border: none !important;
          }
          .tech-button:hover {
            transform: scale(1.05);
            background-color: #a0ebff !important;
            box-shadow: 0 8px 20px rgba(97, 218, 251, 0.4);
          }
          
          /* СОЦСЕТИ В ФУТЕРЕ */
          .social-link { 
            transition: all 0.3s ease; 
            text-decoration: none; 
            display: flex; 
            align-items: center; 
            color: #1a365d !important; /* Темно-синий для четкости */
            padding: 12px; 
            border-radius: 50%; 
            background: rgba(255,255,255,0.4); 
          }
          .social-link:hover { 
            background: #ffffff !important; 
            transform: translateY(-5px); 
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
        `}
      </style>

      {/* Фон из папки public */}
      <div style={styles.backgroundLayer}></div>
      
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.photoBox}></div>
          <div style={styles.headerMainContent}>
            <div style={styles.nameAndInfo}>
              <h1 style={styles.name}>Прохоренко Андрей Юрьевич</h1>
              <div style={styles.metaRow}>
                <span style={styles.metaItem}><Calendar size={16} /> 1976 г.р.</span>
                <span style={styles.metaItem}><MapPin size={16} /> Удаленная работа</span>
              </div>
            </div>
            <div style={styles.logoContainer}>
              <svg viewBox="-11.5 -10.23174 23 20.46348" style={styles.reactLogoSvg}>
                <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
            </div>
          </div>
        </header>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <Code size={20} color="#2563eb" />
            <h2 style={styles.sectionTitle}>Технологический стек</h2>
          </div>
          <div style={styles.techGrid}>
            {techStack.map((tech) => (
              <a key={tech.name} href={tech.url} target="_blank" rel="noopener noreferrer" className="tech-button" style={styles.techItem}>
                {tech.name}
              </a>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <Briefcase size={20} color="#2563eb" />
            <h2 style={styles.sectionTitle}>Профессиональный фокус</h2>
          </div>
          <p style={styles.text}>
            Специализируюсь на проектировании и разработке высоконагруженных, отзывчивых веб-интерфейсов, 
            которые одинаково безупречно работают на любых типах устройств. В центре моего внимания всегда 
            находится производительность приложений: я стремлюсь к достижению максимальных показателей в Core Web Vitals, 
            минимизируя время до первого взаимодействия пользователя с интерфейсом. Глубоко убежден, что чистота исходного кода и строгое следование 
            архитектурным паттернам — это не просто эстетика, а фундамент для легкой масштабируемости 
            и долгосрочной поддержки продукта.
          </p>
        </section>

        {/* ЦВЕТНОЙ ФУТЕР В СТИЛЕ REACT */}
        <footer style={styles.footer}>
          <div style={styles.socialGrid}>
            <a href="https://wa.me" target="_blank" rel="noreferrer" className="social-link" title="WhatsApp">
              <Phone size={24} />
            </a>
            <a href="https://t.me" target="_blank" rel="noreferrer" className="social-link" title="Telegram">
              <Send size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
              <Github size={24} />
            </a>
            <a href="mailto:1976troyn@gmail.com" className="social-link" title="Email">
              <Mail size={24} />
            </a>
          </div>
          <p style={styles.footerEmail}>Связаться со мной: 1976troyn@gmail.com</p>
        </footer>
      </div>
    </div>
  );
}

const styles = {
  wrapper: { position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' },
  backgroundLayer: { position: 'fixed', top: -20, left: -20, right: -20, bottom: -20, backgroundImage: "url('/background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(5px)', zIndex: -1 },
  container: { maxWidth: '950px', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(12px)', borderRadius: '24px', padding: '45px', boxShadow: '0 25px 60px rgba(0,0,0,0.2)', position: 'relative', overflow: 'hidden' },
  header: { display: 'flex', gap: '30px', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '30px' },
  headerMainContent: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexGrow: 1 },
  nameAndInfo: { display: 'flex', flexDirection: 'column', gap: '8px' },
  logoContainer: { width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  reactLogoSvg: { width: '100%', height: '100%', animation: 'spin 15s linear infinite' },
  photoBox: { width: '120px', height: '120px', borderRadius: '50%', backgroundImage: "url('/my.jpg')", backgroundSize: 'cover', border: '4px solid white', boxShadow: '0 5px 20px rgba(0,0,0,0.15)', flexShrink: 0 },
  name: { fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: 0 },
  metaRow: { display: 'flex', gap: '20px', color: '#64748b' },
  metaItem: { display: 'flex', alignItems: 'center', gap: '6px', fontSize: '15px' },
  section: { marginBottom: '40px' },
  sectionHeader: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' },
  sectionTitle: { fontSize: '22px', fontWeight: '700', color: '#1e293b', margin: 0 },
  techGrid: { display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between' },
  techItem: { padding: '14px 18px', borderRadius: '14px', fontSize: '13px', flex: '1 1 calc(18% - 12px)', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  text: { color: '#334155', lineHeight: '1.8', fontSize: '16px', textAlign: 'justify' },
  
  // ОБНОВЛЕННЫЙ СТИЛЬ ФУТЕРА
  footer: { 
    marginTop: '20px', 
    padding: '30px', 
    backgroundColor: '#61dafb', // Цвет React
    margin: '0 -45px -45px -45px', // Растягиваем на всю ширину контейнера
    textAlign: 'center' 
  },
  socialGrid: { display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '15px' },
  footerEmail: { fontSize: '15px', color: '#1a365d', fontWeight: '700', margin: 0 }
};

export default App;





