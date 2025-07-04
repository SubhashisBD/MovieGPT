export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGJmZmYzOGUzZGUyYzIzMGQwNDA4MzE0N2U5MzM5YyIsIm5iZiI6MTc0OTQzOTE1MS4zMTQsInN1YiI6IjY4NDY1MmFmZDY2OTIzNWRlMGJiMmY1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eTewD7H6PjK9ASeq95foxowJrAuJWP76kE1ZJYGPvqA',
  }
}

export const API_KEY = process.env.REACT_APP_TMDB_KEY; // Your v3 API Key

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w300/";

export const BACK_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg";

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" }
];

export const GEMINI_KEY =  process.env.REACT_APP_GEMINI_KEY;