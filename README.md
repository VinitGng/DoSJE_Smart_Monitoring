# DoSJE Drishthi

### Real-Time Monitoring & Surprise Inspection Platform for DoSJE-Supported Projects

> A centralized digital platform for government authorities to monitor, inspect, verify, and track welfare projects and institutions operating under Department of Social Justice & Empowerment (DoSJE) schemes.

---

## 📌 Overview

**DoSJE Drishthi** is a centralized monitoring and surprise-inspection platform designed to improve transparency, accountability, and operational visibility across projects and institutions supported under DoSJE schemes.

The platform connects:

- Government / DoSJE officials
- Field inspectors
- NGOs and implementing institutions

through a single digital system.

Instead of relying primarily on periodic manual inspections and static reports, DoSJE Drishthi enables officials to perform **randomized inspections, GPS-based verification, digital checklists, geo-tagged evidence capture, AI-assisted analysis, monitoring dashboards, and compliance tracking**.

---

# 🎯 Problem

Government-supported NGOs and institutions may operate across multiple locations, making continuous monitoring difficult.

Traditional inspection workflows can involve:

- Manual inspection scheduling
- Delayed reporting
- Limited visibility into field activities
- Difficulty verifying whether inspections occurred at the intended location
- Scattered photographic/video evidence
- Delayed identification of irregularities
- Limited tracking of corrective actions
- Difficulty monitoring inspector performance
- Lack of centralized project-level visibility

These limitations can make it difficult for authorities to identify issues quickly and ensure that corrective actions are completed.

---

# 💡 Proposed Solution

DoSJE Drishthi provides a centralized monitoring ecosystem with three role-based interfaces:

### 1. Government / DoSJE Dashboard

Government officials can:

- Monitor registered projects
- View inspection status
- Assign or trigger surprise inspections
- Monitor inspectors
- Review inspection reports
- Review geo-tagged evidence
- Analyze AI-generated insights
- Track compliance issues
- Monitor corrective actions
- View project-level analytics

### 2. Inspector Dashboard / Mobile Application

Inspectors can:

- Receive inspection assignments
- Verify their location using GPS
- Start and complete inspections
- Follow digital inspection checklists
- Capture photographs/videos
- Record observations
- Submit evidence
- Generate inspection reports
- Work with limited connectivity
- Synchronize pending inspection data

### 3. NGO / Institute Dashboard

Authorized institutions can:

- View project information
- View inspection status
- Respond to observations
- Submit corrective actions
- Upload supporting documents/evidence
- Track compliance status
- Communicate with authorities through the platform

---

# 🚀 Key Features

## 🎲 1. Randomized Surprise Inspection Assignment

The system supports randomized inspection assignment to reduce predictable inspection patterns.

Inspection selection can consider factors such as:

- Random selection
- Project risk level
- Previous inspection history
- Pending compliance issues
- Inspection frequency

This helps authorities prioritize projects requiring attention while maintaining an element of unpredictability.

> Randomization is implemented as a decision-support mechanism and does not independently determine wrongdoing.

---

# 📍 2. GPS-Based Inspector Verification

The inspector application uses the device/browser's **Geolocation API** to obtain the inspector's location.

The system can verify whether the inspector is within the expected project location using geofencing.

### Example

```text
Inspector Location
       ↓
GPS Coordinates
       ↓
Distance Calculation
       ↓
Project Geofence
       ↓
Inside / Outside Location
       ↓
Inspection Check-In
````

GPS information is treated as **supporting verification evidence**, not as absolute proof of physical presence.

---

# 🗺️ 3. Geofencing

Each project can have an associated geographical location and inspection radius.

The system compares:

```text
Inspector Coordinates
        +
Project Coordinates
        +
