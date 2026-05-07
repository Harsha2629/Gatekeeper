# Gatekeeper
Gatekeeper is a pre-bid traffic quality engine that analyzes domains, apps, and IPs using multi-signal scoring to detect and block invalid and fraudulent ad traffic before it impacts campaign performance.


# Gatekeeper — Pre-Bid Invalid Traffic Detection Engine

Gatekeeper is a DSP-grade pre-bid traffic quality engine designed to detect and block invalid or fraudulent ad inventory before it impacts campaign performance.

The system evaluates domains, apps, and IPs using multi-signal analysis including DNS resolution, redirect behavior, ads.txt validation, and risk scoring.

---

## 🚀 What It Does

- Analyzes domains, apps, and IPs from CSV or manual input
- Applies multi-layer fraud detection signals
- Generates risk score and decision:
  - ALLOW
  - MONITOR
  - BLOCK
- Produces explainable outputs with reasons
- Exports clean blocklists for DSP integration

---

## 🧠 Key Capabilities

- Pre-bid IVT detection
- Domain & IP validation
- Redirect chain analysis
- ads.txt verification
- Suspicious pattern detection (keywords, TLDs)
- Scoring engine with explainable output

---

## ⚠️ Note

Core detection logic and scoring algorithms are proprietary and are not included in this public repository.

---

## 📊 Sample Output

| value        | type   | score | decision | reasons                          |
|-------------|--------|------|----------|----------------------------------|
| hdhub4u.fo  | domain | 92   | BLOCK    | keyword, redirects, missing_ads  |
| example.com | domain | 10   | ALLOW    | clean                            |

---

## 🏗️ Architecture Overview

See `/docs/architecture.md`

---


---

## 📌 Roadmap

- Reputation API integration (Safe Browsing, VirusTotal)
- MFA (Made-for-Advertising) detection
- App fraud detection
- Real-time DSP integration (Bloom / Cuckoo filters)
- Behavioral analysis (post-bid)

---

## 🧭 Positioning

Gatekeeper is designed as an **offline IVT intelligence engine** that feeds into real-time DSP filtering systems.

---

## 📬 Contact

For collaboration or demo access, reach out via GitHub.

## 📂 Project Structure

