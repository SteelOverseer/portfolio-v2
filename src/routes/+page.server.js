import { STEAM_API_KEY, STEAM_USER_ID } from '$env/static/private';

/**
 * Fetches a Steam endpoint and returns its `response.games` array,
 * or an empty array if the request fails or Steam omits `games`.
 * @param {string} url
 */
const fetchGames = async (url) => {
  try {
    const resp = await fetch(url)
    if (!resp.ok) {
      console.error(`Steam API request failed: ${resp.status} ${resp.statusText}`)
      return []
    }
    const json = await resp.json()
    return json?.response?.games ?? []
  } catch (err) {
    console.error('Steam API request error:', err instanceof Error ? err.message : err)
    return []
  }
}

// Fills in "too busy ___ to pick up a game lately" when nothing was played recently
const busyPhrases = [
  'building decks',
  'playing Magic',
  'being a girl dad',
  'petting cats',
  'tinkering with side projects',
  'tweaking my Omarchy setup'
]

export const load = async () => {
  const getOwnedGamesURL = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${STEAM_API_KEY}&steamid=${STEAM_USER_ID}&format=json&include_appinfo=true`
  const getRecentlyPlayedURL = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${STEAM_USER_ID}&format=json&count=1`

  const [ownedGames, recentlyPlayed] = await Promise.all([
    fetchGames(getOwnedGamesURL),
    fetchGames(getRecentlyPlayedURL)
  ])

  const busyPhrase = busyPhrases[Math.floor(Math.random() * busyPhrases.length)]

  return { ownedGames, recentlyPlayed, busyPhrase }
};
