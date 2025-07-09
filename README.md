# 🎬 MovieGPT

MovieGPT is a React-based movie recommendation app that uses OpenAI and Gemini APIs for intelligent movie suggestions, along with Firebase for authentication. It features a modern UI powered by TailwindCSS, and Redux for state management. 

## Folder Structure

```
MOVIEGPT/
├── build/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Body.js
│   │   ├── Browse.js
│   │   ├── Footer.js
│   │   ├── GptMovieSuggestion.js
│   │   ├── GptSearch.js
│   │   ├── GptSearchBar.js
│   │   ├── Header.js
│   │   ├── languageConstant.js
│   │   ├── Login.js
│   │   ├── Maincontainer.js
│   │   ├── MovieCard.js
│   │   ├── MovieList.js
│   │   ├── SecondaryContainer.js
│   │   ├── VideoBackground.js
│   │   └── VideoTitle.js
│   ├── hooks/
│   │   ├── useGetMoviesVideo.js
│   │   ├── useGetPopularMovies.js
│   │   ├── useGetTopRated.js
│   │   ├── useGetUpcomingMovies.js
│   │   └── useNowPlayingMovies.js
│   ├── utils/
│   │   ├── appStore.js
│   │   ├── configSlice.js
│   │   ├── constant.js
│   │   ├── firebase.js
│   │   ├── gptSlice.js
│   │   ├── moviesSlice.js
│   │   ├── userSlice.js
│   │   └── validate.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .env
├── .firebaserc
├── .gitignore
├── .prettierrc
├── components.json
└── firebase.json

```

## 🚀 Features

- 🎞️ Browse popular, top-rated, and upcoming movies
- 🔍 GPT-powered movie search suggestions
- 🧠 Gemini AI integration for recommendations
- 🌐 Multi-language support
- 🔐 Firebase authentication
- 🧩 Responsive design with TailwindCSS
- 🧰 Redux Toolkit for state management

## 🛠️ Tech Stack

- **React 19**
- **Redux Toolkit**
- **Firebase**
- **TailwindCSS**
- **Gemini APIs**
- **React Router v7**
- **Lucide Icons**

## Instructions to Run the App

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   npm run dev

3.**Open your browser and visit:**
http://localhost:3000

## **Feature Improvement**

1.  For ever_click of Image Poster the Video will Play
2.  Add more nav_bar items (Sports,Anime) etc...
3.  Make the UI more smooth and Beautiful.
