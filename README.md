# big-shaq-tribute

## Objective
- fun demo project
- create a soundboard of my favourite man's not hot lines
- include links on big shaq's man's not hot song
- play with node and react

## Technology used
- `ffmpeg`
- `node`

## Thought process
- see if idea has been done online
  - doesn't seem to be, or if so, not very popular according to Google
- think about what sort of content I want on the page
  - [Urban Dictionary](https://www.urbandictionary.com/define.php?term=mans%20not%20hot)
  - when?
  - where?
  - who?
  - [wiki](https://en.wikipedia.org/wiki/Man%27s_Not_Hot)
  - [earnings](https://wealthygorilla.com/michael-dapaah-net-worth/)
  - [lyrics](https://www.lyrics.com/sublyric/9420)
- easy to get the raw song from online, but is there a way to create the soundboard from one song instead of splitting the sounds into multiple files?
  - Maybe a future refactoring
  - not trivial
- search for online players that may do what I want already?
  - [`howler.js`](https://www.npmjs.com/package/howler)
    - meh, probably don't need something so robust. Will go with HTML5 specs instead
- find ideal program to split song into tracks
  - `ffmpeg`, via `homebrew`
    - `ffmpeg -i Big-Shaq-Mans-Not-Hot.mp3 -ss 16 -to 19 -c copy quick-maths.mp3`