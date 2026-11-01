export interface Service {
  slug: string;
  title: string;      // page H1
  short: string;      // card title
  summary: string;    // card + meta description
  brands: string[];
  intro: string;
  sections: { heading: string; items: string[] }[];
  oldPath: string;    // old .aspx URL, redirected to the new page
}

export const services: Service[] = [
  {
    slug: 'lens-repair',
    title: 'Professional Box & ENG Lens Repair',
    short: 'Box & ENG Lenses',
    summary: 'Broadcast box lenses and ENG zooms from Fujinon, Canon, Angenieux and Rokinon, serviced and calibrated.',
    brands: ['Fujinon', 'Canon', 'Angenieux', 'Rokinon'],
    intro:
      'Broadcast and cinema glass is expensive and production schedules are tight. We diagnose, repair and calibrate studio box lenses and ENG zoom lenses so they track, focus and zoom the way they did out of the box.',
    sections: [
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
    oldPath: '/LensRepair/Lens.aspx',
  },
  {
    slug: 'camcorder-camera-deck-repair',
    title: 'Camcorder, Camera & Deck Repair',
    short: 'Camcorders, Cameras & Decks',
    summary: 'Professional camcorders, cinema cameras and tape decks from Sony, Panasonic, JVC, Canon, RED and ARRI.',
    brands: ['Sony', 'Panasonic', 'JVC', 'Canon', 'RED', 'ARRI'],
    intro:
      'From current cinema bodies to the tape decks still running in post houses and archives, our engineers repair the cameras and decks that production work depends on.',
    sections: [
      {
        heading: 'What we service',
        items: [
          'Professional and broadcast camcorders',
          'Cinema and digital cameras',
          'Betacam, DVCAM, HDCAM, DVCPRO and other VTR decks',
          'Power, sensor, viewfinder and recording faults',
          'Tape transport, head cleaning and alignment',
          'Archive and transfer machines',
        ],
      },
    ],
    oldPath: '/Camcorder-Camera-And-Deck-Repair.aspx',
  },
  {
    slug: 'bang-olufsen-service',
    title: 'Bang & Olufsen Authorized Service',
    short: 'Bang & Olufsen',
    summary: 'Authorized B&O service center for Beolab, Beosound, Beocenter, Beogram and Beovision, in and out of warranty.',
    brands: ['Beolab', 'Beosound', 'Beocenter', 'Beogram', 'Beovision'],
    intro:
      'We are an authorized Bang & Olufsen service center, handling warranty and out-of-warranty repairs on B&O equipment from vintage pieces to current models.',
    sections: [
      {
        heading: 'B&O products we repair',
        items: [
          'Beolab speakers, from Beolab 1 and 5000 to Beolab 17–20: power supply, amplifier and driver repairs',
          'Beosound 9000 and other CD players: laser, sensor, motor and clamp repairs',
          'Beocenter all-in-one systems: CD, cassette, radio, display and power faults',
          'Beogram turntables, including a refurbishing program for the 4002 and 4004',
          'Beovision televisions',
        ],
      },
      {
        heading: 'Where we serve',
        items: [
          'Walk-in service in Burbank and greater Los Angeles',
          'Pickup and delivery across California, from San Francisco to San Diego',
          'Shipped repairs from Las Vegas, Phoenix and nationwide',
        ],
      },
    ],
    oldPath: '/Bang_and_Olufsen/Band_and_Olufsen_Service.aspx',
  },
  {
    slug: 'projector-repair',
    title: 'Projector Repair',
    short: 'Projectors',
    summary: 'Home theater, business and installation projectors from Sony, Epson, Panasonic and more.',
    brands: ['Sony', 'Epson', 'Panasonic', 'JVC'],
    intro:
      'We repair projectors of every major brand, from home theater units to large-venue installation projectors.',
    sections: [
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
    oldPath: '/ProjectorRepair/projector_repair.aspx',
  },
  {
    slug: 'monitor-repair',
    title: 'Broadcast & Studio Monitor Repair',
    short: 'Broadcast & Studio Monitors',
    summary: 'Broadcast reference and production monitors from Sony, Panasonic, JVC and more.',
    brands: ['Sony', 'Panasonic', 'JVC'],
    intro:
      'Reference monitors need to be right, not just on. We repair and calibrate broadcast and production monitors used in studios, edit bays and trucks.',
    sections: [
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
    oldPath: '/MonitorRepair/Monitor_repair.aspx',
  },
  {
    slug: 'audio-receiver-repair',
    title: 'Analog & Digital Audio Receiver Repair',
    short: 'Hi-Fi Receivers & Amplifiers',
    summary: 'High-end and vintage hi-fi from McIntosh, Marantz, Mark Levinson, NAD, Luxman and more.',
    brands: ['McIntosh', 'Marantz', 'Mark Levinson', 'NAD', 'Luxman', 'Technics'],
    intro:
      'Classic and modern hi-fi deserves careful work. We repair and restore receivers, amplifiers and preamps so they sound the way they were designed to.',
    sections: [
      {
        heading: 'Common repairs',
        items: [
          'No sound, one channel out, hum, crackle and distortion',
          'Protection circuit faults and blown output stages',
          'Capacitor replacement and full restoration',
          'Noisy controls, switches and relays',
          'Dial lamp, meter and display repairs',
        ],
      },
    ],
    oldPath: '/Audio-Recievers/Hifi-Audio.aspx',
  },
  {
    slug: 'reel-to-reel-repair',
    title: 'Vintage Reel-to-Reel Recorder Repair',
    short: 'Vintage Reel-to-Reel',
    summary: 'Studer, Akai, Teac, Technics and other open-reel recorders serviced and restored.',
    brands: ['Studer', 'Akai', 'Teac', 'Technics'],
    intro:
      'Open-reel machines are mechanical as much as electronic. We service transports, heads and electronics to bring vintage recorders back to spec.',
    sections: [
      {
        heading: 'Common repairs',
        items: [
          'Belts, pinch rollers, brakes and idler service',
          'Head cleaning, demagnetizing and alignment',
          'Speed, wow and flutter problems',
          'Record and playback electronics, calibration',
          'Full restoration',
        ],
      },
    ],
    oldPath: '/Reel-To-Reel/Reel-To-Reel.aspx',
  },
];
