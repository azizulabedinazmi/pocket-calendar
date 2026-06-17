<div align="center">
  <img src="public/icon.svg" width="72">
  
# Pocket Calendar 📅

<p>

<a href="https://vercel.com/tech-art/one-calendar" target="_blank"><img src="https://vercelbadge.vercel.app/api/azizulabedinazmi/pocket-calendar?style=flat-square" alt="Vercel Project Status"></a>
<a href="https://github.com/azizulabedinazmi/pocket-calendar/blob/master/LICENSE" target="blank"><img src="https://img.shields.io/github/license/azizulabedinazmi/pocket-calendar?style=flat-square" alt="license"></a>
<a href="https://github.com/azizulabedinazmi/pocket-calendar/fork" target="blank"><img src="https://img.shields.io/github/forks/azizulabedinazmi/pocket-calendar?style=flat-square" alt="forks"></a>
<a href="https://github.com/azizulabedinazmi/pocket-calendar/stargazers" target="blank"><img src="https://img.shields.io/github/stars/azizulabedinazmi/pocket-calendar?style=flat-square" alt="stars"></a>
<a href="https://github.com/azizulabedinazmi/pocket-calendar/issues" target="blank"><img src="https://img.shields.io/github/issues/azizulabedinazmi/pocket-calendar?style=flat-square" alt="issues"></a>
<a href="https://github.com/azizulabedinazmi/pocket-calendar/pulls" target="blank"><img src="https://img.shields.io/github/issues-pr/azizulabedinazmi/pocket-calendar?style=flat-square" alt="pull-requests"></a>

</p>

A beautifully minimal open-source calendar app to plan your week and life. ✨

<a href="https://vercel.com/new/clone?repository-url=https://github.com/azizulabedinazmi/pocket-calendar&env=NEXT_PUBLIC_BASE_URL,NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,CLERK_SECRET_KEY,OPENWEATHER_API_KEY,BLOB_READ_WRITE_TOKEN&project-name=one-calendar&repo-name=one-calendar" style="display: inline-block;"><img src="https://vercel.com/button" alt="Deploy with Vercel" style="height: 32px;"></a>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/azizulabedinazmi/pocket-calendar" style="display: inline-block;"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" style="height: 32px;"></a>

</div>

## 🌟 What is Pocket Calendar?

**Pocket Calendar** is a privacy-first, weekly-focused, open-source calendar app, designed to help individuals and teams plan, focus, and stay in sync.

> Without *Pocket Calendar*, your schedule is scattered. With it, your week feels intentional.

## ✨ Key Features

- 🧠 **AI-Powered Scheduling** – Smart event suggestions and scheduling assistance
- 🕹 **Interactive Interface** – Drag, drop, right-click, and edit with ease
- 🔐 **Privacy First** – Your data stays local and private
- ☁️ **Cloud Sync** – Optional sync via Vercel Blob
- 🌐 **Easy Authentication** – Seamless login with Clerk
- 🌍 **Multilingual** – Supports English and Bangla
- 🧱 **Customizable** – Personalize themes and views
- 📱 **Responsive Design** – Works on all devices
- 🌤 **Weather Integration** – Real-time weather updates
- 📊 **Analytics** – Track your time and productivity
- ⌨️ **Keyboard Shortcuts** – Navigate efficiently
- 📤 **Import/Export** – Easy data portability

## 🛠 Tech Stack

- **Frontend**: 
  - Next.js 14
  - Tailwind CSS
  - shadcn/ui
  - TypeScript
- **Authentication**: Clerk
- **Storage**: 
  - LocalStorage
  - Vercel Blob
  - Misskey Drive
- **APIs**:
  - OpenWeather API
  - Groq API

