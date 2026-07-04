# My Portfolio Website

This is my personal portfolio, built to try new things and have fun while doing it.

**Visit my portfolio at:** [dougschultz.dev](https://dougschultz.dev)


## Built With

This platform runs on a modern frontend stack designed for speed, type safety, and clean reactivity:

- **Framework:** [SvelteKit](https://kit.svelte.dev/) 
- **Styling:** Sass (SCSS) with a high-contrast, custom theme (think Gundam Epyon)
- **Icons:** FontAwesome integration via `svelte-fa`
- **Environment:** [Netlify](https://www.netlify.com/)


## Data Integrations & APIs

Beyond acting as a static resume, this application integrates with dynamic external data sources and local database parsers:

###  Steam Web API
To grab my top 5 and recently played games.
- **Documentation:** [Valve Developer Community - Steam Web API](https://developer.valvesoftware.com/wiki/Steam_Web_API)

### Scryfall Card Data
Used to provide Magic: the Gathering card data.
- **Bulk Data Source:** [Scryfall API - Bulk Data Files](https://scryfall.com/docs/api/bulk-data)
- **Local Data Pipeline:** Rather than making expensive runtime fetches against massive JSON files, a custom Python script maps this information directly into a localized SQLite database.
  - To initialize or refresh the data pool locally, run the custom conversion script:
    ```bash
    python ./scripts/convertToSqlite.py
    ```

### Google API
This is used to feck decklists from my Google Drive.
These lists are then used to query the scryfall data in the SQLite database, building out my library page with card previews.
