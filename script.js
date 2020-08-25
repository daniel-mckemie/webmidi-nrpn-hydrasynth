const infoDiv = document.getElementById('info');
const midiOutputSelect = document.getElementById('midi-outputs');

WebMidi.enable(function (err) {
  if (err) {
    console.log('WebMidi could not be enabled.', err);
    infoDiv.innerHTML = ('WebMidi could not be enabled', err);
  } else {
    console.log('WedMidi enabled!');
    for (index in WebMidi.outputs) {
      midiOutputSelect.options[midiOutputSelect.options.length] = new Option(WebMidi.outputs[index].name, index);
    }

    output = null;

    function getMidiOutput() {
      return output = WebMidi.getOutputByName(midiOutputSelect.options[midiOutputSelect.selectedIndex].text);
    }
    midiOutputSelect.addEventListener('change', getMidiOutput);

    function changeItDefault(x, y, a) {
      let val1 = a & 127;
      let val2 = a >> 7;
      console.log(val1, val2)
      output.setNonRegisteredParameter([x, y], [val2, val1], 1);      
      // let a = Math.floor(Math.random() * 64);      
      // let b = Math.floor(Math.random() * 127);
           
    }

    

    // All OSC
    const allOscCent = document.getElementById('all-osc-cent');
    const oscMode = document.getElementById('osc-mode');
    const semi = document.getElementById('semi');
    
    // OSC 1
    const osc1Type = document.getElementById('osc1-type');
    const osc1Cent = document.getElementById('osc1-cent');
    const osc1Keytrack = document.getElementById('osc1-keytrack');
    const osc1WaveScan = document.getElementById('osc1-wavescan');
    const soloOsc1WaveScan = document.getElementById('solo-osc1-wavescan');
    const osc1WaveScanWav1 = document.getElementById('osc1-wavescan-wav1');
    const osc1WaveScanWav2 = document.getElementById('osc1-wavescan-wav2');
    const osc1WaveScanWav3 = document.getElementById('osc1-wavescan-wav3');
    const osc1WaveScanWav4 = document.getElementById('osc1-wavescan-wav4');
    const osc1WaveScanWav5 = document.getElementById('osc1-wavescan-wav5');
    const osc1WaveScanWav6 = document.getElementById('osc1-wavescan-wav6');
    const osc1WaveScanWav7 = document.getElementById('osc1-wavescan-wav7');
    const osc1WaveScanWav8 = document.getElementById('osc1-wavescan-wav8');

    // OSC 2
    const osc2Type = document.getElementById('osc2-type');
    const osc2Cent = document.getElementById('osc2-cent');
    const osc2Keytrack = document.getElementById('osc2-keytrack');
    const osc2WaveScan = document.getElementById('osc2-wavescan');
    const soloOsc2WaveScan = document.getElementById('solo-osc2-wavescan');
    const osc2WaveScanWav1 = document.getElementById('osc2-wavescan-wav1');
    const osc2WaveScanWav2 = document.getElementById('osc2-wavescan-wav2');
    const osc2WaveScanWav3 = document.getElementById('osc2-wavescan-wav3');
    const osc2WaveScanWav4 = document.getElementById('osc2-wavescan-wav4');
    const osc2WaveScanWav5 = document.getElementById('osc2-wavescan-wav5');
    const osc2WaveScanWav6 = document.getElementById('osc2-wavescan-wav6');
    const osc2WaveScanWav7 = document.getElementById('osc2-wavescan-wav7');
    const osc2WaveScanWav8 = document.getElementById('osc2-wavescan-wav8');

    // OSC 3
    const osc3Type = document.getElementById('osc3-type');
    const osc3Cent = document.getElementById('osc3-cent');
    const osc3Keytrack = document.getElementById('osc3-keytrack');



    // All MUTATORS
    const mutatorMode = document.getElementById('mutator-type');
    const mutatorSourcesFMLin = document.getElementById('mutator-sources-fm-lin');
    const mutatorSourcesOscSync = document.getElementById('mutator-sources-osc-sync');

    // MUTATOR 1
    const mutator1Ratio = document.getElementById('mutator1-ratio');
    const mutator1Depth = document.getElementById('mutator1-depth');
    const mutator1DryWet = document.getElementById('mutator1-dry-wet');
    const mutator1Feedback = document.getElementById('mutator1-feedback');
    const mutator1Window = document.getElementById('mutator1-window');
    const mutator1Warp1 = document.getElementById('mutator1-warp1');
    const mutator1Warp2 = document.getElementById('mutator1-warp2');
    const mutator1Warp3 = document.getElementById('mutator1-warp3');
    const mutator1Warp4 = document.getElementById('mutator1-warp4');
    const mutator1Warp5 = document.getElementById('mutator1-warp5');
    const mutator1Warp6 = document.getElementById('mutator1-warp6');
    const mutator1Warp7 = document.getElementById('mutator1-warp7');
    const mutator1Warp8 = document.getElementById('mutator1-warp8');

    // MUTATOR 2
    const mutator2Ratio = document.getElementById('mutator2-ratio');
    const mutator2Depth = document.getElementById('mutator2-depth');
    const mutator2DryWet = document.getElementById('mutator2-dry-wet');
    const mutator2Feedback = document.getElementById('mutator2-feedback');
    const mutator2Window = document.getElementById('mutator2-window');
    const mutator2Warp1 = document.getElementById('mutator2-warp1');
    const mutator2Warp2 = document.getElementById('mutator2-warp2');
    const mutator2Warp3 = document.getElementById('mutator2-warp3');
    const mutator2Warp4 = document.getElementById('mutator2-warp4');
    const mutator2Warp5 = document.getElementById('mutator2-warp5');
    const mutator2Warp6 = document.getElementById('mutator2-warp6');
    const mutator2Warp7 = document.getElementById('mutator2-warp7');
    const mutator2Warp8 = document.getElementById('mutator2-warp8');

    // MUTATOR 3
    const mutator3Ratio = document.getElementById('mutator3-ratio');
    const mutator3Depth = document.getElementById('mutator3-depth');
    const mutator3DryWet = document.getElementById('mutator3-dry-wet');
    const mutator3Feedback = document.getElementById('mutator3-feedback');
    const mutator3Window = document.getElementById('mutator3-window');
    const mutator3Warp1 = document.getElementById('mutator3-warp1');
    const mutator3Warp2 = document.getElementById('mutator3-warp2');
    const mutator3Warp3 = document.getElementById('mutator3-warp3');
    const mutator3Warp4 = document.getElementById('mutator3-warp4');
    const mutator3Warp5 = document.getElementById('mutator3-warp5');
    const mutator3Warp6 = document.getElementById('mutator3-warp6');
    const mutator3Warp7 = document.getElementById('mutator3-warp7');
    const mutator3Warp8 = document.getElementById('mutator3-warp8');

    // MUTATOR 4
    const mutator4Ratio = document.getElementById('mutator4-ratio');
    const mutator4Depth = document.getElementById('mutator4-depth');
    const mutator4DryWet = document.getElementById('mutator4-dry-wet');
    const mutator4Feedback = document.getElementById('mutator4-feedback');
    const mutator4Window = document.getElementById('mutator4-window');
    const mutator4Warp1 = document.getElementById('mutator4-warp1');
    const mutator4Warp2 = document.getElementById('mutator4-warp2');
    const mutator4Warp3 = document.getElementById('mutator4-warp3');
    const mutator4Warp4 = document.getElementById('mutator4-warp4');
    const mutator4Warp5 = document.getElementById('mutator4-warp5');
    const mutator4Warp6 = document.getElementById('mutator4-warp6');
    const mutator4Warp7 = document.getElementById('mutator4-warp7');
    const mutator4Warp8 = document.getElementById('mutator4-warp8');

    // RING-NOISE
    const typeOfNoise = document.getElementById('type-of-noise');
    const rm12Depth = document.getElementById('rm12-depth');
    const signalSourceForRM = document.getElementById('signal-source-for-rm');

    
    // MIX
    const mixerSolo = document.getElementById('mixer-solo');
    const osc1Vol = document.getElementById('osc1-vol');
    const osc1Pan = document.getElementById('osc1-pan');
    const osc1Filter = document.getElementById('osc1-filter');
    const osc2Vol = document.getElementById('osc2-vol');
    const osc2Pan = document.getElementById('osc2-pan');
    const osc2Filter = document.getElementById('osc2-filter');
    const osc3Vol = document.getElementById('osc3-vol');
    const osc3Pan = document.getElementById('osc3-pan');
    const osc3Filter = document.getElementById('osc3-filter');
    const noiseVol = document.getElementById('noise-vol');
    const noisePan = document.getElementById('noise-pan');
    const noiseFilter = document.getElementById('noise-filter');
    const rm12Vol = document.getElementById('rm12-vol');
    const rm12Pan = document.getElementById('rm12-pan');
    const rm12Filter = document.getElementById('rm12-filter');
    const filterRouting = document.getElementById('filter-routing');


    // FILTER 1    
    const filter1PositionOfDrive = document.getElementById('filter1-position-of-drive');
    const filter1Cutoff = document.getElementById('filter1-cutoff'); 
    const filter1Drive =  document.getElementById('filter1-drive');
    const filter1Res = document.getElementById('filter1-res');
    const filter1Special = document.getElementById('filter1-special');
    const filter1Keytrack = document.getElementById('filter1-keytrack');
    const filter1LFO1Amt = document.getElementById('filter1-lfo1-amt');
    const filter1VowelOrder = document.getElementById('filter1-vowel-order');
    const filter1Model = document.getElementById('filter1-model');
    const filter1VelEnv = document.getElementById('filter1-vel-env');
    const filter1EnvAmt = document.getElementById('filter1-env1-amt');

    // FILTER 2  
    const filter2PositionOfDrive = document.getElementById('filter2-position-of-drive');
    const filter2Cutoff = document.getElementById('filter2-cutoff');    
    const filter2Res = document.getElementById('filter2-res');
    const filter2Morph = document.getElementById('filter2-morph');
    const filter2Keytrack = document.getElementById('filter2-keytrack');
    const filter2LFO1Amt = document.getElementById('filter2-lfo1-amt');    
    const filter2VelEnv = document.getElementById('filter2-vel-env');
    const filter2EnvAmt = document.getElementById('filter2-env1-amt');
    const filter2Type = document.getElementById('filter2-type');

    // AMP                    
    const ampLevel = document.getElementById('amp-level');
    const ampVelEnv = document.getElementById('amp-vel-env');
    const ampLFO2Amt = document.getElementById('amp-lfo2-amt');

    // PRE-FX
    const preFXType = document.getElementById('pre-fx-type');
    const preFXPreset = document.getElementById('pre-fx-preset');
    const preFXMix = document.getElementById('pre-fx-mix');
    const preFXParam1 = document.getElementById('pre-fx-param1');
    const preFXParam2 = document.getElementById('pre-fx-param2');
    const preFXParam3 = document.getElementById('pre-fx-param3');
    const preFXParam4 = document.getElementById('pre-fx-param4');
    const preFXParam5 = document.getElementById('pre-fx-param5');
    const preFXSelectionType = document.getElementById('pre-fx-selection-type');

    // DELAY    
    const delayBPMSync = document.getElementById('delay-bpm-sync');
    const delayDryWet = document.getElementById('delay-dry-wet');
    const delayFeedback = document.getElementById('delay-feedback');
    const delayFeedtone = document.getElementById('delay-feedtone');
    const delayTime = document.getElementById('delay-time');
    const delayType = document.getElementById('delay-type');
    const delayWetTone = document.getElementById('delay-wet-tone');

    // REVERB
    const reverbDryWet = document.getElementById('reverb-dry-wet');
    const reverbHiDamp = document.getElementById('reverb-hi-damp');
    const reverbLoDamp = document.getElementById('reverb-lo-damp');
    const reverbPreDelay = document.getElementById('reverb-predelay');
    const reverbTime = document.getElementById('reverb-time');
    const reverbTone = document.getElementById('reverb-tone');
    const reverbType = document.getElementById('reverb-type');
        
    // POST-FX    
    const postFXType = document.getElementById('post-fx-type');
    const postFXPreset = document.getElementById('post-fx-preset');
    const postFXMix = document.getElementById('post-fx-mix');
    const postFXParam1 = document.getElementById('post-fx-param1');
    const postFXParam2 = document.getElementById('post-fx-param2');
    const postFXParam3 = document.getElementById('post-fx-param3');
    const postFXParam4 = document.getElementById('post-fx-param4');
    const postFXParam5 = document.getElementById('post-fx-param5');
    const postFXSidechainType = document.getElementById('post-fx-sidechain-type');
    
    
    


    
    
    
    
               
    
    
    


    ////////////////

    
    // // All OSC
    allOscCent.addEventListener('input', function(){changeItDefault(65, 4, allOscCent.value)}); // [0, 0] = 8192
    // oscMode.addEventListener('input', function(){changeIt(63, 24, oscMode.value)}); // Check manual
    // semi.addEventListener('input', function(){changeIt(63, 17, 64, 0)}, false); // Check manual
    
    // // OSC 1
    osc1Type.addEventListener('input', function(){changeIt(63, 25, osc1Type.value)}); // 0-218 / 1, 90
    // osc1Cent.addEventListener('input', function(){changeIt(65, 01, 64, 0)}, false); // Check manual
    // osc1Keytrack.addEventListener('input', function(){changeIt(63, 84, 1, 0)}, false); // 0-200 / 1, 72
    osc1WaveScan.addEventListener('input', function(){changeItDefault(65, 42, osc1WaveScan.value)});
    // soloOsc1WaveScan.addEventListener('input', function(){changeIt(63, 27, 0, 0)}, false); // Check manual
    osc1WaveScanWav1.addEventListener('input', function(){changeItDefault(63, 96, osc1WaveScanWav1.value)}); // 0-218 / 1, 90
    osc1WaveScanWav2.addEventListener('input', function(){changeItDefault(63, 97, osc1WaveScanWav2.value)}); // 0-218 / 1, 90
    osc1WaveScanWav3.addEventListener('input', function(){changeItDefault(63, 98, osc1WaveScanWav3.value)}); // 0-218 / 1, 90
    osc1WaveScanWav4.addEventListener('input', function(){changeItDefault(63, 99, osc1WaveScanWav4.value)}); // 0-218 / 1, 90
    osc1WaveScanWav5.addEventListener('input', function(){changeItDefault(63, 100, osc1WaveScanWav5.value)}); // 0-218 / 1, 90
    osc1WaveScanWav6.addEventListener('input', function(){changeItDefault(63, 101, osc1WaveScanWav6.value)}); // 0-218 / 1, 90
    osc1WaveScanWav7.addEventListener('input', function(){changeItDefault(63, 102, osc1WaveScanWav7.value)}); // 0-218 / 1, 90
    osc1WaveScanWav8.addEventListener('input', function(){changeItDefault(63, 103, osc1WaveScanWav8.value)}); // 0-218 / 1, 90

    // // OSC 2
    osc2Type.addEventListener('input', function(){changeIt(63, 26, osc2Type.value)}); // 0-218 / 1, 90
    // osc2Cent.addEventListener('input', function(){changeIt(65, 02, 64, 0)}, false); // Check manual
    // osc2Keytrack.addEventListener('input', function(){changeIt(63, 85, 1, 0)}, false); // 0-200 / 1, 72
    osc2WaveScan.addEventListener('input', function(){changeItDefault(65, 43, osc2WaveScan.value)});
    // soloOsc2WaveScan.addEventListener('input', function(){changeIt(63, 28, 0, 0)}, false); // Check manual
    osc2WaveScanWav1.addEventListener('input', function(){changeItDefault(63, 104, osc2WaveScanWav1.value)}); // 0-218 / 1, 90
    osc2WaveScanWav2.addEventListener('input', function(){changeItDefault(63, 105, osc2WaveScanWav2.value)}); // 0-218 / 1, 90
    osc2WaveScanWav3.addEventListener('input', function(){changeItDefault(63, 106, osc2WaveScanWav3.value)}); // 0-218 / 1, 90
    osc2WaveScanWav4.addEventListener('input', function(){changeItDefault(63, 107, osc2WaveScanWav4.value)}); // 0-218 / 1, 90
    osc2WaveScanWav5.addEventListener('input', function(){changeItDefault(63, 108, osc2WaveScanWav5.value)}); // 0-218 / 1, 90
    osc2WaveScanWav6.addEventListener('input', function(){changeItDefault(63, 109, osc2WaveScanWav6.value)}); // 0-218 / 1, 90
    osc2WaveScanWav7.addEventListener('input', function(){changeItDefault(63, 110, osc2WaveScanWav7.value)}); // 0-218 / 1, 90
    osc2WaveScanWav8.addEventListener('input', function(){changeItDefault(63, 111, osc2WaveScanWav8.value)}); // 0-218 / 1, 90

    
    // // OSC 3
    // osc3Type.addEventListener('input', function(){changeIt(63,  13, 0, 0)}, false); // 0-218 / 1, 90
    // osc3Cent.addEventListener('input', function(){changeIt(65, 03, 0, 0)}, false); // Check manual
    // osc3Keytrack.addEventListener('input', function(){changeIt(63, 86, 0, 0)}, false); // 0-200 / 1, 72


    ////////////////////////

    // All MUTATORS      
    // mutatorMode.addEventListener('input', function(){changeIt(63, 33, mutatorMode.value)});
    // mutatorSourcesFMLin.addEventListener('input', function(){changeIt(63, 36, mutatorMode.value)});
    // mutatorSourcesOscSync.addEventListener('input', function(){changeIt(63, 34, mutatorMode.value)});

    // // MUTATOR 1
    mutator1Ratio.addEventListener('input', function(){changeItDefault(65, 44, mutator1Ratio.value)}); 
    mutator1Depth.addEventListener('input', function(){changeItDefault(64, 31, mutator1Depth.value)}); 
    mutator1DryWet.addEventListener('input', function(){changeItDefault(64, 34, mutator1DryWet.value)}); 
    mutator1Feedback.addEventListener('input', function(){changeItDefault(64, 37, mutator1Feedback.value)});
    mutator1Window.addEventListener('input', function(){changeItDefault(64, 28, mutator1Window.value)}); 
    mutator1Warp1.addEventListener('input', function(){changeItDefault(64, 96, mutator1Warp1.value)}); 
    mutator1Warp2.addEventListener('input', function(){changeItDefault(64, 97, mutator1Warp2.value)}); 
    mutator1Warp3.addEventListener('input', function(){changeItDefault(64, 98, mutator1Warp3.value)}); 
    mutator1Warp4.addEventListener('input', function(){changeItDefault(64, 99, mutator1Warp4.value)}); 
    mutator1Warp5.addEventListener('input', function(){changeItDefault(64, 100, mutator1Warp5.value)}); 
    mutator1Warp6.addEventListener('input', function(){changeItDefault(64, 101, mutator1Warp6.value)}); 
    mutator1Warp7.addEventListener('input', function(){changeItDefault(64, 102, mutator1Warp7.value)}); 
    mutator1Warp8.addEventListener('input', function(){changeItDefault(64, 103, mutator1Warp8.value)});

    // // MUTATOR 2
    mutator2Ratio.addEventListener('input', function(){changeItDefault(65, 45, mutator2Ratio.value)}); 
    mutator2Depth.addEventListener('input', function(){changeItDefault(64, 32, mutator2Depth.value)}); 
    mutator2DryWet.addEventListener('input', function(){changeItDefault(64, 35, mutator2DryWet.value)}); 
    mutator2Feedback.addEventListener('input', function(){changeItDefault(64, 38, mutator2Feedback.value)});
    mutator2Window.addEventListener('input', function(){changeItDefault(64, 29, mutator2Window.value)}); 
    mutator2Warp1.addEventListener('input', function(){changeItDefault(64, 104, mutator2Warp1.value)}); 
    mutator2Warp2.addEventListener('input', function(){changeItDefault(64, 105, mutator2Warp2.value)}); 
    mutator2Warp3.addEventListener('input', function(){changeItDefault(64, 106, mutator2Warp3.value)}); 
    mutator2Warp4.addEventListener('input', function(){changeItDefault(64, 107, mutator2Warp4.value)}); 
    mutator2Warp5.addEventListener('input', function(){changeItDefault(64, 108, mutator2Warp5.value)}); 
    mutator2Warp6.addEventListener('input', function(){changeItDefault(64, 109, mutator2Warp6.value)}); 
    mutator2Warp7.addEventListener('input', function(){changeItDefault(64, 110, mutator2Warp7.value)}); 
    mutator2Warp8.addEventListener('input', function(){changeItDefault(64, 111, mutator2Warp8.value)});

    // // MUTATOR 3
    mutator3Ratio.addEventListener('input', function(){changeItDefault(65, 46, mutator3Ratio.value)}); 
    mutator3Depth.addEventListener('input', function(){changeItDefault(64, 31, mutator3Depth.value)}); 
    mutator3DryWet.addEventListener('input', function(){changeItDefault(64, 36, mutator3DryWet.value)}); 
    mutator3Feedback.addEventListener('input', function(){changeItDefault(64, 39, mutator3Feedback.value)});
    mutator3Window.addEventListener('input', function(){changeItDefault(64, 30, mutator3Window.value)}); 
    mutator3Warp1.addEventListener('input', function(){changeItDefault(64, 112, mutator3Warp1.value)}); 
    mutator3Warp2.addEventListener('input', function(){changeItDefault(64, 113, mutator3Warp2.value)}); 
    mutator3Warp3.addEventListener('input', function(){changeItDefault(64, 114, mutator3Warp3.value)}); 
    mutator3Warp4.addEventListener('input', function(){changeItDefault(64, 115, mutator3Warp4.value)}); 
    mutator3Warp5.addEventListener('input', function(){changeItDefault(64, 116, mutator3Warp5.value)}); 
    mutator3Warp6.addEventListener('input', function(){changeItDefault(64, 117, mutator3Warp6.value)}); 
    mutator3Warp7.addEventListener('input', function(){changeItDefault(64, 118, mutator3Warp7.value)}); 
    mutator3Warp8.addEventListener('input', function(){changeItDefault(64, 119, mutator3Warp8.value)});

    // // MUTATOR 4
    mutator4Ratio.addEventListener('input', function(){changeItDefault(65, 47, mutator4Ratio.value)}); 
    mutator4Depth.addEventListener('input', function(){changeItDefault(64, 22, mutator4Depth.value)}); 
    mutator4DryWet.addEventListener('input', function(){changeItDefault(64, 23, mutator4DryWet.value)}); 
    mutator4Feedback.addEventListener('input', function(){changeItDefault(64, 27, mutator4Feedback.value)});
    mutator4Window.addEventListener('input', function(){changeItDefault(64, 26, mutator4Window.value)}); 
    mutator4Warp1.addEventListener('input', function(){changeItDefault(64, 120, mutator4Warp1.value)}); 
    mutator4Warp2.addEventListener('input', function(){changeItDefault(64, 121, mutator4Warp2.value)}); 
    mutator4Warp3.addEventListener('input', function(){changeItDefault(64, 122, mutator4Warp3.value)}); 
    mutator4Warp4.addEventListener('input', function(){changeItDefault(64, 123, mutator4Warp4.value)}); 
    mutator4Warp5.addEventListener('input', function(){changeItDefault(64, 124, mutator4Warp5.value)}); 
    mutator4Warp6.addEventListener('input', function(){changeItDefault(64, 125, mutator4Warp6.value)}); 
    mutator4Warp7.addEventListener('input', function(){changeItDefault(64, 126, mutator4Warp7.value)}); 
    mutator4Warp8.addEventListener('input', function(){changeItDefault(64, 127, mutator4Warp8.value)});

    // RING-NOISE
    // typeOfNoise.addEventListener('input', function(){changeItDefault(63, 39, typeOfNoise.value)});
    rm12Depth.addEventListener('input', function(){changeItDefault(64, 03, rm12Depth.value)});
    // signalSourceForRM.addEventListener('input', function(){changeItDefault(63, 38, signalSourceForRM.value)});
    
    // MIX
    // mixerSolo.addEventListener('input', function(){changeItDefault(63, 37, mixerSolo.value)});
    osc1Vol.addEventListener('input', function(){changeItDefault(64, 07, osc1Vol.value)});
    osc1Pan.addEventListener('input', function(){changeItDefault(64, 08, osc1Pan.value)});
    osc1Filter.addEventListener('input', function(){changeItDefault(64, 49, osc1Filter.value)});
    osc2Vol.addEventListener('input', function(){changeItDefault(64, 09, osc2Vol.value)});
    osc2Pan.addEventListener('input', function(){changeItDefault(64, 10, osc2Pan.value)});
    osc2Filter.addEventListener('input', function(){changeItDefault(64, 50, osc2Filter.value)});
    osc3Vol.addEventListener('input', function(){changeItDefault(64, 11, osc3Vol.value)});
    osc3Pan.addEventListener('input', function(){changeItDefault(64, 12, osc3Pan.value)});
    osc3Filter.addEventListener('input', function(){changeItDefault(64, 51, osc3Filter.value)});
    noiseVol.addEventListener('input', function(){changeItDefault(64, 13, noiseVol.value)});
    noisePan.addEventListener('input', function(){changeItDefault(64, 14, noisePan.value)});
    noiseFilter.addEventListener('input', function(){changeItDefault(64, 52, noiseFilter.value)});
    rm12Vol.addEventListener('input', function(){changeItDefault(64, 61, rm12Vol.value)});
    rm12Pan.addEventListener('input', function(){changeItDefault(64, 04, rm12Pan.value)});
    rm12Filter.addEventListener('input', function(){changeItDefault(64, 53, rm12Filter.value)});
    // filterRouting.addEventListener('input', function(){changeItDefault(64, 44, filterRouting.value)});

    // FILTER 1    
    // filter1PositionOfDrive.addEventListener('input', function(){changeItDefault(63, 41, filter1PositionOfDrive.value)});
    filter1Cutoff.addEventListener('input', function(){changeItDefault(64, 40, filter1Cutoff.value)});
    filter1Drive.addEventListener('input', function(){changeItDefault(64, 43, filter1Drive.value)});
    filter1Res.addEventListener('input', function(){changeItDefault(64, 41, filter1Res.value)});
    filter1Special.addEventListener('input', function(){changeItDefault(64, 42, filter1Special.value)});
    filter1Keytrack.addEventListener('input', function(){changeItDefault(65, 102, filter1Keytrack.value)});
    filter1LFO1Amt.addEventListener('input', function(){changeItDefault(65, 96, filter1LFO1Amt.value)});
    // filter1VowelOrder.addEventListener('input', function(){changeItDefault(63, 46, filter1VowelOrder.value)});
    // filter1Model.addEventListener('input', function(){changeItDefault(63, 40, filter1Model.value)});
    filter1VelEnv.addEventListener('input', function(){changeItDefault(65, 105, filter1VelEnv.value)});
    filter1EnvAmt.addEventListener('input', function(){changeItDefault(65, 97, filter1EnvAmt.value)});

    // FILTER 2  
    // filter2PositionOfDrive.addEventListener('input', function(){changeItDefault(63, 43, filter2PositionOfDrive.value)});
    filter2Cutoff.addEventListener('input', function(){changeItDefault(64, 44, filter2Cutoff.value)});
    filter2Res.addEventListener('input', function(){changeItDefault(64, 45, filter2Res.value)});
    filter2Morph.addEventListener('input', function(){changeItDefault(64, 46, filter2Morph.value)});
    filter2Keytrack.addEventListener('input', function(){changeItDefault(65, 103, filter2Keytrack.value)});
    filter2LFO1Amt.addEventListener('input', function(){changeItDefault(65, 98, filter2LFO1Amt.value)});
    filter2VelEnv.addEventListener('input', function(){changeItDefault(65, 106, filter2VelEnv.value)});
    filter2EnvAmt.addEventListener('input', function(){changeItDefault(65, 99, filter2EnvAmt.value)});
    // filter2Type.addEventListener('input', function(){changeItDefault(63, 35, filter2Type.value)});
    
    // AMP                    
    ampLevel.addEventListener('input', function(){changeItDefault(64, 02, ampLevel.value)});
    ampVelEnv.addEventListener('input', function(){changeItDefault(65, 107, ampVelEnv.value)});
    ampLFO2Amt.addEventListener('input', function(){changeItDefault(65, 100, ampLFO2Amt.value)});

    // PRE-FX
    preFXType.addEventListener('input', function(){changeItDefault(59, 127, preFXType.value)});
    preFXPreset.addEventListener('input', function(){changeItDefault(59, 0, preFXPreset.value)});
    preFXMix.addEventListener('input', function(){changeItDefault(65, 110, preFXMix.value)});
    preFXParam1.addEventListener('input', function(){changeItDefault(65, 11, preFXParam1.value)});
    preFXParam2.addEventListener('input', function(){changeItDefault(65, 112, preFXParam2.value)});
    preFXParam3.addEventListener('input', function(){changeItDefault(59, 48, preFXParam3.value)});
    preFXParam4.addEventListener('input', function(){changeItDefault(59, 64, preFXParam4.value)});
    preFXParam5.addEventListener('input', function(){changeItDefault(59, 80, preFXParam5.value)});
    preFXSelectionType.addEventListener('input', function(){changeItDefault(59, 115, preFXSelectionType.value)});

    // DELAY    
    // delayBPMSync.addEventListener('input', function(){changeItDefault(59, 112, delayBPMSync.value)});
    delayDryWet.addEventListener('input', function(){changeItDefault(65, 120, delayDryWet.value)});
    delayFeedback.addEventListener('input', function(){changeItDefault(65, 117, delayFeedback.value)});
    delayFeedtone.addEventListener('input', function(){changeItDefault(65, 118, delayFeedtone.value)});
    delayTime.addEventListener('input', function(){changeItDefault(65, 116, delayTime.value)});
    // delayType.addEventListener('input', function(){changeItDefault(59, 113, delayType.value)});
    delayWetTone.addEventListener('input', function(){changeItDefault(65, 119, delayWetTone.value)});

    // REVERB
    reverbDryWet.addEventListener('input', function(){changeItDefault(65, 126, reverbDryWet.value)});
    reverbHiDamp.addEventListener('input', function(){changeItDefault(65, 123, reverbHiDamp.value)});
    reverbLoDamp.addEventListener('input', function(){changeItDefault(65, 124, reverbLoDamp.value)});
    reverbPreDelay.addEventListener('input', function(){changeItDefault(65, 125, reverbPreDelay.value)});
    reverbTime.addEventListener('input', function(){changeItDefault(65, 121, reverbTime.value)});
    reverbTone.addEventListener('input', function(){changeItDefault(65, 122, reverbTone.value)});
    reverbType.addEventListener('input', function(){changeItDefault(60, 114, reverbType.value)});

    // POST-FX    
    postFXType.addEventListener('input', function(){changeItDefault(60, 127, postFXType.value)});
    postFXPreset.addEventListener('input', function(){changeItDefault(60, 0, postFXPreset.value)});
    postFXMix.addEventListener('input', function(){changeItDefault(65, 113, postFXMix.value)});
    postFXParam1.addEventListener('input', function(){changeItDefault(65, 114, postFXParam1.value)});
    postFXParam2.addEventListener('input', function(){changeItDefault(65, 115, postFXParam2.value)});
    postFXParam3.addEventListener('input', function(){changeItDefault(60, 48, postFXParam3.value)});
    postFXParam4.addEventListener('input', function(){changeItDefault(60, 64, postFXParam4.value)});
    postFXParam5.addEventListener('input', function(){changeItDefault(60, 80, postFXParam5.value)});
    postFXSidechainType.addEventListener('input', function(){changeItDefault(60, 115, postFXSidechainType.value)});
        
  }
});
