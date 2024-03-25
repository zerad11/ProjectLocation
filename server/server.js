const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());

const imagesPath = 'D:/VSC_projects/React_projects/OneLink/ProjectLocation/src/components/UI/MapsImgs';

app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

app.get('/map/:id', (req, res) => {
  const imageId = req.params.id;
  const imagePath = path.join(imagesPath, `${imageId}.png`);

  fs.readFile(imagePath, (err, data) => {
    if (err) {
      console.error('Error reading image file:', err);
      res.status(404).send('Изображение не найдено');
    } else {
      const base64Image = Buffer.from(data).toString('base64');
      const base64Response = `data:image/png;base64,${base64Image}`;
      res.send(base64Response);
    }
  });
});


app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
