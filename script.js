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
            
  }
});
