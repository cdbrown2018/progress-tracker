# Progress Tracker

The primary goal of this project is to allow users to visualize prgress in their weight lifting.

"Behind the scenes" goals that will affect the end-user experience are

1. Be flexible to varying input formats. Users shouldn't be tied to one way (my way) of entering data into their spreadsheet
1. Automagically pull info from Google Sheets for interpretation without intervention by the user
1. Perform all operations on the front end. No custom server, Node.JS or otherwise, should be required

With those in mind, the first goal is to support the following spreadsheet format.

|    Exercise     | Reps | Weight | Reps | Weight | ... |
| :-------------: | :--: | :----: | :--: | :----: | :-: |
|   Bench Press   |  10  |  135   |  10  |  140   | ... |
|                 |  10  |  135   |  9   |  140   | ... |
|                 |  10  |  135   |  8   |  140   | ... |
| [ Leave Empty ] |
|   Bicep Curl    | ...  |  ...   | ...  |  ...   | ... |
