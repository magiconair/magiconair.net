# PRD: magiconair.net Homepage Redesign

## Overview

Redesign Frank Schröder's personal homepage as a minimal, static site with a monospaced aesthetic that reflects his identity as a distributed systems engineer and Go developer.

## Research Summary

### Current Site Analysis
- Hugo-based static site with "theDocs" documentation theme
- Professional content: CV, contact, blog sections
- Bootstrap-based responsive layout
- System sans-serif fonts

### Online Presence Analysis

**GitHub (@magiconair)**
- 262 followers
- Currently at GetStream building faster systems
- Based in Nijmegen, Netherlands
- Key projects:
  - **fabio** (7.3k stars) - Consul-aware load balancer
  - **opcua** (999 stars) - Native Go OPC-UA library
  - **properties** (337 stars) - Java properties scanner for Go
  - **twincat** (12 stars) - Go library for TwinCAT V3
- Focus: Distributed systems, industrial IoT, infrastructure tooling

**Professional Background (from CV)**
- 30+ years experience in distributed systems
- Principal Engineer at Northvolt (2018-2025) - Battery manufacturing MES/SCADA
- HashiCorp (2017) - Consul maintainer
- eBay (2012-2017) - Architect, Team lead
- Masters in Computer Science, University of Saarbrücken (1997)
- Languages: German, English, Dutch, Swedish, French
- Primary language: Go (since 2011)

**Contact**
- Email: frank.schroeder@gmail.com / info@magiconair.net
- Phone: +46 72 2154893
- Twitter/X: @magiconair
- LinkedIn: linkedin.com/in/magiconair
- Location: Stockholm, SE / Nijmegen, NL
- Currently: Building faster systems at GetStream

## Design Goals

1. **Minimal & Fast** - Static HTML/CSS, no build system required
2. **Monospaced Typography** - Reflects the developer/engineer identity
3. **Terminal Aesthetic** - Clean, text-focused, hacker-friendly
4. **Content-First** - Showcase expertise and projects prominently
5. **Easy to Maintain** - Simple file structure, easy updates

## Design Direction

### Visual Style
- Dark background with light text (terminal-inspired)
- Monospaced font family (JetBrains Mono or similar)
- Minimal color palette: dark grays, accent color for links
- ASCII-art touches for personality
- No heavy frameworks, pure CSS

### Content Structure

```
/
├── index.html          # Main homepage
├── css/
│   └── style.css       # All styles
├── img/
│   └── avatar.jpg      # Profile photo
└── cv/
    └── cv-frank-schroeder-2025-v2.pdf  # Keep existing PDF
```

### Homepage Sections

1. **Header/Identity**
   - Name: Frank Schröder
   - Handle: @magiconair
   - Title: Distributed Systems Engineer | Go Developer
   - Location: Nijmegen, NL

2. **About**
   - Brief intro paragraph
   - Current role at GetStream
   - 30+ years experience summary

3. **Projects**
   - fabio - Zero-conf load balancer for Consul (7.3k stars)
   - gopcua - Native Go OPC-UA library (999 stars)
   - properties - Go properties library (337 stars)

4. **Experience Highlights**
   - Northvolt - Edge Computing, MES systems
   - HashiCorp - Consul maintainer
   - eBay - Microservices architect

5. **Links**
   - GitHub
   - Twitter/X
   - LinkedIn
   - Email
   - CV PDF download

## Technical Specifications

### Typography
- Primary font: `JetBrains Mono`, `Fira Code`, or system monospace
- Font sizes: 14-16px base, responsive scaling
- Line height: 1.6 for readability

### Colors
```css
--bg-primary: #0d1117;      /* Dark background */
--bg-secondary: #161b22;    /* Card/section background */
--text-primary: #c9d1d9;    /* Main text */
--text-secondary: #8b949e;  /* Muted text */
--accent: #58a6ff;          /* Links and highlights */
--accent-hover: #79c0ff;    /* Link hover */
--border: #30363d;          /* Borders */
```

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Performance Targets
- No JavaScript required for core functionality
- Total page size < 100KB
- First paint < 500ms

## Implementation Plan

### Phase 1: Structure
1. Create index.html with semantic HTML5
2. Add basic CSS reset and typography
3. Implement responsive layout

### Phase 2: Content
1. Add all text content sections
2. Include project links with star counts
3. Add contact/social links

### Phase 3: Polish
1. Add hover effects and transitions
2. Fine-tune spacing and typography
3. Add favicon and meta tags
4. Test across browsers

## Success Criteria

- [ ] Page loads without JavaScript
- [ ] All content readable on mobile
- [ ] Monospaced font renders correctly
- [ ] All links functional
- [ ] PDF CV downloadable
- [ ] Page validates as HTML5
- [ ] Lighthouse performance score > 90
