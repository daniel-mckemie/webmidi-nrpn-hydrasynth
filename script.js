const infoDiv = document.getElementById('info');
const midiOutputSelect = document.getElementById('midi-outputs');
// const midiInputSelect = document.getElementById('midi-inputs');







////////////////////////////////////////////////////////////////////////////////

WebMidi.enable(function (err) {
  if (err) {
    console.log('WebMidi could not be enabled.', err);
    infoDiv.innerHTML = ('WebMidi could not be enabled', err);
  } else {
    console.log('WedMidi enabled!');
    // for (index in WebMidi.outputs) {
    //   midiOutputSelect.options[midiOutputSelect.options.length] = new Option(WebMidi.outputs[index].name, index);
    // }
    // for (index in WebMidi.inputs) {
    //   midiInputSelect.options[midiInputSelect.options.length] = new Option(WebMidi.inputs[index].name, index);      
    // }

    output = WebMidi.getOutputByName('HYDRASYNTH DR');;
    input = WebMidi.getInputByName('HYDRASYNTH DR');

    // function getMidiOutput() {
    //   return output = WebMidi.getOutputByName(midiOutputSelect.options[midiOutputSelect.selectedIndex].text);
    // }
    // midiOutputSelect.addEventListener('change', getMidiOutput);

    function changeItDefault(x, y, a) {
      let val1 = a & 127;
      let val2 = a >> 7;      
      output.setNonRegisteredParameter([x, y], [val2, val1], 1);
      // let a = Math.floor(Math.random() * 64);      
      // let b = Math.floor(Math.random() * 127);           
    }
    
      let nrpnArray = [0,0,0,0]; // CCs [99,98,6,38]
      // Listen to NRPN message on all channels
      
      // input.addListener('controlchange', 'all',
      //   function (e) {
      //     if (e.controller.number === 99) {
      //       nrpnArray[0] = e.value;
      //       changePage(nrpnArray);
      //     }
      //     if (e.controller.number === 98) {
      //       nrpnArray[1] = e.value;
      //       changePage(nrpnArray);
      //     }
      //     if (e.controller.number === 6) {
      //       nrpnArray[2] = e.value;
      //       changePage(nrpnArray);
      //     }
      //     if (e.controller.number === 38) {
      //       nrpnArray[3] = e.value;
      //       changePage(nrpnArray);
      //     }          
      //   }          
      // );

      function calculate(x, y) {
        let newParam = (x << 7) + (y & 0xff);
        
      }

      function changePage(arr) {           
        let newValue = (arr[2] << 7) + (arr[3] & 0xff);        
        let newParam = (arr[0] << 7) + (arr[1] & 0xff);
        // let val1 = arr[0]
        // let val2 = arr[1];

        // INPUT MONITORING SENDING
        switch(newParam) {
          case (8218):
            allParams.allOscCent.value = newValue;            
            break;
          case (8089):
            allParams.osc1Type.value = newValue;
            break;
          case (8321):
            allParams.osc1Cent.value = newValue;
            break;
          case (8148):
            allParams.osc1Keytrack.value = newValue;
            break;
          case (8362):
            allParams.osc1WaveScan.value = newValue;
            break;
          case (8160):
            allParams.osc1WaveScanWav1.value = newValue;
            break;
          case (8161):
            allParams.osc1WaveScanWav2.value = newValue;
            break;
          case (8162):
            allParams.osc1WaveScanWav3.value = newValue;
            break;
          case (8163):
            allParams.osc1WaveScanWav4.value = newValue;
            break;
          case (8164):
            allParams.osc1WaveScanWav5.value = newValue;
            break;
          case (8165):
            allParams.osc1WaveScanWav6.value = newValue;
            break;
          case (8166):
            allParams.osc1WaveScanWav7.value = newValue;
            break;
          case (8167):
            allParams.osc1WaveScanWav8.value = newValue;
            break;
          case (8890):
            allParams.osc2Type.value = newValue;
            break;
          case (8322):
            allParams.osc2Cent.value = newValue;
            break;
          case (8149):
            allParams.osc2Keytrack.value = newValue;
            break;
          case (8168):
            allParams.osc2WaveScan.value = newValue;
            break;
          case (8168):
            allParams.osc2WaveScanWav1.value = newValue;
            break;
          case (8169):
            allParams.osc2WaveScanWav2.value = newValue;
            break;
          case (8170):
            allParams.osc2WaveScanWav3.value = newValue;
            break;
          case (8171):
            allParams.osc2WaveScanWav4.value = newValue;
            break;
          case (8172):
            allParams.osc2WaveScanWav5.value = newValue;
            break;
          case (8173):
            allParams.osc2WaveScanWav6.value = newValue;
            break;
          case (8174):
            allParams.osc2WaveScanWav7.value = newValue;
            break;
          case (8175):
            allParams.osc2WaveScanWav8.value = newValue;
            break;
          case (8077):
            allParams.osc3Type.value = newValue;
            break;
          case (8323):
            allParams.osc3Cent.value = newValue;
            break;
          case (8150):
            allParams.osc3Keytrack.value = newValue;
            break;
          case (8364):
            allParams.mutator1Ratio.value = newValue;
            break;
          case (8223):
            allParams.mutator1Depth.value = newValue;
            break;
          case (8226):
            allParams.mutator1DryWet.value = newValue;
            break;
          case (8229):
            allParams.mutator1Feedback.value = newValue;
            break;
          case (8220):
            allParams.mutator1Window.value = newValue;
            break;
          case (8288):
            allParams.mutator1Warp1.value = newValue;
            break;
          case (8299):
            allParams.mutator1Warp2.value = newValue;
            break;
          case (8300):
            allParams.mutator1Warp3.value = newValue;
            break;
          case (8301):
            allParams.mutator1Warp4.value = newValue;
            break;
          case (8302):
            allParams.mutator1Warp5.value = newValue;
            break;
          case (8303):
            allParams.mutator1Warp6.value = newValue;
            break;
          case (8304):
            allParams.mutator1Warp7.value = newValue;
            break;
          case (8305):
            allParams.mutator1Warp8.value = newValue;
            break;
          case (8365):
            allParams.mutator2Ratio.value = newValue;
            break;
          case (8224):
            allParams.mutator2Depth.value = newValue;
            break;
          case (8227):
            allParams.mutator2DryWet.value = newValue;
            break;
          case (8230):
            allParams.mutator2Feedback.value = newValue;
            break;
          case (8221):
            allParams.mutator2Window.value = newValue;
            break;
          case (8296):
            allParams.mutator2Warp1.value = newValue;
            break;
          case (8297):
            allParams.mutator2Warp2.value = newValue;
            break;
          case (8298):
            allParams.mutator2Warp3.value = newValue;
            break;
          case (8299):
            allParams.mutator2Warp4.value = newValue;
            break;
          case (8300):
            allParams.mutator2Warp5.value = newValue;
            break;
          case (8301):
            allParams.mutator2Warp6.value = newValue;
            break;
          case (8302):
            allParams.mutator2Warp7.value = newValue;
            break;
          case (8303):
            allParams.mutator2Warp8.value = newValue;
            break;
          case (8366):
            allParams.mutator3Ratio.value = newValue;
            break;
          case (8225):
            allParams.mutator3Depth.value = newValue;
            break;
          case (8228):
            allParams.mutator3DryWet.value = newValue;
            break;
          case (8231):
            allParams.mutator3Feedback.value = newValue;
            break;
          case (8222):
            allParams.mutator3Window.value = newValue;
            break;
          case (8304):
            allParams.mutator3Warp1.value = newValue;
            break;
          case (8305):
            allParams.mutator3Warp2.value = newValue;
            break;
          case (8306):
            allParams.mutator3Warp3.value = newValue;
            break;
          case (8307):
            allParams.mutator3Warp4.value = newValue;
            break;
          case (8308):
            allParams.mutator3Warp5.value = newValue;
            break;
          case (8309):
            allParams.mutator3Warp6.value = newValue;
            break;
          case (8310):
            allParams.mutator3Warp7.value = newValue;
            break;
          case (8311):
            allParams.mutator3Warp8.value = newValue;
            break;
          case (8367):
            allParams.mutator4Ratio.value = newValue;
            break;
          case (8214):
            allParams.mutator4Depth.value = newValue;
            break;
          case (8215):
            allParams.mutator4DryWet.value = newValue;
            break;
          case (8219):
            allParams.mutator4Feedback.value = newValue;
            break;
          case (8218):
            allParams.mutator4Window.value = newValue;
            break;
          case (8312):
            allParams.mutator4Warp1.value = newValue;
            break;
          case (8313):
            allParams.mutator4Warp2.value = newValue;
            break;
          case (8314):
            allParams.mutator4Warp3.value = newValue;
            break;
          case (8315):
            allParams.mutator4Warp4.value = newValue;
            break;
          case (8316):
            allParams.mutator4Warp5.value = newValue;
            break;
          case (8317):
            allParams.mutator4Warp6.value = newValue;
            break;
          case (8318):
            allParams.mutator4Warp7.value = newValue;
            break;
          case (8319):
            allParams.mutator4Warp8.value = newValue;
            break;
          case (8195):
            allParams.rm12Depth.value = newValue;
            break;
          case (8199):
            allParams.osc1Vol.value = newValue;
            break;
          case (8200):
            allParams.osc1Pan.value = newValue;
            break;
          case (8241):
            allParams.osc1Filter.value = newValue;
            break;
          case (8201):
            allParams.osc2Vol.value = newValue;
            break;
          case (8202):
            allParams.osc2Pan.value = newValue;
            break;
          case (8242):
            allParams.osc2Filter.value = newValue;
            break;
          case (8203):
            allParams.osc3Vol.value = newValue;
            break;
          case (8204):
            allParams.osc3Pan.value = newValue;
            break;
          case (8243):
            allParams.osc3Filter.value = newValue;
            break;
          case (8205):
            allParams.noiseVol.value = newValue;
            break;
          case (8206):
            allParams.noisePan.value = newValue;
            break;
          case (8244):
            allParams.noiseFilter.value = newValue;
            break;
          case (8193):
            allParams.rm12Vol.value = newValue;
            break;
          case (8196):
            allParams.rm12Pan.value = newValue;
            break;
          case (8245):
            allParams.rm12Filter.value = newValue;
            break;
          case (8232):
            allParams.filter1Cutoff.value = newValue;
            break;
          case (8235):
            allParams.filter1Drive.value = newValue;
            break;
          case (8233):
            allParams.filter1Res.value = newValue;
            break;
          case (8234):
            allParams.filter1Special.value = newValue;
            break;
          case (8422):
            allParams.filter1Keytrack.value = newValue;
            break;
          case (8416):
            allParams.filter1LFO1Amt.value = newValue;
            break;
          case (8425):
            allParams.filter1VelEnv.value = newValue;
            break;
          case (8417):
            allParams.filter1EnvAmt.value = newValue;
            break;
          case (8236):
            allParams.filter2Cutoff.value = newValue;
            break;          
          case (8237):
            allParams.filter2Res.value = newValue;
            break;
          case (8238):
            allParams.filter2Morph.value = newValue;
            break;
          case (8423):
            allParams.filter2Keytrack.value = newValue;
            break;
          case (8418):
            allParams.filter2LFO1Amt.value = newValue;
            break;
          case (8426):
            allParams.filter2VelEnv.value = newValue;
            break;
          case (8419):
            allParams.filter2EnvAmt.value = newValue;
            break;
          case (8194):
            allParams.ampLevel.value = newValue;
            break;
          case (8427):
            allParams.ampVelEnv.value = newValue;
            break;
          case (8420):
            allParams.ampLFO2Amt.value = newValue;
            break;
          case (7679):
            allParams.preFXType.value = newValue;
            break;
          case (7552):
            allParams.preFXPreset.value = newValue;
            break;
          case (8430):
            allParams.preFXMix.value = newValue;
            break;
          case (8431):
            allParams.preFXParam1.value = newValue;
            break;
          case (8432):
            allParams.preFXParam2.value = newValue;
            break;
          case (7600):
            allParams.preFXParam3.value = newValue;
            break;
          case (7616):
            allParams.preFXParam4.value = newValue;
            break;
          case (7632):
            allParams.preFXParam5.value = newValue;
            break;
          case (7667):
            allParams.preFXSelectionType.value = newValue;
            break;
          case (8440):
            allParams.delayDryWet.value = newValue;
            break;
          case (8437):
            allParams.delayFeedback.value = newValue;
            break;
          case (8438):
            allParams.delayFeedtone.value = newValue;
            break;
          case (8436):
            allParams.delayTime.value = newValue;
            break;
          case (8439):
            allParams.delayWetTone.value = newValue;
            break;
          case (8446):
            allParams.reverbDryWet.value = newValue;
            break;
          case (8443):
            allParams.reverbHiDamp.value = newValue;
            break;
          case (8444):
            allParams.reverbLoDamp.value = newValue;
            break;
          case (8445):
            allParams.reverbPreDelay.value = newValue;
            break;
          case (8441):
            allParams.reverbTime.value = newValue;
            break;
          case (8442):
            allParams.reverbTone.value = newValue;
            break;
          case (7794):
            allParams.reverbType.value = newValue;
            break;
          case (7807):
            allParams.postFXType.value = newValue;
            break;
          case (7680):
            allParams.postFXPreset.value = newValue;
            break;
          case (8433):
            allParams.postFXMix.value = newValue;
            break;
          case (8434):
            allParams.postFXParam1.value = newValue;
            break;
          case (8435):
            allParams.preFXParam2.value = newValue;
            break;
          case (7728):
            allParams.postFXParam3.value = newValue;
            break;
          case (7744):
            allParams.postFXParam4.value = newValue;
            break;
          case (7760):
            allParams.postFXParam5.value = newValue;
            break;
          case (7795):
            allParams.postFXSidechainType.value = newValue;
            break;
          case (8331):
            allParams.lfo1Gain.value = newValue;
            break;
          case (8325):
            allParams.lfo1Rate.value = newValue;
            break;
          case (8112):
            allParams.lfo1Phase.value = newValue;
            break;
          case (8332):
            allParams.lfo2Gain.value = newValue;
            break;
          case (8326):
            allParams.lfo2Rate.value = newValue;
            break;
          case (8113):
            allParams.lfo2Phase.value = newValue;
            break;
          case (8333):
            allParams.lfo3Gain.value = newValue;
            break;
          case (8327):
            allParams.lfo3Rate.value = newValue;
            break;
          case (8114):
            allParams.lfo3Phase.value = newValue;
            break;
          case (8334):
            allParams.lfo4Gain.value = newValue;
            break;
          case (8328):
            allParams.lfo4Rate.value = newValue;
            break;
          case (8115):
            allParams.lfo4Phase.value = newValue;
            break;
          case (8335):
            allParams.lfo5Gain.value = newValue;
            break;
          case (8329):
            allParams.lfo5Rate.value = newValue;
            break;
          case (8116):
            allParams.lfo5Phase.value = newValue;
            break;
          case (8337):
            allParams.env1Att.value = newValue;
            break;
          case (8342):
            allParams.env1Hold.value = newValue;
            break;
          case (8347):
            allParams.env1Dec.value = newValue;
            break;
          case (8352):
            allParams.env1Sus.value = newValue;
            break;
          case (8357):
            allParams.env1Rel.value = newValue;
            break;
          case (8176):
            allParams.env1AttCurve.value = newValue;
            break;
          case (8181):
            allParams.env1DecCurve.value = newValue;
            break;
          case (8186):
            allParams.env1RelCurve.value = newValue;
            break;
          case (8338):
            allParams.env2Att.value = newValue;
            break;
          case (8343):
            allParams.env2Hold.value = newValue;
            break;
          case (8348):
            allParams.env2Dec.value = newValue;
            break;
          case (8353):
            allParams.env2Sus.value = newValue;
            break;
          case (8358):
            allParams.env2Rel.value = newValue;
            break;
          case (8177):
            allParams.env2AttCurve.value = newValue;
            break;
          case (8182):
            allParams.env2DecCurve.value = newValue;
            break;
          case (8187):
            allParams.env2RelCurve.value = newValue;
            break;
          case (8339):
            allParams.env3Att.value = newValue;
            break;
          case (8344):
            allParams.env3Hold.value = newValue;
            break;
          case (8349):
            allParams.env3Dec.value = newValue;
            break;
          case (8354):
            allParams.env3Sus.value = newValue;
            break;
          case (8359):
            allParams.env3Rel.value = newValue;
            break;
          case (8178):
            allParams.env3AttCurve.value = newValue;
            break;
          case (8183):
            allParams.env3DecCurve.value = newValue;
            break;
          case (8188):
            allParams.env3RelCurve.value = newValue;
            break;
          case (8340):
            allParams.env4Att.value = newValue;
            break;
          case (8345):
            allParams.env4Hold.value = newValue;
            break;
          case (8350):
            allParams.env4Dec.value = newValue;
            break;
          case (8355):
            allParams.env4Sus.value = newValue;
            break;
          case (8360):
            allParams.env4Rel.value = newValue;
            break;
          case (8179):
            allParams.env4AttCurve.value = newValue;
            break;
          case (8184):
            allParams.env4DecCurve.value = newValue;
            break;
          case (8189):
            allParams.env4RelCurve.value = newValue;
            break;
          case (8341):
            allParams.env5Att.value = newValue;
            break;
          case (8346):
            allParams.env5Hold.value = newValue;
            break;
          case (8351):
            allParams.env5Dec.value = newValue;
            break;
          case (8356):
            allParams.env5Sus.value = newValue;
            break;
          case (8361):
            allParams.env5Rel.value = newValue;
            break;
          case (8180):
            allParams.env5AttCurve.value = newValue;
            break;
          case (8185):
            allParams.env5DecCurve.value = newValue;
            break;
          case (8190):
            allParams.env5RelCurve.value = newValue;
            break;
          case (8384):
            allParams.modMatrix1Depth.value = newValue;
            break;
          case (8385):
            allParams.modMatrix2Depth.value = newValue;
            break;
          case (8386):
            allParams.modMatrix3Depth.value = newValue;
            break;
          case (8387):
            allParams.modMatrix4Depth.value = newValue;
            break;
          case (8388):
            allParams.modMatrix5Depth.value = newValue;
            break;
          case (8389):
            allParams.modMatrix6Depth.value = newValue;
            break;
          case (8390):
            allParams.modMatrix7Depth.value = newValue;
            break;
          case (8391):
            allParams.modMatrix8Depth.value = newValue;
            break;
          case (8392):
            allParams.modMatrix9Depth.value = newValue;
            break;
          case (8393):
            allParams.modMatrix10Depth.value = newValue;
            break;
          case (8394):
            allParams.modMatrix11Depth.value = newValue;
            break;
          case (8395):
            allParams.modMatrix12Depth.value = newValue;
            break;
          case (8396):
            allParams.modMatrix13Depth.value = newValue;
            break;
          case (8397):
            allParams.modMatrix14Depth.value = newValue;
            break;
          case (8398):
            allParams.modMatrix15Depth.value = newValue;
            break;
          case (8399):
            allParams.modMatrix16Depth.value = newValue;
            break;
          case (8400):
            allParams.modMatrix17Depth.value = newValue;
            break;
          case (8401):
            allParams.modMatrix18Depth.value = newValue;
            break;
          case (8402):
            allParams.modMatrix19Depth.value = newValue;
            break;
          case (8403):
            allParams.modMatrix20Depth.value = newValue;
            break;
          case (8404):
            allParams.modMatrix21Depth.value = newValue;
            break;
          case (8405):
            allParams.modMatrix22Depth.value = newValue;
            break;
          case (8406):
            allParams.modMatrix23Depth.value = newValue;
            break;
          case (8407):
            allParams.modMatrix24Depth.value = newValue;
            break;
          case (8408):
            allParams.modMatrix25Depth.value = newValue;
            break;
          case (8409):
            allParams.modMatrix26Depth.value = newValue;
            break;
          case (8410):
            allParams.modMatrix27Depth.value = newValue;
            break;
          case (8411):
            allParams.modMatrix28Depth.value = newValue;
            break;
          case (8412):
            allParams.modMatrix29Depth.value = newValue;
            break;
          case (8413):
            allParams.modMatrix30Depth.value = newValue;
            break;
          case (8414):
            allParams.modMatrix31Depth.value = newValue;
            break;
          case (8415):
            allParams.modMatrix32Depth.value = newValue;
            break;
                                
        }                
      }

      
    






    /////////////////////

    let allParams = {
    // All OSC
    allOscCent: document.getElementById('all-osc-cent'),
    oscMode: document.getElementById('osc-mode'),
    semi: document.getElementById('semi'),
    

    // OSC 1
    osc1Type: document.getElementById('osc1-type'),
    osc1Cent: document.getElementById('osc1-cent'),
    osc1Keytrack: document.getElementById('osc1-keytrack'),
    osc1WaveScan: document.getElementById('osc1-wavescan'),
    soloOsc1WaveScan: document.getElementById('solo-osc1-wavescan'),
    osc1WaveScanWav1: document.getElementById('osc1-wavescan-wav1'),
    osc1WaveScanWav2: document.getElementById('osc1-wavescan-wav2'),
    osc1WaveScanWav3: document.getElementById('osc1-wavescan-wav3'),
    osc1WaveScanWav4: document.getElementById('osc1-wavescan-wav4'),
    osc1WaveScanWav5: document.getElementById('osc1-wavescan-wav5'),
    osc1WaveScanWav6: document.getElementById('osc1-wavescan-wav6'),
    osc1WaveScanWav7: document.getElementById('osc1-wavescan-wav7'),
    osc1WaveScanWav8: document.getElementById('osc1-wavescan-wav8'),

    // OSC 2
    osc2Type: document.getElementById('osc2-type'),
    osc2Cent: document.getElementById('osc2-cent'),
    osc2Keytrack: document.getElementById('osc2-keytrack'),
    osc2WaveScan: document.getElementById('osc2-wavescan'),
    soloOsc2WaveScan: document.getElementById('solo-osc2-wavescan'),
    osc2WaveScanWav1: document.getElementById('osc2-wavescan-wav1'),
    osc2WaveScanWav2: document.getElementById('osc2-wavescan-wav2'),
    osc2WaveScanWav3: document.getElementById('osc2-wavescan-wav3'),
    osc2WaveScanWav4: document.getElementById('osc2-wavescan-wav4'),
    osc2WaveScanWav5: document.getElementById('osc2-wavescan-wav5'),
    osc2WaveScanWav6: document.getElementById('osc2-wavescan-wav6'),
    osc2WaveScanWav7: document.getElementById('osc2-wavescan-wav7'),
    osc2WaveScanWav8: document.getElementById('osc2-wavescan-wav8'),

    // OSC 3
    osc3Type: document.getElementById('osc3-type'),
    osc3Cent: document.getElementById('osc3-cent'),
    osc3Keytrack: document.getElementById('osc3-keytrack'),

    // All MUTATORS
    mutatorMode: document.getElementById('mutator-type'),
    mutatorSourcesFMLin: document.getElementById('mutator-sources-fm-lin'),
    mutatorSourcesOscSync: document.getElementById('mutator-sources-osc-sync'),

    // MUTATOR 1
    mutator1Ratio: document.getElementById('mutator1-ratio'),
    mutator1Depth: document.getElementById('mutator1-depth'),
    mutator1DryWet: document.getElementById('mutator1-dry-wet'),
    mutator1Feedback: document.getElementById('mutator1-feedback'),
    mutator1Window: document.getElementById('mutator1-window'),
    mutator1Warp1: document.getElementById('mutator1-warp1'),
    mutator1Warp2: document.getElementById('mutator1-warp2'),
    mutator1Warp3: document.getElementById('mutator1-warp3'),
    mutator1Warp4: document.getElementById('mutator1-warp4'),
    mutator1Warp5: document.getElementById('mutator1-warp5'),
    mutator1Warp6: document.getElementById('mutator1-warp6'),
    mutator1Warp7: document.getElementById('mutator1-warp7'),
    mutator1Warp8: document.getElementById('mutator1-warp8'),

    // MUTATOR 2
    mutator2Ratio: document.getElementById('mutator2-ratio'),
    mutator2Depth: document.getElementById('mutator2-depth'),
    mutator2DryWet: document.getElementById('mutator2-dry-wet'),
    mutator2Feedback: document.getElementById('mutator2-feedback'),
    mutator2Window: document.getElementById('mutator2-window'),
    mutator2Warp1: document.getElementById('mutator2-warp1'),
    mutator2Warp2: document.getElementById('mutator2-warp2'),
    mutator2Warp3: document.getElementById('mutator2-warp3'),
    mutator2Warp4: document.getElementById('mutator2-warp4'),
    mutator2Warp5: document.getElementById('mutator2-warp5'),
    mutator2Warp6: document.getElementById('mutator2-warp6'),
    mutator2Warp7: document.getElementById('mutator2-warp7'),
    mutator2Warp8: document.getElementById('mutator2-warp8'),

    // MUTATOR 3
    mutator3Ratio: document.getElementById('mutator3-ratio'),
    mutator3Depth: document.getElementById('mutator3-depth'),
    mutator3DryWet: document.getElementById('mutator3-dry-wet'),
    mutator3Feedback: document.getElementById('mutator3-feedback'),
    mutator3Window: document.getElementById('mutator3-window'),
    mutator3Warp1: document.getElementById('mutator3-warp1'),
    mutator3Warp2: document.getElementById('mutator3-warp2'),
    mutator3Warp3: document.getElementById('mutator3-warp3'),
    mutator3Warp4: document.getElementById('mutator3-warp4'),
    mutator3Warp5: document.getElementById('mutator3-warp5'),
    mutator3Warp6: document.getElementById('mutator3-warp6'),
    mutator3Warp7: document.getElementById('mutator3-warp7'),
    mutator3Warp8: document.getElementById('mutator3-warp8'),

    // MUTATOR 4
    mutator4Ratio: document.getElementById('mutator4-ratio'),
    mutator4Depth: document.getElementById('mutator4-depth'),
    mutator4DryWet: document.getElementById('mutator4-dry-wet'),
    mutator4Feedback: document.getElementById('mutator4-feedback'),
    mutator4Window: document.getElementById('mutator4-window'),
    mutator4Warp1: document.getElementById('mutator4-warp1'),
    mutator4Warp2: document.getElementById('mutator4-warp2'),
    mutator4Warp3: document.getElementById('mutator4-warp3'),
    mutator4Warp4: document.getElementById('mutator4-warp4'),
    mutator4Warp5: document.getElementById('mutator4-warp5'),
    mutator4Warp6: document.getElementById('mutator4-warp6'),
    mutator4Warp7: document.getElementById('mutator4-warp7'),
    mutator4Warp8: document.getElementById('mutator4-warp8'),

    // RING-NOISE
    typeOfNoise: document.getElementById('type-of-noise'),
    rm12Depth: document.getElementById('rm12-depth'),
    signalSourceForRM: document.getElementById('signal-source-for-rm'),


    // MIX
    mixerSolo: document.getElementById('mixer-solo'),
    osc1Vol: document.getElementById('osc1-vol'),
    osc1Pan: document.getElementById('osc1-pan'),
    osc1Filter: document.getElementById('osc1-filter'),
    osc2Vol: document.getElementById('osc2-vol'),
    osc2Pan: document.getElementById('osc2-pan'),
    osc2Filter: document.getElementById('osc2-filter'),
    osc3Vol: document.getElementById('osc3-vol'),
    osc3Pan: document.getElementById('osc3-pan'),
    osc3Filter: document.getElementById('osc3-filter'),
    noiseVol: document.getElementById('noise-vol'),
    noisePan: document.getElementById('noise-pan'),
    noiseFilter: document.getElementById('noise-filter'),
    rm12Vol: document.getElementById('rm12-vol'),
    rm12Pan: document.getElementById('rm12-pan'),
    rm12Filter: document.getElementById('rm12-filter'),
    filterRouting: document.getElementById('filter-routing'),


    // FILTER 1    
    filter1PositionOfDrive: document.getElementById('filter1-position-of-drive'),
    filter1Cutoff: document.getElementById('filter1-cutoff'),
    filter1Drive: document.getElementById('filter1-drive'),
    filter1Res: document.getElementById('filter1-res'),
    filter1Special: document.getElementById('filter1-special'),
    filter1Keytrack: document.getElementById('filter1-keytrack'),
    filter1LFO1Amt: document.getElementById('filter1-lfo1-amt'),
    filter1VowelOrder: document.getElementById('filter1-vowel-order'),
    filter1Model: document.getElementById('filter1-model'),
    filter1VelEnv: document.getElementById('filter1-vel-env'),
    filter1EnvAmt: document.getElementById('filter1-env1-amt'),

    // FILTER 2  
    filter2PositionOfDrive: document.getElementById('filter2-position-of-drive'),
    filter2Cutoff: document.getElementById('filter2-cutoff'),
    filter2Res: document.getElementById('filter2-res'),
    filter2Morph: document.getElementById('filter2-morph'),
    filter2Keytrack: document.getElementById('filter2-keytrack'),
    filter2LFO1Amt: document.getElementById('filter2-lfo1-amt'),
    filter2VelEnv: document.getElementById('filter2-vel-env'),
    filter2EnvAmt: document.getElementById('filter2-env1-amt'),
    filter2Type: document.getElementById('filter2-type'),

    // AMP                    
    ampLevel: document.getElementById('amp-level'),
    ampVelEnv: document.getElementById('amp-vel-env'),
    ampLFO2Amt: document.getElementById('amp-lfo2-amt'),

    // PRE-FX
    preFXType: document.getElementById('pre-fx-type'),
    preFXPreset: document.getElementById('pre-fx-preset'),
    preFXMix: document.getElementById('pre-fx-mix'),
    preFXParam1: document.getElementById('pre-fx-param1'),
    preFXParam2: document.getElementById('pre-fx-param2'),
    preFXParam3: document.getElementById('pre-fx-param3'),
    preFXParam4: document.getElementById('pre-fx-param4'),
    preFXParam5: document.getElementById('pre-fx-param5'),
    preFXSelectionType: document.getElementById('pre-fx-selection-type'),

    // DELAY    
    delayBPMSync: document.getElementById('delay-bpm-sync'),
    delayDryWet: document.getElementById('delay-dry-wet'),
    delayFeedback: document.getElementById('delay-feedback'),
    delayFeedtone: document.getElementById('delay-feedtone'),
    delayTime: document.getElementById('delay-time'),
    delayType: document.getElementById('delay-type'),
    delayWetTone: document.getElementById('delay-wet-tone'),

    // REVERB
    reverbDryWet: document.getElementById('reverb-dry-wet'),
    reverbHiDamp: document.getElementById('reverb-hi-damp'),
    reverbLoDamp: document.getElementById('reverb-lo-damp'),
    reverbPreDelay: document.getElementById('reverb-predelay'),
    reverbTime: document.getElementById('reverb-time'),
    reverbTone: document.getElementById('reverb-tone'),
    reverbType: document.getElementById('reverb-type'),

    // POST-FX    
    postFXType: document.getElementById('post-fx-type'),
    postFXPreset: document.getElementById('post-fx-preset'),
    postFXMix: document.getElementById('post-fx-mix'),
    postFXParam1: document.getElementById('post-fx-param1'),
    postFXParam2: document.getElementById('post-fx-param2'),
    postFXParam3: document.getElementById('post-fx-param3'),
    postFXParam4: document.getElementById('post-fx-param4'),
    postFXParam5: document.getElementById('post-fx-param5'),
    postFXSidechainType: document.getElementById('post-fx-sidechain-type'),

    // LFOs    
    lfo1Gain: document.getElementById('lfo1-gain'),
    lfo1Rate: document.getElementById('lfo1-rate'),
    lfo1Phase: document.getElementById('lfo1-phase'),
    lfo2Gain: document.getElementById('lfo2-gain'),
    lfo2Rate: document.getElementById('lfo2-rate'),
    lfo2Phase: document.getElementById('lfo2-phase'),
    lfo3Gain: document.getElementById('lfo3-gain'),
    lfo3Rate: document.getElementById('lfo3-rate'),
    lfo3Phase: document.getElementById('lfo3-phase'),
    lfo4Gain: document.getElementById('lfo4-gain'),
    lfo4Rate: document.getElementById('lfo4-rate'),
    lfo4Phase: document.getElementById('lfo4-phase'),
    lfo5Gain: document.getElementById('lfo5-gain'),
    lfo5Rate: document.getElementById('lfo5-rate'),
    lfo5Phase: document.getElementById('lfo5-phase'),

    // ENVELOPE 1
    env1Att: document.getElementById('env1-att'),
    env1Hold: document.getElementById('env1-hold'),
    env1Dec: document.getElementById('env1-dec'),
    env1Sus: document.getElementById('env1-sus'),
    env1Rel: document.getElementById('env1-rel'),
    env1AttCurve: document.getElementById('env1-att-curve'),
    env1DecCurve: document.getElementById('env1-dec-curve'),
    env1RelCurve: document.getElementById('env1-rel-curve'),

    // ENVELOPE 2
    env2Att: document.getElementById('env2-att'),
    env2Hold: document.getElementById('env2-hold'),
    env2Dec: document.getElementById('env2-dec'),
    env2Sus: document.getElementById('env2-sus'),
    env2Rel: document.getElementById('env2-rel'),
    env2AttCurve: document.getElementById('env2-att-curve'),
    env2DecCurve: document.getElementById('env2-dec-curve'),
    env2RelCurve: document.getElementById('env2-rel-curve'),

    // ENVELOPE 3
    env3Att: document.getElementById('env3-att'),
    env3Hold: document.getElementById('env3-hold'),
    env3Dec: document.getElementById('env3-dec'),
    env3Sus: document.getElementById('env3-sus'),
    env3Rel: document.getElementById('env3-rel'),
    env3AttCurve: document.getElementById('env3-att-curve'),
    env3DecCurve: document.getElementById('env3-dec-curve'),
    env3RelCurve: document.getElementById('env3-rel-curve'),

    // ENVELOPE 4
    env4Att: document.getElementById('env4-att'),
    env4Hold: document.getElementById('env4-hold'),
    env4Dec: document.getElementById('env4-dec'),
    env4Sus: document.getElementById('env4-sus'),
    env4Rel: document.getElementById('env4-rel'),
    env4AttCurve: document.getElementById('env4-att-curve'),
    env4DecCurve: document.getElementById('env4-dec-curve'),
    env4RelCurve: document.getElementById('env4-rel-curve'),

    // ENVELOPE 5
    env5Att: document.getElementById('env5-att'),
    env5Hold: document.getElementById('env5-hold'),
    env5Dec: document.getElementById('env5-dec'),
    env5Sus: document.getElementById('env5-sus'),
    env5Rel: document.getElementById('env5-rel'),
    env5AttCurve: document.getElementById('env5-att-curve'),
    env5DecCurve: document.getElementById('env5-dec-curve'),
    env5RelCurve: document.getElementById('env5-rel-curve'),

    // INSERT MACROS HERE //

    // MOD MATRIX
    modMatrix1Depth: document.getElementById('mod-matrix1-depth'),
    modMatrix2Depth: document.getElementById('mod-matrix2-depth'),
    modMatrix3Depth: document.getElementById('mod-matrix3-depth'),
    modMatrix4Depth: document.getElementById('mod-matrix4-depth'),
    modMatrix5Depth: document.getElementById('mod-matrix5-depth'),
    modMatrix6Depth: document.getElementById('mod-matrix6-depth'),
    modMatrix7Depth: document.getElementById('mod-matrix7-depth'),
    modMatrix8Depth: document.getElementById('mod-matrix8-depth'),
    modMatrix9Depth: document.getElementById('mod-matrix9-depth'),
    modMatrix10Depth: document.getElementById('mod-matrix10-depth'),
    modMatrix11Depth: document.getElementById('mod-matrix11-depth'),
    modMatrix12Depth: document.getElementById('mod-matrix12-depth'),
    modMatrix13Depth: document.getElementById('mod-matrix13-depth'),
    modMatrix14Depth: document.getElementById('mod-matrix14-depth'),
    modMatrix15Depth: document.getElementById('mod-matrix15-depth'),
    modMatrix16Depth: document.getElementById('mod-matrix16-depth'),
    modMatrix17Depth: document.getElementById('mod-matrix17-depth'),
    modMatrix18Depth: document.getElementById('mod-matrix18-depth'),
    modMatrix19Depth: document.getElementById('mod-matrix19-depth'),
    modMatrix20Depth: document.getElementById('mod-matrix20-depth'),
    modMatrix21Depth: document.getElementById('mod-matrix21-depth'),
    modMatrix22Depth: document.getElementById('mod-matrix22-depth'),
    modMatrix23Depth: document.getElementById('mod-matrix23-depth'),
    modMatrix24Depth: document.getElementById('mod-matrix24-depth'),
    modMatrix25Depth: document.getElementById('mod-matrix25-depth'),
    modMatrix26Depth: document.getElementById('mod-matrix26-depth'),
    modMatrix27Depth: document.getElementById('mod-matrix27-depth'),
    modMatrix28Depth: document.getElementById('mod-matrix28-depth'),
    modMatrix29Depth: document.getElementById('mod-matrix29-depth'),
    modMatrix30Depth: document.getElementById('mod-matrix30-depth'),
    modMatrix31Depth: document.getElementById('mod-matrix31-depth'),
    modMatrix32Depth: document.getElementById('mod-matrix32-depth')
    
    }

    











    ////////////////


    // // All OSC
    allParams.allOscCent.addEventListener('change', function(){changeItDefault(65, 04, allParams.allOscCent.value)}); // [0, 0] = 8192
    // allParams.oscMode.addEventListener('change', function(){changeItDefault(63, 24, allParams.oscMode.value)}); // Check manual
    // allParams.semi.addEventListener('change', function(){changeItDefault(63, 17, 64, 0)}, false); // Check manual
    
    // // OSC 1
    allParams.osc1Type.addEventListener('change', function(){changeItDefault(63, 25, allParams.osc1Type.value)}); // 0-218 / 1, 90
    allParams.osc1Cent.addEventListener('change', function(){changeItDefault(65, 01, allParams.osc1Cent.value)});
    allParams.osc1Keytrack.addEventListener('change', function(){changeItDefault(63, 84, allParams.osc1Keytrack.value)});
    allParams.osc1WaveScan.addEventListener('change', function(){changeItDefault(65, 42, allParams.osc1WaveScan.value)});
    // allParams.soloOsc1WaveScan.addEventListener('change', function(){changeItDefault(63, 27, 0, 0)}, false); // Check manual
    allParams.osc1WaveScanWav1.addEventListener('change', function(){changeItDefault(63, 96, allParams.osc1WaveScanWav1.value)}); // 0-218 / 1, 90
    allParams.osc1WaveScanWav2.addEventListener('change', function(){changeItDefault(63, 97, allParams.osc1WaveScanWav2.value)}); // 0-218 / 1, 90
    allParams.osc1WaveScanWav3.addEventListener('change', function(){changeItDefault(63, 98, allParams.osc1WaveScanWav3.value)}); // 0-218 / 1, 90
    allParams.osc1WaveScanWav4.addEventListener('change', function(){changeItDefault(63, 99, allParams.osc1WaveScanWav4.value)}); // 0-218 / 1, 90
    allParams.osc1WaveScanWav5.addEventListener('change', function(){changeItDefault(63, 100, allParams.osc1WaveScanWav5.value)}); // 0-218 / 1, 90
    allParams.osc1WaveScanWav6.addEventListener('change', function(){changeItDefault(63, 101, allParams.osc1WaveScanWav6.value)}); // 0-218 / 1, 90
    allParams.osc1WaveScanWav7.addEventListener('change', function(){changeItDefault(63, 102, allParams.osc1WaveScanWav7.value)}); // 0-218 / 1, 90
    allParams.osc1WaveScanWav8.addEventListener('change', function(){changeItDefault(63, 103, allParams.osc1WaveScanWav8.value)}); // 0-218 / 1, 90

    // // OSC 2
    allParams.osc2Type.addEventListener('change', function(){changeItDefault(63, 26, allParams.osc2Type.value)}); // 0-218 / 1, 90
    allParams.osc2Cent.addEventListener('change', function(){changeItDefault(65, 02, allParams.osc2Cent.value)});
    allParams.osc2Keytrack.addEventListener('change', function(){changeItDefault(63, 85, allParams.osc2Keytrack.value)}); // 0-200 / 1, 72
    allParams.osc2WaveScan.addEventListener('change', function(){changeItDefault(65, 43, allParams.osc2WaveScan.value)});
    // allParams.soloOsc2WaveScan.addEventListener('change', function(){changeItDefault(63, 28, 0, 0)}, false); // Check manual
    allParams.osc2WaveScanWav1.addEventListener('change', function(){changeItDefault(63, 104, allParams.osc2WaveScanWav1.value)}); // 0-218 / 1, 90
    allParams.osc2WaveScanWav2.addEventListener('change', function(){changeItDefault(63, 105, allParams.osc2WaveScanWav2.value)}); // 0-218 / 1, 90
    allParams.osc2WaveScanWav3.addEventListener('change', function(){changeItDefault(63, 106, allParams.osc2WaveScanWav3.value)}); // 0-218 / 1, 90
    allParams.osc2WaveScanWav4.addEventListener('change', function(){changeItDefault(63, 107, allParams.osc2WaveScanWav4.value)}); // 0-218 / 1, 90
    allParams.osc2WaveScanWav5.addEventListener('change', function(){changeItDefault(63, 108, allParams.osc2WaveScanWav5.value)}); // 0-218 / 1, 90
    allParams.osc2WaveScanWav6.addEventListener('change', function(){changeItDefault(63, 109, allParams.osc2WaveScanWav6.value)}); // 0-218 / 1, 90
    allParams.osc2WaveScanWav7.addEventListener('change', function(){changeItDefault(63, 110, allParams.osc2WaveScanWav7.value)}); // 0-218 / 1, 90
    allParams.osc2WaveScanWav8.addEventListener('change', function(){changeItDefault(63, 111, allParams.osc2WaveScanWav8.value)}); // 0-218 / 1, 90

    
    // // OSC 3
    allParams.osc3Type.addEventListener('change', function(){changeItDefault(63,  13, allParams.osc3Type.value)});
    allParams.osc3Cent.addEventListener('change', function(){changeItDefault(65, 03, allParams.osc3Cent.value)});
    allParams.osc3Keytrack.addEventListener('change', function(){changeItDefault(63, 86, allParams.osc3Keytrack.value)});


    ////////////////////////

    // All MUTATORS      
    // allParams.mutatorMode.addEventListener('change', function(){changeItDefault(63, 33, allParams.mutatorMode.value)});
    // allParams.mutatorSourcesFMLin.addEventListener('change', function(){changeItDefault(63, 36, allParams.mutatorSourcesFMLin.value)});
    // allParams.mutatorSourcesOscSync.addEventListener('change', function(){changeItDefault(63, 34, allParams.mutatorSourcesOscSync.value)});

    // // MUTATOR 1
    allParams.mutator1Ratio.addEventListener('change', function(){changeItDefault(65, 44, allParams.mutator1Ratio.value)}); 
    allParams.mutator1Depth.addEventListener('change', function(){changeItDefault(64, 31, allParams.mutator1Depth.value)}); 
    allParams.mutator1DryWet.addEventListener('change', function(){changeItDefault(64, 34, allParams.mutator1DryWet.value)}); 
    allParams.mutator1Feedback.addEventListener('change', function(){changeItDefault(64, 37, allParams.mutator1Feedback.value)});
    allParams.mutator1Window.addEventListener('change', function(){changeItDefault(64, 28, allParams.mutator1Window.value)}); 
    allParams.mutator1Warp1.addEventListener('change', function(){changeItDefault(64, 96, allParams.mutator1Warp1.value)}); 
    allParams.mutator1Warp2.addEventListener('change', function(){changeItDefault(64, 97, allParams.mutator1Warp2.value)}); 
    allParams.mutator1Warp3.addEventListener('change', function(){changeItDefault(64, 98, allParams.mutator1Warp3.value)}); 
    allParams.mutator1Warp4.addEventListener('change', function(){changeItDefault(64, 99, allParams.mutator1Warp4.value)}); 
    allParams.mutator1Warp5.addEventListener('change', function(){changeItDefault(64, 100, allParams.mutator1Warp5.value)}); 
    allParams.mutator1Warp6.addEventListener('change', function(){changeItDefault(64, 101, allParams.mutator1Warp6.value)}); 
    allParams.mutator1Warp7.addEventListener('change', function(){changeItDefault(64, 102, allParams.mutator1Warp7.value)}); 
    allParams.mutator1Warp8.addEventListener('change', function(){changeItDefault(64, 103, allParams.mutator1Warp8.value)});

    // // MUTATOR 2
    allParams.mutator2Ratio.addEventListener('change', function(){changeItDefault(65, 45, allParams.mutator2Ratio.value)}); 
    allParams.mutator2Depth.addEventListener('change', function(){changeItDefault(64, 32, allParams.mutator2Depth.value)}); 
    allParams.mutator2DryWet.addEventListener('change', function(){changeItDefault(64, 35, allParams.mutator2DryWet.value)}); 
    allParams.mutator2Feedback.addEventListener('change', function(){changeItDefault(64, 38, allParams.mutator2Feedback.value)});
    allParams.mutator2Window.addEventListener('change', function(){changeItDefault(64, 29, allParams.mutator2Window.value)}); 
    allParams.mutator2Warp1.addEventListener('change', function(){changeItDefault(64, 104, allParams.mutator2Warp1.value)}); 
    allParams.mutator2Warp2.addEventListener('change', function(){changeItDefault(64, 105, allParams.mutator2Warp2.value)}); 
    allParams.mutator2Warp3.addEventListener('change', function(){changeItDefault(64, 106, allParams.mutator2Warp3.value)}); 
    allParams.mutator2Warp4.addEventListener('change', function(){changeItDefault(64, 107, allParams.mutator2Warp4.value)}); 
    allParams.mutator2Warp5.addEventListener('change', function(){changeItDefault(64, 108, allParams.mutator2Warp5.value)}); 
    allParams.mutator2Warp6.addEventListener('change', function(){changeItDefault(64, 109, allParams.mutator2Warp6.value)}); 
    allParams.mutator2Warp7.addEventListener('change', function(){changeItDefault(64, 110, allParams.mutator2Warp7.value)}); 
    allParams.mutator2Warp8.addEventListener('change', function(){changeItDefault(64, 111, allParams.mutator2Warp8.value)});

    // // MUTATOR 3
    allParams.mutator3Ratio.addEventListener('change', function(){changeItDefault(65, 46, allParams.mutator3Ratio.value)}); 
    allParams.mutator3Depth.addEventListener('change', function(){changeItDefault(64, 33, allParams.mutator3Depth.value)}); 
    allParams.mutator3DryWet.addEventListener('change', function(){changeItDefault(64, 36, allParams.mutator3DryWet.value)}); 
    allParams.mutator3Feedback.addEventListener('change', function(){changeItDefault(64, 39, allParams.mutator3Feedback.value)});
    allParams.mutator3Window.addEventListener('change', function(){changeItDefault(64, 30, allParams.mutator3Window.value)}); 
    allParams.mutator3Warp1.addEventListener('change', function(){changeItDefault(64, 112, allParams.mutator3Warp1.value)}); 
    allParams.mutator3Warp2.addEventListener('change', function(){changeItDefault(64, 113, allParams.mutator3Warp2.value)}); 
    allParams.mutator3Warp3.addEventListener('change', function(){changeItDefault(64, 114, allParams.mutator3Warp3.value)}); 
    allParams.mutator3Warp4.addEventListener('change', function(){changeItDefault(64, 115, allParams.mutator3Warp4.value)}); 
    allParams.mutator3Warp5.addEventListener('change', function(){changeItDefault(64, 116, allParams.mutator3Warp5.value)}); 
    allParams.mutator3Warp6.addEventListener('change', function(){changeItDefault(64, 117, allParams.mutator3Warp6.value)}); 
    allParams.mutator3Warp7.addEventListener('change', function(){changeItDefault(64, 118, allParams.mutator3Warp7.value)}); 
    allParams.mutator3Warp8.addEventListener('change', function(){changeItDefault(64, 119, allParams.mutator3Warp8.value)});

    // // MUTATOR 4
    allParams.mutator4Ratio.addEventListener('change', function(){changeItDefault(65, 47, allParams.mutator4Ratio.value)}); 
    allParams.mutator4Depth.addEventListener('change', function(){changeItDefault(64, 22, allParams.mutator4Depth.value)}); 
    allParams.mutator4DryWet.addEventListener('change', function(){changeItDefault(64, 23, allParams.mutator4DryWet.value)}); 
    allParams.mutator4Feedback.addEventListener('change', function(){changeItDefault(64, 27, allParams.mutator4Feedback.value)});
    allParams.mutator4Window.addEventListener('change', function(){changeItDefault(64, 26, allParams.mutator4Window.value)}); 
    allParams.mutator4Warp1.addEventListener('change', function(){changeItDefault(64, 120, allParams.mutator4Warp1.value)}); 
    allParams.mutator4Warp2.addEventListener('change', function(){changeItDefault(64, 121, allParams.mutator4Warp2.value)}); 
    allParams.mutator4Warp3.addEventListener('change', function(){changeItDefault(64, 122, allParams.mutator4Warp3.value)}); 
    allParams.mutator4Warp4.addEventListener('change', function(){changeItDefault(64, 123, allParams.mutator4Warp4.value)}); 
    allParams.mutator4Warp5.addEventListener('change', function(){changeItDefault(64, 124, allParams.mutator4Warp5.value)}); 
    allParams.mutator4Warp6.addEventListener('change', function(){changeItDefault(64, 125, allParams.mutator4Warp6.value)}); 
    allParams.mutator4Warp7.addEventListener('change', function(){changeItDefault(64, 126, allParams.mutator4Warp7.value)}); 
    allParams.mutator4Warp8.addEventListener('change', function(){changeItDefault(64, 127, allParams.mutator4Warp8.value)});

    // RING-NOISE
    // allParams.typeOfNoise.addEventListener('change', function(){changeItDefault(63, 39, allParams.typeOfNoise.value)});
    allParams.rm12Depth.addEventListener('change', function(){changeItDefault(64, 03, allParams.rm12Depth.value)});
    // allParams.signalSourceForRM.addEventListener('change', function(){changeItDefault(63, 38, allParams.signalSourceForRM.value)});
    
    // MIX
    // allParams.mixerSolo.addEventListener('change', function(){changeItDefault(63, 37, allParams.mixerSolo.value)});
    allParams.osc1Vol.addEventListener('change', function(){changeItDefault(64, 07, allParams.osc1Vol.value)});
    allParams.osc1Pan.addEventListener('change', function(){changeItDefault(64, 08, allParams.osc1Pan.value)});
    allParams.osc1Filter.addEventListener('change', function(){changeItDefault(64, 49, allParams.osc1Filter.value)});
    allParams.osc2Vol.addEventListener('change', function(){changeItDefault(64, 09, allParams.osc2Vol.value)});
    allParams.osc2Pan.addEventListener('change', function(){changeItDefault(64, 10, allParams.osc2Pan.value)});
    allParams.osc2Filter.addEventListener('change', function(){changeItDefault(64, 50, allParams.osc2Filter.value)});
    allParams.osc3Vol.addEventListener('change', function(){changeItDefault(64, 11, allParams.osc3Vol.value)});
    allParams.osc3Pan.addEventListener('change', function(){changeItDefault(64, 12, allParams.osc3Pan.value)});
    allParams.osc3Filter.addEventListener('change', function(){changeItDefault(64, 51, allParams.osc3Filter.value)});
    allParams.noiseVol.addEventListener('change', function(){changeItDefault(64, 13, allParams.noiseVol.value)});
    allParams.noisePan.addEventListener('change', function(){changeItDefault(64, 14, allParams.noisePan.value)});
    allParams.noiseFilter.addEventListener('change', function(){changeItDefault(64, 52, allParams.noiseFilter.value)});
    allParams.rm12Vol.addEventListener('change', function(){changeItDefault(64, 61, allParams.rm12Vol.value)});
    allParams.rm12Pan.addEventListener('change', function(){changeItDefault(64, 04, allParams.rm12Pan.value)});
    allParams.rm12Filter.addEventListener('change', function(){changeItDefault(64, 53, allParams.rm12Filter.value)});
    // allParams.filterRouting.addEventListener('change', function(){changeItDefault(64, 44, allParams.filterRouting.value)});

    // FILTER 1    
    // allParams.filter1PositionOfDrive.addEventListener('change', function(){changeItDefault(63, 41, allParams.filter1PositionOfDrive.value)});
    allParams.filter1Cutoff.addEventListener('change', function(){changeItDefault(64, 40, allParams.filter1Cutoff.value)});
    allParams.filter1Drive.addEventListener('change', function(){changeItDefault(64, 43, allParams.filter1Drive.value)});
    allParams.filter1Res.addEventListener('change', function(){changeItDefault(64, 41, allParams.filter1Res.value)});
    allParams.filter1Special.addEventListener('change', function(){changeItDefault(64, 42, allParams.filter1Special.value)});
    allParams.filter1Keytrack.addEventListener('change', function(){changeItDefault(65, 102, allParams.filter1Keytrack.value)});
    allParams.filter1LFO1Amt.addEventListener('change', function(){changeItDefault(65, 96, allParams.filter1LFO1Amt.value)});
    // allParams.filter1VowelOrder.addEventListener('change', function(){changeItDefault(63, 46, allParams.filter1VowelOrder.value)});
    // allParams.filter1Model.addEventListener('change', function(){changeItDefault(63, 40, allParams.filter1Model.value)});
    allParams.filter1VelEnv.addEventListener('change', function(){changeItDefault(65, 105, allParams.filter1VelEnv.value)});
    allParams.filter1EnvAmt.addEventListener('change', function(){changeItDefault(65, 97, allParams.filter1EnvAmt.value)});

    // FILTER 2  
    // allParams.filter2PositionOfDrive.addEventListener('change', function(){changeItDefault(63, 43, allParams.filter2PositionOfDrive.value)});
    allParams.filter2Cutoff.addEventListener('change', function(){changeItDefault(64, 44, allParams.filter2Cutoff.value)});
    allParams.filter2Res.addEventListener('change', function(){changeItDefault(64, 45, allParams.filter2Res.value)});
    allParams.filter2Morph.addEventListener('change', function(){changeItDefault(64, 46, allParams.filter2Morph.value)});
    allParams.filter2Keytrack.addEventListener('change', function(){changeItDefault(65, 103, allParams.filter2Keytrack.value)});
    allParams.filter2LFO1Amt.addEventListener('change', function(){changeItDefault(65, 98, allParams.filter2LFO1Amt.value)});
    allParams.filter2VelEnv.addEventListener('change', function(){changeItDefault(65, 106, allParams.filter2VelEnv.value)});
    allParams.filter2EnvAmt.addEventListener('change', function(){changeItDefault(65, 99, allParams.filter2EnvAmt.value)});
    // allParams.filter2Type.addEventListener('change', function(){changeItDefault(63, 35, allParams.filter2Type.value)});
    
    // AMP                    
    allParams.ampLevel.addEventListener('change', function(){changeItDefault(64, 02, allParams.ampLevel.value)});
    allParams.ampVelEnv.addEventListener('change', function(){changeItDefault(65, 107, allParams.ampVelEnv.value)});
    allParams.ampLFO2Amt.addEventListener('change', function(){changeItDefault(65, 100, allParams.ampLFO2Amt.value)});

    // PRE-FX
    allParams.preFXType.addEventListener('change', function(){changeItDefault(59, 127, allParams.preFXType.value)});
    allParams.preFXPreset.addEventListener('change', function(){changeItDefault(59, 0, allParams.preFXPreset.value)});
    allParams.preFXMix.addEventListener('change', function(){changeItDefault(65, 110, allParams.preFXMix.value)});
    allParams.preFXParam1.addEventListener('change', function(){changeItDefault(65, 111, allParams.preFXParam1.value)});
    allParams.preFXParam2.addEventListener('change', function(){changeItDefault(65, 112, allParams.preFXParam2.value)});
    allParams.preFXParam3.addEventListener('change', function(){changeItDefault(59, 48, allParams.preFXParam3.value)});
    allParams.preFXParam4.addEventListener('change', function(){changeItDefault(59, 64, allParams.preFXParam4.value)});
    allParams.preFXParam5.addEventListener('change', function(){changeItDefault(59, 80, allParams.preFXParam5.value)});
    allParams.preFXSelectionType.addEventListener('change', function(){changeItDefault(59, 115, allParams.preFXSelectionType.value)});

    // DELAY    
    // allParams.delayBPMSync.addEventListener('change', function(){changeItDefault(59, 112, allParams.delayBPMSync.value)});
    allParams.delayDryWet.addEventListener('change', function(){changeItDefault(65, 120, allParams.delayDryWet.value)});
    allParams.delayFeedback.addEventListener('change', function(){changeItDefault(65, 117, allParams.delayFeedback.value)});
    allParams.delayFeedtone.addEventListener('change', function(){changeItDefault(65, 118, allParams.delayFeedtone.value)});
    allParams.delayTime.addEventListener('change', function(){changeItDefault(65, 116, allParams.delayTime.value)});
    // allParams.delayType.addEventListener('change', function(){changeItDefault(59, 113, allParams.delayType.value)});
    allParams.delayWetTone.addEventListener('change', function(){changeItDefault(65, 119, allParams.delayWetTone.value)});

    // REVERB
    allParams.reverbDryWet.addEventListener('change', function(){changeItDefault(65, 126, allParams.reverbDryWet.value)});
    allParams.reverbHiDamp.addEventListener('change', function(){changeItDefault(65, 123, allParams.reverbHiDamp.value)});
    allParams.reverbLoDamp.addEventListener('change', function(){changeItDefault(65, 124, allParams.reverbLoDamp.value)});
    allParams.reverbPreDelay.addEventListener('change', function(){changeItDefault(65, 125, allParams.reverbPreDelay.value)});
    allParams.reverbTime.addEventListener('change', function(){changeItDefault(65, 121, allParams.reverbTime.value)});
    allParams.reverbTone.addEventListener('change', function(){changeItDefault(65, 122, allParams.reverbTone.value)});
    allParams.reverbType.addEventListener('change', function(){changeItDefault(60, 114, allParams.reverbType.value)});

    // POST-FX    
    allParams.postFXType.addEventListener('change', function(){changeItDefault(60, 127, allParams.postFXType.value)});
    allParams.postFXPreset.addEventListener('change', function(){changeItDefault(60, 0, allParams.postFXPreset.value)});
    allParams.postFXMix.addEventListener('change', function(){changeItDefault(65, 113, allParams.postFXMix.value)});
    allParams.postFXParam1.addEventListener('change', function(){changeItDefault(65, 114, allParams.postFXParam1.value)});
    allParams.postFXParam2.addEventListener('change', function(){changeItDefault(65, 115, allParams.postFXParam2.value)});
    allParams.postFXParam3.addEventListener('change', function(){changeItDefault(60, 48, allParams.postFXParam3.value)});
    allParams.postFXParam4.addEventListener('change', function(){changeItDefault(60, 64, allParams.postFXParam4.value)});
    allParams.postFXParam5.addEventListener('change', function(){changeItDefault(60, 80, allParams.postFXParam5.value)});
    allParams.postFXSidechainType.addEventListener('change', function(){changeItDefault(60, 115, allParams.postFXSidechainType.value)});

    // LFOs    
    allParams.lfo1Gain.addEventListener('change', function(){changeItDefault(65, 11, allParams.lfo1Gain.value)});
    allParams.lfo1Rate.addEventListener('change', function(){changeItDefault(65, 05, allParams.lfo1Rate.value)});
    allParams.lfo1Phase.addEventListener('change', function(){changeItDefault(63, 48, allParams.lfo1Phase.value)});
    allParams.lfo2Gain.addEventListener('change', function(){changeItDefault(65, 12, allParams.lfo2Gain.value)});
    allParams.lfo2Rate.addEventListener('change', function(){changeItDefault(65, 06, allParams.lfo2Gain.value)});
    allParams.lfo2Phase.addEventListener('change', function(){changeItDefault(63, 49, allParams.lfo2Gain.value)});
    allParams.lfo3Gain.addEventListener('change', function(){changeItDefault(65, 13, allParams.lfo3Gain.value)});
    allParams.lfo3Rate.addEventListener('change', function(){changeItDefault(65, 07, allParams.lfo3Gain.value)});
    allParams.lfo3Phase.addEventListener('change', function(){changeItDefault(63, 50, allParams.lfo3Gain.value)});
    allParams.lfo4Gain.addEventListener('change', function(){changeItDefault(65, 14, allParams.lfo4Gain.value)});
    allParams.lfo4Rate.addEventListener('change', function(){changeItDefault(65, 08, allParams.lfo4Gain.value)});
    allParams.lfo4Phase.addEventListener('change', function(){changeItDefault(63, 51, allParams.lfo4Gain.value)});
    allParams.lfo5Gain.addEventListener('change', function(){changeItDefault(65, 15, allParams.lfo5Gain.value)});
    allParams.lfo5Rate.addEventListener('change', function(){changeItDefault(65, 09, allParams.lfo5Gain.value)});
    allParams.lfo5Phase.addEventListener('change', function(){changeItDefault(63, 52, allParams.lfo5Gain.value)});

    // ENVELOPE 1
    allParams.env1Att.addEventListener('change', function(){changeItDefault(65, 17, allParams.env1Att.value)});
    allParams.env1Hold.addEventListener('change', function(){changeItDefault(65, 22, allParams.env1Hold.value)});
    allParams.env1Dec.addEventListener('change', function(){changeItDefault(65, 27, allParams.env1Dec.value)});
    allParams.env1Sus.addEventListener('change', function(){changeItDefault(65, 32, allParams.env1Sus.value)});
    allParams.env1Rel.addEventListener('change', function(){changeItDefault(65, 37, allParams.env1Rel.value)});
    allParams.env1AttCurve.addEventListener('change', function(){changeItDefault(63, 112, allParams.env1AttCurve.value)});
    allParams.env1DecCurve.addEventListener('change', function(){changeItDefault(63, 117, allParams.env1DecCurve.value)});
    allParams.env1RelCurve.addEventListener('change', function(){changeItDefault(63, 122, allParams.env1RelCurve.value)});

    // ENVELOPE 2
    allParams.env2Att.addEventListener('change', function(){changeItDefault(65, 18, allParams.env2Att.value)});
    allParams.env2Hold.addEventListener('change', function(){changeItDefault(65, 23, allParams.env2Hold.value)});
    allParams.env2Dec.addEventListener('change', function(){changeItDefault(65, 28, allParams.env2Dec.value)});
    allParams.env2Sus.addEventListener('change', function(){changeItDefault(65, 33, allParams.env2Sus.value)});
    allParams.env2Rel.addEventListener('change', function(){changeItDefault(65, 38, allParams.env2Rel.value)});
    allParams.env2AttCurve.addEventListener('change', function(){changeItDefault(63, 113, allParams.env2AttCurve.value)});
    allParams.env2DecCurve.addEventListener('change', function(){changeItDefault(63, 118, allParams.env2DecCurve.value)});
    allParams.env2RelCurve.addEventListener('change', function(){changeItDefault(63, 123, allParams.env2RelCurve.value)});

    // ENVELOPE 3
    allParams.env3Att.addEventListener('change', function(){changeItDefault(65, 19, allParams.env3Att.value)});
    allParams.env3Hold.addEventListener('change', function(){changeItDefault(65, 24, allParams.env3Hold.value)});
    allParams.env3Dec.addEventListener('change', function(){changeItDefault(65, 29, allParams.env3Dec.value)});
    allParams.env3Sus.addEventListener('change', function(){changeItDefault(65, 34, allParams.env3Sus.value)});
    allParams.env3Rel.addEventListener('change', function(){changeItDefault(65, 39, allParams.env3Rel.value)});
    allParams.env3AttCurve.addEventListener('change', function(){changeItDefault(63, 114, allParams.env3AttCurve.value)});
    allParams.env3DecCurve.addEventListener('change', function(){changeItDefault(63, 119, allParams.env3DecCurve.value)});
    allParams.env3RelCurve.addEventListener('change', function(){changeItDefault(63, 124, allParams.env3RelCurve.value)});

    // ENVELOPE 4
    allParams.env4Att.addEventListener('change', function(){changeItDefault(65, 20, allParams.env4Att.value)});
    allParams.env4Hold.addEventListener('change', function(){changeItDefault(65, 25, allParams.env4Hold.value)});
    allParams.env4Dec.addEventListener('change', function(){changeItDefault(65, 30, allParams.env4Dec.value)});
    allParams.env4Sus.addEventListener('change', function(){changeItDefault(65, 35, allParams.env4Sus.value)});
    allParams.env4Rel.addEventListener('change', function(){changeItDefault(65, 40, allParams.env4Rel.value)});
    allParams.env4AttCurve.addEventListener('change', function(){changeItDefault(63, 115, allParams.env4AttCurve.value)});
    allParams.env4DecCurve.addEventListener('change', function(){changeItDefault(63, 120, allParams.env4DecCurve.value)});
    allParams.env4RelCurve.addEventListener('change', function(){changeItDefault(63, 125, allParams.env4RelCurve.value)});

    // ENVELOPE 5
    allParams.env5Att.addEventListener('change', function(){changeItDefault(65, 21, allParams.env5Att.value)});
    allParams.env5Hold.addEventListener('change', function(){changeItDefault(65, 26, allParams.env5Hold.value)});
    allParams.env5Dec.addEventListener('change', function(){changeItDefault(65, 31, allParams.env5Dec.value)});
    allParams.env5Sus.addEventListener('change', function(){changeItDefault(65, 36, allParams.env5Sus.value)});
    allParams.env5Rel.addEventListener('change', function(){changeItDefault(65, 41, allParams.env5Rel.value)});
    allParams.env5AttCurve.addEventListener('change', function(){changeItDefault(63, 116, allParams.env5AttCurve.value)});
    allParams.env5DecCurve.addEventListener('change', function(){changeItDefault(63, 121, allParams.env5DecCurve.value)});
    allParams.env5RelCurve.addEventListener('change', function(){changeItDefault(63, 126, allParams.env5RelCurve.value)});

    // MOD MATRIX
    allParams.modMatrix1Depth.addEventListener('change', function(){changeItDefault(65, 64, allParams.modMatrix1Depth.value)});
    allParams.modMatrix2Depth.addEventListener('change', function(){changeItDefault(65, 65, allParams.modMatrix2Depth.value)});
    allParams.modMatrix3Depth.addEventListener('change', function(){changeItDefault(65, 66, allParams.modMatrix3Depth.value)});
    allParams.modMatrix4Depth.addEventListener('change', function(){changeItDefault(65, 67, allParams.modMatrix4Depth.value)});
    allParams.modMatrix5Depth.addEventListener('change', function(){changeItDefault(65, 68, allParams.modMatrix5Depth.value)});
    allParams.modMatrix6Depth.addEventListener('change', function(){changeItDefault(65, 69, allParams.modMatrix6Depth.value)});
    allParams.modMatrix7Depth.addEventListener('change', function(){changeItDefault(65, 70, allParams.modMatrix7Depth.value)});
    allParams.modMatrix8Depth.addEventListener('change', function(){changeItDefault(65, 71, allParams.modMatrix8Depth.value)});
    allParams.modMatrix9Depth.addEventListener('change', function(){changeItDefault(65, 72, allParams.modMatrix9Depth.value)});
    allParams.modMatrix10Depth.addEventListener('change', function(){changeItDefault(65, 73, allParams.modMatrix10Depth.value)});
    allParams.modMatrix11Depth.addEventListener('change', function(){changeItDefault(65, 74, allParams.modMatrix11Depth.value)});
    allParams.modMatrix12Depth.addEventListener('change', function(){changeItDefault(65, 75, allParams.modMatrix12Depth.value)});
    allParams.modMatrix13Depth.addEventListener('change', function(){changeItDefault(65, 76, allParams.modMatrix13Depth.value)});
    allParams.modMatrix14Depth.addEventListener('change', function(){changeItDefault(65, 77, allParams.modMatrix14Depth.value)});
    allParams.modMatrix15Depth.addEventListener('change', function(){changeItDefault(65, 78, allParams.modMatrix15Depth.value)});
    allParams.modMatrix16Depth.addEventListener('change', function(){changeItDefault(65, 79, allParams.modMatrix16Depth.value)});
    allParams.modMatrix17Depth.addEventListener('change', function(){changeItDefault(65, 80, allParams.modMatrix17Depth.value)});
    allParams.modMatrix18Depth.addEventListener('change', function(){changeItDefault(65, 81, allParams.modMatrix18Depth.value)});
    allParams.modMatrix19Depth.addEventListener('change', function(){changeItDefault(65, 82, allParams.modMatrix19Depth.value)});
    allParams.modMatrix20Depth.addEventListener('change', function(){changeItDefault(65, 83, allParams.modMatrix20Depth.value)});
    allParams.modMatrix21Depth.addEventListener('change', function(){changeItDefault(65, 84, allParams.modMatrix21Depth.value)});
    allParams.modMatrix22Depth.addEventListener('change', function(){changeItDefault(65, 85, allParams.modMatrix22Depth.value)});
    allParams.modMatrix23Depth.addEventListener('change', function(){changeItDefault(65, 86, allParams.modMatrix23Depth.value)});
    allParams.modMatrix24Depth.addEventListener('change', function(){changeItDefault(65, 87, allParams.modMatrix24Depth.value)});
    allParams.modMatrix25Depth.addEventListener('change', function(){changeItDefault(65, 88, allParams.modMatrix25Depth.value)});
    allParams.modMatrix26Depth.addEventListener('change', function(){changeItDefault(65, 89, allParams.modMatrix26Depth.value)});
    allParams.modMatrix27Depth.addEventListener('change', function(){changeItDefault(65, 90, allParams.modMatrix27Depth.value)});
    allParams.modMatrix28Depth.addEventListener('change', function(){changeItDefault(65, 91, allParams.modMatrix28Depth.value)});
    allParams.modMatrix29Depth.addEventListener('change', function(){changeItDefault(65, 92, allParams.modMatrix29Depth.value)});
    allParams.modMatrix30Depth.addEventListener('change', function(){changeItDefault(65, 93, allParams.modMatrix30Depth.value)});
    allParams.modMatrix31Depth.addEventListener('change', function(){changeItDefault(65, 94, allParams.modMatrix31Depth.value)});
    allParams.modMatrix32Depth.addEventListener('change', function(){changeItDefault(65, 95, allParams.modMatrix32Depth.value)});


    // COMPOSITIONAL TOOLS

    const paramList = document.getElementsByClassName('param-list')
    
    for (let i = 0; i < paramList.length; i++) {
      for (index in allParams) {
        paramList[i].options[paramList[i].options.length] = new Option(index);
      }

      selectedParams = [null, null, null]

      function selectParam() {
        return selectedParams[i] = (paramList[i].options[paramList[i].selectedIndex].text);
      }
      paramList[i].addEventListener('change', selectParam);
    }

    let startStopRandom;

    function startEndRandom(param, x, speed) {      
      if (x == 'start') {
        startStopRandom = setInterval(randomizer, speed, param);
      } else {
        clearInterval(startStopRandom)
      }
    }

    function randomizer(param) {
      param.value = Math.floor(Math.random() * Math.floor(param.max))
      const evt = new Event('change');
      param.dispatchEvent(evt);
    }

    

    const startStop = document.getElementById('start-stop-random');
    const randomSpeed = document.getElementById('rand-speed');       
    document.getElementById('rand-butt')
      .addEventListener('click', function(){
        startEndRandom(allParams[selectedParams[0]], startStop.options[startStop.selectedIndex].value, randomSpeed.value)
      });



      const sketchSpeed = document.getElementById('sketch-speed'); 
      const loopToggle = document.getElementById('loop');     
      document.getElementById('send-button').addEventListener('click', function () {
        sendArrayX(allParams[selectedParams[1]], sketchArrayX, sketchSpeed.value, loopToggle.value)
        sendArrayY(allParams[selectedParams[2]], sketchArrayY, sketchSpeed.value, loopToggle.value)
      })
      document.getElementById('clear-button').addEventListener('click', function () {
        clearCanvas(canvas, ctx)
      });


      function sendArrayX(paramX, valuesX, speed, loopX) {
        if (paramX) {
          valuesX.sort(function (a, b) {
            return a - b
          });        
          const newValuesX = [...new Set(valuesX)];                    
          for (let i=0; i < newValuesX.length; i++) {
            setTimeout(function () {
              console.log(newValuesX[i])
              paramX.value = newValuesX[i];
              // const evt = new Event('change');
              // paramX.dispatchEvent(evt);
            }, i * speed);                      
          }          
        }              
      }
      function sendArrayY(paramY, valuesY, speed) {
        if (paramY) {
          valuesY.sort(function (a, b) {
            return a - b
          });
          const newValuesY = [...new Set(valuesY)];
          for (let i = 0; i < newValuesY.length; i++) {
            setTimeout(function () {
              console.log(newValuesY[i])
              paramY.value = newValuesY[i];
              const evt = new Event('change');
              paramY.dispatchEvent(evt);
            }, i * speed);
          }
        }
      }

    ////////////////////////////////////////////////////////////////////////////////

    // Variables for referencing the canvas and 2dcanvas context
    var canvas, ctx;

    // Variables to keep track of the mouse position and left-button status 
    var mouseX, mouseY, mouseDown = 0;

    // Variables to keep track of the touch position
    var touchX, touchY;
    let sketchArrayX = [];
    let sketchArrayY = [];


    // Draws a dot at a specific position on the supplied canvas name
    // Parameters are: A canvas context, the x position, the y position, the size of the dot
    function drawDot(ctx, x, y, size) {
      sketchArrayX.push(x);
      sketchArrayY.push(y);

      // Let's use black by setting RGB values to 0, and 255 alpha (completely opaque)
      r = 0;
      g = 0;
      b = 0;
      a = 255;

      // Select a fill style
      ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + (a / 255) + ")";

      // Draw a filled circle
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    }

    // Clear the canvas context using the canvas width and height
    function clearCanvas(canvas, ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sketchArrayX = [];
      sketchArrayY = [];        
    }

    // Keep track of the mouse button being pressed and draw a dot at current location
    function sketchpad_mouseDown() {
      mouseDown = 1;
      drawDot(ctx, mouseX, mouseY, 4);
    }

    // Keep track of the mouse button being released
    function sketchpad_mouseUp() {
      mouseDown = 0;

    }

    // Keep track of the mouse position and draw a dot if mouse button is currently pressed
    function sketchpad_mouseMove(e) {
      // Update the mouse co-ordinates when moved
      getMousePos(e);

      // Draw a dot if the mouse button is currently being pressed
      if (mouseDown == 1) {
        drawDot(ctx, mouseX, mouseY, 4);
      }
    }

    // Get the current mouse position relative to the top-left of the canvas
    function getMousePos(e) {
      if (!e)
        var e = event;

      if (e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
      } else if (e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
      }
    }

    // Draw something when a touch start is detected
    function sketchpad_touchStart() {
      // Update the touch co-ordinates
      getTouchPos();

      drawDot(ctx, touchX, touchY, 12);

      // Prevents an additional mousedown event being triggered
      event.preventDefault();
    }

    // Draw something and prevent the default scrolling when touch movement is detected
    function sketchpad_touchMove(e) {
      // Update the touch co-ordinates
      getTouchPos(e);

      // During a touchmove event, unlike a mousemove event, we don't need to check if the touch is engaged, since there will always be contact with the screen by definition.
      drawDot(ctx, touchX, touchY, 12);

      // Prevent a scrolling action as a result of this touchmove triggering.
      event.preventDefault();
    }


    // Get the touch position relative to the top-left of the canvas
    // When we get the raw values of pageX and pageY below, they take into account the scrolling on the page
    // but not the position relative to our target div. We'll adjust them using "target.offsetLeft" and
    // "target.offsetTop" to get the correct values in relation to the top left of the canvas.
    function getTouchPos(e) {
      if (!e)
        var e = event;

      if (e.touches) {
        if (e.touches.length == 1) { // Only deal with one finger
          var touch = e.touches[0]; // Get the information for finger #1
          touchX = touch.pageX - touch.target.offsetLeft;
          touchY = touch.pageY - touch.target.offsetTop;
        }
      }
    }




    // Get the specific canvas element from the HTML document
    canvas = document.getElementById('sketchpad');

    // If the browser supports the canvas tag, get the 2d drawing context for this canvas
    if (canvas.getContext)
      ctx = canvas.getContext('2d');

    // Check that we have a valid context to draw on/with before adding event handlers
    if (ctx) {
      // React to mouse events on the canvas, and mouseup on the entire document
      canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
      canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
      window.addEventListener('mouseup', sketchpad_mouseUp, false);

      // // React to touch events on the canvas
      // canvas.addEventListener('touchstart', sketchpad_touchStart, false);
      // canvas.addEventListener('touchmove', sketchpad_touchMove, false);
      // canvas.addEventListener('touchend', sketchpad_touchEnd, false);
    }


      
  }

});


