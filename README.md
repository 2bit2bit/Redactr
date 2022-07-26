# Redactr

Scramble some words from a body of text content

## Scenario

app is to help people safely share content on social media by scrambling portions of the text they don’t want the world to read/see.
A user will write/paste the some content into a form field and then specify the words they need to be scrambled (using another field).
Note the user is allowed to specify more than one word (separated by commas) to be scrambled.

## Outcome

After clicking a “Redact Now” button, the app scans through the original text and replaces the specified words to be scrambled with asterisks (i.e \*\*\*)
and then Display some stats like how many words were scanned, how many matched the words to be scrambled, how many characters were scrambled in total, how long it took (in milliseconds) to complete the scrambling task.

## Advanced features

Allow the user specify what to use in replacing the words, so that the app can do the scrambling with what the user provides, be it asterisks, questions marks, dashes, underscores, or even other words
and also decide if the app should be case sensitive or not
