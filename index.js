const sharp = require('sharp');
const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', (line) => {
	var type = line.split(' ');
	var heigth = 300, width, blur;
	var fileName = line.trim();
	if (type.length > 1) {
		width = JSON.parse(type[0].split(':')[0]);
		heigth = JSON.parse(type[0].split(':')[1]);
		fileName = type[1];
		blur = JSON.parse(type[2] || '0');
	}
	var catronica;
	try {
		catronica = fs.readFileSync(__dirname + '/' + fileName);
	} catch (e) {
		console.log('!hata: dosya bulunamadı');
		return;	
	}
	sharp(catronica)
        .resize(heigth, width)
	.blur(blur)
        .toFile(__dirname + '/output/' + fileName.split('/')[fileName.split('/').length -1], (err, info) => {
		if (err) {
			console.log('!hata: dosya işlenemedi', err, info);
		}
		else {
			console.log(info);
		}
        });
});

