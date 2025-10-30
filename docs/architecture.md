# System Architecture

## Overview
DevOps Simulator follows a microservices architecture designed for high availability and scalability.  
This document covers both **production** and **development** configurations.

## Components

### 1. Application Server
- **Technology**: Node.js + Express  
- **Production Port**: 8080  
- **Development Port**: 3000  
- **Scaling**: Horizontal auto-scaling (production only)  
- **Development Features**: Hot reload, debug mode, Chrome DevTools (port 9229)

### 2. Database Layer
- **Database**: PostgreSQL 14  
- **Production**: Master-slave replication with automated daily backups  
- **Development**: Single local instance with seed data  
- **Backup Strategy**:  
  - Production – Automatic (daily, encrypted)  
  - Development – Manual  

### 3. Monitoring System
- **Production**: Prometheus + Grafana — email alerts for critical issues  
- **Development**: Console logging with verbose output (optional Prometheus)  
- **Metrics**: CPU, Memory, Disk, Network  
- **Dashboards**: Web-based real-time visualization  

### 4. Container Orchestration
- **Tool**: Docker Compose (for local development)  
- **Services**: Application, Database, Redis cache  
- **Features**: Volume mounts for hot reload  

### 5. Authentication System
- **Method**: OAuth2 + JWT  
- **Providers**: Google, GitHub (dev mode)  
- **Sessions**: Redis-based session storage  

## Deployment Strategy

### Production
- **Method**: Rolling updates  
- **Zero-downtime**: Yes  
- **Rollback**: Automated on failure  
- **Region**: us-east-1  

### Development
- **Method**: Docker Compose  
- **Features**: Hot reload, instant feedback  
- **Testing**: Automated unit and integration tests  

## Security
- **Production**: SSL/TLS encryption, database encryption, and regular security audits  
- **Development**: Relaxed security (CORS enabled, credentials in plain text for testing)