Allowed Radius
```

to determine whether the inspector is within the permitted inspection area.

---

# 📸 4. Geo-Tagged Inspection Evidence

Inspectors can capture evidence during inspections.

Evidence can include:

* Photographs
* Videos
* Inspection observations
* Timestamp
* GPS coordinates
* Project information
* Inspection information
* Evidence metadata

This creates a structured digital inspection record instead of relying on disconnected media files.

---

# 🤖 5. AI-Assisted Evidence Analysis

The platform integrates the **Google Gemini API** for AI-assisted inspection evidence analysis.

The AI can assist with:

* Evidence description
* Visual observations
* Identification of potential inconsistencies
* Inspection summaries
* Risk indicators
* Supporting government review

The AI is designed as a **decision-support system**.

It does not independently declare an institution fraudulent or guilty of misconduct.

---

# 📊 6. Attendance Anomaly Analysis

The system can analyze attendance information and identify unusual patterns.

Examples include:

* Sudden attendance drops
* Unusually high attendance
* Significant deviation from historical averages
* Repeated abnormal patterns
* Missing attendance information

The purpose is to highlight cases that may require human review.

> An anomaly does not automatically mean fraud or misconduct.

---

# 📹 7. CCTV Monitoring Interface

The platform includes a CCTV monitoring interface for centralized project monitoring.

The architecture is designed so that real CCTV streams can be integrated in a production deployment using appropriate video-streaming infrastructure.

For the prototype/demo environment, CCTV functionality may use simulated or demonstration feeds.

### Production Integration Possibilities

```text
CCTV Camera
     ↓
Secure Video Gateway
     ↓
Streaming Service
     ↓
DoSJE Monitoring Platform
     ↓
Government Dashboard
```

The platform itself does not require the development team to install physical CCTV hardware.

---

# 🎥 8. Video Conferencing / Remote Verification

The system provides a video-conferencing interface for remote interaction between officials/inspectors and project staff or beneficiaries.

Possible use cases include:

* Surprise video verification
* Staff interaction
* Beneficiary interaction
* Project activity verification
* Remote follow-up

The prototype interface can be extended with production WebRTC or an approved video communication provider.

---

# 📱 9. Inspector Mobile-First Workflow

The inspector interface is designed around field inspection requirements.

Typical workflow:

```text
Receive Assignment
       ↓
Open Inspection
       ↓
GPS Verification
       ↓
Project Check-In
       ↓
Digital Checklist
       ↓
Capture Evidence
       ↓
AI-Assisted Analysis
       ↓
Inspection Observations
       ↓
Submit Report
       ↓
Government Review
```

---

# 📝 10. Digital Inspection Checklist

Inspectors can complete structured inspection checklists instead of relying entirely on paper-based forms.

Checklist information can include:

* Project infrastructure
* Staff availability
* Beneficiary presence
* Attendance
* Facilities
* Documentation
* Scheme compliance
* Observations
* Evidence

This produces structured and searchable inspection records.

---

# ⚠️ 11. Compliance & Corrective Action Tracking

When an inspection identifies an issue, the system can create a compliance item.

Example workflow:

```text
Inspection
    ↓
Observation
    ↓
Issue / Non-Compliance
    ↓
Corrective Action Required
    ↓
NGO / Institute Response
    ↓
Supporting Evidence
    ↓
Government Review
    ↓
Verification
    ↓
Resolved / Reopen
```

This prevents issues from being lost after the initial inspection.

---

# 👮 12. Inspector Accountability

Government officials can monitor inspection activity through indicators such as:

* Assigned inspections
* Completed inspections
* Pending inspections
* Overdue inspections
* GPS check-ins
* Evidence completeness
* Inspection duration
* Submission status

This helps identify operational delays and incomplete inspection workflows.

These indicators are intended for **administrative monitoring**, not automatic disciplinary decisions.

---

# 🔔 13. Notifications & Alerts

The system can generate notifications for important events such as:

* New inspection assignment
* Inspection approaching deadline
* Missed inspection
* Evidence submission
* Compliance issue
* Corrective action submission
* Government review
* Resolution/reopening of issues

---

# 📶 14. Offline Inspection Support

Field locations may have unreliable internet connectivity.

The inspector workflow therefore supports an offline-oriented approach where inspection information can be temporarily stored and synchronized once connectivity becomes available.

Example:

```text
No Internet
    ↓
Store Inspection Data Locally
    ↓
Continue Inspection
    ↓
Network Restored
    ↓
Synchronization Queue
    ↓
Backend
    ↓
Firestore
```

---

# 🔐 15. Role-Based Access Control

The platform separates access according to user roles.

Example roles include:

| Role                  | Access                             |
| --------------------- | ---------------------------------- |
| Government Admin      | Full administrative access         |
| Government Official   | Monitoring & review                |
| Inspector             | Assigned inspections               |
| NGO / Institute Admin | Institution & compliance           |
| PMU / Supervisor      | Monitoring & operational oversight |

Each role receives an appropriate dashboard and permitted actions.

---

# 🏗️ System Architecture

```text
                    ┌───────────────────────┐
                    │   Government Users    │
                    │     Dashboard        │
                    └───────────┬───────────┘
                                │
                                │
