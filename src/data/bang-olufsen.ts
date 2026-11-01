import type { ContentPage } from './types.ts';

const BO = '/Bang_and_Olufsen/bulletins/';

export const boIntro = {
  title: 'Bang & Olufsen Authorized Service',
  summary: 'Authorized Bang & Olufsen service center in Burbank. Warranty and out-of-warranty repair for Beolab, Beosound, Beogram, Beocenter, Beovision and Beocom, from the 1970s to today.',
  common: [
    'No power or dead unit',
    'No sound, distorted sound or hum',
    'CD door or glass panel stuck, loose glass',
    'CD scraping, skipping or "No Disc"',
    'Cassette and turntable speed problems',
    'Power Link and remote control faults',
    'Leaking capacitors and main board failures',
    'Cosmetic damage, foam surround rot, 220V to 120V conversion',
  ],
  areas: ['Los Angeles', 'Orange County', 'San Diego', 'San Francisco', 'Fresno', 'Palm Springs', 'Las Vegas', 'Phoenix', 'Nationwide by shipping'],
};

export const boPages: ContentPage[] = [
  {
    slug: 'beosound-9000',
    title: 'Beosound 9000 Repair (MK I, II, III)',
    short: 'Beosound 9000',
    summary: 'Six-CD Beosound 9000 repair: claw transport, laser, glass panel, power supply and display, all three generations.',
    intro: 'The Beosound 9000 is one of B&O\'s most iconic designs and one of the most mechanically complex. We service all three generations, from claw belts and rail grease to lasers and power supplies.',
    models: [{ names: ['MK I (Type 252, 1996)', 'MK II (Type 256)', 'MK III (Type 257)'] }],
    blocks: [
      {
        heading: 'Known issues by generation',
        table: {
          head: ['Model', 'Typical problems'],
          rows: [
            ['MK I', 'Glass panel delamination, squeaking or jamming claw transport, laser wear and "No Disc", aging power supply capacitors, stretched loading belt'],
            ['MK II', 'Standby power supply failure (no hard power switch), dim or flickering display, dirty claw position sensor, magazine misalignment, laser aging'],
            ['MK III', 'Glass door microswitch failure, PIN code lock, stretched claw belt (error 3), ribbon cable fatigue, laser diode aging'],
          ],
        },
      },
      {
        heading: 'Failures common to all models',
        table: {
          head: ['Area', 'Symptoms', 'Typical fix'],
          rows: [
            ['Claw transport belt', 'Sluggish or stuck, "MECHANISM" error', 'Replace belt, clean and re-grease rail'],
            ['Laser pickup', 'Skipping, "NO DISC", slow reads', 'Laser replacement, adjustment or CD mechanism swap'],
            ['Glass cover motor gear', 'Partial or no opening, grinding', 'Grease worm gear, replace cracked gear'],
            ['Power supply capacitors', 'No start, resets, hum', 'Recap power supply board'],
            ['Display (VFD)', 'Dim or missing segments, flicker', 'Heater voltage check, driver repair'],
            ['Magazine spindle', 'Indexing errors, stuck discs', 'Clean spindle clutch, replace friction pad'],
          ],
        },
      },
      {
        heading: 'Error codes',
        items: ['Error 2: laser or focus', 'Error 3: claw transport timeout (belt or rail)', 'Error 4: magazine not indexed', 'Error 7: display communication failure'],
      },
      { heading: 'Maintenance tip', text: 'Plan a service every 5 to 10 years: belt replacement, laser cleaning and rail lubrication keep a 9000 running smoothly.' },
    ],
    oldPaths: [BO + 'Beosound-9000-MK-I-II-III.aspx'],
  },
  {
    slug: 'beosound-ouverture-3200-2300',
    title: 'Beosound Ouverture, 3200, 2300 & Beocenter 2500 Repair',
    short: 'Beosound Ouverture / 3200 / 2300',
    summary: 'CD, cassette, magazine, power supply and Power Link repair for Beosound Ouverture, 3200, 2300 and Beocenter 2500.',
    intro: 'These integrated B&O music systems share the same weak points: CD mechanism belts, lasers, capacitors and, on cassette models, belts and pinch rollers. We rebuild them to factory spec.',
    models: [{ names: ['Beosound Ouverture (1994–2003)', 'Beosound 3200 (2003–2006)', 'Beosound 2300 (1991–2000)', 'Beocenter 2500 (1991–1994)'] }],
    blocks: [
      {
        heading: 'Symptoms and fixes',
        table: {
          head: ['Symptom', 'Likely cause', 'Fix'],
          rows: [
            ['No power, no display', 'Fuse or power supply', 'Replace fuse, rebuild power supply'],
            ['No disc reading', 'Weak laser, servo capacitors', 'Replace laser, recap servo board'],
            ['CD won\'t load', 'Worn belts, old grease', 'Replace belts, clean and regrease'],
            ['Tape deck faults', 'Stretched belt, hard pinch roller', 'Replace belts and roller, clean heads'],
            ['3200 magazine fault', 'Broken belt, cracked gears', 'Replace belt and gears'],
            ['No or distorted sound', 'Audio capacitors, op-amps', 'Recap audio board, replace op-amps'],
            ['Remote not working', 'IR sensor, front panel', 'Front panel recap, clean sensor'],
          ],
        },
      },
      {
        heading: 'Services',
        items: ['Full diagnostic', 'Power supply rebuild', 'CD mechanism overhaul and belts', 'Laser service and replacement', 'Servo and DSP recap and calibration', 'Cassette deck service: belts, pinch rollers, heads, speed', 'Power Link and input repair', 'Complete restoration (typically 40–60 capacitors and 4–6 belts)'],
      },
    ],
    turnaround: 'Typically 2 to 3 weeks, depending on parts.',
    oldPaths: [BO + 'Beosound-2500-3000-3200-Overture-4000.aspx', BO + 'Beosound-4000-4002-4004-6000.aspx'],
  },
  {
    slug: 'beogram-4000-4002-4004-6000',
    title: 'Beogram 4000, 4002, 4004 & 6000 Turntable Restoration',
    short: 'Beogram 4000 / 4002 / 4004 / 6000',
    summary: 'Tangential turntable restoration: tonearm, motor, logic boards, sensors and MMC cartridges, plus a refurbishing program for the 4002 and 4004.',
    intro: 'The classic Beogram tangential turntables need careful, model-specific work. We restore the electronics, tonearm and drive, then calibrate to factory specifications.',
    models: [{ names: ['Beogram 4000 (1972–1974)', 'Beogram 4002 (1974–1978)', 'Beogram 4004 (1978–1980)', 'Beogram 6000 (1982–1986)'] }],
    blocks: [
      {
        heading: 'Common problems',
        items: [
          'Erratic behavior or incomplete cycles: aged capacitors and hardened grease on the carriage rails. Please don\'t keep using a unit that won\'t finish its cycle.',
          'Dead unit: blown fuse or failed power transformer',
          'Arm moves but won\'t lower: solenoid or driver (4002/4004), lift motor or gear (6000)',
          'Speed drift: worn belt, failing DC motor, motor-control capacitors or quartz lock (6000)',
          'Wrong or undetected speed: dirty or failed optical sensor or lamp',
          'No sound, distortion or hum: MMC cartridge suspension, worn stylus, signal capacitors or broken tonearm wires',
          'Arm carriage bent from shipping without the transport lock',
        ],
      },
      {
        heading: 'Services',
        items: ['Full diagnostic and cycle testing', 'Recap of main, motor, servo and logic boards', 'Tangential tonearm rebuild and calibration (tracking, drop, VTA, anti-skate)', 'Motor reconditioning or replacement, belt replacement', 'Switch, sensor and solenoid service', 'Platter bearing service', 'MMC cartridge assessment, stylus replacement or re-tip'],
      },
      {
        heading: 'Calibration targets',
        table: {
          head: ['Spec', '4000 / 4002 / 4004', '6000'],
          rows: [
            ['Tracking error', 'under 0.04°', 'under 0.06°'],
            ['Wow and flutter (DIN)', '±0.025% (4000), ±0.05% (4002/4004)', '±0.04%'],
            ['Rumble (DIN B)', 'over 65 dB', 'over 68 dB'],
          ],
        },
      },
    ],
    oldPaths: [BO + 'Beogram-4000-4002-4004-6000.aspx'],
  },
  {
    slug: 'beogram-8000-9500',
    title: 'Beogram 8000, 8002, 9500 & RX2 Repair',
    short: 'Beogram 8000 / 8002 / 9500 / RX2',
    summary: 'Tangential arm rebuild, motor service, speed calibration, Datalink and RIAA preamp repair for later Beogram turntables.',
    intro: 'The later Beogram turntables add Datalink control and, on some models, a built-in RIAA preamp. We service the arm, motor and electronics and calibrate speed to spec.',
    models: [{ names: ['Beogram 8000 (1981–1985)', 'Beogram 8002 (1985–1989)', 'Beogram 9500 (1992–1997)', 'Beogram RX2 (1986–1991)'] }],
    blocks: [
      {
        heading: 'Common problems',
        items: ['Tangential arm sticking or erratic: dried lubricant on rail and bearings', 'Speed instability: motor-control capacitors or motor bearings', 'Hum, distortion or no power: dried capacitors in power supply, motor control and preamp', 'Datalink failure (no remote or auto-start): opto-isolators', 'Stretched or broken drive belt', 'No sound on 8002/9500: cartridge suspension or RIAA preamp capacitors', 'Speed drift on 9500: quartz control capacitors'],
      },
      {
        heading: 'Services',
        items: ['Full diagnostic', 'Power supply and motor control recap', 'Tangential tonearm rebuild and tracking calibration', 'Motor service and bearings', 'Speed calibration for 33⅓ and 45 RPM (quartz on 9500)', 'Drive belt replacement', 'Datalink repair', 'RIAA preamp service (8002/9500)', 'Cartridge testing, stylus replacement or rebuild'],
      },
      {
        heading: 'Recommended cartridges',
        table: { head: ['Model', 'Cartridge'], rows: [['8000', 'MMC20E or MMC20EN'], ['8002', 'MMC20EN'], ['9500', 'MMC20CL or MMC20EN'], ['RX2', 'MMC20E or MMC20S']] },
      },
    ],
    oldPaths: [BO + 'Beogram-8000-9500.aspx'],
  },
  {
    slug: 'beocenter-9000-9300-9500-2300-2500',
    title: 'Beocenter 9000, 9300, 9500, 2300 & 2500 Repair',
    short: 'Beocenter 9000 / 9300 / 9500 / 2300 / 2500',
    summary: 'Amplifier, cassette, CD, turntable, tuner and remote repair for Beocenter 9000 series and 2300/2500.',
    intro: 'Beocenter systems combine an amplifier, tuner, cassette and, on some models, CD and turntable. We repair every section and keep CD lasers, belts and pinch rollers in stock.',
    models: [{ names: ['Beocenter 9000 (1986–1991)', 'Beocenter 9300 (1991–1995)', 'Beocenter 9500 (1995–1998)', 'Beocenter 2300 (1992–1996)', 'Beocenter 2500 (1996–2000)'] }],
    blocks: [
      {
        heading: 'Common problems',
        items: ['No power or no display: fuse, standby capacitor or output transistor', 'Hum, distortion or amplifier cutting out: filter capacitors, protection relay, output transistors', 'Cassette slow or eating tapes: capstan belt, pinch roller, idler tire, auto-reverse gear', 'CD skipping or "No Disc" (2300, 2500): laser, spindle motor, loading belt', 'Turntable or arm stuck (2500): belt, rails, motor, stylus', 'Weak FM reception: tuner alignment, capacitors, stereo decoder', 'Buttons or remote not working: ribbon cables, solder joints, IR receiver'],
      },
      {
        heading: 'Services',
        items: ['Full functional diagnostic', 'Power supply and amplifier recap, output transistor and relay replacement', 'Cassette deck rebuild, head demagnetizing, speed and azimuth calibration', 'CD laser and mechanism service', 'Turntable service (2500)', 'Tuner alignment', 'Logic board recap and control cleaning', 'Remote and IR repair'],
      },
    ],
    oldPaths: [BO + 'Beocenter-9000-9300-9500-2300-2500.aspx'],
  },
  {
    slug: 'beocenter-7000-7002-7007-7700-1500-1800-2000-2200',
    title: 'Beocenter 7000, 7002, 7007, 7700, 1500, 1800, 2000 & 2200 Repair',
    short: 'Beocenter 7000 / 7700 / 1500–2200',
    summary: 'Power supply recap, cassette rebuild, CD laser, turntable and tuner service for classic Beocenter systems.',
    intro: 'From the 1979 Beocenter 7000 to the 1998 Beocenter 2200, we restore classic Beocenter systems section by section.',
    blocks: [
      {
        heading: 'Models and typical failures',
        table: {
          head: ['Model', 'Years', 'Common failures'],
          rows: [
            ['7000', '1979–1982', 'Power supply caps, capstan belt and pinch roller, auto-reverse idler'],
            ['7002', '1982–1985', 'As 7000, plus logic board caps and standby supply'],
            ['7007', '1985–1988', 'Amp and tape preamp caps, CD loading belt, microswitches'],
            ['7700', '1980–1984', 'Turntable belt and arm rails, power supply caps, optical sensor'],
            ['1500', '1987–1991', 'Belts and pinch roller, power supply caps, CD mechanism'],
            ['1800', '1989–1992', 'CDM-9 laser, capstan belt, drawer microswitch'],
            ['2000', '1992–1995', 'CD laser, loading belt, amplifier output relay'],
            ['2200', '1995–1998', 'CD spindle motor, power supply caps, auto-reverse gear'],
          ],
        },
      },
      {
        heading: 'Quick troubleshooting',
        table: {
          head: ['Symptom', 'Likely cause'],
          rows: [
            ['No power, no lights', 'Blown fuse, dead standby supply'],
            ['Speaker hum', 'Main filter capacitors'],
            ['Cassette slow or stopping', 'Capstan belt or pinch roller'],
            ['CD drawer won\'t open or close', 'Loading belt (1500–2200)'],
            ['CD skips or "No Disc"', 'Laser or spindle motor'],
            ['One channel dead', 'Output relay or dry solder joints'],
            ['Remote not responding', 'IR receiver capacitor or remote'],
          ],
        },
      },
      {
        heading: 'Services',
        items: ['Full diagnostic', 'Power supply and amplifier recap', 'Cassette deck rebuild', 'CD laser, spindle motor and belt service', 'Turntable and tangential arm service', 'Tuner alignment', 'Complete restoration'],
      },
    ],
    oldPaths: [BO + 'Beocenter-7000-7002-7007-7700-1500-1800-2000-2200.aspx'],
  },
  {
    slug: 'beocenter-beomaster-classics',
    title: 'Classic Beocenter & Beomaster Restoration',
    short: 'Beocenter & Beomaster Classics',
    summary: 'Full restoration of vintage Beomaster receivers and early Beocenter systems: recap, tuner alignment and wood cabinet restoration.',
    intro: 'Vintage Beomaster receivers and early Beocenter systems are well worth restoring. We bring them back electrically and cosmetically.',
    blocks: [
      {
        heading: 'Services',
        items: ['Full recap of power supply, amplifier and tuner boards', 'Output transistor and relay service', 'FM tuner alignment and stereo decoder check', 'Slider, switch and control cleaning', 'Dial and display lamp replacement', 'Wood cabinet and cosmetic restoration'],
      },
    ],
    oldPaths: [BO + 'Beocenter-Beomaster-Classics.aspx'],
  },
  {
    slug: 'beolab-5',
    title: 'Beolab 5 Repair',
    short: 'Beolab 5',
    summary: 'ICEpower amplifier, DSP, power supply and Acoustic Lens service for Beolab 5 loudspeakers.',
    intro: 'Each Beolab 5 has two 1,000W ICEpower bass amplifiers, a 500W mid/tweeter amplifier, a 15-inch woofer and a motorized Acoustic Lens. We service every part of it.',
    blocks: [
      {
        heading: 'Common problems',
        items: ['No power or dead speaker: fuse, power supply or shorted amplifier module', 'LED on, no sound: amplifier module, input board or driver', 'Distortion or low output: amplifier capacitors or output transistors', 'One driver silent: failed amplifier channel or blown driver', 'Hum or buzz: power supply filter capacitors', 'Overheating or random shutdown: dust, dried thermal pads, fans', 'Acoustic Lens stuck or grinding: belt, lubricant, sensors, gears', 'Power Link problems: cable or opto-isolators'],
      },
      {
        heading: 'Services',
        items: ['Full diagnostic', 'Power supply rebuild', 'ICEpower module recap and output stage testing', 'DSP board and crossover service, firmware update', 'Acoustic Lens motor, belt, rail and sensor service', 'Driver surround replacement or recone', 'Thermal service', 'Complete restoration (typically 60–80 capacitors per speaker)'],
      },
    ],
    turnaround: 'Typically 3 to 4 weeks for a pair, depending on parts.',
    oldPaths: [BO + 'Beolab_5.aspx'],
  },
  {
    slug: 'beolab-8000-6000-4000',
    title: 'Beolab 8000, 6000 & 4000 Repair',
    short: 'Beolab 8000 / 6000 / 4000',
    summary: 'Amplifier rebuild, foam surround replacement, Power Link and auto-sense repair for Beolab 8000, 6000 and 4000.',
    intro: 'These slim active speakers are still in daily use in many homes. Age brings rotted foam surrounds and tired amplifier capacitors, both of which we fix routinely.',
    models: [{ names: ['Beolab 8000 (1992–2006)', 'Beolab 6000 (1996–2005)', 'Beolab 4000 (1997–2007)'] }],
    blocks: [
      {
        heading: 'Common problems',
        items: ['Rotted mid/bass foam surrounds', 'Weak output, distortion or no sound: amplifier capacitors', 'Power Link auto on/off failure: opto-isolators', 'Dead speaker: capacitors, fuse or driver', 'Rattling bass: disintegrated surround', 'Hum or hiss: main filter capacitors', 'Uneven left/right sound'],
      },
      {
        heading: 'Services',
        items: ['Full diagnostic', 'Dual amplifier rebuild (woofer and tweeter modules)', 'Foam surround replacement', 'Crossover and input board recap', 'Power Link and auto-sense repair', 'Calibration and listening test', 'Complete restoration'],
      },
    ],
    turnaround: 'Typically 2 to 3 weeks. Rush service available.',
    oldPaths: [BO + 'Beolab-8000-6000-4000.aspx'],
  },
  {
    slug: 'beolab-1',
    title: 'Beolab 1 Repair',
    short: 'Beolab 1',
    summary: 'ICEpower bass module, Class AB amplifier, ABL and Acoustic Lens service for Beolab 1.',
    intro: 'The Beolab 1 combines an ICEpower bass module, Class AB mid/treble amplifiers, Adaptive Bass Linearization and an Acoustic Lens. We repair each system.',
    blocks: [
      {
        heading: 'Common problems',
        items: ['No power, no LED: fuse, bass module or power supply', 'No sound from any driver: input board or power supply', 'No bass: ICEpower bass module, or ABL microphone circuit', 'Hum or distortion: filter capacitors in power supply or Class AB section', 'Acoustic Lens stuck or noisy: belt, rails or motor', 'Class AB module failure: output transistors or bias'],
      },
      {
        heading: 'Services',
        items: ['Full diagnostic', 'Power supply repair', 'Class AB amplifier service', 'ICEpower bass module replacement', 'ABL service', 'Acoustic Lens service', 'Driver service', 'Complete restoration'],
      },
    ],
    oldPaths: [BO + 'Beolab-1.aspx'],
  },
  {
    slug: 'beolab-2-11-14-19',
    title: 'Beolab 2, 11, 14 & 19 Repair',
    short: 'Beolab 2 / 11 / 14 / 19',
    summary: 'Subwoofer and surround system repair: power supply, ICEpower modules, foam surrounds and Power Link.',
    intro: 'We repair B&O subwoofers and the Beolab 14 surround system, from power supplies and amplifier modules to driver surrounds.',
    models: [{ names: ['Beolab 2 (spherical subwoofer)', 'Beolab 11 (compact subwoofer)', 'Beolab 14 (surround system)', 'Beolab 19 (subwoofer)'] }],
    blocks: [
      {
        heading: 'Common problems',
        items: ['Aging capacitors in power supply and amplifier modules', 'Foam surround rot after 10 to 20 years', 'Power Link faults', 'Output stage failure', 'Hum or buzz', 'Overheating', 'One dead channel on Beolab 14'],
      },
      {
        heading: 'Services',
        items: ['Full diagnostic', 'Power supply rebuild', 'ICEpower module service', 'Foam surround replacement', 'Power Link and input board service', 'Crossover and DSP service', 'Complete restoration'],
      },
    ],
    turnaround: 'Typically 2 to 3 weeks. Rush service available.',
    oldPaths: [BO + 'Beolab-2-11-14-19.aspx'],
  },
  {
    slug: 'beolab-penta',
    title: 'Beolab & Beovox Penta Repair',
    short: 'Penta Speakers',
    summary: 'Driver re-foaming, ferrofluid, amplifier and crossover service for active Beolab Penta and passive Beovox Penta.',
    intro: 'The Penta columns are classics. We restore both the active Beolab Penta and the passive Beovox Penta.',
    models: [{ names: ['Beolab Penta MkI (1986–1991)', 'Beolab Penta MkII (1991–1995)', 'Beolab Penta MkIII (1995–2000)', 'Beovox Penta MkI (1986–1991)', 'Beovox Penta MkII (1991–2000)'] }],
    blocks: [
      {
        heading: 'Common problems',
        items: ['No power (Beolab): fuse, power supply capacitors, output transistors', 'Hum (Beolab): main filter capacitors', 'One channel dead or distorted (Beolab): amplifier module', 'Distorted or rattling bass: rotted woofer foam', 'Weak midrange or dull tweeter: dried ferrofluid or open voice coil', 'Dull sound (Beovox): drifted crossover capacitors', 'Relay clicks but no sound: relay contacts or DC offset'],
      },
      {
        heading: 'Services',
        items: ['Full diagnostic', 'Driver re-foaming, ferrofluid replacement and voice coil testing', 'Amplifier and power supply rebuild (Beolab)', 'Crossover recap (Beovox)', 'Protection relay replacement and bias adjustment', 'Complete restoration'],
      },
    ],
    oldPaths: [BO + 'Penta-Speakers.aspx'],
  },
  {
    slug: 'beoplay-a9',
    title: 'Beoplay A9 Repair',
    short: 'Beoplay A9',
    summary: 'Woofer re-foaming, power supply, Wi-Fi, touch control and amplifier repair for Beoplay A9 MkI–MkIV.',
    intro: 'We repair every generation of the Beoplay A9 wireless speaker.',
    models: [{ names: ['A9 MkI (2012–2015)', 'A9 MkII (2015–2018)', 'A9 MkIII (2018–2021)', 'A9 MkIV (2021–present)'] }],
    blocks: [
      {
        heading: 'Common problems',
        items: ['Woofer foam surround rot (MkI–MkIII)', 'Power supply capacitor failure: hum or no power', 'Won\'t wake from standby (MkII)', 'Wi-Fi module and firmware problems', 'Unresponsive touch volume', 'One driver silent or distorted', 'Rear LED ring failure', 'Random shutdowns'],
      },
      {
        heading: 'Services',
        items: ['Full diagnostic', 'Power supply and amplifier recap', 'Woofer re-foaming', 'Wi-Fi module service and firmware recovery', 'Touch panel repair', 'Amplifier channel rebuild', 'Complete restoration'],
      },
    ],
    oldPaths: [BO + 'Beo-Play-9.aspx'],
  },
  {
    slug: 'beovision',
    title: 'Beovision TV Repair',
    short: 'Beovision TVs',
    summary: 'Power, picture, motorized stand and sound repair for Beovision Avant, Eclipse and Beovision 1–14.',
    intro: 'From CRT Beovision models to the Avant and Eclipse, we repair B&O televisions and their motorized stands.',
    models: [
      { group: 'Current and recent', names: ['Beovision Avant 55" (2014–2018)', 'Avant 75" (2016–2020)', 'Avant 85" (2018–2021)', 'Beovision Eclipse (2017–2021)', 'Beovision 14 (2015–2019)', 'Beovision 11 (2010–2014)'] },
      { group: 'Earlier', names: ['Beovision 1', 'Beovision 2', 'Beovision 3', 'Beovision 4', 'Beovision 5', 'Beovision 6', 'Beovision 7', 'Beovision 8', 'Beovision 9', 'Beovision 10'] },
    ],
    blocks: [
      {
        heading: 'Common problems',
        items: ['No power or intermittent: power supply capacitors', 'Motorized stand not moving: motor, gears or control board', 'Dim or unfocused picture (CRT): tube or flyback', 'No picture or clicking (plasma): sustain or buffer board', 'Dim or flickering (LCD/LED): backlight driver or LED strips', 'Burn-in or color shift (Eclipse OLED)', 'No sound or distortion: audio capacitors, amplifier IC, speaker foam', 'Built-in DVD not playing (Beovision 3, 7, 10)'],
      },
      {
        heading: 'Services',
        items: ['Full diagnostic', 'Power supply rebuild', 'Main board recap', 'Motorized stand service', 'CRT, plasma, LCD/LED and OLED panel service', 'HDMI board replacement', 'Audio system service'],
      },
    ],
    turnaround: 'Typically 2 to 4 weeks. Rush service available.',
    oldPaths: [BO + 'BeovisionTV.aspx'],
  },
  {
    slug: 'beocom-phones',
    title: 'Beocom Phone Repair',
    short: 'Beocom Phones',
    summary: 'Battery, charging, keypad, display and DECT repair for Beocom 1, 2, 5, 6000 and corded Beocom models.',
    intro: 'We repair corded and cordless Beocom telephones.',
    models: [{ names: ['Beocom 1000 (corded)', 'Beocom 2000 (corded)', 'Beocom 2200 (corded)', 'Beocom 6000 (DECT)', 'Beocom 1 (cordless)', 'Beocom 2 (cordless)', 'Beocom 5 (DECT)'] }],
    blocks: [
      {
        heading: 'Common problems',
        items: ['Dead or short-lived battery', 'Handset won\'t charge: contacts or spring tension', 'Broken scroll joystick (Beocom 2, 5)', 'Keys not responding (Beocom 6000, 1)', 'Display lines or blank display', 'No dial tone (Beocom 2000, 2200)', 'Phonebook lost after power loss', '"Not Base 1" or lost registration'],
      },
      {
        heading: 'Services',
        items: ['Battery replacement', 'Charging circuit and base repair', 'Keypad and scroll wheel restoration', 'Display repair', 'Audio and microphone service', 'Corded phone recap', 'DECT registration and firmware', 'Complete restoration'],
      },
    ],
    oldPaths: [BO + 'Beocom-Phones.aspx'],
  },
];
