# 🧬 PharmaIntel

PharmaIntel is a modern SaaS platform designed to provide **structured pharmaceutical intelligence** on proteins, clinical data, drug trials, and investments. It offers a **tier-based access system** where users can explore insights based on their subscription plan.

---

## 🚀 Overview

PharmaIntel helps users:
- Explore detailed protein-level insights
- Access clinical and biological intelligence
- Analyze drug trials, IP, deals, and investments
- Upgrade plans to unlock deeper data layers

The platform is built with a **clean, scalable UI** and focuses on **data accessibility + monetization via subscriptions**.

---

## 🧱 Tech Stack

- **Frontend:** React / Next.js (App Router recommended)
- **Styling:** Tailwind CSS
- **UI Generation:** Google Stitch (Design → Code pipeline)
- **Deployment (optional):** Vercel
- **Future Scope:** API integrations for real pharma datasets

---

## 🎯 Core Features

### 🏠 Landing Page
- Intro to PharmaIntel
- About Us
- How It Works
- Pricing Plans
- Login / Signup navigation

---

### 💳 Subscription Plans
- 4 tier-based plans
- Feature-based differentiation
- Upgrade prompts for locked content

---

### 🔐 Authentication
- Login & Signup system
- Clean split-screen UI
- Scalable for JWT / OAuth integration

---

### 🧬 Dashboard
- User-specific dashboard after login
- Clean layout with navbar + content area

---

### 📌 Protein Navigation Panel
  - Persistent sidebar with sections:
  - Executive Summary
  - Clinical Intelligence
  - Biological Details
  - Drug Trials Info
  - IP
  - Deals
  - Investment

---

### 🧾 Protein Details Page

Each protein includes structured sections:

| Section | Description |
|--------|------------|
| Executive Summary | High-level overview |
| Clinical Intelligence | Clinical data insights |
| Biological Details | Scientific protein data |
| Drug Trials Info | Trial-related information |
| IP | Intellectual property data |
| Deals | Partnerships and deals |
| Investment | Financial insights |

---

### 🔒 Subscription-Based Access Control

Content visibility depends on user plan:

- **Plan 1:** Access to first 3 sections
- **Plan 2:** Access to first 6 sections
- **Higher Plans:** Full access

#### Locked Content UX:
- Blurred or masked sections
- Lock icon 🔒
- “Upgrade Plan” CTA
- Click → upgrade prompt modal

---

## 🎨 UI/UX Principles

- Minimal and clean design
- Biotech-inspired color palette (blue/teal)
- Card-based layouts
- Sticky navigation
- Smooth scrolling experience
- Responsive (desktop-first)

---

## ⚡ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/log1-codes/pharmaintel.git
cd pharmaintel