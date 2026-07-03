<div id="uses">
  <header class="uses-header">
    <h1>/uses</h1>
    <p class="subtitle">A document of the hardware, software, and tools I use daily.</p>
  </header>

  <section class="category-section">
    <h2>Hardware</h2>
    <hr />

    <div class="uses-grid">
      <div class="uses-card highlight-card">
        <h3>Development Machine</h3>
        <p>
          While working on my own projects or contributing to my friends startup I use a 
          <a href="https://system76.com/laptops/lemur" target="_blank" rel="noopener noreferrer">
            System76 Lemur Pro
          </a>.
        </p>
        <div class="specs-box">
          <div class="spec-line"><span>Memory:</span> <strong>16.0 GiB</strong></div>
          <div class="spec-line"><span>Processor:</span> <strong>13th Gen Intel® Core™ i7-1355U</strong></div>
        </div>
      </div>

      <div class="uses-card highlight-card">
        <h3>Development Peripherals</h3>
        <p>
          While at my desk, I like to use my
          <a href="https://dygma.com/pages/defy" target="_blank" rel="noopener noreferrer">
            Dygma Defy
          </a> split keyboard, running tactile Cherry MX Brown switches. 
          They make for a very comfortable typing experience, I would recommend giving split keyboards a try!
        </p>
        <p>
          <br>
          I also use a <a href="https://www.amazon.com/dp/B0CX18LHWS?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_1&th=1" target="_blank" rel="noopener noreferrer">verticle mouse</a>, doubling down on the ergonomics.
        </p>
      </div>

      <div class="uses-card">
        <h3>Gaming Maching</h3>
        <p>I built this pc myself, handpicking parts for the most performance I can get:</p>
        <ul class="specs-list">
          <li><strong>CPU:</strong> AMD Ryzen 5 5600X (3.7 GHz 6-Core)</li>
          <li><strong>GPU:</strong> EVGA XC3 ULTRA GAMING GeForce RTX 3090 24 GB</li>
          <li><strong>Motherboard:</strong> MSI MPG B550 GAMING PLUS ATX AM4</li>
          <li><strong>Memory:</strong> 64 GB (2 x 32 GB) G.Skill Ripjaws V DDR4-3600 CL18</li>
          <li><strong>Storage:</strong> 2 TB Samsung 970 Evo Plus M.2 NVMe SSD</li>
          <li><strong>Monitors:</strong> 
            LG 27GN950-B 27" (4K @ 144 Hz) &amp; LG 24MC57HQ-P 23.8" (1080p @ 60 Hz side monitor)
          </li>
        </ul>
      </div>

      <div class="uses-card">
        <h3>Gaming Peripherals</h3>
        <p>
          While gaming, I use an 80% corsair mechanical keyboard with Cherry MX Red switches. 
          The smaller board allows for more room for mouse movements, and I find the lighter push force required for
          the red switches to be more friendly on my fingers.
        </p>
        <p>
          My mouse is a <a href="https://www.amazon.com/dp/B07L4BM851?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_2&th=1" target="_blank" rel="noopener noreferrer">Logitech Gaming mouse</a>
          for custom configuration per game and plenty of buttons.
        </p>
        <p>
          My headset is also <a href="https://www.amazon.com/dp/B081415GCS?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_2&th=1" target="_blank" rel="noopener noreferrer">Logitech</a>, just to stay on brand.
        </p>
      </div>
    </div>
  </section>

  <section class="category-section">
    <h2>Software</h2>
    <hr />

    <div class="software-container">
      <div class="os-banner">
        <p>
          My development environment runs on Linux, specifically 
          <a href="https://pop.system76.com/" target="_blank" rel="noopener noreferrer">Pop!_OS</a>.
        </p>
      </div>

      <div class="uses-grid">
        <div class="uses-card">
          <h3>Editor</h3>
          <p>
            <strong>Visual Studio Code</strong>, customized with extensions for the various programming languages I use.
            I found <a href="https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer" target="_blank" rel="noopener noreferrer">this extension</a> for sqlite
            particulary useful building this site.
          </p>
        </div>

        <div class="uses-card">
          <h3>Terminal &amp; Shell</h3>
          <p>
            I found <a href="https://wezfurlong.org/wezterm/index.html" target="_blank" rel="noopener noreferrer">Wezterm</a> 
            looking for a terminal with tabs or split views. It's been very useful with projects that need multiple sources running.
            <br>
            I customized wezterm with the <a href="https://starship.rs/" target="_blank" rel="noopener noreferrer">Starship</a> prompt.
          </p>
        </div>

        <div class="uses-card full-width-theme">
          <h3>Aesthetic</h3>
          <p>
            Dark mode <i>everywhere</i>.
            <br>
            I am currently enjoying the <a href="https://catppuccin.com/" target="_blank" rel="noopener noreferrer">Catppuccin Mocha</a> theme, which I applied to both VS Code and Wezterm.
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

<style lang="scss">
  #uses {
    --bg-surface: #131313;   
    --bg-card: #1a1a1a;      
    --text-main: #ffffff;    
    --text-muted: #b3b3b3;   
    --accent: #660033;       
    --accent-hover: #880044; 
    --border: #262626;       
    
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem;
    font-family: system-ui, -apple-system, sans-serif;
    color: var(--text-main);
  }

  .uses-header {
    margin-bottom: 3rem;
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: var(--text-main);
    }
    .subtitle {
      color: var(--text-muted);
      font-size: 1.1rem;
    }
  }

  .category-section {
    margin-bottom: 4rem;
    
    h2 {
      font-size: 1.75rem;
      margin-bottom: 0.25rem;
      color: var(--text-main);
    }
    
    hr {
      border: none;
      height: 2px; 
      background: var(--accent); 
      margin-bottom: 1.75rem;
    }
  }

  .uses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .uses-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    transition: border-color 0.2s ease, transform 0.2s ease;

    &:hover {
      border-color: var(--accent);
      transform: translateY(-2px);
    }

    h3 {
      margin-top: 0;
      font-size: 1.25rem;
      color: var(--text-main);
      margin-bottom: 0.75rem;
      border-left: 3px solid var(--accent);
      padding-left: 8px;
    }

    p {
      margin: 0;
      line-height: 1.6;
      color: var(--text-muted);
    }

    a {
      color: #ff3399;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease;
      
      &:hover {
        color: #ff66b2;
        text-decoration: underline;
      }
    }
  }

  .wide-card {
    grid-column: 1 / -1;
  }

  .specs-box {
    margin-top: 1rem;
    background: #0d0d0d;
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 0.75rem;
    font-size: 0.9rem;

    .spec-line {
      display: flex;
      justify-content: space-between;
      padding: 0.25rem 0;
      border-bottom: 1px solid var(--border);
      
      &:last-child {
        border-bottom: none;
      }

      span { color: var(--text-muted); }
      strong { color: var(--text-main); font-weight: 500; }
    }
  }

  .specs-list {
    margin: 1rem 0 0 0;
    padding-left: 1.25rem;
    color: var(--text-muted);
    
    li {
      margin-bottom: 0.5rem;
      line-height: 1.5;
      font-size: 0.95rem;
      
      strong {
        color: var(--text-main);
      }
    }
  }

  .os-banner {
    background: rgba(102, 0, 51, 0.15);
    border: 1px solid var(--accent);
    padding: 1rem 1.25rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    
    p {
      margin: 0;
      font-size: 1.05rem;
      color: var(--text-main);
    }
    
    a {
      color: #ff3399;
      text-decoration: none;
      font-weight: bold;
    }
  }

  .full-width-theme {
    grid-column: 1 / -1;
  }
</style>