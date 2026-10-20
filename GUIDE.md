# Your toolbox (read this when I'm not around)

## Files in your repo
- `index.html` the site and the main data lists (CASES, POSTS, FILES, BOOKS)
- `extra.js` extra clues for each room, plus Zorp's brain (facts, quiz, auto-talk)
- `archive/` your PDFs (make this folder when you upload your first one)

**Upload all of them.** `extra.js` must sit in the same folder as `index.html`.

## 1. Update the site after any change
Repo page, click the file, click the pencil icon, edit, click **Commit changes**. Wait 1 to 2 minutes, refresh your site (Ctrl+F5 if it looks old).

## 2. Add a new case (copy this into CASES in index.html, before the final `];`)
Remember the comma after the previous case's closing `}`.

```js
{id:"mycase",name:"My Case",lat:0,lon:0,status:"documented", // or "disputed"
 floor:["#222222","#2a2a2a"],wall:"#888888",
 intro:"One line that sets the scene.",
 objects:[
 {x:3,y:2,e:"📄",t:"Title",d:"What this clue says."},
 {x:10,y:2,e:"🖥️",t:"Title",d:"What this clue says."},
 {x:6,y:6,e:"📚",t:"Title",d:"What this clue says."},
 {x:11,y:6,e:"🔍",t:"Title",d:"What this clue says."}]},
```
- Find lat/lon by right-clicking a place in Google Maps and clicking the numbers. Lat first, then lon.
- Room is 14 tiles wide (x 1 to 12) and 9 tall (y 1 to 7). Do not put two objects on the same tile.
- To add more clues to a case later, add them to `MORE` in `extra.js`.
- Case ideas that have real documents behind them: Operation Paperclip, Project Stargate, COINTELPRO, Project Blue Book, Pentagon Papers, the 1975 Church Committee.

## 3. Add a blog post
In `POSTS` in index.html, add a line at the top:
`{date:"2026-10-25",title:"My title",text:"My thoughts."},`

## 4. Add a PDF to the Archive
1. Repo page, **Add file**, **Upload files**, drag the PDF in. In the file name box, you can type `archive/` first to make the folder.
2. In `FILES` add: `{title:"CIA file about X",path:"archive/yourfile.pdf"},`
3. Only upload documents that are public and declassified (for example from the CIA Reading Room at cia.gov/readingroom). Do not upload anything private or stolen.

## 5. Add an interactive book
In `BOOKS` add: `{title:"My book",pages:["Page 1 text","Page 2 text","Page 3 text"]},`
Each text in quotes is one page. Use a comma between pages.

## 6. Turn on the chat (Giscus)
1. Repo **Settings**, scroll to **Features**, tick **Discussions**.
2. Go to github.com/apps/giscus and install it on your repo.
3. Go to giscus.app, type `YOURNAME/conspiracy-files`, pick category **General** (or Announcements).
4. The page makes a code block. Copy the 4 values (`repo`, `repoId`, `category`, `categoryId`) into the `GISCUS` line in index.html:
`const GISCUS={repo:"YOURNAME/conspiracy-files",repoId:"...",category:"General",categoryId:"..."};`
5. Commit. Visitors sign in with GitHub to comment.

## 7. Change Zorp
Open `extra.js`. Add lines to `FACTS` (any sentence in quotes, comma after), or to `QUIZ` like `["Statement here.",true],`.

## 8. If something breaks
- Blank page: you probably forgot a comma or quote. Press F12, click **Console**, and read the red message. It names the line.
- The globe shows no land: your internet blocked a map file. Refresh.
- Undo anything: repo page, click **History** on a file, and restore the old version.

## Ideas for later
- Real art in each room, with the Canvas drawing code replaced by pictures
- A case board with red string between related cases
- A notebook that saves clues the visitor found (browser localStorage)
- Sound effects and a different theme song per case
- A timeline page that sorts every case by year
- Visitor-submitted cases through GitHub Issues, which you approve

## Paste this into any AI later to continue
"I have a GitHub Pages site called The Conspiracy Files: a D3 globe that opens retro canvas rooms per case, with a mascot called Zorp. The files are index.html, extra.js and GUIDE.md. I will paste them. Help me add [what you want]. Give me complete, ready-to-run code."
