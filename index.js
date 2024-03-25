const express = require('express');
const chalk = require('chalk');
const { v4: uuidv4 } = require('uuid');
const Jimp = require('jimp');

const app = express();
const PORT = 3000;
const l = console.log; //variable que almacena console.log

app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/procesar-imagen', async (req, res) => {
    const { imagenUrl } = req.body;
    try {
        const image = await Jimp.read(imagenUrl);
        image.resize(350, Jimp.AUTO).grayscale().quality(80);
        const nombreImagen = uuidv4() + '.jpg';
        await image.writeAsync(__dirname + '/imagenes/' + nombreImagen);
        res.send(`<img src="/imagenes/${nombreImagen}" alt="Imagen procesada">`);
    } catch (error) {
        res.status(500).send('Error al procesar la imagen.');
    }
});

app.listen(PORT, () => { 
    l(chalk.underline.bgCyanBright.bold.italic(`🔥🔥🔥🔥🔥Servidor corriendo en el puerto🔥🔥🔥🔥🔥http://localhost:${PORT}`));
  });
