<div align="center">
  <img src="public/icon.svg" width="72">
  
# Pocket Calendar

<p>

<a href="https://vercel.com/tech-art/one-calendar" target="_blank"><img src="https://vercelbadge.vercel.app/api/EvanTechDev/One-Calendar?style=flat-square" alt="Vercel Project Status"></a>
<a href="https://github.com/EvanTechDev/One-Calendar/blob/master/LICENSE" target="blank"><img src="https://img.shields.io/github/license/EvanTechDev/One-Calendar?style=flat-square" alt="license"></a>
<a href="https://github.com/EvanTechDev/One-Calendar/fork" target="blank"><img src="https://img.shields.io/github/forks/EvanTechDev/One-Calendar?style=flat-square" alt="forks"></a>
<a href="https://github.com/EvanTechDev/One-Calendar/stargazers" target="blank"><img src="https://img.shields.io/github/stars/EvanTechDev/One-Calendar?style=flat-square" alt="stars"></a>
<a href="https://github.com/EvanTechDev/One-Calendar/issues" target="blank"><img src="https://img.shields.io/github/issues/EvanTechDev/One-Calendar?style=flat-square" alt="issues"></a>
<a href="https://github.com/EvanTechDev/One-Calendar/pulls" target="blank"><img src="https://img.shields.io/github/issues-pr/EvanTechDev/One-Calendar?style=flat-square" alt="pull-requests"></a>

</p>

A beautifully minimal open-source calendar app to plan your week and life.


<a href="https://vercel.com/new/clone?repository-url=https://github.com/EvanTechDev/One-Calendar&env=NEXT_PUBLIC_BASE_URL,NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,CLERK_SECRET_KEY,OPENWEATHER_API_KEY,BLOB_READ_WRITE_TOKEN&project-name=one-calendar&repo-name=one-calendar" style="display: inline-block;"><img src="https://vercel.com/button" alt="Deploy with Vercel" style="height: 32px;"></a>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/EvanTechDev/One-Calendar" style="display: inline-block;"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" style="height: 32px;"></a>


</div>

## What is Pocket Calendar?

**Pocket Calendar** is a privacy-first, weekly-focused, open-source calendar app, designed to help individuals and teams plan, focus, and stay in sync.

> Without *Pocket Calendar*, your schedule is scattered. With it, your week feels intentional.

## Why Pocket Calendar?

Most calendar tools are cluttered, over-engineered, or locked behind paywalls. Pocket Calendar aims to be:

- 🧠 **AI Powered** – AI-first app that streamlines your scheduling.
- 🕹 **Interactive & Smooth** – Drag, drop, right-click, and edit with ease.
- 🔐 **Private & Local** – Your data is yours. Export, backup, and control.
- ☁️ **Cloud Sync** – Optional sync via Vercel Blob.
- 🌐 **Clerk-Account** – Easily login with third-party.
- 🌍 **International** – Automatically adapts to your language (English / 中文).
- 🧱 **Customizable** – Tailor themes, default view, and integrations.

## Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS, shadcn/ui, TypeScript
- **Auth**: Clerk
- **Storage**: LocalStorage, Vercel Blob, Misskey Drive
- **Weather**: OpenWeather API
- **AI**: Groq API