![TechStack](https://skills-icons.vercel.app/api/icons?i=nextjs,ts,tailwindcss,shadcnui,clerk,groq,vercel,openweather,bun)

## 📸 Preview

![Home](public/Home.jpg)
![App](/public/Banner.jpg)

## 🚀 Getting Started

### 📋 Prerequisites

Required Versions:
- [NodeJS](https://nodejs.org) (v18 or higher)
- [Bun](https://bun.sh) (v1.2 or higher)

### ⚡ Quick Start

```bash
# Clone the repo
git clone https://github.com/azizulabedinazmi/pocket-calendar.git
cd One-Calendar

# Install dependencies
bun install

# Start the app
bun run dev
```

Then visit `http://localhost:3000`

### 🔑 Environment Variables

Copy `.env.example` to `.env` and fill in:

```env
NEXT_PUBLIC_BASE_URL=your-url

# Clerk API key (Required)
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

### 🔧 API Setup

#### 1. Groq API Setup

1. Visit [Groq Console](https://console.groq.com)
2. Log in to your account
3. Click `Create API Key`
4. Copy your API Key
5. Add to your `.env` file:
```env
GROQ_API_KEY=your-api-key
```

## 👥 The Team

This project is developed by:

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0;">
  <tr style="text-align: center;">
    <td style="padding: 1rem;">
      <img src="https://github.com/azizulabedinazmi.png" width="100" style="border-radius: 50%;">
      <br><br>
      <a href="https://github.com/azizulabedinazmi">Azizul Abedin Azmi</a>
      <br>
      <small>Lead Developer</small>
    </td>
    <td style="padding: 1rem;">
        <img src="https://github.com/Tanzila-Afrin.png" width="100" style="border-radius: 50%;">
        <br><br>
        <a href="https://github.com/Tanzila-Afrin">Tanzila Afrin</a>
        <br>
        <small>Developer</small>
      </td>
    <td style="padding: 1rem;">
      <img src="https://github.com/isratjahan829.png" width="100" style="border-radius: 50%;">
      <br><br>
      <a href="https://github.com/isratjahan829">Ishrat Jahan</a>
      <br>
      <small>Developer</small>
    </td>
  </tr>
</table>

We are a team of passionate developers who love creating clean, open-source tools.

Check out our [contributors](https://github.com/azizulabedinazmi/pocket-calendar/graphs/contributors) ❤️

## 🙏 Acknowledgements

This project wouldn't be possible without these awesome services:

<div style="display: flex; justify-content: center;">
  <a href="https://vercel.com" style="text-decoration: none;"><img src="https://github.com/user-attachments/assets/5107d47f-7ce9-425a-8e24-77c322205bd4" alt="Vercel" width="96"/></a>
  <a href="https://clerk.com" style="text-decoration: none;"><img src="https://github.com/user-attachments/assets/6f9fa5d7-e0c2-4c14-aef9-e39bd0465e23" alt="Clerk" width="96"/></a>
  <a href="https://groq.com" style="text-decoraion: none;"><img src="https://github.com/user-attachments/assets/650dc220-c0a7-4761-a7ce-2c24a7d75133" alt="Groq" width="96"></a>
  <a href="https://openweathermap.org" style="text-decoration: none;"><img src="https://github.com/user-attachments/assets/d07ed7a1-c374-45f5-90fd-17c3de2a9098" alt="OpenWeather API" width="96"/></a>
</div>

## 📄 License

This project is licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0).  
See the [LICENSE](./LICENSE) file for details.


## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📞 Support

If you need help or have questions:
- Open an issue
- Join our community
- Check our documentation

## 📊 Commit History

[![Commit History](https://img.shields.io/github/commit-activity/m/azizulabedinazmi/pocket-calendar?style=for-the-badge)](https://github.com/azizulabedinazmi/pocket-calendar/graphs/commit-activity)
[![Last Commit](https://img.shields.io/github/last-commit/azizulabedinazmi/pocket-calendar?style=for-the-badge)](https://github.com/azizulabedinazmi/pocket-calendar/commits/main)

Recent commits:
```bash
git log --pretty=format:"%h - %s (%cr) <%an>" --graph --abbrev-commit -n 5
```

[View full commit history](https://github.com/azizulabedinazmi/pocket-calendar/commits/main)
