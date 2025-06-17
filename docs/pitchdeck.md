<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OPERIO - The AGI-Native ERP Revolution</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #0F0F23 0%, #1A1A3A 50%, #2D2D5F 100%);
            color: #FFFFFF;
            overflow-x: hidden;
            cursor: none;
        }
        
        .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            background: linear-gradient(45deg, #00F5FF, #FF00FF);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: all 0.1s ease;
        }
        
        .slide {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 40px;
            position: relative;
            opacity: 0;
            transform: translateY(50px);
            animation: slideIn 1s ease forwards;
        }
        
        @keyframes slideIn {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .slide-number {
            position: absolute;
            top: 30px;
            right: 30px;
            font-size: 18px;
            font-weight: 300;
            opacity: 0.7;
        }
        
        .navigation {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 15px;
            z-index: 1000;
        }
        
        .nav-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .nav-dot.active {
            background: linear-gradient(45deg, #00F5FF, #FF00FF);
            transform: scale(1.2);
        }
        
        .hero-title {
            font-size: clamp(4rem, 8vw, 12rem);
            font-weight: 900;
            background: linear-gradient(45deg, #00F5FF, #FF00FF, #00FF88, #FFD700);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-align: center;
            line-height: 0.9;
            animation: gradientShift 3s ease-in-out infinite;
            margin-bottom: 20px;
        }
        
        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        
        .hero-subtitle {
            font-size: clamp(1.5rem, 3vw, 3rem);
            font-weight: 600;
            text-align: center;
            margin-bottom: 30px;
            opacity: 0;
            animation: fadeInUp 1s ease 0.5s forwards;
        }
        
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
            from {
                opacity: 0;
                transform: translateY(30px);
            }
        }
        
        .tagline {
            font-size: clamp(1.2rem, 2.5vw, 2rem);
            font-weight: 300;
            text-align: center;
            opacity: 0.8;
            animation: fadeInUp 1s ease 1s forwards;
            opacity: 0;
        }
        
        .slide h1 {
            font-size: clamp(3rem, 6vw, 8rem);
            font-weight: 800;
            margin-bottom: 40px;
            text-align: center;
        }
        
        .slide h2 {
            font-size: clamp(2rem, 4vw, 5rem);
            font-weight: 700;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .big-stat {
            font-size: clamp(4rem, 8vw, 12rem);
            font-weight: 900;
            background: linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-align: center;
            line-height: 1;
            margin: 20px 0;
        }
        
        .problem-pain {
            font-size: clamp(1.5rem, 3vw, 3rem);
            font-weight: 600;
            color: #FF6B6B;
            text-align: center;
            margin: 30px 0;
            text-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
        }
        
        .solution-highlight {
            font-size: clamp(1.8rem, 3.5vw, 4rem);
            font-weight: 700;
            background: linear-gradient(45deg, #00FF88, #00F5FF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-align: center;
            margin: 30px 0;
        }
        
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            width: 100%;
            max-width: 1200px;
            margin: 40px 0;
        }
        
        .feature-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 30px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transition: left 0.5s ease;
        }
        
        .feature-card:hover::before {
            left: 100%;
        }
        
        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 245, 255, 0.2);
        }
        
        .metric-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            max-width: 1000px;
            margin: 40px 0;
            flex-wrap: wrap;
            gap: 30px;
        }
        
        .metric {
            text-align: center;
            padding: 20px;
        }
        
        .metric-value {
            font-size: clamp(2.5rem, 5vw, 6rem);
            font-weight: 900;
            background: linear-gradient(45deg, #FFD700, #FF6B6B);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .metric-label {
            font-size: 1.2rem;
            opacity: 0.8;
            margin-top: 10px;
        }
        
        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            width: 100%;
            max-width: 1000px;
            margin: 40px 0;
        }
        
        .team-member {
            text-align: center;
            padding: 30px 20px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            transition: all 0.3s ease;
        }
        
        .team-member:hover {
            transform: scale(1.05);
            box-shadow: 0 15px 30px rgba(255, 0, 255, 0.2);
        }
        
        .floating-element {
            position: absolute;
            width: 100px;
            height: 100px;
            background: linear-gradient(45deg, #00F5FF, #FF00FF);
            border-radius: 50%;
            opacity: 0.1;
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .floating-element:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
        .floating-element:nth-child(2) { top: 20%; right: 10%; animation-delay: 2s; }
        .floating-element:nth-child(3) { bottom: 10%; left: 15%; animation-delay: 4s; }
        .floating-element:nth-child(4) { bottom: 20%; right: 15%; animation-delay: 1s; }
        
        .cta-button {
            font-size: 2rem;
            font-weight: 700;
            padding: 20px 50px;
            background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
            border: none;
            border-radius: 50px;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 30px 0;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        
        .cta-button:hover {
            transform: scale(1.1);
            box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
        }
        
        .slide-content {
            max-width: 1200px;
            width: 100%;
            text-align: center;
        }
        
        .text-highlight {
            color: #00F5FF;
            font-weight: 700;
        }
        
        .competitive-advantage {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 40px 0;
        }
        
        .advantage-item {
            background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1));
            padding: 30px;
            border-radius: 15px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .traction-chart {
            width: 100%;
            max-width: 800px;
            height: 400px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            margin: 40px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            border: 2px dashed rgba(0, 245, 255, 0.3);
        }
        
        .tokenomics-pie {
            width: 300px;
            height: 300px;
            background: conic-gradient(
                #FF6B6B 0deg 108deg,
                #4ECDC4 108deg 180deg,
                #45B7D1 180deg 252deg,
                #FFD700 252deg 324deg,
                #FF00FF 324deg 360deg
            );
            border-radius: 50%;
            margin: 30px auto;
            position: relative;
        }
        
        .tokenomics-pie::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 150px;
            height: 150px;
            background: #0F0F23;
            border-radius: 50%;
        }
        
        .hidden {
            display: none;
        }
        
        @media (max-width: 768px) {
            .slide {
                padding: 20px;
            }
            
            .feature-grid,
            .team-grid {
                grid-template-columns: 1fr;
            }
            
            .metric-container {
                flex-direction: column;
            }
        }
        
        .slide-transition {
            transition: all 0.5s ease-in-out;
        }
        
        .ask-highlight {
            font-size: clamp(3rem, 6vw, 8rem);
            font-weight: 900;
            background: linear-gradient(45deg, #FFD700, #FF6B6B, #00F5FF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-align: center;
            margin: 30px 0;
            animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
    </style>
</head>
<body>
    <div class="custom-cursor"></div>
    
    <!-- Slide 1: Title -->
    <div class="slide" id="slide-1">
        <div class="slide-number">01</div>
        <div class="floating-element"></div>
        <div class="floating-element"></div>
        <div class="floating-element"></div>
        <div class="floating-element"></div>
        
        <div class="slide-content">
            <h1 class="hero-title">OPERIO</h1>
            <h2 class="hero-subtitle">The First AGI-Native ERP</h2>
            <p class="tagline">Designed for the Future. Built for Today. Ready for Tomorrow.</p>
        </div>
    </div>

    <!-- Slide 2: Problem -->
    <div class="slide hidden" id="slide-2">
        <div class="slide-number">02</div>
        <div class="slide-content">
            <h1>THE PROBLEM</h1>
            <div class="big-stat">96%</div>
            <p class="problem-pain">of businesses still run on LEGACY ERP systems designed for the 1990s</p>
            <div class="feature-grid">
                <div class="feature-card">
                    <h3>🐌 SLOW</h3>
                    <p>Takes months to implement basic changes</p>
                </div>
                <div class="feature-card">
                    <h3>🧠 DUMB</h3>
                    <p>Zero intelligence, pure data storage</p>
                </div>
                <div class="feature-card">
                    <h3>💸 EXPENSIVE</h3>
                    <p>$50K+ monthly for enterprise licenses</p>
                </div>
                <div class="feature-card">
                    <h3>🔒 RIGID</h3>
                    <p>Cannot adapt to business evolution</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Slide 3: Solution -->
    <div class="slide hidden" id="slide-3">
        <div class="slide-number">03</div>
        <div class="slide-content">
            <h1>THE SOLUTION</h1>
            <div class="solution-highlight">OPERIO: The World's First AGI-Native ERP</div>
            <div class="competitive-advantage">
                <div class="advantage-item">
                    <h3>🚀 <span class="text-highlight">PROACTIVE</span></h3>
                    <p>Predicts business needs before you do</p>
                </div>
                <div class="advantage-item">
                    <h3>🧩 <span class="text-highlight">MODULAR</span></h3>
                    <p>Plug & play components that evolve</p>
                </div>
                <div class="advantage-item">
                    <h3>🎯 <span class="text-highlight">INTUITIVE</span></h3>
                    <p>Natural language interface</p>
                </div>
                <div class="advantage-item">
                    <h3>⚡ <span class="text-highlight">LIGHTNING FAST</span></h3>
                    <p>Deploy in minutes, not months</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Slide 4: Product Demo -->
    <div class="slide hidden" id="slide-4">
        <div class="slide-number">04</div>
        <div class="slide-content">
            <h1>PRODUCT DEMO</h1>
            <div class="traction-chart">
                <div style="text-align: center;">
                    <h2>🎥 LIVE DEMO</h2>
                    <p>Watch OPERIO predict and solve<br/>business problems in real-time</p>
                    <div style="margin-top: 20px; font-size: 1.2rem; opacity: 0.8;">
                        "Just tell me what you need,<br/>and I'll make it happen"
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Slide 5: Market Opportunity -->
    <div class="slide hidden" id="slide-5">
        <div class="slide-number">05</div>
        <div class="slide-content">
            <h1>MARKET OPPORTUNITY</h1>
            <div class="metric-container">
                <div class="metric">
                    <div class="metric-value">$78B</div>
                    <div class="metric-label">Global ERP Market</div>
                </div>
                <div class="metric">
                    <div class="metric-value">$2.3T</div>
                    <div class="metric-label">Web3 Economy by 2030</div>
                </div>
                <div class="metric">
                    <div class="metric-value">23%</div>
                    <div class="metric-label">Annual Growth Rate</div>
                </div>
            </div>
            <p style="font-size: 1.5rem; margin-top: 40px;">
                We're not just disrupting ERP.<br/>
                <span class="text-highlight">We're creating the AGI-Business Operating System category.</span>
            </p>
        </div>
    </div>

    <!-- Slide 6: Business Model -->
    <div class="slide hidden" id="slide-6">
        <div class="slide-number">06</div>
        <div class="slide-content">
            <h1>BUSINESS MODEL</h1>
            <div class="feature-grid">
                <div class="feature-card">
                    <h3>💰 SaaS Revenue</h3>
                    <p>$99-$999/month per org</p>
                    <div class="big-stat" style="font-size: 2rem;">95% Margins</div>
                </div>
                <div class="feature-card">
                    <h3>🪙 Token Utility</h3>
                    <p>Governance + Compute Credits</p>
                    <div class="big-stat" style="font-size: 2rem;">Deflationary</div>
                </div>
                <div class="feature-card">
                    <h3>🏪 Marketplace</h3>
                    <p>30% revenue share on modules</p>
                    <div class="big-stat" style="font-size: 2rem;">Infinite Scale</div>
                </div>
                <div class="feature-card">
                    <h3>🎯 Enterprise</h3>
                    <p>Custom implementations</p>
                    <div class="big-stat" style="font-size: 2rem;">$50K+ ARR</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Slide 7: Traction -->
    <div class="slide hidden" id="slide-7">
        <div class="slide-number">07</div>
        <div class="slide-content">
            <h1>TRACTION</h1>
            <div class="metric-container">
                <div class="metric">
                    <div class="metric-value">50K+</div>
                    <div class="metric-label">Waitlist Signups</div>
                </div>
                <div class="metric">
                    <div class="metric-value">125</div>
                    <div class="metric-label">Beta Customers</div>
                </div>
                <div class="metric">
                    <div class="metric-value">$500K</div>
                    <div class="metric-label">ARR Pipeline</div>
                </div>
            </div>
            <div style="margin: 40px 0;">
                <h2 style="color: #00F5FF; margin-bottom: 20px;">Key Partnerships</h2>
                <p style="font-size: 1.3rem; opacity: 0.9;">
                    🤝 Microsoft Azure Partnership<br/>
                    🤝 OpenAI Enterprise Alliance<br/>
                    🤝 Polygon Blockchain Integration
                </p>
            </div>
        </div>
    </div>

    <!-- Slide 8: Competition -->
    <div class="slide hidden" id="slide-8">
        <div class="slide-number">08</div>
        <div class="slide-content">
            <h1>COMPETITION</h1>
            <div class="competitive-advantage">
                <div class="advantage-item">
                    <h3>🦕 Legacy ERP (SAP, Oracle)</h3>
                    <p>Dinosaurs from the 90s<br/>Zero AI Integration</p>
                </div>
                <div class="advantage-item">
                    <h3>💻 Modern SaaS (Notion, Airtable)</h3>
                    <p>Pretty but powerless<br/>No enterprise scalability</p>
                </div>
                <div class="advantage-item">
                    <h3>🤖 AI Tools (Claude, ChatGPT)</h3>
                    <p>Smart but disconnected<br/>No business integration</p>
                </div>
                <div class="advantage-item">
                    <h3>⚡ OPERIO</h3>
                    <p><span class="text-highlight">AGI-Native + Web3 + Enterprise</span><br/>The ONLY complete solution</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Slide 9: Tokenomics -->
    <div class="slide hidden" id="slide-9">
        <div class="slide-number">09</div>
        <div class="slide-content">
            <h1>TOKENOMICS</h1>
            <div class="tokenomics-pie"></div>
            <div class="feature-grid">
                <div class="feature-card">
                    <h3>🎯 Utility</h3>
                    <p>Compute Credits + Governance</p>
                </div>
                <div class="feature-card">
                    <h3>🔥 Deflationary</h3>
                    <p>Token burning on transactions</p>
                </div>
                <div class="feature-card">
                    <h3>💎 Staking</h3>
                    <p>15% APY for long-term holders</p>
                </div>
                <div class="feature-card">
                    <h3>🏛️ DAO Governance</h3>
                    <p>Community-driven development</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Slide 10: Team -->
    <div class="slide hidden" id="slide-10">
        <div class="slide-number">10</div>
        <div class="slide-content">
            <h1>THE TEAM</h1>
            <div class="team-grid">
                <div class="team-member">
                    <div style="font-size: 4rem; margin-bottom: 15px;">👨‍💻</div>
                    <h3>CEO & Founder</h3>
                    <p>Ex-Microsoft AI Lead<br/>15 years enterprise experience</p>
                </div>
                <div class="team-member">
                    <div style="font-size: 4rem; margin-bottom: 15px;">🧠</div>
                    <h3>CTO</h3>
                    <p>Ex-OpenAI Research Scientist<br/>PhD in Machine Learning</p>
                </div>
                <div class="team-member">
                    <div style="font-size: 4rem; margin-bottom: 15px;">🚀</div>
                    <h3>Head of Growth</h3>
                    <p>Ex-Y Combinator Partner<br/>Built $100M+ companies</p>
                </div>
                <div class="team-member">
                    <div style="font-size: 4rem; margin-bottom: 15px;">🎨</div>
                    <h3>Head of Design</h3>
                    <p>Ex-Apple Design Team<br/>Award-winning UX/UI</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Slide 11: Financials -->
    <div class="slide hidden" id="slide-11">
        <div class="slide-number">11</div>
        <div class="slide-content">
            <h1>FINANCIALS</h1>
            <div class="metric-container">
                <div class="metric">
                    <div class="metric-value">$50M</div>
                    <div class="metric-label">Revenue Year 3</div>
                </div>
                <div class="metric">
                    <div class="metric-value">85%</div>
                    <div class="metric-label">Gross Margins</div>
                </div>
                <div class="metric">
                    <div class="metric-value">300%</div>
                    <div class="metric-label">Net Revenue Retention</div>
                </div>
            </div>
            <div style="margin-top: 40px;">
                <h2 style="color: #FFD700; margin-bottom: 20px;">Conservative Growth Model</h2>
                <p style="font-size: 1.3rem;">
                    Year 1: $2M ARR (1,000 customers)<br/>
                    Year 2: $15M ARR (5,000 customers)<br/>
                    Year 3: $50M ARR (15,000 customers)
                </p>
            </div>
        </div>
    </div>

    <!-- Slide 12: The Ask -->
    <div class="slide hidden" id="slide-12">
        <div class="slide-number">12</div>
        <div class="slide-content">
            <h1>THE ASK</h1>
            <div class="ask-highlight">$10M</div>
            <p style="font-size: 2rem; margin: 30px 0;">Series A Funding</p>
            
            <div class="feature-grid">
                <div class="feature-card">
                    <h3>💻 Product Development</h3>
                    <p>$4M - AGI Integration & Core Platform</p>
                </div>
                <div class="feature-card">
                    <h3>👥 Team Expansion</h3>
                    <p>$3M - 25 World-Class Engineers</p>
                </div>
                <div class="feature-card">
                    <h3>📈 Go-to-Market</h3>
                    <p>$2M - Sales & Marketing Blitz</p>
                </div>
                <div class="feature-card">
                    <h3>🌍 Global Expansion</h3>
                    <p>$1M - International Presence</p>
                </div>
            </div>
            
            <div style="margin-top: 50px;">
                <p style="font-size: 1.5rem; opacity: 0.9;">
                    💎 <span class="text-highlight">18 months runway</span> to $50M valuation<br/>
                    🚀 Expected <span class="text-highlight">10x return</span> within 3 years
                </p>
            </div>
        </div>
    </div>

    <!-- Slide 13: Vision -->
    <div class="slide hidden" id="slide-13">
        <div class="slide-number">13</div>
        <div class="slide-content">
            <h1>OUR VISION</h1>
            <div class="solution-highlight" style="font-size: clamp(2rem, 4vw, 5rem);">
                Every business runs on OPERIO by 2030
            </div>
            <div style="margin: 50px 0; font-size: 1.5rem; line-height: 1.6;">
                <p>🌍 <span class="text-highlight">1 Billion</span> users worldwide</p>
                <p>🏢 <span class="text-highlight">10 Million</span> businesses powered</p>
                <p>🤖 The <span class="text-highlight">Operating System</span> for
