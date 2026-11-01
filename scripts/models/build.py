"""Builds src/data/models.ts from the model page data in scripts/models/data_*.py.
Run: python3 scripts/models/build.py

Every old .aspx model URL listed in scripts/models/old-urls.txt must be claimed by exactly one page,
so old links keep redirecting to the right new page."""
import json, re, pathlib, runpy

here = pathlib.Path(__file__).resolve().parent
root = here.parents[1]

BRAND_NAMES = {'mcintosh': 'McIntosh', 'marantz': 'Marantz', 'luxman': 'Luxman', 'mark-levinson': 'Mark Levinson',
               'studer': 'Studer', 'revox': 'Revox', 'akai': 'Akai', 'teac': 'TEAC', 'tascam': 'TASCAM',
               'pioneer': 'Pioneer', 'nagra': 'Nagra'}

# What each kind of equipment gets. Model pages pick one list with their `svc` key.
SERVICES = {
    'receiver_tube': ['Free inspection and written estimate', 'Selenium rectifier replacement with silicon diodes', 'Power supply rebuild and capacitor replacement', 'Coupling capacitor replacement with quality film parts', 'Tube testing, replacement and output bias', 'Control and switch cleaning', 'FM and multiplex alignment', 'Bench test at rated power, then extended burn-in'],
    'receiver_ss': ['Free inspection and written estimate', 'Power supply and signal path capacitor replacement', 'Noisy transistor replacement', 'Output stage repair with matched transistors', 'Bias and DC offset set to the service manual', 'Speaker relay, control and switch cleaning', 'FM and AM tuner alignment', 'Dial and meter lamp replacement', 'Bench test at rated power, then extended burn-in'],
    'receiver_hybrid': ['Free inspection and written estimate', 'Tube testing, replacement and socket cleaning', 'Power supply capacitor replacement', 'Output stage and protection circuit repair', 'Bias and DC offset adjustment', 'FM and AM tuner alignment', 'Meter and display lamp service', 'Bench test at rated power, then extended burn-in'],
    'amp_ss': ['Free inspection and written estimate', 'Power supply capacitor replacement', 'Output and driver transistor testing and replacement', 'Bias and DC offset adjustment', 'Protection circuit and speaker relay service', 'Thermal compound renewal and heat sink cleaning', 'Channel matching', 'Full-power test into a dummy load'],
    'amp_modern': ['Free inspection and written estimate', 'Board-level diagnosis of protection and power faults', 'Power supply repair', 'Amplifier and output stage repair', 'Relay and connector service', 'Bias, DC offset and protection checks', 'Full-power test into a dummy load'],
    'amp_classa': ['Free inspection and written estimate', 'Heat-aged capacitor replacement', 'Output device testing and replacement', 'Thermal compound renewal and heat sink cleaning', 'Class A bias and DC offset adjustment', 'Protection and thermal sensor checks', 'Extended burn-in at operating temperature'],
    'amp_tube': ['Free inspection and written estimate', 'Power supply rebuild', 'Coupling capacitor and drifted resistor replacement', 'Tube testing, matching and replacement', 'Tube socket cleaning and retensioning', 'Output bias adjustment', 'Safety upgrades where appropriate', 'Full-power bench test and burn-in'],
    'preamp': ['Free inspection and written estimate', 'Power supply and regulator restoration', 'Signal path capacitor replacement', 'Relay, switch and volume control service', 'Phono stage check and RIAA accuracy test', 'DC offset and channel balance calibration', 'Noise and distortion testing before return'],
    'tuner': ['Free inspection and written estimate', 'Power supply capacitor replacement', 'RF, IF and multiplex alignment with RF test equipment', 'Noisy transistor replacement', 'Dial and meter lamp replacement', 'Sensitivity, separation and distortion testing'],
    'tuner_tube': ['Free inspection and written estimate', 'Power supply rebuild and capacitor replacement', 'Tube testing and replacement', 'Tube socket and control cleaning', 'Display and lamp service', 'Full RF, IF and multiplex alignment', 'Sensitivity and separation testing'],
    'tuner_preamp_tube': ['Free inspection and written estimate', 'Selenium rectifier replacement with silicon diodes', 'Power supply rebuild and capacitor replacement', 'Coupling capacitor replacement with quality film parts', 'Tube testing and replacement', 'Control, switch and tube socket cleaning', 'FM alignment', 'Dial lamp and string service'],
    'tuner_preamp_ss': ['Free inspection and written estimate', 'Power supply and regulator restoration', 'Audio path capacitor replacement', 'Phono and line stage service', 'Relay, switch, control and jack cleaning', 'FM, AM and multiplex alignment', 'Meter and lamp service'],
    'processor': ['Free inspection and written estimate', 'Power supply capacitor and regulator replacement', 'Board-level audio, video and control repair', 'Connector and relay cleaning', 'Display and remote control repair', 'Every input and output tested before return'],
    'dac': ['Free inspection and written estimate', 'Power supply rebuild', 'Digital receiver and clock repair', 'Analog output stage service', 'Display and remote repair', 'Every input tested before return'],
    'cd': ['Free inspection and written estimate', 'Laser testing, adjustment or replacement', 'Transport, spindle and tray mechanism service', 'Power supply capacitor replacement', 'Analog and digital output stage repair', 'Display and remote repair', 'Playback test with test discs'],
    'cassette': ['Free inspection and written estimate', 'Belt, pinch roller and idler replacement', 'Head cleaning, demagnetizing and alignment', 'Capacitor replacement', 'Speed adjustment', 'Record and playback level, bias and Dolby calibration'],
    'reel_tube': ['Free inspection and written estimate', 'Selenium rectifier replacement before extended power-up', 'Paper and electrolytic capacitor replacement', 'Tube testing and replacement', 'Motor, bearing and relay service', 'Brake, tension and transport adjustment', 'Head cleaning, demagnetizing and alignment', 'Record and playback calibration with test tapes'],
    'reel_pro': ['Free inspection and written estimate', 'Mains suppression capacitor replacement before power-up', 'Electrolytic and tantalum capacitor replacement', 'Motor, brake and tension service', 'Fader and switch cleaning', 'Head cleaning, demagnetizing and alignment', 'Record and playback calibration with test tapes'],
    'reel_micro': ['Free inspection and written estimate', 'Capacitor replacement before power-up', 'Servo, tension and transport logic repair', 'Backup battery and calibration memory service', 'Connector cleaning', 'Head cleaning, demagnetizing and alignment', 'Full calibration with test tapes, stored to memory'],
    'reel_consumer': ['Free inspection and written estimate', 'Capacitor replacement', 'Belt, pinch roller and idler replacement', 'Brake, clutch and transport adjustment', 'Head cleaning, demagnetizing and alignment', 'Speed adjustment', 'Record and playback calibration with test tapes'],
    'reel_multitrack': ['Free inspection and written estimate', 'Power supply and audio card capacitor replacement', 'Relay and connector cleaning', 'Capstan, brake and tension service', 'Pinch roller and guide service', 'Head cleaning, demagnetizing and alignment', 'Record, playback and sync calibration on every track'],
    'nagra': ['Free inspection and written estimate', 'Power supply capacitor replacement', 'Audio channel card service', 'Transport, servo and tension adjustment', 'Head cleaning, demagnetizing and alignment', 'Matched calibration of both channels with test tapes'],
    'nagra_tc': ['Free inspection and written estimate', 'Power supply capacitor replacement', 'Audio and time code board service', 'Transport, servo and tension adjustment', 'Head cleaning, demagnetizing and alignment', 'Audio and time code level calibration', 'Time code read and write test'],
}

