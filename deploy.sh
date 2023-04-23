rm -r dist
npm run staging
rsync -a dist/ nick@nickdolf.com:toys/color-grid