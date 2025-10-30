# System Architecture

A detailed overview of both **Production** and **Experimental** builds of the DevOps Simulator.

---

## Overview
DevOps Simulator follows a **microservices architecture** designed for high availability, scalability, and maintainability.

- **Production Build**: Stable and deployed for real-world usage.  
- **Experimental Build**: Includes AI/ML-based enhancements and multi-cloud support (under testing).  
- **Note**: Experimental features are commented out or disabled by default.

---

## 🏗 Core Components

### 1. Application Server
#### Production
- **Technology**: Node.js + Express  
- **Production Port**: 8080  
- **Development Port**: 3000  
- **Scaling**: Horizontal auto-scaling (production only)  
- **Development Features**: Hot reload, debug mode, Chrome DevTools (port 9229)

#### Experimental (AI-Enhanced)
> ⚠️ *Experimental – not production-ready*
- **Technology**: Node.js + Express + TensorFlow.js  
- **Ports**: 9000 (main), 9001 (metrics), 9002 (AI API)  
- **Scaling**: AI-powered predictive auto-scaling  
- **Message Queue**: Apache Kafka for event streaming  
- **Intelligence**: Real-time ML inference  

---

### 2. Database Layer
#### Production
- **Database**: PostgreSQL 14  
- **Production**: Master-slave replication with automated daily backups  
- **Development**: Single local instance with seed data  
- **Backup Strategy**:  
  - Production – Automatic (daily, encrypted)  
  - Development – Manual  

#### Experimental (Distributed DB)
> ⚠️ *Experimental – AI-based optimization*
- **Primary**: PostgreSQL cluster (5 nodes)  
- **Cache**: Redis cluster with ML-based cache optimization  
- **Configuration**: Multi-master replication  
- **Backup**: Continuous with geo-redundancy  
- **AI Features**: Query optimization and index suggestions  

---

### 3. Monitoring System
#### Production
- **Stack**: Prometheus + Grafana  
- **Alerts**: Email for critical issues  
- **Metrics**: CPU, Memory, Disk, Network  
- **Dashboards**: Real-time visualization  

#### Experimental
> ⚠️ *Experimental – AI-driven log and metric analysis*
- **Metrics**: Prometheus + Thanos (long-term)  
- **Logs**: ELK Stack + AI log analysis  

---

### 4. Container & Cloud Orchestration
#### Production
- **Tool**: Docker Compose (local development)  
- **Services**: Application, Database, Redis cache  
- **Features**: Volume mounts for hot reload  

#### Experimental (Multi-Cloud + Kubernetes)
> ⚠️ *Experimental – multi-cloud and chaos engineering*
- **Supported Clouds**: AWS, Azure, GCP, DigitalOcean  
- **Orchestrator**: Kubernetes with custom CRDs  
- **Load Balancing**: Global anycast with GeoDNS  
- **Failover**: Automatic cross-cloud failover  

---

### 5. Authentication System
#### Production
- **Method**: OAuth2 + JWT  
- **Providers**: Google, GitHub (dev mode)  
- **Sessions**: Redis-based session storage  

#### Experimental
> ⚠️ *Experimental – AI-based risk scoring for login attempts*
- **Add-on**: Adaptive authentication (under testing)

---

## 🚀 Deployment Strategy

### Production
- **Method**: Rolling updates  
- **Zero-downtime**: ✅ Yes  
- **Rollback**: Automated on failure  
- **Region**: us-east-1  

### Development
- **Method**: Docker Compose  
- **Features**: Hot reload, instant feedback  
- **Testing**: Automated unit and integration tests  

---

## 🔐 Security
- **Production**: SSL/TLS encryption, DB encryption, regular audits  
- **Development**: Relaxed security (CORS enabled, plain credentials)  
- **Experimental (commented)**:  
  ```yaml
  # ai_threat_detection: disabled
  # zero_trust_mode: off
  # chaos_resilience_testing: false
  ```