![TechStack](https://skills-icons.vercel.app/api/icons?i=nextjs,ts,tailwindcss,shadcnui,clerk,groq,vercel,openweather,bun)

## Preview

![Home](public/Home.jpg)
![App](/public/Banner.jpg)

## Getting Started

### Prerequisites

Required Versions:

- [NodeJS](https://nodejs.org) (v18 or higher)
- [Bun](https://bun.sh) (v1.2 or higher)

### Quick Start

```bash
# Clone the repo
git clone https://github.com/EvanTechDev/One-Calendar.git
cd One-Calendar

# Install dependencies
bun install

# Start the app
bun run dev
```

Then visit `http://localhost:3000`

### Environment Variables

Copy `.env.example` to `.env` and fill in:

```env
NEXT_PUBLIC_BASE_URL=your-url

# Clerk API key （Require）
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret

# Optional
GROQ_API_KEY=your-groq-api
OPENWEATHER_API_KEY=your-open-weather-api-key

# Optional, choose between Misskey and Vercel blob
MISSKEY_URL=https://misskey.io
MISSKEY_TOKEN=your-misskey-token
BLOB_READ_WRITE_TOKEN=your-vercel-blob-token
```

### Enviroment Setup

1.Misskey Drive

Go to social media built with Misskey

Go to `Settings` < `API`

![API](https://github.com/user-attachments/assets/db9cead7-96a2-4fd7-8c0b-55429198aa91)

Click `Generate Access Token`

![Generate_Token](https://github.com/user-attachments/assets/db068882-060d-4752-ac5e-7809dfb6a9b8)


Click  `Enable All`, then confirm

![Enable_All](https://github.com/user-attachments/assets/58d445da-4133-4519-9e7e-8f4d62dd9116)

Fill in the env file:

```env
MISSKEY_URL=https://misskey.io (or your url)
MISSKEY_TOKEN=your-misskey-token
```

2. Groq

Go to [Groq Console](https://console.groq.com) and login

Click the `Create API Key`

![Screenshot_20250502_150743](https://github.com/user-attachments/assets/1e8faf08-7afe-405e-83a7-01039de35338)

Copy your API Key

![Screenshot_20250502_150857](https://github.com/user-attachments/assets/55374169-7f2b-480d-924f-80a46b014551)

Fill in the env file:

```env
GROQ_API_KEY=your-api-key
```

## Roadmap

You can report a bug or request a new feature on our feedback website

[Roadmap & Feedback](https://feedback.xyehr.cn)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=EvanTechDev/One-Calendar&type=Date)](https://www.star-history.com/#EvanTechDev/One-Calendar&Date)

## The Team

Brought to you by a small team of makers who love clean tools and open-source.

Check out our [contributors](https://github.com/EvanTechDev/One-Calendar/graphs/contributors) ❤️

## Sponsor

BTC: `bc1qdhn6c7tlcaflzu3u5fva825l20k9eqnqag5xzj`

MOB: `6tKKBDHJFcRhCvTx9wJeNH8gUUfXvPUBHnegCV8M3Qniy4UBDyRzQrHQnxGcGEebibG3Q62RxgKABe75kArpLkd8igwWw6BviTAcyp7DGgZ2LqMBWjSPEgypMSGpDjwqfD6L9PECUm4HZzRGCvMT3jL8rjev4thCqH16jrrVBnUt7VDrqZsoSDVViEAGitG9axZtekUQNK2vzgdYxPEQtnZ4ouYyPLaxPYmKHDW2XrQuA5`

## Acknowledgements

This project wouldn't be possible without these awesome services:

<div style="display: flex; justify-content: center;">
  <a href="https://vercel.com" style="text-decoration: none;"><img src="https://github.com/user-attachments/assets/5107d47f-7ce9-425a-8e24-77c322205bd4" alt="Vercel" width="96"/></a>
  <a href="https://clerk.com" style="text-decoration: none;"><img src="https://github.com/user-attachments/assets/6f9fa5d7-e0c2-4c14-aef9-e39bd0465e23" alt="Clerk" width="96"/></a>
  <a href="https://groq.com" style="text-decoraion: none;"><img src="https://github.com/user-attachments/assets/650dc220-c0a7-4761-a7ce-2c24a7d75133" alt="Groq" width="96"></a>
  <a href="https://openweathermap.org" style="text-decoration: none;"><img src="https://github.com/user-attachments/assets/d07ed7a1-c374-45f5-90fd-17c3de2a9098" alt="OpenWeather API" width="96"/></a>
</div>

## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0).  
See the [LICENSE](./LICENSE) file for details.

> [!NOTE]\
> Some components are adapted from external sources under the MIT License, including parts of the [Zero Email](https://github.com/Mail-0/Zero) project.  
> These components retain their original license terms. See relevant files for copyright.