pages = []
for f in sorted(here.glob('data_*.py')):
    pages += runpy.run_path(str(f))['PAGES']

expected = {l.strip() for l in (here / 'old-urls.txt').read_text().splitlines() if l.strip()}
claimed = [o for p in pages for o in p['old']]
missing = expected - set(claimed)
extra = set(claimed) - expected
dupes = {o for o in claimed if claimed.count(o) > 1}
assert not missing and not extra and not dupes, f'old URL mismatch: missing={missing} extra={extra} dupes={dupes}'

out, seen = [], set()
for p in pages:
    brand, name = p['brand'], p['name'].strip()
    bn = BRAND_NAMES[brand]
    short = name[len(bn):].strip() if name.lower().startswith(bn.lower()) else name
    slug = re.sub(r'[^a-z0-9]+', '-', short.lower()).strip('-')
    assert (brand, slug) not in seen, f'duplicate slug {brand}/{slug}'
    seen.add((brand, slug))
    assert p['svc'] in SERVICES, f"unknown svc {p['svc']} for {name}"
    assert all(len(x) == 2 and x[1] for x in p['problems']), f'problem rows need a cause: {name}'
    out.append({'brand': brand, 'slug': slug, 'name': name, 'short': short, 'type': p['type'], 'years': p['years'],
                'summary': p['summary'], 'intro': p['intro'], 'specs': [list(s) for s in p['specs']],
                'problems': [list(x) for x in p['problems']], 'services': SERVICES[p['svc']], 'oldPaths': p['old']})

ts = ('// Generated by scripts/models/build.py from scripts/models/data_*.py. Edit those files, then re-run.\n'
      'export interface ModelPage { brand: string; slug: string; name: string; short: string; type: string; years: string; summary: string; intro: string; specs: string[][]; problems: string[][]; services: string[]; oldPaths: string[] }\n'
      'export const models: ModelPage[] = ' + json.dumps(out, ensure_ascii=False, indent=1) + ';\n')
(root / 'src/data/models.ts').write_text(ts)
print(f'models.ts written with {len(out)} model pages')
