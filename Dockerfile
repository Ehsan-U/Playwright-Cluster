FROM node:20

COPY ./renderscout .

RUN npm install && npx playwright install chromium && npx playwright install-deps

CMD ["node","app.js"]