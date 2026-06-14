#!/bin/bash
# Double-click to push The Indigeneering Commons to your GitHub.
cd "$(dirname "$0")"
echo "Pushing The Indigeneering Commons to your GitHub…"
echo
git push -u origin main
echo
echo "If that listed objects (or said 'up to date'), it worked."
echo "GitHub is building your site now — live in a couple minutes at:"
echo "   https://odehamik.github.io/indigeneering-commons/"
echo
echo "If it said the repo does not exist yet: the repo needs creating on GitHub first."
echo "Come back to our chat and ask me — I'll do that part with you in your browser."
read -p "Press return to close."