┌──────────────────┐            │            ┌──────────────────────┐
│ Inspector Mobile │            │            │ NGO / Institute      │
│     Interface    │────────────┼────────────│     Dashboard        │
└────────┬─────────┘            │            └──────────┬───────────┘
         │                      │                       │
         └──────────────────────┼───────────────────────┘
                                │
                         REST API / Backend
                                │
                    ┌───────────┴───────────┐
                    │   Node.js / Express  │
                    │      Backend         │
                    └───────────┬───────────┘
                                │
          ┌─────────────────────┼──────────────────────┐
          │                     │                      │
          ▼                     ▼                      ▼
   Firebase Auth          Cloud Firestore        Gemini API
          │                     │                      │
          │                     │                      │
          ▼                     ▼                      ▼
      Users / RBAC       Projects / Inspections    AI Analysis
                         Evidence / Compliance
```

---

# 🛠️ Technology Stack

## Frontend

* React
* TypeScript / TSX
* Vite
* Tailwind CSS
* React Router
* Lucide React
* Recharts

## Backend

* Node.js
* Express.js
* TypeScript
* REST API architecture

## Database & Authentication

* Firebase Authentication
* Cloud Firestore

## Artificial Intelligence

* Google Gemini API
* AI-assisted inspection evidence analysis
* Attendance anomaly analysis
* AI-generated inspection insights

## Maps & Location

* Browser Geolocation API
* GPS-based inspector verification
* Geofencing
* Map integration

## Inspection Evidence

* Camera-based evidence capture
* Geo-tagged evidence
* Timestamped inspection evidence
* Evidence metadata
* Evidence integrity architecture

## Monitoring & Communication

* CCTV monitoring interface
* Video conferencing interface
* Inspector monitoring
* Government monitoring dashboard

## Reliability

* Offline inspection workflow
* Local inspection queue
* Synchronization mechanism

---

# 🔄 Complete Inspection Workflow

```text
                    PROJECT REGISTRATION
                           │
                           ▼
                  PROJECT RISK PROFILE
                           │
                           ▼
                 RANDOM INSPECTION
                    ASSIGNMENT
                           │
                           ▼
                  INSPECTOR NOTIFIED
                           │
                           ▼
                    GPS CHECK-IN
                           │
                           ▼
                    GEOFENCE CHECK
                           │
                           ▼
                 DIGITAL CHECKLIST
                           │
             ┌─────────────┼──────────────┐
             ▼             ▼              ▼
          Photos         Video         Attendance
             │             │              │
             └─────────────┼──────────────┘
                           ▼
                    AI ANALYSIS
                           │
                           ▼
                  INSPECTION REPORT
                           │
                           ▼
                  GOVERNMENT REVIEW
                           │
                 ┌─────────┴─────────┐
                 ▼                   ▼
              No Issue          Issue Found
                 │                   │
                 ▼                   ▼
               Close          COMPLIANCE ACTION
                                     │
                                     ▼
                              NGO / INSTITUTE
                                  RESPONSE
                                     │
                                     ▼
                              GOVERNMENT REVIEW
                                     │
                                     ▼
                               VERIFICATION
                                     │
                           ┌─────────┴─────────┐
                           ▼                   ▼
                        RESOLVED             REOPEN
```

---

# 🧠 AI Decision-Support Model

DoSJE Drishthi follows a **human-in-the-loop AI architecture**.

```text
Raw Data
   ↓
AI Analysis
   ↓
Potential Pattern / Anomaly
   ↓
Risk Indicator
   ↓
Human Review
   ↓
Administrative Decision
```

AI does **not** replace government officials or inspectors.

It helps them prioritize information and identify records that may deserve additional attention.

---

# 🔒 Security Considerations

The platform is designed with security-oriented architecture including:

* Firebase Authentication
* Role-based authorization
* Backend API validation
* Environment-based configuration
* Server-side validation
* Controlled Firestore access
* Audit logging architecture
* Secure evidence handling
* API rate limiting architecture
* CORS configuration
* HTTPS-ready deployment architecture

### Important

Production deployment should additionally enforce:

* Strict Firestore security rules
* Proper Firebase Admin SDK configuration
* Secure object storage permissions
* HTTPS
* Secret management
* API rate limiting
* Input validation
* Logging and monitoring
* Backup and disaster recovery

---

# 📁 Project Structure

```text
dosje-drishthi/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   ├── utils/
│   ├── types/
│   └── ...
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── middleware/
│   ├── repositories/
│   └── ...
│
├── public/
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.*
├── firestore.rules
├── .env.example
└── README.md
```

> The exact structure may vary depending on the current implementation.

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/VinitGng/dosje-drishthi.git

cd dosje-drishthi
```

