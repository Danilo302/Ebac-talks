AOS.init();

const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const diaEmMs = 1000 * 60 * 60 * 24
    const horasEmMs = 1000 * 60 * 60
    const minutosEmMS = 1000*60

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual
    
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs)
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horasEmMs)
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMS)
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMS) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
},1000);