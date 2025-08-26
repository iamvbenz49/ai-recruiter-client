# Frontend Routes and API Endpoints Overview

## Public Routes
- `/` → Home
- `/auth/*` → Auth router
  - `/auth/company` → Company login/signup UI
  - `/auth/candidate` → Candidate login/signup UI

## Company App Routes (`/company/*`)
- `/company/dashboard` → Company dashboard
- `/company/profile` → Company profile view
- `/company/profile/edit` → Company profile edit
- `/company/hiring` → Manage hirings
- `/company/hiring/create` → Create new hiring
- `/company/hiring/:hiringId` → View hiring details
- `/company/hiring/:hiringId/rounds` → Round management
- `/company/hiring/:hiringId/rounds/create` → Create round
- `/company/hiring/:hiringId/rounds/:roundId` → Round details
- `/company/hiring/:hiringId/rounds/:roundId/edit` → Edit round
- `/company/hiring/:hiringId/shortlist` → Shortlist management
- `/company/candidates` → Candidates list
- `/company/analytics` → Analytics
- `/company/settings` → Settings

## Candidate App Routes (`/candidate/*`)
- `/candidate/dashboard` → Candidate dashboard
- `/candidate/profile` → Candidate profile
- `/candidate/profile/edit` → Candidate profile edit
- `/candidate/events` → Events
- `/candidate/events/:eventId` → Event details
- `/candidate/test` → Test hub
- `/candidate/test/:testId` → Test session
- `/candidate/results` → Results
- `/candidate/results/:testId` → Result details

## Auth Flows and API Endpoints

Base URL: `${VITE_API_BASE_URL || http://localhost:5000}/api`

### Company Auth
- Login: `POST /company/login`
  - Used in: `src/company-frontend/components/auth/CompanyLogin.jsx`
- Signup: `POST /company/signup`
  - Used in: `src/company-frontend/components/auth/CompanySignup.jsx`
- Profile (get): `GET /company/get-detail`
  - Used in: `src/common/context/UserContext.jsx` via `companyService.getCompanyDetail()`
- Profile (update): `POST /company/update-company`
  - Used in: `src/common/context/UserContext.jsx` via `companyService.updateCompany()`

### Candidate Auth
- Login: `POST /candidate/auth/login`
  - Used in: `src/candidate-frontend/components/auth/CandidateLogin.jsx`
- Signup: `POST /candidate/auth/signup`
  - Used in: `src/candidate-frontend/components/auth/CandidateSignup.jsx`
- Profile (get): `GET /candidate/auth/profile`
- Profile (update): `PUT /candidate/auth/profile`
  - Both used in: `src/common/context/UserContext.jsx` via `candidateAuthService`

## Company Features and API Endpoints

Service: `src/company-frontend/services/companyService.js`
- Get company detail: `GET /company/get-detail`
- Update company: `POST /company/update-company`
- Delete company: `GET /company/delete-company`
- Create new hiring: `POST /company/create-new-hiring`
- View hirings: `GET /company/view-hiring-details`
- Delete hiring: `POST /company/delete-hiring`
- View candidate report: `POST /company/view-candidate-report`
- Fetch complaint: `GET /company/fetch-compliant`

Note: Several UI components still use generic hiring endpoints under `/api/hirings...` via `useApi`. If your backend exposes hiring solely via the company routes listed above, refactoring those components to use `companyService` methods is recommended.

Key files referencing older `/api/hirings` paths:
- `src/company-frontend/components/hiring/CreateNewHiring.jsx`
- `src/company-frontend/components/hiring/ViewHiringDetails.jsx`
- `src/company-frontend/components/hiring/OngoingHirings.jsx`
- `src/company-frontend/components/hiring/UpcomingHirings.jsx`
- `src/company-frontend/components/hiring/CompletedHirings.jsx`
- `src/company-frontend/components/rounds/*`

## Shared
- API client: `src/common/services/api.js` (Axios instance with token and refresh handling)
- Constants: `src/common/utils/constants.js`
- Auth context and storage: `src/common/context/AuthContext.jsx`, `src/common/utils/storage.js`


