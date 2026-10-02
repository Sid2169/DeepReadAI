<div align="center">
  <br />
    <a href="https://deep-read-ai-lac.vercel.app/" target="_blank">
      <img src="public/readme/readme-hero-new.png" alt="Project Banner">
    </a>
  <br />

  <div>
<img src="https://img.shields.io/badge/-Next.js_16-000000?style=for-the-badge&logo=Next.js&logoColor=white" />
<img src="https://img.shields.io/badge/-ElevenLabs-FFFFFF?style=for-the-badge&logo=ElevenLabs&logoColor=black" />
<img src="https://img.shields.io/badge/-Vapi-62F6B5?style=for-the-badge&logo=Vapi&logoColor=black" />
<img src="https://img.shields.io/badge/-Clerk-6C47FF?style=for-the-badge&logo=Clerk&logoColor=white" /><br/>
<img src="https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white" />
<img src="https://img.shields.io/badge/-Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white" />
<img src="https://img.shields.io/badge/-Tailwind-06B6D4?style=for-the-badge&logo=Tailwind-CSS&logoColor=white" />
<img src="https://img.shields.io/badge/-Shadcn/UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white" />
  </div>

  <h3 align="center">DeepRead — AI Book Companion</h3>

  <div align="center">
    Feel free to fork this repo as a starter template. A ⭐ is appreciated if you find it useful!
  </div>
</div>

---

## Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)

---

## <a name="introduction">✨ Introduction</a>

**DeepRead** is an AI-powered platform for having real-time voice conversations with your books. Upload a PDF, pick an ElevenLabs voice persona, and talk to your library — ask questions, request summaries, and follow along with live transcripts. Built with Next.js 16, Vapi, MongoDB, and Clerk.

---

## <a name="tech-stack">⚙️ Tech Stack</a>

