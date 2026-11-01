// Lens model pages, shown under /services/lens-repair/<slug>/ and linked from the Lens Repair page.
// Written fresh for the new site (not copied from the old .aspx pages).
export interface LensPage {
  slug: string;
  brand: string;        // e.g. 'Fujinon'
  name: string;         // full model name, used in the H1 and model links
  short: string;        // breadcrumb label
  type: string;         // shown as a tag
  summary: string;      // subtitle + meta description
  intro: string;
  specs: string[][];    // [spec, detail]
  problems: string[][]; // [symptom, likely cause]
  services: string[];
  oldPaths: string[];   // old .aspx URLs that redirect here
}

export const lenses: LensPage[] = [
  {
    slug: 'fujinon-xa50x9-5-besm',
    brand: 'Fujinon',
    name: 'Fujinon XA50x9.5BESM',
    short: 'XA50x9.5BESM',
    type: '2/3" HD broadcast zoom lens',
    summary:
      'Repair, servo service and optical calibration for the Fujinon XA50x9.5BESM 50x HD broadcast zoom lens. Free estimates, Burbank drop-off or nationwide shipping.',
    intro:
      'The Fujinon XA50x9.5BESM is a 50x HD zoom lens for 2/3-inch broadcast cameras, covering 9.5mm wide to 475mm telephoto. It works hard at sports, live events and studio shoots, and the zoom and focus servos, extender and iris all wear with use. We diagnose the whole lens, repair or replace the failed parts, then calibrate tracking and back focus so it performs like it should on your camera.',
    specs: [
      ['Lens type', 'HD broadcast zoom, Fujinon XA series'],
      ['Zoom ratio', '50x'],
      ['Focal length', '9.5mm - 475mm'],
      ['Camera format', '2/3-inch, B4 bayonet mount'],
      ['Range extender', 'Built-in (the "B" in the model name)'],
      ['Control', 'Servo zoom, focus and iris'],
    ],
    problems: [
      ['Zoom is jerky, hunts, or will not move', 'Worn zoom servo motor or gearbox, or a failing position sensor'],
      ['Focus servo stops or drifts', 'Focus drive motor, encoder or control board fault'],
      ['Image goes soft when zooming in', 'Back focus (flange) out of adjustment, or tracking out of alignment'],
      ['Extender will not engage or the image is soft with it in', 'Extender mechanism jam or misalignment'],
      ['Iris does not respond to the camera', 'Iris motor, lens cable or lens-to-camera communication fault'],
      ['Haze, spots or fungus in the image', 'Contamination or fungus on internal elements'],
      ['Damage after a drop or hit', 'Shifted elements, bent barrel or damaged servo housing'],
    ],
    services: [
      'Free inspection and written estimate',
      'Zoom, focus and iris servo repair',
      'Range extender service',
      'Back focus and tracking calibration',
      'Optical cleaning and fungus removal',
      'Mechanical re-lubrication of zoom and focus groups',
      'Full test on a 2/3-inch HD camera and lens projector before return',
    ],
    oldPaths: ['/LensRepair/fujinon/XA50x9.5_BESM.aspx'],
  },
];
