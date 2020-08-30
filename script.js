const infoDiv = document.getElementById('info');
const midiOutputSelect = document.getElementById('midi-outputs');
// const midiInputSelect = document.getElementById('midi-inputs');

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
      console.log(val1, val2)
      output.setNonRegisteredParameter([x, y], [val2, val1], 1);
      // let a = Math.floor(Math.random() * 64);      
      // let b = Math.floor(Math.random() * 127);           
    }

    

    
      let nrpnArray = [0,0,0,0]; // CCs [99,98,6,38]
      // Listen to NRPN message on all channels
      input.addListener('controlchange', 'all',
        function (e) {
          if (e.controller.number === 99) {
            nrpnArray[0] = e.value;
            changePage(nrpnArray);
          }
          if (e.controller.number === 98) {
            nrpnArray[1] = e.value;
            changePage(nrpnArray);
          }
          if (e.controller.number === 6) {
            nrpnArray[2] = e.value;
            changePage(nrpnArray);
          }
          if (e.controller.number === 38) {
            nrpnArray[3] = e.value;
            changePage(nrpnArray);
          }          
        }          
      );

      function calculate(x, y) {
        let newParam = (x << 8) + (y & 0xff);
        console.log(newParam);
      }

      calculate(64, 26)

      function changePage(arr) {           
        let newValue = (arr[2] << 8) + (arr[3] & 0xff);        
        let newParam = (arr[0] << 8) + (arr[1] & 0xff);
        // let val1 = arr[0]
        // let val2 = arr[1];

       console.log(newParam);

      

        
        switch(newParam) {
          case (16644):
            allOscCent.value = newValue;            
            break;
          case (16153):
            osc1Type.value = newValue;
            break;
          case (16641):
            osc1Cent.value = newValue;
            break;
          case (16212):
            osc1Keytrack.value = newValue;
            break;
          case (16682):
            osc1WaveScan.value = newValue;
            break;
          case (16224):
            osc1WaveScanWav1.value = newValue;
            break;
          case (16225):
            osc1WaveScanWav2.value = newValue;
            break;
          case (16226):
            osc1WaveScanWav3.value = newValue;
            break;
          case (16227):
            osc1WaveScanWav4.value = newValue;
            break;
          case (16228):
            osc1WaveScanWav5.value = newValue;
            break;
          case (16229):
            osc1WaveScanWav6.value = newValue;
            break;
          case (16230):
            osc1WaveScanWav7.value = newValue;
            break;
          case (16231):
            osc1WaveScanWav8.value = newValue;
            break;
          case (16154):
            osc2Type.value = newValue;
            break;
          case (16442):
            osc2Cent.value = newValue;
            break;
          case (16213):
            osc2Keytrack.value = newValue;
            break;
          case (16683):
            osc2WaveScan.value = newValue;
            break;
          case (16232):
            osc2WaveScanWav1.value = newValue;
            break;
          case (16233):
            osc2WaveScanWav2.value = newValue;
            break;
          case (16234):
            osc2WaveScanWav3.value = newValue;
            break;
          case (16235):
            osc2WaveScanWav4.value = newValue;
            break;
          case (16236):
            osc2WaveScanWav5.value = newValue;
            break;
          case (16237):
            osc2WaveScanWav6.value = newValue;
            break;
          case (16238):
            osc2WaveScanWav7.value = newValue;
            break;
          case (16239):
            osc2WaveScanWav8.value = newValue;
            break;
          case (16141):
            osc3Type.value = newValue;
            break;
          case (16643):
            osc3Cent.value = newValue;
            break;
          case (16214):
            osc3Keytrack.value = newValue;
            break;
          case (16684):
            mutator1Ratio.value = newValue;
            break;
          case (16415):
            mutator1Depth.value = newValue;
            break;
          case (16418):
            mutator1DryWet.value = newValue;
            break;
          case (16421):
            mutator1Feedback.value = newValue;
            break;
          case (16412):
            mutator1Window.value = newValue;
            break;
          case (16480):
            mutator1Warp1.value = newValue;
            break;
          case (16481):
            mutator1Warp2.value = newValue;
            break;
          case (16482):
            mutator1Warp3.value = newValue;
            break;
          case (16483):
            mutator1Warp4.value = newValue;
            break;
          case (16484):
            mutator1Warp5.value = newValue;
            break;
          case (16485):
            mutator1Warp6.value = newValue;
            break;
          case (16486):
            mutator1Warp7.value = newValue;
            break;
          case (16487):
            mutator1Warp8.value = newValue;
            break;
          case (16685):
            mutator2Ratio.value = newValue;
            break;
          case (16416):
            mutator2Depth.value = newValue;
            break;
          case (16419):
            mutator2DryWet.value = newValue;
            break;
          case (16422):
            mutator2Feedback.value = newValue;
            break;
          case (16413):
            mutator2Window.value = newValue;
            break;
          case (16488):
            mutator2Warp1.value = newValue;
            break;
          case (16489):
            mutator2Warp2.value = newValue;
            break;
          case (16489):
            mutator2Warp3.value = newValue;
            break;
          case (16490):
            mutator2Warp4.value = newValue;
            break;
          case (16491):
            mutator2Warp5.value = newValue;
            break;
          case (16492):
            mutator2Warp6.value = newValue;
            break;
          case (16493):
            mutator2Warp7.value = newValue;
            break;
          case (16494):
            mutator2Warp8.value = newValue;
            break;
          case (16686):
            mutator3Ratio.value = newValue;
            break;
          case (16417):
            mutator3Depth.value = newValue;
            break;
          case (64 && 36):
            mutator3DryWet.value = newValue;
            break;
          case (16423):
            mutator3Feedback.value = newValue;
            break;
          case (16414):
            mutator3Window.value = newValue;
            break;
          case (16496):
            mutator3Warp1.value = newValue;
            break;
          case (16497):
            mutator3Warp2.value = newValue;
            break;
          case (16498):
            mutator3Warp3.value = newValue;
            break;
          case (16499):
            mutator3Warp4.value = newValue;
            break;
          case (16500):
            mutator3Warp5.value = newValue;
            break;
          case (16501):
            mutator3Warp6.value = newValue;
            break;
          case (16502):
            mutator3Warp7.value = newValue;
            break;
          case (16503):
            mutator3Warp8.value = newValue;
            break;
          case (16687):
            mutator4Ratio.value = newValue;
            break;
          case (16406):
            mutator4Depth.value = newValue;
            break;
          case (16407):
            mutator4DryWet.value = newValue;
            break;
          case (16411):
            mutator4Feedback.value = newValue;
            break;
          case (16410):
            mutator4Window.value = newValue;
            break;
          case (16504):
            mutator4Warp1.value = newValue;
            break;
          case (16505):
            mutator4Warp2.value = newValue;
            break;
          case (16506):
            mutator4Warp3.value = newValue;
            break;
          case (16507):
            mutator4Warp4.value = newValue;
            break;
          case (16508):
            mutator4Warp5.value = newValue;
            break;
          case (16509):
            mutator4Warp6.value = newValue;
            break;
          case (16510):
            mutator4Warp7.value = newValue;
            break;
          case (16511):
            mutator4Warp8.value = newValue;
            break;
          case (16387):
            rm12Depth.value = newValue;
            break;
          case (16391):
            osc1Vol.value = newValue;
            break;
          case (16392):
            osc1Pan.value = newValue;
            break;
          case (16433):
            osc1Filter.value = newValue;
            break;
          case (16393):
            osc2Vol.value = newValue;
            break;
          case (16394):
            osc2Pan.value = newValue;
            break;
          case (16434):
            osc2Filter.value = newValue;
            break;
          case (16395):
            osc3Vol.value = newValue;
            break;
          case (16396):
            osc3Pan.value = newValue;
            break;
          case (16435):
            osc3Filter.value = newValue;
            break;
          case (16397):
            noiseVol.value = newValue;
            break;
          case (16398):
            noisePan.value = newValue;
            break;
          case (16436):
            noiseFilter.value = newValue;
            break;
          case (16385):
            rm12Vol.value = newValue;
            break;
          case (16388):
            rm12Pan.value = newValue;
            break;
          case (16437):
            rm12Filter.value = newValue;
            break;
          case (16424):
            filter1Cutoff.value = newValue;
            break;
          case (16427):
            filter1Drive.value = newValue;
            break;
          case (16425):
            filter1Res.value = newValue;
            break;
          case (16426):
            filter1Special.value = newValue;
            break;
          case (16742):
            filter1Keytrack.value = newValue;
            break;
          case (16736):
            filter1LFO1Amt.value = newValue;
            break;
          case (16745):
            filter1VelEnv.value = newValue;
            break;
          case (16737):
            filter1EnvAmt.value = newValue;
            break;
          case (16428):
            filter2Cutoff.value = newValue;
            break;          
          case (16429):
            filter2Res.value = newValue;
            break;
          case (16430):
            filter2Morph.value = newValue;
            break;
          case (16743):
            filter2Keytrack.value = newValue;
            break;
          case (16738):
            filter2LFO1Amt.value = newValue;
            break;
          case (16746):
            filter2VelEnv.value = newValue;
            break;
          case (16739):
            filter2EnvAmt.value = newValue;
            break;
          case (16386):
            ampLevel.value = newValue;
            break;
          case (16747):
            ampVelEnv.value = newValue;
            break;
          case (16740):
            ampLFO2Amt.value = newValue;
            break;
          case (15231):
            preFXType.value = newValue;
            break;
          case (15104):
            preFXPreset.value = newValue;
            break;
          case (16750):
            preFXMix.value = newValue;
            break;
          case (16751):
            preFXParam1.value = newValue;
            break;
          case (16752):
            preFXParam2.value = newValue;
            break;
          case (15152):
            preFXParam3.value = newValue;
            break;
          case (15168):
            preFXParam4.value = newValue;
            break;
          case (15184):
            preFXParam5.value = newValue;
            break;
          case (15219):
            preFXSelectionType.value = newValue;
            break;
          case (16760):
            delayDryWet.value = newValue;
            break;
          case (16757):
            delayFeedback.value = newValue;
            break;
          case (16758):
            delayFeedtone.value = newValue;
            break;
          case (16756):
            delayTime.value = newValue;
            break;
          case (16759):
            delayWetTone.value = newValue;
            break;
          case (16766):
            reverbDryWet.value = newValue;
            break;
          case (16763):
            reverbHiDamp.value = newValue;
            break;
          case (16764):
            reverbLoDamp.value = newValue;
            break;
          case (16765):
            reverbPreDelay.value = newValue;
            break;
          case (16761):
            reverbTime.value = newValue;
            break;
          case (16762):
            reverbTone.value = newValue;
            break;
          case (15474):
            reverbType.value = newValue;
            break;
          case (15487):
            postFXType.value = newValue;
            break;
          case (15360):
            postFXPreset.value = newValue;
            break;
          case (16753):
            postFXMix.value = newValue;
            break;
          case (16754):
            postFXParam1.value = newValue;
            break;
          case (16755):
            preFXParam2.value = newValue;
            break;
          case (15408):
            postFXParam3.value = newValue;
            break;
          case (15424):
            postFXParam4.value = newValue;
            break;
          case (15440):
            postFXParam5.value = newValue;
            break;
          case (15475):
            postFXSidechainType.value = newValue;
            break;
          case (16651):
            lfo1Gain.value = newValue;
            break;
          case (16645):
            lfo1Rate.value = newValue;
            break;
          case (16176):
            lfo1Phase.value = newValue;
            break;
          case (16652):
            lfo2Gain.value = newValue;
            break;
          case (16646):
            lfo2Rate.value = newValue;
            break;
          case (16177):
            lfo2Phase.value = newValue;
            break;
          case (16653):
            lfo3Gain.value = newValue;
            break;
          case (16647):
            lfo3Rate.value = newValue;
            break;
          case (16178):
            lfo3Phase.value = newValue;
            break;
          case (16654):
            lfo4Gain.value = newValue;
            break;
          case (16648):
            lfo4Rate.value = newValue;
            break;
          case (16179):
            lfo4Phase.value = newValue;
            break;
          case (16655):
            lfo5Gain.value = newValue;
            break;
          case (16649):
            lfo5Rate.value = newValue;
            break;
          case (16180):
            lfo5Phase.value = newValue;
            break;
          case (16657):
            env1Att.value = newValue;
            break;
          case (16662):
            env1Hold.value = newValue;
            break;
          case (16667):
            env1Dec.value = newValue;
            break;
          case (16672):
            env1Sus.value = newValue;
            break;
          case (16677):
            env1Rel.value = newValue;
            break;
          case (16240):
            env1AttCurve.value = newValue;
            break;
          case (16245):
            env1DecCurve.value = newValue;
            break;
          case (16250):
            env1RelCurve.value = newValue;
            break;
          case (16658):
            env2Att.value = newValue;
            break;
          case (16633):
            env2Hold.value = newValue;
            break;
          case (16668):
            env2Dec.value = newValue;
            break;
          case (16673):
            env2Sus.value = newValue;
            break;
          case (16678):
            env2Rel.value = newValue;
            break;
          case (16241):
            env2AttCurve.value = newValue;
            break;
          case (16246):
            env2DecCurve.value = newValue;
            break;
          case (16251):
            env2RelCurve.value = newValue;
            break;
          case (16659):
            env3Att.value = newValue;
            break;
          case (16664):
            env3Hold.value = newValue;
            break;
          case (16669):
            env3Dec.value = newValue;
            break;
          case (16674):
            env3Sus.value = newValue;
            break;
          case (16679):
            env3Rel.value = newValue;
            break;
          case (16242):
            env3AttCurve.value = newValue;
            break;
          case (16247):
            env3DecCurve.value = newValue;
            break;
          case (16252):
            env3RelCurve.value = newValue;
            break;
          case (16660):
            env4Att.value = newValue;
            break;
          case (16665):
            env4Hold.value = newValue;
            break;
          case (16670):
            env4Dec.value = newValue;
            break;
          case (16675):
            env4Sus.value = newValue;
            break;
          case (16680):
            env4Rel.value = newValue;
            break;
          case (16243):
            env4AttCurve.value = newValue;
            break;
          case (16248):
            env4DecCurve.value = newValue;
            break;
          case (16253):
            env4RelCurve.value = newValue;
            break;
          case (16661):
            env5Att.value = newValue;
            break;
          case (16671):
            env5Hold.value = newValue;
            break;
          case (16667):
            env5Dec.value = newValue;
            break;
          case (16676):
            env5Sus.value = newValue;
            break;
          case (16681):
            env5Rel.value = newValue;
            break;
          case (16244):
            env5AttCurve.value = newValue;
            break;
          case (16249):
            env5DecCurve.value = newValue;
            break;
          case (16254):
            env5RelCurve.value = newValue;
            break;
          case (16704):
            modMatrix1Depth.value = newValue;
            break;
          case (16705):
            modMatrix2Depth.value = newValue;
            break;
          case (16706):
            modMatrix3Depth.value = newValue;
            break;
          case (16707):
            modMatrix4Depth.value = newValue;
            break;
          case (16708):
            modMatrix5Depth.value = newValue;
            break;
          case (16709):
            modMatrix6Depth.value = newValue;
            break;
          case (16710):
            modMatrix7Depth.value = newValue;
            break;
          case (16711):
            modMatrix8Depth.value = newValue;
            break;
          case (16712):
            modMatrix9Depth.value = newValue;
            break;
          case (16713):
            modMatrix10Depth.value = newValue;
            break;
          case (16714):
            modMatrix11Depth.value = newValue;
            break;
          case (16715):
            modMatrix12Depth.value = newValue;
            break;
          case (16716):
            modMatrix13Depth.value = newValue;
            break;
          case (16717):
            modMatrix14Depth.value = newValue;
            break;
          case (16718):
            modMatrix15Depth.value = newValue;
            break;
          case (16719):
            modMatrix16Depth.value = newValue;
            break;
          case (16720):
            modMatrix17Depth.value = newValue;
            break;
          case (16721):
            modMatrix18Depth.value = newValue;
            break;
          case (16722):
            modMatrix19Depth.value = newValue;
            break;
          case (16723):
            modMatrix20Depth.value = newValue;
            break;
          case (16724):
            modMatrix21Depth.value = newValue;
            break;
          case (16725):
            modMatrix22Depth.value = newValue;
            break;
          case (16726):
            modMatrix23Depth.value = newValue;
            break;
          case (16727):
            modMatrix24Depth.value = newValue;
            break;
          case (16728):
            modMatrix25Depth.value = newValue;
            break;
          case (16729):
            modMatrix26Depth.value = newValue;
            break;
          case (16730):
            modMatrix27Depth.value = newValue;
            break;
          case (16731):
            modMatrix28Depth.value = newValue;
            break;
          case (16732):
            modMatrix29Depth.value = newValue;
            break;
          case (16733):
            modMatrix30Depth.value = newValue;
            break;
          case (16734):
            modMatrix31Depth.value = newValue;
            break;
          case (16735):
            modMatrix32Depth.value = newValue;
            break;
                                
        }                
      }

      
    






    /////////////////////

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
    const filter1Drive = document.getElementById('filter1-drive');
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

    // LFOs    
    const lfo1Gain = document.getElementById('lfo1-gain');
    const lfo1Rate = document.getElementById('lfo1-rate');
    const lfo1Phase = document.getElementById('lfo1-phase')
    const lfo2Gain = document.getElementById('lfo2-gain');
    const lfo2Rate = document.getElementById('lfo2-rate');
    const lfo2Phase = document.getElementById('lfo2-phase')
    const lfo3Gain = document.getElementById('lfo3-gain');
    const lfo3Rate = document.getElementById('lfo3-rate');
    const lfo3Phase = document.getElementById('lfo3-phase')
    const lfo4Gain = document.getElementById('lfo4-gain');
    const lfo4Rate = document.getElementById('lfo4-rate');
    const lfo4Phase = document.getElementById('lfo4-phase')
    const lfo5Gain = document.getElementById('lfo5-gain');
    const lfo5Rate = document.getElementById('lfo5-rate');
    const lfo5Phase = document.getElementById('lfo5-phase')

    // ENVELOPE 1
    const env1Att = document.getElementById('env1-att');
    const env1Hold = document.getElementById('env1-hold');
    const env1Dec = document.getElementById('env1-dec');
    const env1Sus = document.getElementById('env1-sus');
    const env1Rel = document.getElementById('env1-rel');
    const env1AttCurve = document.getElementById('env1-att-curve');
    const env1DecCurve = document.getElementById('env1-dec-curve');
    const env1RelCurve = document.getElementById('env1-rel-curve');

    // ENVELOPE 2
    const env2Att = document.getElementById('env2-att');
    const env2Hold = document.getElementById('env2-hold');
    const env2Dec = document.getElementById('env2-dec');
    const env2Sus = document.getElementById('env2-sus');
    const env2Rel = document.getElementById('env2-rel');
    const env2AttCurve = document.getElementById('env2-att-curve');
    const env2DecCurve = document.getElementById('env2-dec-curve');
    const env2RelCurve = document.getElementById('env2-rel-curve');

    // ENVELOPE 3
    const env3Att = document.getElementById('env3-att');
    const env3Hold = document.getElementById('env3-hold');
    const env3Dec = document.getElementById('env3-dec');
    const env3Sus = document.getElementById('env3-sus');
    const env3Rel = document.getElementById('env3-rel');
    const env3AttCurve = document.getElementById('env3-att-curve');
    const env3DecCurve = document.getElementById('env3-dec-curve');
    const env3RelCurve = document.getElementById('env3-rel-curve');

    // ENVELOPE 4
    const env4Att = document.getElementById('env4-att');
    const env4Hold = document.getElementById('env4-hold');
    const env4Dec = document.getElementById('env4-dec');
    const env4Sus = document.getElementById('env4-sus');
    const env4Rel = document.getElementById('env4-rel');
    const env4AttCurve = document.getElementById('env4-att-curve');
    const env4DecCurve = document.getElementById('env4-dec-curve');
    const env4RelCurve = document.getElementById('env4-rel-curve');

    // ENVELOPE 5
    const env5Att = document.getElementById('env5-att');
    const env5Hold = document.getElementById('env5-hold');
    const env5Dec = document.getElementById('env5-dec');
    const env5Sus = document.getElementById('env5-sus');
    const env5Rel = document.getElementById('env5-rel');
    const env5AttCurve = document.getElementById('env5-att-curve');
    const env5DecCurve = document.getElementById('env5-dec-curve');
    const env5RelCurve = document.getElementById('env5-rel-curve');

    // INSERT MACROS HERE //

    // MOD MATRIX
    const modMatrix1Depth = document.getElementById('mod-matrix1-depth');
    const modMatrix2Depth = document.getElementById('mod-matrix2-depth');
    const modMatrix3Depth = document.getElementById('mod-matrix3-depth');
    const modMatrix4Depth = document.getElementById('mod-matrix4-depth');
    const modMatrix5Depth = document.getElementById('mod-matrix5-depth');
    const modMatrix6Depth = document.getElementById('mod-matrix6-depth');
    const modMatrix7Depth = document.getElementById('mod-matrix7-depth');
    const modMatrix8Depth = document.getElementById('mod-matrix8-depth');
    const modMatrix9Depth = document.getElementById('mod-matrix9-depth');
    const modMatrix10Depth = document.getElementById('mod-matrix10-depth');
    const modMatrix11Depth = document.getElementById('mod-matrix11-depth');
    const modMatrix12Depth = document.getElementById('mod-matrix12-depth');
    const modMatrix13Depth = document.getElementById('mod-matrix13-depth');
    const modMatrix14Depth = document.getElementById('mod-matrix14-depth');
    const modMatrix15Depth = document.getElementById('mod-matrix15-depth');
    const modMatrix16Depth = document.getElementById('mod-matrix16-depth');
    const modMatrix17Depth = document.getElementById('mod-matrix17-depth');
    const modMatrix18Depth = document.getElementById('mod-matrix18-depth');
    const modMatrix19Depth = document.getElementById('mod-matrix19-depth');
    const modMatrix20Depth = document.getElementById('mod-matrix20-depth');
    const modMatrix21Depth = document.getElementById('mod-matrix21-depth');
    const modMatrix22Depth = document.getElementById('mod-matrix22-depth');
    const modMatrix23Depth = document.getElementById('mod-matrix23-depth');
    const modMatrix24Depth = document.getElementById('mod-matrix24-depth');
    const modMatrix25Depth = document.getElementById('mod-matrix25-depth');
    const modMatrix26Depth = document.getElementById('mod-matrix26-depth');
    const modMatrix27Depth = document.getElementById('mod-matrix27-depth');
    const modMatrix28Depth = document.getElementById('mod-matrix28-depth');
    const modMatrix29Depth = document.getElementById('mod-matrix29-depth');
    const modMatrix30Depth = document.getElementById('mod-matrix30-depth');
    const modMatrix31Depth = document.getElementById('mod-matrix31-depth');
    const modMatrix32Depth = document.getElementById('mod-matrix32-depth');













    ////////////////


    // // All OSC
    allOscCent.addEventListener('input', function(){changeItDefault(65, 04, allOscCent.value)}); // [0, 0] = 8192
    // oscMode.addEventListener('input', function(){changeItDefault(63, 24, oscMode.value)}); // Check manual
    // semi.addEventListener('input', function(){changeItDefault(63, 17, 64, 0)}, false); // Check manual
    
    // // OSC 1
    osc1Type.addEventListener('input', function(){changeItDefault(63, 25, osc1Type.value)}); // 0-218 / 1, 90
    osc1Cent.addEventListener('input', function(){changeItDefault(65, 01, osc1Cent.value)});
    osc1Keytrack.addEventListener('input', function(){changeItDefault(63, 84, osc1Keytrack.value)});
    osc1WaveScan.addEventListener('input', function(){changeItDefault(65, 42, osc1WaveScan.value)});
    // soloOsc1WaveScan.addEventListener('input', function(){changeItDefault(63, 27, 0, 0)}, false); // Check manual
    osc1WaveScanWav1.addEventListener('input', function(){changeItDefault(63, 96, osc1WaveScanWav1.value)}); // 0-218 / 1, 90
    osc1WaveScanWav2.addEventListener('input', function(){changeItDefault(63, 97, osc1WaveScanWav2.value)}); // 0-218 / 1, 90
    osc1WaveScanWav3.addEventListener('input', function(){changeItDefault(63, 98, osc1WaveScanWav3.value)}); // 0-218 / 1, 90
    osc1WaveScanWav4.addEventListener('input', function(){changeItDefault(63, 99, osc1WaveScanWav4.value)}); // 0-218 / 1, 90
    osc1WaveScanWav5.addEventListener('input', function(){changeItDefault(63, 100, osc1WaveScanWav5.value)}); // 0-218 / 1, 90
    osc1WaveScanWav6.addEventListener('input', function(){changeItDefault(63, 101, osc1WaveScanWav6.value)}); // 0-218 / 1, 90
    osc1WaveScanWav7.addEventListener('input', function(){changeItDefault(63, 102, osc1WaveScanWav7.value)}); // 0-218 / 1, 90
    osc1WaveScanWav8.addEventListener('input', function(){changeItDefault(63, 103, osc1WaveScanWav8.value)}); // 0-218 / 1, 90

    // // OSC 2
    osc2Type.addEventListener('input', function(){changeItDefault(63, 26, osc2Type.value)}); // 0-218 / 1, 90
    osc2Cent.addEventListener('input', function(){changeItDefault(65, 02, osc2Cent.value)});
    osc2Keytrack.addEventListener('input', function(){changeItDefault(63, 85, osc2Keytrack.value)}); // 0-200 / 1, 72
    osc2WaveScan.addEventListener('input', function(){changeItDefault(65, 43, osc2WaveScan.value)});
    // soloOsc2WaveScan.addEventListener('input', function(){changeItDefault(63, 28, 0, 0)}, false); // Check manual
    osc2WaveScanWav1.addEventListener('input', function(){changeItDefault(63, 104, osc2WaveScanWav1.value)}); // 0-218 / 1, 90
    osc2WaveScanWav2.addEventListener('input', function(){changeItDefault(63, 105, osc2WaveScanWav2.value)}); // 0-218 / 1, 90
    osc2WaveScanWav3.addEventListener('input', function(){changeItDefault(63, 106, osc2WaveScanWav3.value)}); // 0-218 / 1, 90
    osc2WaveScanWav4.addEventListener('input', function(){changeItDefault(63, 107, osc2WaveScanWav4.value)}); // 0-218 / 1, 90
    osc2WaveScanWav5.addEventListener('input', function(){changeItDefault(63, 108, osc2WaveScanWav5.value)}); // 0-218 / 1, 90
    osc2WaveScanWav6.addEventListener('input', function(){changeItDefault(63, 109, osc2WaveScanWav6.value)}); // 0-218 / 1, 90
    osc2WaveScanWav7.addEventListener('input', function(){changeItDefault(63, 110, osc2WaveScanWav7.value)}); // 0-218 / 1, 90
    osc2WaveScanWav8.addEventListener('input', function(){changeItDefault(63, 111, osc2WaveScanWav8.value)}); // 0-218 / 1, 90

    
    // // OSC 3
    osc3Type.addEventListener('input', function(){changeItDefault(63,  13, osc3Type.value)});
    osc3Cent.addEventListener('input', function(){changeItDefault(65, 03, osc3Cent.value)});
    osc3Keytrack.addEventListener('input', function(){changeItDefault(63, 86, osc3Keytrack.value)});


    ////////////////////////

    // All MUTATORS      
    // mutatorMode.addEventListener('input', function(){changeItDefault(63, 33, mutatorMode.value)});
    // mutatorSourcesFMLin.addEventListener('input', function(){changeItDefault(63, 36, mutatorSourcesFMLin.value)});
    // mutatorSourcesOscSync.addEventListener('input', function(){changeItDefault(63, 34, mutatorSourcesOscSync.value)});

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
    mutator3Depth.addEventListener('input', function(){changeItDefault(64, 33, mutator3Depth.value)}); 
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
    preFXParam1.addEventListener('input', function(){changeItDefault(65, 111, preFXParam1.value)});
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

    // LFOs    
    lfo1Gain.addEventListener('input', function(){changeItDefault(65, 11, lfo1Gain.value)});
    lfo1Rate.addEventListener('input', function(){changeItDefault(65, 05, lfo1Rate.value)});
    lfo1Phase.addEventListener('input', function(){changeItDefault(63, 48, lfo1Phase.value)});
    lfo2Gain.addEventListener('input', function(){changeItDefault(65, 12, lfo2Gain.value)});
    lfo2Rate.addEventListener('input', function(){changeItDefault(65, 06, lfo2Gain.value)});
    lfo2Phase.addEventListener('input', function(){changeItDefault(63, 49, lfo2Gain.value)});
    lfo3Gain.addEventListener('input', function(){changeItDefault(65, 13, lfo3Gain.value)});
    lfo3Rate.addEventListener('input', function(){changeItDefault(65, 07, lfo3Gain.value)});
    lfo3Phase.addEventListener('input', function(){changeItDefault(63, 50, lfo3Gain.value)});
    lfo4Gain.addEventListener('input', function(){changeItDefault(65, 14, lfo4Gain.value)});
    lfo4Rate.addEventListener('input', function(){changeItDefault(65, 08, lfo4Gain.value)});
    lfo4Phase.addEventListener('input', function(){changeItDefault(63, 51, lfo4Gain.value)});
    lfo5Gain.addEventListener('input', function(){changeItDefault(65, 15, lfo5Gain.value)});
    lfo5Rate.addEventListener('input', function(){changeItDefault(65, 09, lfo5Gain.value)});
    lfo5Phase.addEventListener('input', function(){changeItDefault(63, 52, lfo5Gain.value)});

    // ENVELOPE 1
    env1Att.addEventListener('input', function(){changeItDefault(65, 17, env1Att.value)});
    env1Hold.addEventListener('input', function(){changeItDefault(65, 22, env1Hold.value)});
    env1Dec.addEventListener('input', function(){changeItDefault(65, 27, env1Dec.value)});
    env1Sus.addEventListener('input', function(){changeItDefault(65, 32, env1Sus.value)});
    env1Rel.addEventListener('input', function(){changeItDefault(65, 37, env1Rel.value)});
    env1AttCurve.addEventListener('input', function(){changeItDefault(63, 112, env1AttCurve.value)});
    env1DecCurve.addEventListener('input', function(){changeItDefault(63, 117, env1DecCurve.value)});
    env1RelCurve.addEventListener('input', function(){changeItDefault(63, 122, env1RelCurve.value)});

    // ENVELOPE 2
    env2Att.addEventListener('input', function(){changeItDefault(65, 18, env2Att.value)});
    env2Hold.addEventListener('input', function(){changeItDefault(65, 23, env2Hold.value)});
    env2Dec.addEventListener('input', function(){changeItDefault(65, 28, env2Dec.value)});
    env2Sus.addEventListener('input', function(){changeItDefault(65, 33, env2Sus.value)});
    env2Rel.addEventListener('input', function(){changeItDefault(65, 38, env2Rel.value)});
    env2AttCurve.addEventListener('input', function(){changeItDefault(63, 113, env2AttCurve.value)});
    env2DecCurve.addEventListener('input', function(){changeItDefault(63, 118, env2DecCurve.value)});
    env2RelCurve.addEventListener('input', function(){changeItDefault(63, 123, env2RelCurve.value)});

    // ENVELOPE 3
    env3Att.addEventListener('input', function(){changeItDefault(65, 19, env3Att.value)});
    env3Hold.addEventListener('input', function(){changeItDefault(65, 24, env3Hold.value)});
    env3Dec.addEventListener('input', function(){changeItDefault(65, 29, env3Dec.value)});
    env3Sus.addEventListener('input', function(){changeItDefault(65, 34, env3Sus.value)});
    env3Rel.addEventListener('input', function(){changeItDefault(65, 39, env3Rel.value)});
    env3AttCurve.addEventListener('input', function(){changeItDefault(63, 114, env3AttCurve.value)});
    env3DecCurve.addEventListener('input', function(){changeItDefault(63, 119, env3DecCurve.value)});
    env3RelCurve.addEventListener('input', function(){changeItDefault(63, 124, env3RelCurve.value)});

    // ENVELOPE 4
    env4Att.addEventListener('input', function(){changeItDefault(65, 20, env4Att.value)});
    env4Hold.addEventListener('input', function(){changeItDefault(65, 25, env4Hold.value)});
    env4Dec.addEventListener('input', function(){changeItDefault(65, 30, env4Dec.value)});
    env4Sus.addEventListener('input', function(){changeItDefault(65, 35, env4Sus.value)});
    env4Rel.addEventListener('input', function(){changeItDefault(65, 40, env4Rel.value)});
    env4AttCurve.addEventListener('input', function(){changeItDefault(63, 115, env4AttCurve.value)});
    env4DecCurve.addEventListener('input', function(){changeItDefault(63, 120, env4DecCurve.value)});
    env4RelCurve.addEventListener('input', function(){changeItDefault(63, 125, env4RelCurve.value)});

    // ENVELOPE 5
    env5Att.addEventListener('input', function(){changeItDefault(65, 21, env5Att.value)});
    env5Hold.addEventListener('input', function(){changeItDefault(65, 26, env5Hold.value)});
    env5Dec.addEventListener('input', function(){changeItDefault(65, 31, env5Dec.value)});
    env5Sus.addEventListener('input', function(){changeItDefault(65, 36, env5Sus.value)});
    env5Rel.addEventListener('input', function(){changeItDefault(65, 41, env5Rel.value)});
    env5AttCurve.addEventListener('input', function(){changeItDefault(63, 116, env5AttCurve.value)});
    env5DecCurve.addEventListener('input', function(){changeItDefault(63, 121, env5DecCurve.value)});
    env5RelCurve.addEventListener('input', function(){changeItDefault(63, 126, env5RelCurve.value)});

    // MOD MATRIX
    modMatrix1Depth.addEventListener('input', function(){changeItDefault(65, 64, modMatrix1Depth.value)});
    modMatrix2Depth.addEventListener('input', function(){changeItDefault(65, 65, modMatrix2Depth.value)});
    modMatrix3Depth.addEventListener('input', function(){changeItDefault(65, 66, modMatrix3Depth.value)});
    modMatrix4Depth.addEventListener('input', function(){changeItDefault(65, 67, modMatrix4Depth.value)});
    modMatrix5Depth.addEventListener('input', function(){changeItDefault(65, 68, modMatrix5Depth.value)});
    modMatrix6Depth.addEventListener('input', function(){changeItDefault(65, 69, modMatrix6Depth.value)});
    modMatrix7Depth.addEventListener('input', function(){changeItDefault(65, 70, modMatrix7Depth.value)});
    modMatrix8Depth.addEventListener('input', function(){changeItDefault(65, 71, modMatrix8Depth.value)});
    modMatrix9Depth.addEventListener('input', function(){changeItDefault(65, 72, modMatrix9Depth.value)});
    modMatrix10Depth.addEventListener('input', function(){changeItDefault(65, 73, modMatrix10Depth.value)});
    modMatrix11Depth.addEventListener('input', function(){changeItDefault(65, 74, modMatrix11Depth.value)});
    modMatrix12Depth.addEventListener('input', function(){changeItDefault(65, 75, modMatrix12Depth.value)});
    modMatrix13Depth.addEventListener('input', function(){changeItDefault(65, 76, modMatrix13Depth.value)});
    modMatrix14Depth.addEventListener('input', function(){changeItDefault(65, 77, modMatrix14Depth.value)});
    modMatrix15Depth.addEventListener('input', function(){changeItDefault(65, 78, modMatrix15Depth.value)});
    modMatrix16Depth.addEventListener('input', function(){changeItDefault(65, 79, modMatrix16Depth.value)});
    modMatrix17Depth.addEventListener('input', function(){changeItDefault(65, 80, modMatrix17Depth.value)});
    modMatrix18Depth.addEventListener('input', function(){changeItDefault(65, 81, modMatrix18Depth.value)});
    modMatrix19Depth.addEventListener('input', function(){changeItDefault(65, 82, modMatrix19Depth.value)});
    modMatrix20Depth.addEventListener('input', function(){changeItDefault(65, 83, modMatrix20Depth.value)});
    modMatrix21Depth.addEventListener('input', function(){changeItDefault(65, 84, modMatrix21Depth.value)});
    modMatrix22Depth.addEventListener('input', function(){changeItDefault(65, 85, modMatrix22Depth.value)});
    modMatrix23Depth.addEventListener('input', function(){changeItDefault(65, 86, modMatrix23Depth.value)});
    modMatrix24Depth.addEventListener('input', function(){changeItDefault(65, 87, modMatrix24Depth.value)});
    modMatrix25Depth.addEventListener('input', function(){changeItDefault(65, 88, modMatrix25Depth.value)});
    modMatrix26Depth.addEventListener('input', function(){changeItDefault(65, 89, modMatrix26Depth.value)});
    modMatrix27Depth.addEventListener('input', function(){changeItDefault(65, 90, modMatrix27Depth.value)});
    modMatrix28Depth.addEventListener('input', function(){changeItDefault(65, 91, modMatrix28Depth.value)});
    modMatrix29Depth.addEventListener('input', function(){changeItDefault(65, 92, modMatrix29Depth.value)});
    modMatrix30Depth.addEventListener('input', function(){changeItDefault(65, 93, modMatrix30Depth.value)});
    modMatrix31Depth.addEventListener('input', function(){changeItDefault(65, 94, modMatrix31Depth.value)});
    modMatrix32Depth.addEventListener('input', function(){changeItDefault(65, 95, modMatrix32Depth.value)});








  }
});
