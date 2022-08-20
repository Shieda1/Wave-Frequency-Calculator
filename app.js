// https://calculator.swiftutors.com/wave-frequency-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const waveFrequencyRadio = document.getElementById('waveFrequencyRadio');
const waveVelocityRadio = document.getElementById('waveVelocityRadio');
const wavelengthRadio = document.getElementById('wavelengthRadio');

let waveFrequency;
let waveVelocity = v1;
let wavelength = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

waveFrequencyRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Wave Velocity (m/s)';
  variable2.textContent = '(W) Wavelength (m)';
  waveVelocity = v1;
  wavelength = v2;
  result.textContent = '';
});

waveVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(F) Wave Frequency (sec)';
  variable2.textContent = '(W) Wavelength (m)';
  waveFrequency = v1;
  wavelength = v2;
  result.textContent = '';
});

wavelengthRadio.addEventListener('click', function() {
  variable1.textContent = '(F) Wave Frequency (sec)';
  variable2.textContent = '(V) Wave Velocity (m/s)';
  waveFrequency = v1;
  waveVelocity = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(waveFrequencyRadio.checked)
    result.textContent = `Wave Frequency = ${computeWaveFrequency().toFixed(2)} sec`;

  else if(waveVelocityRadio.checked)
    result.textContent = `Wave Velocity = ${computeWaveVelocity().toFixed(2)} m/s`;

  else if(wavelengthRadio.checked)
    result.textContent = `Wavelength = ${computeWavelength().toFixed(2)} m`;
})

// calculation

function computeWaveFrequency() {
  return Number(waveVelocity.value) / Number(wavelength.value);
}

function computeWaveVelocity() {
  return Number(waveFrequency.value) * Number(wavelength.value);
}

function computeWavelength() {
  return Number(waveVelocity.value) / Number(waveFrequency.value);
}