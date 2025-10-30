# My Git Mastery Challenge Journey

## Student Information
- **Name:** Manasa Tadi
- **Student ID:** 23A91A0562
- **Repository:** [https://github.com/manasa1349/git-solved-23A91A0562](https://github.com/manasa1349/git-solved-23A91A0562)
- **Date Started:** 30/10/2025
- **Date Completed:** 30/10/2025

---

## Task Summary
Cloned the instructor’s repository containing pre-built conflicts and successfully resolved all merge conflicts across multiple branches using systematic Git workflows.  
Practiced all advanced commands including rebase, cherry-pick, stash, revert, reset, and tagging to simulate real-world development scenarios.

---

## Commands Used

| Command | Times Used | Purpose |
|----------|-------------|----------|
| `git clone` | 1 | Clone instructor’s repository |
| `git checkout` | 20+ | Switch between branches |
| `git branch` | 10+ | View and manage branches |
| `git merge` | 2 | Merge `dev` and `conflict-simulator` into `main` |
| `git add` | 30+ | Stage resolved conflicts |
| `git commit` | 15+ | Commit resolved changes |
| `git push` | 10+ | Push to personal repository |
| `git fetch` | 1 | Fetch updates from instructor |
| `git pull` | 1 | Pull latest updates |
| `git stash` | 1 | Save temporary work while switching branches |
| `git cherry-pick` | 1 | Recover lost commit using reflog |
| `git rebase` | 1 | Rebase feature branch on updated `main` |
| `git reset` | 3 | Undo commits (soft, mixed, hard) |
| `git revert` | 1 | Undo a bad commit safely |
| `git tag` | 2 | Tag final versions (`v1.0.0` & `v1.1.0`) |
| `git status` | 50+ | Check repository state |
| `git log` | 30+ | View commit history |
| `git diff` | 20+ | Compare changes before committing |

---

## Conflicts Resolved

### Merge 1: `main` + `dev` (6 files)
*(Already documented in Phase 2 — includes detailed resolutions for all six files)*

### Merge 2: `main` + `conflict-simulator` (6 files)
- **Files Involved:** `monitor.js`, `deploy.sh`, `app-config.yaml`, `database-config.json`, `README.md`, `architecture.md`
- **Conflict Type:** Logic differences, environment setup conflicts, and documentation mismatches  
- **Resolution Strategy:** Maintained production stability while integrating experimental AI-based and monitoring features as optional configurations.  
- **Difficulty:** Hard  
- **Time Taken:** ~40 minutes total  

---

## Git Advanced Features Used

| Command | Description | Notes |
|----------|--------------|-------|
| `git stash` | Temporarily saved uncommitted work while switching branches | Used once for WIP feature |
| `git cherry-pick` | Restored lost commit from reflog | Commit `0d21d3a` (“Bad commit”) |
| `git rebase` | Replayed feature branch commits onto updated `main` | Required force push to remote |
| `git revert` | Safely undid an unwanted commit without history loss | Verified rollback successfully |
| `git reset` | Practiced soft, mixed, and hard resets | Understood commit pointer movements |
| `git tag` | Created project release versions | Tags: `v1.0.0` and `v1.1.0` |

---

## Reflection

This challenge enhanced my understanding of **Git as a version control system** beyond basic commands.  
I learned that **merge conflicts are normal**, not mistakes — they simply ask which version to keep.  
Through hands-on experience with `rebase`, `cherry-pick`, and `stash`, I gained confidence in recovering work and maintaining clean history.  
The most valuable takeaway was discovering that **`git reflog` is a powerful recovery tool** for any lost commits.  

Overall, this challenge built my confidence in managing real-world collaboration and code integration using Git effectively.