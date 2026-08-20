// ===== SVG ICONS =====
const icons = {
  settings: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
  target: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M16 8l-4 4-4-4"/></svg>',
  zap: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  lock: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  clipboard: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
  trendingUp: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  refresh: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>',
  building: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22V12h6v10"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/></svg>',
  linkedin: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  globe: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  mapPin: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  send: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  calendar: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  users: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  cloud: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  database: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
  shield: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  monitor: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  bulb: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>',
  graduation: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg>',
  book: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  award: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
};

// ===== PAGE RENDERERS =====
function renderHome() {
  return `
    <section class="hero">
      <div class="container">
        <p class="label">From strategy to execution</p>
        <h1>Driving Scalable Growth Through Business Systems and <span class="highlight">Digital Transformation</span></h1>
        <p>Business systems modernization, digital strategy, and scalable delivery for financial institutions, PE firms, fintechs, and growth-stage companies.</p>
        <div class="hero-buttons">
          <a href="#/contact" class="btn btn-primary arrow" data-link>Schedule Consultation</a>
          <a href="#/services" class="btn btn-secondary" data-link>Explore Services</a>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <p class="label">Our Expertise</p>
        <h2>Comprehensive Consulting Services</h2>
        <p class="text-muted" style="margin-top:12px; max-width:650px;">Tailored solutions that address the unique challenges facing organizations in today's rapidly evolving landscape.</p>
        <div class="services-grid">
          <div class="service-card">
            <div class="icon-wrapper">${icons.settings}</div>
            <h3>Business Systems Transformation</h3>
            <p>Drive seamless integration across legacy and modern platforms with AI-enhanced automation, enabling agility while maintaining compliance.</p>
            <a href="#/services" class="learn-more" data-link>Learn more &rarr;</a>
          </div>
          <div class="service-card">
            <div class="icon-wrapper">${icons.zap}</div>
            <h3>Digital Strategy & Operational Excellence</h3>
            <p>Develop and execute technology strategies powered by intelligent automation and AI-driven insights to enhance efficiency and competitive advantage.</p>
            <a href="#/services" class="learn-more" data-link>Learn more &rarr;</a>
          </div>
          <div class="service-card">
            <div class="icon-wrapper">${icons.lock}</div>
            <h3>Process Modernization & Data Solutions</h3>
            <p>Leverage AI-powered analytics and intelligent process automation to streamline operations and unlock actionable intelligence from your data.</p>
            <a href="#/services" class="learn-more" data-link>Learn more &rarr;</a>
          </div>
          <div class="service-card">
            <div class="icon-wrapper">${icons.clipboard}</div>
            <h3>Scalable Implementation & Flexible Delivery</h3>
            <p>Deliver complex technology initiatives through a flexible, network-based approach that scales to your needs with outcome-focused execution.</p>
            <a href="#/services" class="learn-more" data-link>Learn more &rarr;</a>
          </div>
        </div>
        <div style="text-align:center; margin-top:48px;">
          <a href="#/services" class="btn btn-secondary arrow" data-link>View All Services</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container text-center">
        <p class="label">Who We Serve</p>
        <h2>Focused on Financial Excellence</h2>
        <p class="text-muted" style="margin-top:12px; max-width:650px; margin-left:auto; margin-right:auto;">Deep domain expertise across the financial services spectrum, from global institutions to innovative fintech disruptors.</p>
        <div class="clients-grid">
          <div class="client-card">
            <div class="icon-circle">${icons.trendingUp}</div>
            <h3>Wealth Management</h3>
            <p>Digital client experiences, CRM integration, and data analytics.</p>
          </div>
          <div class="client-card">
            <div class="icon-circle">${icons.refresh}</div>
            <h3>Asset Managers</h3>
            <p>Portfolio management platforms, client reporting, and operational efficiency.</p>
          </div>
          <div class="client-card">
            <div class="icon-circle">${icons.building}</div>
            <h3>Investment Banks</h3>
            <p>Trading systems, risk management, and regulatory reporting solutions.</p>
          </div>
          <div class="client-card">
            <div class="icon-circle">${icons.monitor}</div>
            <h3>Fintech Startups</h3>
            <p>Scalable architecture, compliance frameworks, and AI-driven operational readiness.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Ready to Transform Your <span class="highlight">Technology Strategy?</span></h2>
        <p>Let's discuss how strategic IT consulting can drive efficiency, ensure compliance, and accelerate your business growth.</p>
        <div class="cta-buttons">
          <a href="#/contact" class="btn btn-primary" data-link>${icons.calendar} Book a Free Consultation</a>
          <a href="#/about" class="btn btn-secondary arrow" data-link>Learn About My Approach</a>
        </div>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section class="about-hero section">
      <div class="container">
        <p class="label">About Me</p>
        <p class="about-bio">Over the past decade, I've led mission-critical digital transformation programs, post-merger integrations, and enterprise technology initiatives for leading global banks and complex multinational organizations. My work has focused on delivering measurable operational improvement, not just strategic plans. As an independent advisor, I offer that same outcome-driven approach with direct engagement and streamlined decision-making.</p>
        <div class="team-cards">
          <div class="team-card">
            <img src="images/ep-profile.jpg" alt="EP Profile" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="placeholder-avatar" style="display:none;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div>
              <h4>Edgar Probst</h4>
              <p>Principal Consultant & Founder</p>
            </div>
          </div>
          <div class="team-card">
            <div class="placeholder-avatar">${icons.users}</div>
            <div>
              <h4>Network Partners</h4>
              <p>Extended Expert Network</p>
            </div>
          </div>
        </div>
        <a href="#/contact" class="btn btn-primary arrow" data-link>Let's Connect</a>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <p class="label">Experience</p>
        <h2>Shaping Financial Services</h2>
        <p class="text-muted" style="margin-top:12px; max-width:650px;">A proven track record of delivering transformational technology initiatives for the world's leading financial institutions.</p>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div>
              <p class="timeline-date">2025 - Present</p>
              <h3 class="timeline-title">Principal Consultant & Founder</h3>
              <p class="timeline-company">Nexis Advisory & Solutions LLC</p>
              <p class="timeline-desc">Providing strategic IT and management consulting to financial services firms, from global banks to emerging fintechs.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div>
              <p class="timeline-date">2017 - 2025</p>
              <h3 class="timeline-title">Manager, Strategy & Consulting</h3>
              <p class="timeline-company">Accenture LLP, New York (Capital Markets)</p>
              <p class="timeline-desc">Led digital transformation initiatives for Fortune 100 financial institutions and leading global banks with U.S.-based operations. Relocated from Switzerland to New York in 2017 to support the launch of Orbium's first U.S. office. Orbium is a business and IT consulting firm specializing in wealth management transformation and advisory engagements. Joined Accenture in 2019 following Accenture's acquisition of Orbium.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div>
              <p class="timeline-date">2014 - 2016</p>
              <h3 class="timeline-title">Consultant, Business Analytics & Strategy</h3>
              <p class="timeline-company">IBM Switzerland AG (Wealth Management Global Business Services)</p>
              <p class="timeline-desc">Delivered business analytics solutions and strategic consulting for European wealth management clients.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div>
              <p class="timeline-date">2012 - 2014</p>
              <h3 class="timeline-title">Analyst, Credit Risk Management</h3>
              <p class="timeline-company">Credit Suisse (now part of UBS), Switzerland</p>
              <p class="timeline-desc">Analyzed and managed credit risk portfolios for Swiss corporate clients, supporting risk assessment and regulatory compliance initiatives.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container text-center">
        <p class="label">Credentials</p>
        <h2>Education & Certifications</h2>
        <div class="creds-grid">
          <div class="cred-card">
            <div class="icon-circle">${icons.graduation}</div>
            <h4>Business Administration (Finance & Strategy)</h4>
            <p>School of Management (HEG-FR), Switzerland</p>
          </div>
          <div class="cred-card">
            <div class="icon-circle">${icons.book}</div>
            <h4>Leading with Analytics & AI</h4>
            <p>Kellogg Executive Education (Northwestern University)</p>
          </div>
          <div class="cred-card">
            <div class="icon-circle">${icons.award}</div>
            <h4>Product Owner/Product Manager (POPM)</h4>
            <p>Scaled Agile</p>
          </div>
          <div class="cred-card">
            <div class="icon-circle">${icons.building}</div>
            <h4>Project Management Professional (PMP)</h4>
            <p>Project Management Institute</p>
          </div>
          <div class="cred-card">
            <div class="icon-circle">${icons.cloud}</div>
            <h4>AWS Solutions Architect Associate</h4>
            <p>Amazon Web Services</p>
          </div>
          <div class="cred-card">
            <div class="icon-circle">${icons.database}</div>
            <h4>Avaloq Certified Professional (ACP)</h4>
            <p>Avaloq</p>
          </div>
          <div class="cred-card">
            <div class="icon-circle">${icons.building}</div>
            <h4>TripleA Portfolio Management</h4>
            <p>Temenos</p>
          </div>
          <div class="cred-card">
            <div class="icon-circle">${icons.users}</div>
            <h4>Financial Services Cloud (FSC)</h4>
            <p>Salesforce</p>
          </div>
          <div class="cred-card">
            <div class="icon-circle">${icons.monitor}</div>
            <h4>Azure Fundamentals</h4>
            <p>Microsoft</p>
          </div>
          <div class="cred-card">
            <div class="icon-circle">${icons.bulb}</div>
            <h4>Design Thinking Practitioner</h4>
            <p>IBM</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container text-center">
        <p class="label">My Approach</p>
        <h2>Principles That Guide My Work</h2>
        <div class="principles-grid">
          <div class="principle">
            <div class="num">1</div>
            <h3>Client First</h3>
            <p>Your success is my success. I'm invested in delivering outcomes that truly matter to your business.</p>
          </div>
          <div class="principle">
            <div class="num">2</div>
            <h3>Pragmatic Excellence</h3>
            <p>Balancing best practices with practical realities to deliver solutions that work in the real world.</p>
          </div>
          <div class="principle">
            <div class="num">3</div>
            <h3>Lasting Impact</h3>
            <p>Building capabilities and transferring knowledge so your team can thrive long after I'm gone.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderServices() {
  return `
    <section class="hero" style="min-height:auto; padding-top:140px; padding-bottom:60px;">
      <div class="container">
        <p class="label">From strategy to execution</p>
        <h1>Driving Scalable Growth Through Business Systems and <span class="highlight">Digital Transformation</span></h1>
        <p>Business systems modernization, digital strategy, and scalable delivery for financial institutions, PE firms, fintechs, and growth-stage companies.</p>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="service-detail">
          <div class="icon-wrapper">${icons.settings}</div>
          <p class="label">Modernize your technology foundation</p>
          <h2>Business Systems Transformation & Technology Integration</h2>
          <p>Drive seamless integration across legacy and modern platforms with AI-enhanced automation, enabling your organization to operate with agility while maintaining regulatory compliance and operational stability.</p>
          <p class="capabilities-title">Key Capabilities</p>
          <ul class="capabilities-list">
            <li>Core banking & wealth management platform implementation</li>
            <li>Enterprise system integration & API strategy</li>
            <li>Legacy system modernization & migration</li>
            <li>Post-merger technology integration (PMI)</li>
            <li>Vendor selection & RFP management</li>
            <li>Technology due diligence & assessments</li>
          </ul>
          <a href="#/contact" class="btn btn-primary" data-link>Discuss Your Needs</a>
        </div>

        <div class="service-detail">
          <div class="icon-wrapper">${icons.zap}</div>
          <p class="label">Align technology with business outcomes</p>
          <h2>Digital Strategy & Operational Excellence</h2>
          <p>Develop and execute technology strategies powered by intelligent automation and AI-driven insights to enhance operational efficiency, reduce costs, and position your organization for sustainable competitive advantage.</p>
          <p class="capabilities-title">Key Capabilities</p>
          <ul class="capabilities-list">
            <li>IT strategy & technology roadmap development</li>
            <li>Operating model design & optimization</li>
            <li>Cloud strategy & migration planning</li>
            <li>Technology cost mapping & rationalization</li>
            <li>DevOps & CI/CD implementation</li>
            <li>Performance benchmarking & optimization</li>
          </ul>
          <a href="#/contact" class="btn btn-primary" data-link>Discuss Your Needs</a>
        </div>

        <div class="service-detail">
          <div class="icon-wrapper">${icons.lock}</div>
          <p class="label">Transform operations with intelligent insights</p>
          <h2>Process Modernization & Data-Driven Solutions</h2>
          <p>Leverage AI-powered analytics and intelligent process automation to streamline operations, accelerate decision-making, and unlock actionable intelligence from your organization's data assets.</p>
          <p class="capabilities-title">Key Capabilities</p>
          <ul class="capabilities-list">
            <li>Data lineage & governance assessments</li>
            <li>Data platform modernization & architecture</li>
            <li>Business process reengineering</li>
            <li>Analytics & reporting strategy</li>
            <li>Regulatory reporting automation</li>
            <li>Data quality & master data management</li>
          </ul>
          <a href="#/contact" class="btn btn-primary" data-link>Discuss Your Needs</a>
        </div>

        <div class="service-detail">
          <div class="icon-wrapper">${icons.clipboard}</div>
          <p class="label">Execute with precision and adaptability</p>
          <h2>Scalable Implementation & Flexible Delivery</h2>
          <p>Deliver complex technology initiatives through a flexible, network-based approach that scales to your needs, combining deep expertise with efficient, outcome-focused execution.</p>
          <p class="capabilities-title">Key Capabilities</p>
          <ul class="capabilities-list">
            <li>Programme & project management</li>
            <li>Agile transformation & delivery</li>
            <li>Change management & stakeholder alignment</li>
            <li>Quality assurance & testing strategy</li>
            <li>Specialized expert network access</li>
            <li>Post-implementation support & knowledge transfer</li>
          </ul>
          <a href="#/contact" class="btn btn-primary" data-link>Discuss Your Needs</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container text-center">
        <p class="label">Technology Expertise</p>
        <h2>Platform & Technology Capabilities</h2>
        <p class="text-muted" style="margin-top:12px; max-width:650px; margin-left:auto; margin-right:auto;">Deep expertise across leading cloud platforms and financial services technology ecosystems.</p>
        <div class="platform-grid">
          <div class="platform-card">
            <div class="icon-circle">${icons.cloud}</div>
            <h3>Amazon Web Services</h3>
            <p>Enterprise cloud architecture, migration strategies, and cost optimization for financial workloads.</p>
            <div class="tag-row"><span class="tag">EC2</span><span class="tag">Lambda</span><span class="tag">RDS</span><span class="tag">S3</span></div>
          </div>
          <div class="platform-card">
            <div class="icon-circle">${icons.monitor}</div>
            <h3>Microsoft Azure</h3>
            <p>Hybrid cloud solutions, Azure DevOps, and enterprise integration for regulated industries.</p>
            <div class="tag-row"><span class="tag">Azure AD</span><span class="tag">AKS</span><span class="tag">SQL</span><span class="tag">DevOps</span></div>
          </div>
          <div class="platform-card">
            <div class="icon-circle">${icons.users}</div>
            <h3>Salesforce FSC</h3>
            <p>Financial Services Cloud implementation, client lifecycle management, and CRM optimization.</p>
            <div class="tag-row"><span class="tag">FSC</span><span class="tag">Flows</span><span class="tag">APIs</span></div>
          </div>
          <div class="platform-card">
            <div class="icon-circle">${icons.database}</div>
            <h3>Avaloq</h3>
            <p>Core banking implementation, wealth management solutions, and platform modernization expertise.</p>
            <div class="tag-row"><span class="tag">Core Banking</span><span class="tag">Wealth</span><span class="tag">APIs</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container text-center">
        <p class="label">Extended Capabilities</p>
        <h2>Network Partners</h2>
        <p class="text-muted" style="margin-top:12px; max-width:650px; margin-left:auto; margin-right:auto;">Through a trusted network of specialized professionals, I can scale engagements and bring in targeted expertise when your project demands it.</p>
        <div class="partners-grid">
          <div class="partner-card">
            <div class="icon-circle">${icons.database}</div>
            <h4>Data & Analytics</h4>
            <p>Data engineers, analysts, and BI specialists</p>
          </div>
          <div class="partner-card">
            <div class="icon-circle">${icons.cloud}</div>
            <h4>Cloud & Infrastructure</h4>
            <p>Cloud architects and DevOps engineers</p>
          </div>
          <div class="partner-card">
            <div class="icon-circle">${icons.shield}</div>
            <h4>Risk & Compliance</h4>
            <p>Regulatory and compliance consultants</p>
          </div>
          <div class="partner-card">
            <div class="icon-circle">${icons.clipboard}</div>
            <h4>Project Delivery</h4>
            <p>Program managers and agile coaches</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section class="hero" style="min-height:auto; padding-top:140px; padding-bottom:40px;">
      <div class="container">
        <p class="label">Contact</p>
        <h1>Let's Start a <span class="highlight">Conversation</span></h1>
        <p>Whether you have a specific project in mind or want to explore how I can help your organization, I'd love to hear from you.</p>
      </div>
    </section>

    <section class="section" style="padding-top:20px;">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form">
            <h3>Send a Message</h3>
            <form id="contactForm" action="https://formspree.io/f/mzzapgoa" method="POST">
              <div class="form-row">
                <div class="form-group">
                  <label>Your Name</label>
                  <input type="text" name="name" placeholder="John Smith" required />
                </div>
                <div class="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="john@company.com" required />
                </div>
              </div>
              <div class="form-group">
                <label>Company / Organization</label>
                <input type="text" name="company" placeholder="Your company name" />
              </div>
              <div class="form-group">
                <label>How Can I Help?</label>
                <textarea name="message" placeholder="Tell me about your project or challenge..."></textarea>
              </div>
              <input type="hidden" name="_subject" value="New inquiry from nexisadvisory.tech" />
              <input type="hidden" name="_next" value="https://nexisadvisory.tech/#/contact" />
              <button type="submit" class="btn-submit">Send Message ${icons.send}</button>
            </form>
          </div>
          <div class="contact-cards">
            <a href="https://www.linkedin.com/in/escherwey/" target="_blank" rel="noopener" class="contact-info-card">
              <div class="icon-circle">${icons.linkedin}</div>
              <div>
                <h4>LinkedIn</h4>
                <p>Connect with me professionally</p>
              </div>
            </a>
            <div class="contact-info-card">
              <div class="icon-circle">${icons.globe}</div>
              <div>
                <h4>Engagement Model</h4>
                <p>Available for remote consultations and on-site engagements throughout the US and Europe. Currently based in Tokyo and open to flexible project structures.</p>
              </div>
            </div>
            <div class="contact-info-card">
              <div class="icon-circle">${icons.mapPin}</div>
              <div>
                <h4>Address</h4>
                <p>Nexis Advisory & Solutions LLC<br/>400 N Tampa St Ste 1550 PMB 311432<br/>Tampa, FL 33602, United States</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ===== CONTACT FORM HANDLER =====
function handleContactSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  btn.textContent = 'Message Sent!';
  btn.style.background = '#2d8659';
  setTimeout(() => {
    btn.innerHTML = `Send Message ${icons.send}`;
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

// ===== ROUTER =====
const routes = {
  '/': renderHome,
  '/about': renderAbout,
  '/services': renderServices,
  '/contact': renderContact,
};

function navigate() {
  const hash = window.location.hash.slice(1) || '/';
  const render = routes[hash] || routes['/'];
  const app = document.getElementById('app');
  app.innerHTML = render();
  window.scrollTo(0, 0);
  updateActiveNav(hash);
}

function updateActiveNav(path) {
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === '#' + path || (path === '/' && href === '#/')) {
      link.classList.add('active');
    }
  });
}

// ===== MOBILE MENU =====
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('mobileMenuBtn').classList.toggle('active');
});

// Close mobile menu on link click
document.getElementById('mobileMenu').addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    document.getElementById('mobileMenu').classList.remove('open');
  }
});

// ===== INIT =====
window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', () => {
  if (!window.location.hash) window.location.hash = '#/';
  navigate();
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = 'rgba(92,145,214,0.25)';
  } else {
    nav.style.borderBottomColor = 'rgba(92,145,214,0.15)';
  }
});