---

## 2. Install Dependencies

```bash
npm install
```

If the backend has a separate package configuration:

```bash
cd server
npm install
```

---

# 🔑 Environment Configuration

Create a `.env` file based on `.env.example`.

Example:

```env
ALLOWED_ORIGINS=http://localhost:5173

FIREBASE_PROJECT_ID=your_firebase_project_id

FIRESTORE_DATABASE_ID=your_firestore_database_id

GEMINI_API_KEY=your_gemini_api_key
```

### Never commit:

```text
.env
service-account.json
Firebase private keys
API keys
access tokens
secrets
```

Add them to `.gitignore`.

---

# ▶️ Running the Application

Start the frontend development server:

```bash
npm run dev
```

The Vite development server will normally be available at:

```text
http://localhost:5173
```

Start the backend according to the project's server configuration.

---

# 🧪 Testing

The project can be tested across the following workflows:

### Government

* Login
* Project monitoring
* Inspection assignment
* Inspector monitoring
* Evidence review
* Compliance tracking

### Inspector

* Login
* Assignment reception
* GPS verification
* Geofence verification
* Checklist completion
* Evidence capture
* Report submission

### NGO / Institute

* Login
* Project information
* Inspection status
* Compliance response
* Corrective action submission

---

# 📊 Example Government Dashboard

The government dashboard can provide high-level indicators such as:

```text
Total Projects
        │
        ├── Active Projects
        ├── High-Risk Projects
        ├── Pending Inspections
        ├── Completed Inspections
        ├── Compliance Issues
        └── Resolved Issues
```

It can also provide visual analytics for:

* Inspection trends
* Compliance trends
* Project risk
* Attendance patterns
* Inspector activity
* Evidence completeness

---

# 🌐 Deployment Architecture

A production deployment can follow:

```text
                     Internet
                         │
                         ▼
                  HTTPS / Domain
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
        React Frontend          REST API
              │                     │
              │              Node.js / Express
              │                     │
              │         ┌───────────┼────────────┐
              │         ▼           ▼            ▼
              │     Firestore    Gemini API   Storage
              │
              ▼
       Government / Inspector /
       NGO Applications
```

---

# 🚧 Prototype vs Production

DoSJE Drishthi is designed as an SIH-ready prototype with a production-oriented architecture.

Some integrations can be connected to real infrastructure during deployment.

| Component        | Prototype                 | Production                          |
| ---------------- | ------------------------- | ----------------------------------- |
| Authentication   | Firebase Auth             | Firebase Auth / enterprise IAM      |
| Database         | Firestore                 | Firestore / approved government DB  |
| GPS              | Browser Geolocation       | Mobile GPS                          |
| Geofencing       | Implemented               | Server-side validation              |
| Evidence         | Camera capture            | Secure object storage               |
| AI               | Gemini API                | Approved AI infrastructure          |
| CCTV             | Demonstration interface   | Secure CCTV streaming               |
| Video Conference | Prototype interface       | WebRTC / approved provider          |
| Notifications    | Application notifications | SMS / Email / Push                  |
| Maps             | Map integration           | Government-approved mapping service |
| Offline mode     | Local queue               | Secure offline synchronization      |
| Analytics        | Dashboard                 | Production monitoring & BI          |

---

# ⚠️ Important Terminology

To avoid overstating system capabilities:

### GPS

GPS is treated as **supporting verification evidence**, not absolute proof of physical presence.

### AI

AI identifies patterns and potential anomalies for **human review**.

It does not automatically declare fraud or misconduct.

### CCTV

The prototype contains a monitoring interface.

Actual CCTV deployment requires compatible cameras, secure streaming infrastructure, authentication, and network configuration.

### Video Conferencing

The prototype demonstrates the required workflow.

Production deployment can integrate WebRTC or an approved communication platform.

### Evidence

