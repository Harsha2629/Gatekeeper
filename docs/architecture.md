# Architecture Overview

## High-Level Flow

CSV / Manual Input
        ↓
Normalization Layer
        ↓
Validation Layer
  - Domain/IP validation
        ↓
Detection Layer
  - DNS Check
  - HTTP Check
  - Redirect Analysis
  - ads.txt Check
  - Keyword / TLD Detection
        ↓
Scoring Engine
        ↓
Decision Engine
        ↓
Outputs
  - Blocklist
  - Full Results
        ↓
Future:
  DSP Integration (Bloom / Cuckoo filters)
