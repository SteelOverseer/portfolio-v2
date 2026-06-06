import { error } from '@sveltejs/kit';
import { PRIVATE_STEAM_API_KEY, PRIVATE_STEAM_USER_ID } from '$env/static/private';

export const load = async ({ params }) => {
  const getUserDataURL = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${PRIVATE_STEAM_API_KEY}&steamids=${PRIVATE_STEAM_USER_ID}`
  const getOwnedGamesURL = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${PRIVATE_STEAM_API_KEY}&steamid=${PRIVATE_STEAM_USER_ID}&format=json&include_appinfo=true`
  const getRecentlyPlayedURL = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${PRIVATE_STEAM_API_KEY}&steamid=${PRIVATE_STEAM_USER_ID}&format=json&count=1`

  const [ownedGamesResp, recentlyPlayedResp] = await Promise.all([
    fetch(getOwnedGamesURL),
    fetch(getRecentlyPlayedURL)
  ])

  let data = { ownedGames: {}, recentlyPlayed: {}}

  if(ownedGamesResp.ok) {
    data.ownedGames = await ownedGamesResp.json()
  }

  if(recentlyPlayedResp.ok) {
    data.recentlyPlayed = await recentlyPlayedResp.json()
  }

  return data
};