import type { ContentPage } from './types.ts';

export interface BrandPage extends ContentPage {
  category: 'hifi' | 'reel';
  oldPrefixes?: string[]; // old model-page folders, redirected here with a wildcard
}

export const hifiOtherBrands = ['Sansui', 'Yamaha', 'Technics', 'Kenwood', 'Onkyo', 'Denon', 'Sony', 'Rotel', 'Sherwood', 'Aiwa', 'Fisher', 'JVC', 'Philips', 'Sanyo', 'Akai', 'Pioneer'];
export const reelOtherBrands = ['Panasonic', 'Ampex', 'Tandberg', 'Roberts', 'Crown', 'Dokorder', 'Viking', 'Uher', 'Wollensak', 'Grundig', 'Magnecord', 'Telefunken', 'Ferrograph', 'Sony'];

export const hifiServices = [
  'Complete mechanical overhaul and calibration',
  'Amplifier, receiver and preamp repair',
  'Capacitor replacement and power supply rebuild',
  'Electronics troubleshooting and repair',
  'Input, output and control cleaning',
  'Speaker diagnostics and restoration',
  'Vintage hi-fi restoration',
];
export const reelServices = [
  'Complete mechanical overhaul and calibration',
  'Motor repair and replacement',
  'Head alignment, relapping and replacement',
  'Electronics troubleshooting and repair',
  'Belt, pinch roller, idler and brake replacement',
  'Speed adjustment and testing',
  'Full restoration of vintage tape decks',
];

