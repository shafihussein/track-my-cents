## Rule 1: Git Workflow

All work done in this repository must start from the `main` branch.

1. Switch to `main`.
2. Pull the latest remote `main` before starting work:

   ```bash
   git pull origin main
   ```

3. Create a new branch using an industry-standard, lowercase, hyphenated name.
4. Use the correct branch prefix:

   - `feature/` - New functionality or enhancements.
   - `bugfix/` - Resolving issues or errors in development.
   - `hotfix/` - Urgent repairs for critical production issues.
   - `release/` - Final prep and metadata updates for a new version.
   - `chore/` - Routine maintenance, dependencies, tooling, or documentation.
   - `refactor/` - Improving code structure without changing behavior.
   - `test/` - Adding or updating automated tests.
   - `docs/` - Changes strictly related to documentation.
   - `experiment/` - Temporary trial code not guaranteed to be merged.
   - `style/` - Formatting, UI tweaks, or linting fixes with no logic changes.

5. Do the requested work on that branch.
6. Commit focused changes to the branch.
7. Push to the corresponding remote branch.
8. Never push directly to remote `main`; `main` is protected.
9. Never merge work into local `main`.
10. After the work is committed and pushed, switch back to `main`.
11. Delete the committed local work branch after switching back to `main`.