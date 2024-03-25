const express = require('express');
const Jimp = require('jimp');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/formulario.html');
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
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