Evidence is described as **geo-tagged and timestamped inspection evidence**.

It should not be called "tamper-proof" unless cryptographic integrity mechanisms and secure storage are fully implemented.

---

# 🌱 Future Enhancements

Potential future improvements include:

* Real-time inspector location tracking
* Secure WebRTC video verification
* Real CCTV/RTSP integration
* Advanced attendance anomaly models
* Risk prediction models
* Government-approved cloud infrastructure
* SMS and WhatsApp notifications
* Advanced GIS analytics
* Beneficiary verification
* Aadhaar/identity integration where legally permitted
* Digital signatures
* Cryptographic evidence integrity
* Advanced audit trails
* Automated inspection scheduling
* Multi-state deployment
* Mobile Android/iOS application
* Advanced offline synchronization

---

# 🎯 Impact

DoSJE Drishthi aims to improve:

### Transparency

Centralized inspection records and structured evidence improve visibility.

### Accountability

Inspection assignments, reports, compliance actions, and inspector activity can be tracked.

### Efficiency

Digital workflows reduce manual paperwork and reporting delays.

### Responsiveness

Issues can be identified and assigned corrective actions faster.

### Data-Driven Monitoring

AI-assisted analytics can help officials identify unusual patterns and prioritize inspections.

### Field-Level Verification

GPS, geofencing, timestamps, and structured evidence provide additional context for inspection verification.

---

# 🏆 Relevance

DoSJE Drishthi directly addresses the need for:

* Real-time monitoring
* Surprise inspections
* Centralized government oversight
* Field-level verification
* CCTV integration
* Video verification
* Digital inspection workflows
* AI-assisted monitoring
* Inspector accountability
* Compliance tracking

The platform combines these capabilities into a **single centralized monitoring ecosystem**.

---

# 👥 User Roles

```text
                 DOsJE / GOVERNMENT
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
      Monitoring     Inspections    Compliance
          │              │              │
          └──────────────┼──────────────┘
                         │
                         ▼
                    INSPECTORS
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
          GPS / Check-in       Evidence
              │                     │
              └──────────┬──────────┘
                         ▼
                 NGO / INSTITUTE
                         │
                         ▼
                Corrective Action
                         │
                         ▼
                 GOVERNMENT REVIEW
```

---

# 📌 Project Status

### Current Prototype Capabilities

* [x] Role-based dashboards
* [x] Government monitoring dashboard
* [x] Inspector dashboard
* [x] NGO / Institute dashboard
* [x] Firebase authentication
* [x] Firestore integration
* [x] Inspection workflow
* [x] Randomized inspection assignment
* [x] GPS verification
* [x] Geofencing
* [x] Digital inspection checklist
* [x] Camera/evidence capture
* [x] Geo-tagged evidence
* [x] Timestamped evidence
* [x] Gemini-assisted evidence analysis
* [x] Attendance anomaly analysis
* [x] Compliance workflow
* [x] Offline inspection queue
* [x] CCTV monitoring interface
* [x] Video-conferencing interface
* [x] Inspector monitoring
* [x] Government analytics

### Production Enhancements

* [ ] Full real-time GPS tracking infrastructure
* [ ] Production CCTV streaming
* [ ] Production WebRTC infrastructure
* [ ] Advanced ML anomaly detection
* [ ] Secure production object storage
* [ ] Government cloud deployment
* [ ] Production notification infrastructure
* [ ] Comprehensive penetration/security testing

---

# 📜 Disclaimer

DoSJE Drishthi is a technology prototype designed to demonstrate a centralized monitoring and inspection workflow.

Actual deployment in a government environment would require:

* Government approval
* Security assessment
* Data protection compliance
* Infrastructure integration
* Authorized CCTV integration
* Appropriate access controls
* Legal and policy review
* Production-grade testing

AI-generated insights and automated indicators should be reviewed by authorized personnel before administrative action is taken.

---

# 👨‍💻 Developed By

**VinitGng**

Information Science & Engineering

### Technologies

`React` `TypeScript` `Node.js` `Express.js` `Firebase` `Firestore` `Gemini AI` `Tailwind CSS`

---

# ⭐ Vision

> **"From periodic inspection to intelligent, evidence-driven monitoring."**

DoSJE Drishthi aims to provide government authorities with a centralized, transparent, and technology-driven approach to monitoring welfare projects and ensuring that corrective actions are tracked to completion.

```

