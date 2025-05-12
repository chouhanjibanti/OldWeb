# Git Workflow Guide

## Overview
This guide provides step-by-step instructions for checking the remote repository, verifying the current branch, switching to a desired branch, and pushing all changes to that branch.

### Team Responsibilities
- **Banti** is currently working on the **index page**.
- **Gourav** is focusing on the **sub pages**.
- Ensuring that the website is **mobile-friendly** is a top priority for the team.

## Steps to Push Changes to a Branch

### Step 1: Check the Remote Repository
To view the remote repositories associated with your local repository, run:
```bash
git remote -v
```

### Step 2: Check the Current Branch
To see which branch you are currently on, use:
```bash
git branch
```

### Step 3: Switch to the Desired Branch
To change to the desired branch (e.g., `test`), execute:
```bash
git checkout test
```

### Step 4: Add All Changes to the Staging Area
To stage all modified files for the next commit, run:
```bash
git add .
```

### Step 5: Commit the Changes with a Message
To create a commit with a descriptive message, use:
```bash
git commit -m "Push all changes to test-branch"
```

### Step 6: Push the Changes to the Remote Repository
Finally, to upload your committed changes to the `test-branch` on the remote repository, run:
```bash
git push origin test
```

## Notes
- Ensure you have the necessary permissions to push changes to the remote repository.
- Replace `test` with the actual name of the branch you want to work with if it's different.

## Contact
For any questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com).
