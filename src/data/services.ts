import type { ContentPage } from './types.ts';

export const services: ContentPage[] = [
  {
    slug: 'lens-repair',
    title: 'Professional Cinema & Broadcast Lens Repair',
    short: 'Cinema & Broadcast Lenses',
    summary: 'Cinema PL/LPL, ENG, box and super tele lenses from ARRI, Zeiss, Angénieux, Cooke, Canon, Fujinon, Sony and more, repaired and calibrated.',
    intro:
      'Broadcast and cinema glass is expensive and production schedules are tight. Our OEM-trained technicians diagnose, repair and calibrate professional lenses so they track, focus and zoom the way they did out of the box. Free estimates and nationwide shipping.',
    images: [
      { src: '/images/canon-box-eng-lens.webp', alt: 'Canon UHD Digisuper 122 box lens and Canon 4K ENG zoom lens', caption: 'Canon box and ENG lenses' },
      { src: '/images/fujinon-ha42x13-eng-lens.webp', alt: 'Fujinon HA42x13.4BERD ENG broadcast zoom lens', caption: 'Fujinon HA42x13 ENG lens' },
      { src: '/images/zeiss-cp3-cinema-lens.webp', alt: 'Zeiss CP.3 35mm cinema prime lens', caption: 'Zeiss CP.3 cinema lens' },
    ],
    tags: ['ARRI', 'Zeiss', 'Angénieux', 'Cooke', 'Canon', 'Fujinon', 'Sony', 'RED', 'Panasonic', 'Schneider', 'Leica', 'Tokina', 'Sigma', 'Samyang', 'Rokinon', 'Vinten', 'Ikegami', 'Thales'],
    models: [
      { group: 'Lens types', names: ['Cinema PL / LPL primes and zooms', 'ENG / broadcast zooms', 'Studio box lenses', 'Super tele / sports lenses', 'Prosumer and mirrorless zooms'] },
      { group: 'Lines we see often', names: ['ARRI Signature', 'Zeiss CP.3 / CZ.2 / Supreme', 'Angénieux Optimo', 'Sony G Master', 'RED Pro Prime / Pro Zoom', 'Fujinon HA and UA series', 'Canon UJ / CJ / HJ series', 'Sony FE PZ 28-135mm'] },
    ],
    blocks: [
      {
        heading: 'Common repairs',
        items: [
          'Zoom and focus servo drive failures',
          'Iris control and lens-to-camera communication faults',
          'Back-focus and flange adjustment, tracking calibration',
          'Stiff or gritty zoom and focus rings, re-lubrication',
          'Optical cleaning, fungus and haze inspection',
          'Impact damage assessment and element alignment',
        ],
      },
    ],
    oldPaths: ['/LensRepair/Lens.aspx', '/LensRepair/All-Lens-Repair.aspx', '/LensRepair/All-Lens-Repair-kimi.aspx'],
  },
  {
    slug: 'camera-camcorder-repair',
    title: 'Professional Camera & Camcorder Repair',
    short: 'Pro Cameras & Camcorders',
    summary: 'Broadcast ENG, PTZ, studio, cinema and SLR cameras. Sony XDCAM, XAVC, HDCAM and Cinema Line specialists.',
    intro:
      'We repair the cameras production work depends on: shoulder ENG camcorders, PTZ and studio system cameras, cinema bodies and handheld professional camcorders. Free, no-obligation estimates, with a full diagnostic before any work begins.',
    tags: ['ENG', 'PTZ', 'Studio', 'Cinema', 'SLR', 'XDCAM', 'XAVC', 'HDCAM', 'HDCAM SR'],
    models: [
      { group: 'PMW series (XDCAM EX)', names: ['PMW-EX1R', 'PMW-EX3', 'PMW-100', 'PMW-150', 'PMW-200', 'PMW-320', 'PMW-400', 'PMW-500', 'PMW-580', 'PMW-700', 'PMW-F5', 'PMW-F55', 'PMW-Z190', 'PMW-Z200', 'PMW-Z280'] },
      { group: 'PXW series (XAVC / XDCAM)', names: ['PXW-Z90V', 'PXW-Z190', 'PXW-Z280', 'PXW-Z300', 'PXW-Z450', 'PXW-Z750', 'PXW-X400', 'PXW-X500', 'PXW-FS5', 'PXW-FS5M2', 'PXW-FS7', 'PXW-FS7M2', 'PXW-FX6', 'PXW-FX9', 'PXW-FX9VK'] },
      { group: 'HXR series (professional / ENG-style)', names: ['HXR-NX5R', 'HXR-NX200', 'HXR-NX800', 'HXR-MC2500', 'HXR-MC88', 'HXR-IFR5'] },
      { group: 'HDW series (HDCAM)', names: ['HDW-F900R', 'HDW-730S', 'HDW-750', 'HDW-790'] },
      { group: 'SRW series (HDCAM SR)', names: ['SRW-9000', 'SRW-9000PL', 'SRW-1'] },
      { group: 'Cinema Line', names: ['ILME-FX3', 'ILME-FX6', 'ILME-FX9', 'ILME-FR7'] },
      { group: 'HXC series (studio / ENG)', names: ['HXC-FB80', 'HXC-D70', 'HXC-D70H', 'HXC-P1'] },
      { group: 'Other professional models', names: ['PDW-500', 'PDW-510', 'PDW-530', 'PDW-700', 'PDW-850', 'PDW-F800', 'DSR-450', 'DSR-570'] },
    ],
    blocks: [
      {
        heading: 'What we repair',
        items: [
          'Full diagnostic: recording media, sensor, viewfinder, audio, power and control boards',
          'SxS, XQD and SD card slot repair, contact cleaning, controller IC repair and firmware updates',
          'HDCAM and HDCAM SR tape mechanisms: transport, heads, pinch rollers and tape path',
          'Viewfinder and LCD repair: EVF, backlight, cracked LCD and diopter',
          'Power supply and battery board repair, InfoLITHIUM communication and DC jack',
          'Audio board repair: XLR inputs, phantom power and headphone jack',
          'Sensor cleaning, dead pixel mapping, color calibration and flange back adjustment',
          'SDI and HDMI video output repair, control board and firmware repair',
        ],
      },
      {
        heading: 'Common symptoms',
        table: {
          head: ['Symptom', 'Typical cause'],
          rows: [
            ['"Media not recognized"', 'Card slot contacts or controller fault'],
            ['Recording stops / buffer overflow', 'Media controller or firmware'],
            ['No power, no LED', 'Power supply or battery board'],
            ['Intermittent shutdown', 'DC-DC converter or power connector'],
            ['Blank, flickering or dim EVF', 'Viewfinder backlight or driver'],
            ['C:31:00 / C:32:20 (HDW-F900R, SRW-9000)', 'Tape loading or drum fault'],
          ],
        },
      },
    ],
    turnaround: 'About 20 business days on average, depending on parts. Rush service when parts are available.',
    oldPaths: ['/Camcorder-Camera-And-Deck-Repair.aspx', '/Camcorder-Camera-Repair.aspx'],
  },
  {
    slug: 'red-camera-repair',
    title: 'RED Camera & Lens Repair',
    short: 'RED Cameras',
    summary: 'RED DSMC2, Helium, EPIC-W, Scarlet-W, Komodo and RED One cameras, plus RED Pro Prime and Pro Zoom lenses.',
    intro:
      'Certified technicians repair, maintain and troubleshoot RED digital cinema cameras and lenses, with all repairs done in-house. Shipped-in repairs accepted from anywhere in the U.S.',
    tags: ['RED'],
    models: [
      { group: 'Cameras', names: ['RED DSMC2', 'RED DSMC2 Helium 8K S35', 'RED EPIC-W', 'RED SCARLET-W', 'RED SCARLET-X Mysterium-X', 'RED Komodo 6K', 'RED One'] },
      { group: 'Lenses', names: ['RED Pro Prime', 'RED Pro Zoom'] },
    ],
    blocks: [
      { heading: 'Power and system', items: ['No power or camera not turning on', 'Battery not charging', 'LCD display not working', 'Boot freezes and crashes'] },
      { heading: 'Optical and mechanical', items: ['Soft back focus', 'Dust inside the lens', 'Stuck iris blades', 'Camera not focusing', 'Drop and impact damage'] },
      { heading: 'Connectivity and recording', items: ['SDI port damaged or not working', 'Camera not recording, RED MAG errors', 'No video or audio', 'Liquid, salt-water, sand and dust damage', 'Overheating and fan faults'] },
    ],
    turnaround: 'Typically 5 to 10 business days, depending on parts.',
    oldPaths: ['/Red_Camera/Red_Camera_Lens_Service_Repair.aspx'],
  },
  {
    slug: 'video-deck-recorder-repair',
    title: 'Professional Video Deck & Recorder Repair',
    short: 'Tape Decks & Video Recorders',
    summary: 'Sony HDCAM SR, HDCAM, XDCAM Professional Disc, XAVC and Betacam decks and recorders, repaired and aligned.',
    intro:
      'Post houses, broadcasters and archives still rely on professional decks. We service tape transports, optical disc drives, SSD recorders and their I/O, timecode and sync electronics, using alignment tapes and factory documentation.',
    tags: ['HDCAM SR', 'HDCAM', 'XDCAM', 'XAVC', 'Betacam', 'DVCAM', 'MPEG IMX'],
    models: [
      { group: 'SRW series (HDCAM SR)', names: ['SRW-5000', 'SRW-5100', 'SRW-5500', 'SRW-5800'] },
      { group: 'XDS series (XDCAM Professional Disc)', names: ['XDS-PD1000', 'XDS-PD2000'] },
      { group: 'PZW series (XAVC, SSD)', names: ['PZW-2000', 'PZW-3000', 'PZW-4000'] },
      { group: 'PDW series (XDCAM Professional Disc)', names: ['PDW-HD1550', 'PDW-F75', 'PDW-U2', 'PDW-U4', 'PDW-R1'] },
      { group: 'Portable', names: ['PMW-RX50'] },
      { group: 'Other decks', names: ['HDW-1800', 'HDW-2000', 'HDW-M2000', 'DVW-500', 'DVW-A500', 'J-30', 'MSW-2000', 'DSR-2000', 'DSR-1800'] },
    ],
    blocks: [
      {
        heading: 'Services',
        items: [
          'Tape mechanism service: transport overhaul, reel motors, capstan, pinch rollers, head cleaning and alignment, tape path calibration',
          'Disc drive service: drive replacement, optical pickup (OPU), loading mechanism, spindle motor, laser calibration',
          'SSD and SxS slot repair, controller board repair and data recovery assistance',
          'Power supply and system board: capacitor replacement, voltage rail testing, main board repair',
          'Control panel: buttons, LCD, jog/shuttle wheel, menu corruption and firmware updates',
          'I/O boards: 3G/HD/SD-SDI, HDMI, composite, component, analog and AES/EBU audio, RS-422',
          'Timecode and sync: generator, lock, reference input and genlock',
        ],
      },
      {
        heading: 'Common error codes',
        table: {
          head: ['Code / symptom', 'Meaning'],
          rows: [
            ['C:31:00', 'Tape loading error'],
            ['C:32:10', 'Reel motor trouble'],
            ['C:32:20', 'Drum trouble or head lock error'],
            ['C:32:30', 'Capstan trouble'],
            ['Disc not recognized / read-write errors', 'Optical pickup or disc drive (XDS, PDW)'],
            ['Media not recognized / recording stops', 'SSD or SxS slot, file system (PZW, PMW)'],
            ['RS-422 control or genlock failures', 'I/O or reference board'],
          ],
        },
      },
    ],
    turnaround: 'About 20 business days on average. Some SRW and optical pickup parts ship from Japan, which can add time.',
    oldPaths: ['/Deck-Video-Recorders.aspx'],
  },
  {
    slug: 'projector-repair',
    title: 'Projector Repair',
    short: 'Projectors',
    summary: 'Home theater, business and large-venue installation projectors from Sony, Epson, Panasonic, JVC and more.',
    intro: 'We repair projectors of every major brand, big and small, from home theater units to large-venue installation projectors.',
    tags: ['Sony', 'Epson', 'Panasonic', 'JVC', 'Christie', 'NEC', 'BenQ', 'Optoma'],
    blocks: [
      {
        heading: 'Common repairs',
        items: [
          'No power, shutdown and overheating faults',
          'Lamp, ballast and laser light-source problems',
          'Color wheel, LCD panel and DLP chip issues',
          'Dim, discolored or spotted images, optical cleaning',
          'Input board and signal faults',
        ],
      },
    ],
    oldPaths: ['/ProjectorRepair/projector_repair.aspx'],
  },
  {
    slug: 'monitor-repair',
    title: 'Broadcast & Studio Monitor Repair',
    short: 'Pro Monitors',
    summary: 'Broadcast reference and production monitors from Sony, Panasonic, JVC and more.',
    intro: 'Reference monitors need to be right, not just on. We repair and calibrate broadcast and production monitors used in studios, edit bays and trucks.',
    tags: ['Sony', 'Panasonic', 'JVC', 'Flanders Scientific', 'Ikegami'],
    blocks: [
      {
        heading: 'Common repairs',
        items: [
          'Power supply and backlight failures',
          'SDI and HDMI input board faults',
          'Panel, image and color uniformity problems',
          'Calibration and white balance',
        ],
      },
    ],
    oldPaths: ['/MonitorRepair/Monitor_repair.aspx', '/MonitorRepair/Monitor_repair_1.aspx', '/monitorRepair/Monitor_repair.aspx'],
  },
  {
    slug: 'printer-repair',
    title: 'Epson Professional Printer Repair',
    short: 'Epson Printers',
    summary: 'Epson SureColor, EcoTank Pro and WorkForce Pro printers, in and out of warranty, with genuine Epson parts.',
    intro:
      'We repair Epson professional photo, fine art, technical, dye-sublimation and business printers, in warranty and out of warranty, using genuine Epson parts.',
    tags: ['SureColor P', 'SureColor T', 'SureColor F', 'EcoTank Pro', 'WorkForce Pro'],
    models: [
      { group: 'SureColor P (photo and fine art)', names: ['P5370 (17")', 'P7570 (24")', 'P9570 (44")', 'P8570D (44")', 'P8570DL (44")', 'P20570 (64")'] },
      { group: 'SureColor T (technical / CAD)', names: ['T7770D (44", dual roll)'] },
      { group: 'SureColor F (dye-sublimation)', names: ['F9470H'] },
      { group: 'EcoTank Pro', names: ['ET-16650', 'ET-15000', 'ET-5850', 'ET-5800'] },
      { group: 'WorkForce Pro / Enterprise', names: ['WF-7840', 'WF-C5890', 'AM-C6000'] },
    ],
    blocks: [
      {
        heading: 'Services',
        items: [
          'Print head cleaning, nozzle checks, alignment and replacement',
          'Ink system: lines, dampers, pump repair, air purge and ink flush',
          'Paper feed: pickup and feed rollers, separation pads, jams and sensors',
          'Power and main board: no power, shutdowns, capacitor and board repair',
          'Network and interface: Ethernet, Wi-Fi, USB and firmware',
          'Control panel: touchscreen, LCD and buttons',
          'Large format: carriage, cutter, roll paper mechanism, vacuum and maintenance tank',
          'Waste ink pad replacement and counter reset',
        ],
      },
    ],
    turnaround: 'About 10 to 15 business days, depending on Epson parts availability.',
    note: 'Printer repair is local only (Los Angeles, Orange, Ventura, Riverside and San Bernardino counties). We do not accept shipped printers.',
    oldPaths: ['/PrinterRepair/Printer_repair.aspx'],
  },
];

// Hub pages for categories that have their own sections.
export const hubs = [
  { href: '/bang-olufsen/', short: 'Bang & Olufsen', summary: 'Authorized B&O service for Beolab, Beosound, Beogram, Beocenter, Beovision and Beocom, in and out of warranty.' },
  { href: '/hifi-audio-repair/', short: 'Hi-Fi Receivers & Amplifiers', summary: 'McIntosh, Marantz, Luxman, Mark Levinson, NAD, Harman Kardon, Nakamichi, Scott and 30+ more brands.' },
  { href: '/reel-to-reel-repair/', short: 'Reel-to-Reel', summary: 'Studer, Revox, Teac, Tascam, Akai, Pioneer, Nagra, Technics and other open-reel machines restored.' },
];
