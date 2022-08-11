const input = require('prompt-sync')()

const vlr_real = Number(input('Valor em real(R$): '))

const vlr_btc = vlr_real / 0.0000082

console.log('O valor de R$', vlr_real.toFixed(2),'reais equivale a', vlr_btc.toFixed(2),'Bitcoins')