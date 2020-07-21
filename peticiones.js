const express = require('express')
const app = express()
const port = 8080
const fecha_hoy= new Date();

app.use((peticion,respuesta,siguiente)=>
{console.log(fecha_hoy+" "+peticion.method+ " "+peticion.url+ " "+peticion.connection.remoteAddress+""+peticion.headers["user-agent"]);
    siguiente();
  })


app.listen(port, () => console.log(`escuchando por el puerto!`))