| Technology | Role |
|---|---|
| [Next.js 16](https://nextjs.org/docs) | Core framework — handles routing, SSR, and API routes |
| [Vapi](https://vapi.ai/) | Real-time voice AI engine for low-latency conversations |
| [ElevenLabs](https://elevenlabs.io/docs) | Lifelike TTS powering voice persona previews and synthesis |
| [Clerk](https://clerk.com/) | Authentication — email/social login and session management |
| [MongoDB](https://www.mongodb.com/docs/) + Mongoose | Stores user libraries, book metadata, and transcripts |
| [TypeScript](https://www.typescriptlang.org/) | Static typing for maintainability and error safety |
| [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/) | Accessible, themeable component-based UI |
| [CodeRabbit](https://www.coderabbit.ai/) | AI code review for PR feedback and quality checks |

---

## <a name="features">🔋 Features</a>

- **PDF Upload & Ingestion** — Automated text extraction, chunking, and embedding for precise context retrieval.
- **Voice Conversations** — Real-time, back-and-forth verbal interaction with your books via Vapi.
- **AI Voice Personas** — Pick from multiple ElevenLabs personalities with instant high-fidelity previews.
- **Smart Summaries** — Ask for chapter summaries or deep-dives on any topic from your content.
- **Session Transcripts** — Auto-generated text records of every conversation, always accessible.
- **Library Management** — Organize personal uploads or browse the global collection with fast search.
- **Auth & Subscriptions** — Secure login paired with billing for premium feature access.

---

## <a name="quick-start">🤸 Quick Start</a>

**Prerequisites:** Git, Node.js, and npm installed.

```bash
# Clone and install
git clone https://github.com/Sid2169/DeepReadAI.git
cd DeepReadAI
npm install
```

**Environment Variables**

Create a `.env` file in the project root:

```env
NODE_ENV='development'
NEXT_PUBLIC_BASE_URL=

# CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# VERCEL BLOB
BLOB_READ_WRITE_TOKEN=

# MONGODB
MONGODB_URI=

# VAPI
NEXT_PUBLIC_VAPI_API_KEY=
VAPI_SERVER_SECRET=

# GOOGLE GEMINI (embeddings)
GOOGLE_GEMINI_API_KEY=

# ELEVENLABS
ELEVENLABS_API_KEY=
```

Get your credentials from: [Clerk](https://clerk.com) · [Vercel](https://vercel.com) · [MongoDB](https://www.mongodb.com) · [Vapi](https://vapi.ai) · [Google AI Studio](https://aistudio.google.com) · [ElevenLabs](https://elevenlabs.io)

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

<div align="center">
  <p>Built with ❤️ using Next.js, Vapi, and ElevenLabs.</p>
  <p>If this project helped you, please consider giving it a ⭐ — it goes a long way!</p>
</div>

## Additional Notes

- **Vercel Blob uploads** — Verify the change in both development and production builds.
- **user onboarding** — Add a screenshot or example when it clarifies the workflow.
- **Gemini embeddings** — Note any external service limits or required keys.
- **data cleanup** — Note any external service limits or required keys.
- **ElevenLabs audio** — Verify that links and references still resolve.
- **API rate limits** — Verify the change in both development and production builds.
- **subscription limits** — Note any external service limits or required keys.
- **Vercel Blob uploads** — Update the documentation if the visible behavior changes.
- **vector search** — Check that the required API keys are present before testing voice flows.
- **Next.js routes** — Check the required environment values before deploying.
- **Gemini embeddings** — Update the documentation if the visible behavior changes.
- **user onboarding** — Keep commands copy-pasteable for new contributors.
- **MongoDB persistence** — Include a short reproduction step when reporting issues.
- **subscription limits** — Document any manual steps that cannot be automated.
- **local development** — Check the relevant browser or runtime support.
- **API rate limits** — Keep commands copy-pasteable for new contributors.
- **ElevenLabs audio** — Check the required environment values before deploying.
- **subscription limits** — Keep commands copy-pasteable for new contributors.
- **MongoDB persistence** — Document any manual steps that cannot be automated.
- **deployment setup** — Check that the required API keys are present before testing voice flows.
- **subscription limits** — Check the relevant browser or runtime support.
- **conversation flow** — Use the existing project patterns when extending this area.
- **subscription limits** — Verify the upload and embedding steps against a small test document.
- **MongoDB persistence** — Confirm the expected behavior on a clean checkout.
- **Vercel Blob uploads** — Use the existing project patterns when extending this area.
- **ElevenLabs audio** — Document any manual steps that cannot be automated.
- **local development** — Confirm the expected behavior on a clean checkout.
- **book ingestion** — Add a screenshot or example when it clarifies the workflow.
- **error handling** — Note any external service limits or required keys.
- **Next.js routes** — Add a screenshot or example when it clarifies the workflow.
- **Clerk authentication** — Check that the required API keys are present before testing voice flows.
- **MongoDB persistence** — Keep the related setup steps aligned with the current scripts.
- **vector search** — Confirm the expected behavior on a clean checkout.
- **conversation flow** — Add a screenshot or example when it clarifies the workflow.
- **conversation flow** — Verify that links and references still resolve.
- **error handling** — Add a screenshot or example when it clarifies the workflow.
- **deployment setup** — Keep commands copy-pasteable for new contributors.
- **conversation flow** — Verify the upload and embedding steps against a small test document.
- **Next.js routes** — Keep commands copy-pasteable for new contributors.
- **conversation flow** — Include a short reproduction step when reporting issues.
- **data cleanup** — Confirm the expected behavior on a clean checkout.
- **user onboarding** — Note any external service limits or required keys.
- **subscription limits** — Verify the change in both development and production builds.
- **Vercel Blob uploads** — Keep commands copy-pasteable for new contributors.
- **Clerk authentication** — Keep the terminology consistent with the rest of the project.
- **Clerk authentication** — Keep the related setup steps aligned with the current scripts.
- **Clerk authentication** — Document any manual steps that cannot be automated.
- **Clerk authentication** — Prefer small, focused changes over broad rewrites.
- **environment variables** — Use the existing project patterns when extending this area.
- **Vercel Blob uploads** — Note any external service limits or required keys.
- **Clerk authentication** — Add a screenshot or example when it clarifies the workflow.
- **ElevenLabs audio** — Keep the terminology consistent with the rest of the project.
- **vector search** — Check the required environment values before deploying.
- **subscription limits** — Confirm the expected behavior on a clean checkout.
- **MongoDB persistence** — Verify the upload and embedding steps against a small test document.
- **environment variables** — Verify the change in both development and production builds.
- **Vercel Blob uploads** — Document any manual steps that cannot be automated.
- **API rate limits** — Verify the upload and embedding steps against a small test document.
- **Vercel Blob uploads** — Check the required environment values before deploying.
- **book ingestion** — Update the documentation if the visible behavior changes.
- **data cleanup** — Verify the change in both development and production builds.
- **book ingestion** — Confirm the expected behavior on a clean checkout.
- **Clerk authentication** — Use the existing project patterns when extending this area.
- **error handling** — Keep the related setup steps aligned with the current scripts.
- **vector search** — Document any manual steps that cannot be automated.
- **Next.js routes** — Keep the related setup steps aligned with the current scripts.
- **Vapi voice sessions** — Include a short reproduction step when reporting issues.
- **Vapi voice sessions** — Use the existing project patterns when extending this area.
- **user onboarding** — Check the required environment values before deploying.
- **environment variables** — Document any manual steps that cannot be automated.
- **Vapi voice sessions** — Verify the upload and embedding steps against a small test document.
- **user onboarding** — Verify the change in both development and production builds.
- **data cleanup** — Keep commands copy-pasteable for new contributors.
- **local development** — Check the required environment values before deploying.
- **conversation flow** — Check that the required API keys are present before testing voice flows.
- **Clerk authentication** — Verify the change in both development and production builds.
- **deployment setup** — Update the documentation if the visible behavior changes.
- **Gemini embeddings** — Check the required environment values before deploying.
- **Clerk authentication** — Confirm the expected behavior on a clean checkout.
- **environment variables** — Note any external service limits or required keys.
- **Vapi voice sessions** — Check that the required API keys are present before testing voice flows.
- **environment variables** — Check the required environment values before deploying.
- **API rate limits** — Document any manual steps that cannot be automated.
- **API rate limits** — Include a short reproduction step when reporting issues.
- **user onboarding** — Verify that links and references still resolve.
- **local development** — Include a short reproduction step when reporting issues.
- **deployment setup** — Document any manual steps that cannot be automated.
- **Gemini embeddings** — Add a screenshot or example when it clarifies the workflow.
- **MongoDB persistence** — Prefer small, focused changes over broad rewrites.
- **Vercel Blob uploads** — Check the relevant browser or runtime support.
- **Vapi voice sessions** — Keep the terminology consistent with the rest of the project.
- **MongoDB persistence** — Check the required environment values before deploying.
- **book ingestion** — Check that the required API keys are present before testing voice flows.
- **local development** — Keep the terminology consistent with the rest of the project.
- **error handling** — Confirm the expected behavior on a clean checkout.
- **deployment setup** — Use the existing project patterns when extending this area.
- **data cleanup** — Use the existing project patterns when extending this area.
- **user onboarding** — Confirm the expected behavior on a clean checkout.
- **local development** — Keep commands copy-pasteable for new contributors.
- **ElevenLabs audio** — Update the documentation if the visible behavior changes.
- **subscription limits** — Include a short reproduction step when reporting issues.
- **Next.js routes** — Keep the terminology consistent with the rest of the project.
- **subscription limits** — Keep the terminology consistent with the rest of the project.
- **vector search** — Add a screenshot or example when it clarifies the workflow.
- **API rate limits** — Verify that links and references still resolve.
- **API rate limits** — Keep the terminology consistent with the rest of the project.
- **user onboarding** — Keep the terminology consistent with the rest of the project.
- **Gemini embeddings** — Verify that links and references still resolve.
- **data cleanup** — Include a short reproduction step when reporting issues.
- **Next.js routes** — Check that the required API keys are present before testing voice flows.
- **Next.js routes** — Prefer small, focused changes over broad rewrites.
- **conversation flow** — Note any external service limits or required keys.
- **Vercel Blob uploads** — Confirm the expected behavior on a clean checkout.
- **deployment setup** — Keep the related setup steps aligned with the current scripts.
- **book ingestion** — Prefer small, focused changes over broad rewrites.