export const brands: BrandPage[] = [
  // ---------- Hi-fi ----------
  {
    category: 'hifi', slug: 'mcintosh', title: 'McIntosh Repair & Restoration', short: 'McIntosh',
    summary: 'McIntosh receivers, preamps, tuners and power amplifiers repaired and restored, including the MAC, MX, MC and MR lines.',
    intro: 'McIntosh gear is built to last decades, and with the right service it will. We do board-level repair, power supply overhauls and full restorations.',
    models: [
      { group: 'Receivers', names: ['MAC 1500', 'MAC 1700', 'MAC 1900', 'MAC 4100', 'MAC 4200', 'MAC 4275', 'MAC 4280', 'MAC 4300V'] },
      { group: 'Preamps and preamp/tuners', names: ['MX110', 'MX112', 'MX113', 'MX114', 'MX115', 'MX117', 'MX118', 'MX119', 'MX120', 'MX121', 'MX130', 'MX132', 'MX275'] },
      { group: 'Tuners, amplifiers and more', names: ['MR78', 'MC402', 'MC2000', 'MXA60', 'MVS3'] },
    ],
    blocks: [
      { heading: 'Common problems', items: ['Power supply faults and ripple', 'Aged or failing capacitors', 'Board-level component failures', 'Overheating', 'Hum from internal ground issues', 'Clipping or asymmetrical distortion', 'Calibration drift'] },
      { heading: 'Services', items: ['Board-level repair', 'Power supply overhaul', 'Capacitor replacement', 'Calibration and full testing', 'Full restoration', 'Cooling fan installation with thermal control', 'Gold-plated RCA connector replacement'] },
    ],
    oldPaths: ['/Mcintosh/Mcintosh-Service.aspx'], oldPrefixes: ['/Mcintosh/'],
  },
  {
    category: 'hifi', slug: 'marantz', title: 'Marantz Repair & Restoration', short: 'Marantz',
    summary: 'Vintage silver-face Marantz receivers, tuners, integrated amplifiers and SACD/CD players repaired and restored.',
    intro: 'From the classic silver-face receivers to modern reference SACD players, we service Marantz equipment of every era.',
    models: [
      { group: 'Vintage receivers and tuners', names: ['Model 19', 'Model 2230', 'Model 2270', 'Model 2275', 'Model 2285B', 'Model 2325', 'Model 2500', 'Model 2600', 'Model 10B'] },
      { group: 'Integrated amplifiers', names: ['Model 30', 'Model 33', 'PM-10'] },
      { group: 'SACD / CD players', names: ['SA-7S3', 'SA-10', 'CD-94', 'CD-95', 'CD-99'] },
    ],
    blocks: [
      { heading: 'Common problems', items: ['Noisy selector switches', 'Drifting FM', 'Aging power supply capacitors', 'Intermittent output relay', 'Scratchy volume controls', 'Dead dial lamps', 'Overheating and protection mode', 'Skipping discs and read errors'] },
      { heading: 'Services', items: ['Full recap', 'Power supply rebuild', 'Tuner alignment', 'Transistor testing', 'Bias and offset adjustment', 'LED lamp upgrade (optional)', 'Laser pickup replacement', 'DAC board repair'] },
    ],
    oldPaths: ['/Marantz/Marantz-Service.aspx'], oldPrefixes: ['/Marantz/'],
  },
  {
    category: 'hifi', slug: 'luxman', title: 'Luxman Repair & Restoration', short: 'Luxman',
    summary: 'Luxman integrated amplifiers, separates, digital sources, turntables and headphone amplifiers.',
    intro: 'We repair and restore Luxman integrated amplifiers and components, from classic models to current reference gear.',
    models: [
      { group: 'Integrated amplifiers', names: ['L-509X', 'L-507Z', 'L-550AX II', 'L-590AX II', 'L-505uX II'] },
      { group: 'Separates', names: ['CL-1000', 'C-900u', 'M-10X', 'M-900u'] },
      { group: 'Digital sources', names: ['D-10X', 'D-03X', 'DA-250'] },
      { group: 'Turntables and headphone amps', names: ['PD-151', 'PD-171', 'P-750u', 'P-1u'] },
    ],
    blocks: [{ heading: 'Services', items: hifiServices }],
    oldPaths: ['/Audio-Recievers/Luxman/Luxman-Service.aspx'], oldPrefixes: ['/Audio-Recievers/Luxman/'],
  },
  {
    category: 'hifi', slug: 'mark-levinson', title: 'Mark Levinson Repair & Restoration', short: 'Mark Levinson',
    summary: 'Mark Levinson power amps, preamps, CD players and integrated amps, from the ML series to the No. 5xx series.',
    intro: 'We restore Mark Levinson equipment from the early ML series through current models.',
    models: [
      { group: 'ML series', names: ['ML-1', 'ML-2 monoblock', 'ML-3', 'ML-12'] },
      { group: 'Numbered series', names: ['No. 23', 'No. 23.5', 'No. 26 / 28', 'No. 27 / 29', 'No. 30 / 30.5', 'No. 32', 'No. 37 / 39', 'No. 53', 'No. 326S', 'No. 331 / 332', 'No. 335', 'No. 380 / 380S', 'No. 432', 'No. 436', 'No. 585 / 585.5'] },
    ],
    blocks: [
      { heading: 'Common problems', items: ['DC offset and bias drift', 'Leaking capacitors (especially 1980s–90s models)', 'Relay failure', 'Cold solder joints', 'Worn volume controls', 'Transistor matching', 'Aging CD transport mechanisms'] },
      { heading: 'Services', items: ['Restoration from vintage to modern', 'Capacitor replacement', 'Phono stage recap', 'Relay and switch replacement', 'Bias and offset calibration', 'Transport service'] },
    ],
    oldPaths: ['/Audio-Recievers/Mark-Levinson/Mark-Levonson.aspx'], oldPrefixes: ['/Audio-Recievers/Mark-Levinson/'],
  },
  {
    category: 'hifi', slug: 'nad', title: 'NAD Repair', short: 'NAD',
    summary: 'NAD amplifiers, receivers, DACs and streaming amplifiers: Monitor Series, Silver Series and Masters Series.',
    intro: 'We repair NAD components from the classic 3020 era to the Masters Series and BluOS streaming amplifiers.',
    models: [{ names: ['Monitor Series 1000 / 2000 / 3000', 'Silver Series S100 / S200 / S300', '2200 / 2400 power amps', 'M2', 'M3', 'M22', 'M33', 'M51 DAC'] }],
    blocks: [
      { heading: 'Common problems', items: ['Intermittent or no audio', 'Hum or buzz', 'Channel imbalance or dropout', 'Overheating protection', 'Display backlight failure', 'Volume encoder skipping', 'HDMI handshake issues', 'Touchscreen calibration'] },
      { heading: 'Services', items: ['Power supply diagnostics and repair', 'Amplifier section repair', 'Digital and streaming board diagnostics', 'Display repair', ...hifiServices.slice(2, 4)] },
    ],
    oldPaths: ['/Audio-Recievers/Nad/Nad.aspx'], oldPrefixes: ['/Audio-Recievers/Nad/'],
  },
  {
    category: 'hifi', slug: 'harman-kardon', title: 'Harman Kardon Repair', short: 'Harman Kardon',
    summary: 'Harman Kardon AV receivers, Citation components, CD players, SoundSticks and portable systems.',
    intro: 'We repair Harman Kardon receivers and components, including the Citation series.',
    models: [{ names: ['AVR 140', 'AVR 240', 'AVR 340', 'Citation series', 'SoundSticks II', 'SoundSticks III', 'Go + Play'] }],
    blocks: [
      { heading: 'Common problems', items: ['No power, no standby light', 'Audio dropouts or protection mode', 'Dim or dead display', 'Battery won\'t hold charge (Go + Play)', 'Disc read errors', 'Disc tray stuck', 'Network or Bluetooth drops', 'Crackling or silent satellites'] },
      { heading: 'Services', items: hifiServices },
    ],
    oldPaths: ['/Audio-Recievers/Harman-Kardon/Harmon-Kardon.aspx'], oldPrefixes: ['/Audio-Recievers/Harman-Kardon/'],
  },
  {
    category: 'hifi', slug: 'nakamichi', title: 'Nakamichi Cassette & Reel-to-Reel Repair', short: 'Nakamichi',
    summary: 'Nakamichi Dragon, 1000ZXL, ZX-9, CR-7A and reel-to-reel decks restored to spec.',
    intro: 'Nakamichi decks are precision machines. We restore their transports, auto-azimuth mechanisms and electronics, then calibrate to spec.',
    models: [
      { group: 'Cassette decks', names: ['Dragon', '1000ZXL', '1000ZXL Limited', '700ZXL', 'ZX-9', 'CR-7A', '680ZX', '682ZX', 'RX-505', '581', '582'] },
    ],
    blocks: [
      { heading: 'Common problems', items: ['Idler tires and belts harden or turn to tar', 'Auto-azimuth worm gear and microswitches', 'Capstan motor bearing noise and speed instability', 'Cracked mode (cam) gear', 'Dried power supply capacitors', 'Dolby board capacitor failure', 'Hard, glazed pinch rollers', 'Oxidized relay contacts'] },
      { heading: 'Services', items: ['Complete capacitor replacement', 'Transport overhaul and mechanical restoration', 'Bias, azimuth, speed and EQ calibration', 'Head service', 'Electronics restoration', 'Cosmetic restoration'] },
    ],
    oldPaths: ['/Audio-Recievers/Nakamichi/Nakamichi.aspx', '/Reel-To-Reel-Models/Nakamichi/Nakamichi.aspx'], oldPrefixes: ['/Audio-Recievers/Nakamichi/', '/Reel-To-Reel-Models/Nakamichi/'],
  },
  {
    category: 'hifi', slug: 'hh-scott', title: 'H.H. Scott Tube Receiver Restoration', short: 'H.H. Scott',
    summary: 'H.H. Scott vacuum tube receivers and amplifiers, including the 355, fully restored.',
    intro: 'H.H. Scott tube gear sounds wonderful when it\'s properly restored. We rebuild power supplies, replace aged capacitors and align tuners.',
    models: [{ names: ['H.H. Scott 355', 'Other Scott tube receivers and amplifiers'] }],
    blocks: [
      { heading: 'Common problems', items: ['Selenium rectifier failure', 'Leaky bumblebee and paper capacitors', 'Weak or no FM reception', 'Hum and ripple', 'Noisy controls', 'Output tube red-plating'] },
      { heading: 'Services', items: ['Full diagnostic', 'Power supply rebuild', 'Full capacitor replacement', 'Resistor and component testing', 'Tube testing and replacement', 'FM tuner alignment', 'Amplifier calibration', 'Cosmetic and mechanical service'] },
    ],
    turnaround: 'Typically 4 to 6 weeks. Rush service available.',
    oldPaths: ['/Audio-Recievers/SCOTT/H.-H.-Scott-355.aspx', '/hh-scott-355-restoration-los-angeles'], oldPrefixes: ['/Audio-Recievers/SCOTT/'],
  },
  // ---------- Reel-to-reel ----------
  {
    category: 'reel', slug: 'studer', title: 'Studer Reel-to-Reel Repair', short: 'Studer',
    summary: 'Studer studio and broadcast tape machines, from the J37 and C37 to the A80 and A800 series.',
    intro: 'Studer machines were built for studios and broadcasters. We service their transports, heads and electronics and calibrate them to studio standards.',
    models: [{ names: ['J37', 'C37', 'A62', 'A80', 'A721', 'A807', 'A810', 'A812', 'A816', 'A820', 'A827'] }],
    blocks: [{ heading: 'Services', items: reelServices }],
    oldPaths: ['/Reel-To-Reel-Models/Studer/Studer.aspx'], oldPrefixes: ['/Reel-To-Reel-Models/Studer/'],
  },
  {
    category: 'reel', slug: 'revox', title: 'Revox Reel-to-Reel Repair', short: 'Revox',
    summary: 'Revox A77, B77, A700, PR99, G36 and more, plus Revox B225, B226, B710 and B760 components.',
    intro: 'Revox decks are among the most loved open-reel machines. We restore them mechanically and electronically.',
    models: [
      { group: 'Tape machines', names: ['A77', 'B77', 'A700', 'PR99', 'C270', 'G36', 'F36'] },
      { group: 'Other Revox components', names: ['B710 cassette deck', 'B760 tuner', 'B225 CD player', 'B226 CD player'] },
    ],
    blocks: [{ heading: 'Services', items: reelServices }],
    oldPaths: ['/Reel-To-Reel-Models/Revox/Revox-Pages.aspx'], oldPrefixes: ['/Reel-To-Reel-Models/Revox/'],
  },
  {
    category: 'reel', slug: 'teac', title: 'TEAC Reel-to-Reel Repair', short: 'TEAC',
    summary: 'TEAC A-series and X-series open-reel decks repaired and restored.',
    intro: 'We repair and restore all TEAC reel-to-reel models, with free diagnostics.',
    models: [
      { group: 'A series', names: ['A-450', 'A-1250', 'A-1250S', 'A-1250SX', 'A-1500', 'A-2100', 'A-2300SX', 'A-2340', 'A-2340S', 'A-2340SX', 'A-3300SX', 'A-3340', 'A-3340S', 'A-3340SX', 'A-3440', 'A-3440S', 'A-3440SX', 'A-3600', 'A-4010S', 'A-4010SL', 'A-4010SLX', 'A-7300'] },
      { group: 'X series and others', names: ['X-7R', 'X-10', 'X-300', 'X-500R', 'X-700R', 'X-1000R', 'X-2000', 'TD-102'] },
    ],
    blocks: [{ heading: 'Services', items: reelServices }],
    turnaround: 'Most repairs are completed in 7 to 10 business days.',
    oldPaths: ['/Reel-To-Reel-Models/Teac/Teac.aspx'], oldPrefixes: ['/Reel-To-Reel-Models/Teac/'],
  },
  {
    category: 'reel', slug: 'tascam', title: 'TASCAM Reel-to-Reel Repair', short: 'TASCAM',
    summary: 'TASCAM multitrack and mastering machines: 32, 34, 38, 58, 80-8, 85 series and ATR-60.',
    intro: 'TASCAM machines powered countless home and project studios. We keep them running with full mechanical and electronic service.',
    models: [{ names: ['32', '34', '38', '58', '80-8', '85 series', 'ATR-60'] }],
    blocks: [
      { heading: 'Common problems', items: ['Capstan motor', 'Power supply', 'Pinch roller wear', 'Electronics faults', 'Transport mechanism', 'Old capacitors', 'Brake system', 'Relay contacts'] },
      { heading: 'Services', items: ['Diagnostics', 'Mechanical repair', 'Electronic repair', 'Calibration and precision speed adjustment', 'Head alignment and replacement', 'Complete overhaul'] },
    ],
    oldPaths: ['/Reel-To-Reel-Models/Tascam/Tascam.aspx'], oldPrefixes: ['/Reel-To-Reel-Models/Tascam/'],
  },
  {
    category: 'reel', slug: 'akai', title: 'Akai Reel-to-Reel Repair', short: 'Akai',
    summary: 'Akai GX-series reel-to-reel decks, including the GX-747, GX-77, GX-635D and GX-4000D.',
    intro: 'We service Akai GX decks, including their glass-crystal ferrite heads, transports and electronics.',
    models: [{ names: ['GX-747', 'GX-77', 'GX-635D', 'GX-4000D', 'GX-210D'] }],
    blocks: [{ heading: 'Services', items: reelServices }],
    oldPaths: ['/Reel-To-Reel-Models/Ikai/akai.aspx'], oldPrefixes: ['/Reel-To-Reel-Models/Ikai/'],
  },
  {
    category: 'reel', slug: 'pioneer', title: 'Pioneer Reel-to-Reel Repair', short: 'Pioneer',
    summary: 'Pioneer RT-series reel-to-reel decks: RT-701, RT-707, RT-909, RT-1011, RT-1020, RT-1050, RT-2022 and RT-2024.',
    intro: 'We repair and restore Pioneer RT-series decks, with same-day diagnostics in our local service area.',
    models: [{ names: ['RT-701', 'RT-707', 'RT-761', 'RT-909', 'RT-1011', 'RT-1020', 'RT-1050', 'RT-2022', 'RT-2024'] }],
    blocks: [{ heading: 'Services', items: reelServices }],
    turnaround: 'Most repairs are completed in 7 to 10 business days.',
    oldPaths: ['/Reel-To-Reel-Models/Pioneer/Pioneer.aspx'], oldPrefixes: ['/Reel-To-Reel-Models/Pioneer/'],
  },
  {
    category: 'reel', slug: 'nagra', title: 'Nagra Reel-to-Reel Repair', short: 'Nagra',
    summary: 'Nagra portable and studio tape recorders, including the T-Audio series.',
    intro: 'Nagra recorders are precision instruments. We service their transports, heads and electronics.',
    models: [{ names: ['T-Audio NTA2S', 'T-Audio NTA2B', 'T-Audio NTA-2M', 'T-Audio NTA-3TCR', 'T-Audio NTA-3TCN', 'T-Audio NTS-3TCS'] }],
    blocks: [{ heading: 'Services', items: reelServices }],
    oldPaths: ['/Reel-To-Reel-Models/NAGRA-T-Audio/Nagra-T-Audio.aspx'], oldPrefixes: ['/Reel-To-Reel-Models/NAGRA-T-Audio/'],
  },
  {
    category: 'reel', slug: 'technics', title: 'Technics Reel-to-Reel Repair', short: 'Technics',
    summary: 'Technics RS-1500 series isolated-loop reel-to-reel decks restored.',
    intro: 'Technics RS-1500 series decks use a sophisticated isolated-loop transport. We restore them fully.',
    models: [{ names: ['RS-1500', 'RS-1500US', 'RS-1506', 'RS-1520', 'RS-1700', 'RS-1800'] }],
    blocks: [
      { heading: 'Common problems', items: ['Capstan motor failure and bearing noise', 'Reel motor belts and speed instability', 'Hard pinch rollers', 'Logic control relay failures', 'Head wear', 'Hum from power supply capacitors', 'Wow and flutter', 'No power'] },
      { heading: 'Services', items: ['Complete capacitor replacement', 'Mechanical restoration', 'Electronic calibration', 'Head service', 'Logic and servo restoration', 'Cosmetic restoration'] },
    ],
    oldPaths: ['/Reel-To-Reel-Models/Technics/Technics.aspx'], oldPrefixes: ['/Reel-To-Reel-Models/Technics/'],
  },
  {
    category: 'reel', slug: 'aiwa', title: 'Aiwa Reel-to-Reel Repair', short: 'Aiwa',
    summary: 'Aiwa TPR, X-series and AD reel-to-reel and tape machines restored.',
    intro: 'We restore vintage Aiwa tape machines, from portable TPR models to X-series decks.',
    models: [{ names: ['TPR-9', 'TPR-10', 'X-300', 'X-500', 'X-700', 'TPD-10A', 'AD-1250U', 'AD-1650U'] }],
    blocks: [
      { heading: 'Common problems', items: ['Sticking solenoids (TPR series)', 'Hard or sticky pinch rollers', 'Hardened idler wheels and speed instability (X series)', 'Brittle plastic transport gears', 'Battery corrosion (TPD-10A)', 'Auto-load mechanism failure (AD series)', 'Leaking paper and wax capacitors', 'Shorted tantalum capacitors'] },
      { heading: 'Services', items: ['Complete capacitor replacement', 'Mechanical and transport restoration', 'Electronic calibration, bias and azimuth', 'Head service', 'Cosmetic restoration'] },
    ],
    oldPaths: ['/Reel-To-Reel-Models/Aiwa/Aiwa.aspx'], oldPrefixes: ['/Reel-To-Reel-Models/Aiwa/'],
  },
  {
    category: 'reel', slug: 'wilcox-gay', title: 'Wilcox-Gay Recordio Restoration', short: 'Wilcox-Gay',
    summary: 'Wilcox-Gay Recordio disc recorders and consoles restored, from motors to tubes and cabinets.',
    intro: 'Wilcox-Gay Recordio machines are true antiques. We restore their motors, electronics and cabinets.',
    models: [{ names: ['1C10 Recordio', 'A-54 console', 'K-80 Symphony', 'Recordette portable', 'Studio Master series', 'Booth / Tone series', 'Other Recordio models'] }],
    blocks: [
      { heading: 'Common problems', items: ['Seized Cobramatic motor', 'Frozen governor', 'Open field coil', 'Decayed crystal transducer', 'Hum from filter capacitors', 'Distortion from leaky coupling capacitors', 'Oxidized selector switches', 'Cabinet veneer damage'] },
      { heading: 'Services', items: ['Complete capacitor replacement', 'Cobramatic motor restoration', 'Crystal transducer replacement', 'Tube testing and replacement', 'Alignment and calibration', 'Cabinet restoration'] },
    ],
    oldPaths: ['/Reel-To-Reel-Models/Wilcox-Gay/Wilcox-Gay.aspx'], oldPrefixes: ['/Reel-To-Reel-Models/Wilcox-Gay/'],
  },
];

export const hifiBrands = brands.filter((b) => b.category === 'hifi');
export const reelBrands = brands.filter((b) => b.category === 'reel');
