const express = require('express');
const chalk = require('chalk');
const { v4: uuidv4 } = require('uuid');
const Jimp = require('jimp');
const path = require('path');

//PAGINAS DE PRUEBA
//http://placedog.net/200/200  https://placekitten.com/200/200  https://placebear.com/200/200

const app = express();
const PORT = 3000;
const l = console.log; //variable que almacena console.log

app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));

app.get('/', async (req, res) => {
    res.setHeader('Content-Type', 'image/png')
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.post('/procesar-imagen', async (req, res) => {
    const { imagenUrl } = req.body;
    try {
        const image = await Jimp.read(imagenUrl);
        const processedImage = await image
            .resize(350, Jimp.AUTO) //ancho y alto
            .sepia()  //sepia negra
            .grayscale() //grises 
            .quality(80); //calidad
        const nombreImagen = uuidv4().slice(0, 4) + '_uuid_foto.jpg'; // Genera un nombre de imagen aleatorio
        await processedImage.writeAsync(path.join(__dirname, '/assets/img/' + nombreImagen)); // Almacena la imagen procesada con nombre
        res.sendFile(path.join(__dirname, '/assets/img/' + nombreImagen)); // Muestra la imagen procesada
    } catch (error) {
        res.status(500).send('Error al procesar la imagen.');
    }
});

app.listen(PORT, () => { 
    l(chalk.underline.bgCyanBright.bold.italic(`🔥🔥🔥🔥🔥Servidor corriendo en el puerto🔥🔥🔥🔥🔥http://localhost:${PORT}`));
});