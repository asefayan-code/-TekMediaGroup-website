// Single source of truth for business details. Edit here, and every page updates.
export const site = {
  name: 'Tek Media Group',
  legalName: 'Tek Media Group',
  url: 'https://tekmg.com',
  tagline: 'Expert Electronics Service & Repair',
  description:
    'Burbank repair shop for professional lenses, camcorders, projectors, broadcast monitors, hi-fi receivers, vintage reel-to-reel and Bang & Olufsen. Free estimates, nationwide shipping.',
  yearsInBusiness: 33, // TODO: old site says both "33 years" and "35+ years" — confirm
  phone: '(818) 244-4440',
  phoneHref: 'tel:+18182444440',
  tollFree: '(800) 255-5045',
  tollFreeHref: 'tel:+18002555045',
  email: 'JT@tekmg.com', // TODO: old site also lists as@tekmg.com — confirm which is public
  address: {
    street: '711 South Victory Blvd',
    city: 'Burbank',
    region: 'CA',
    postal: '91502',
    country: 'US',
  },
  geo: { lat: 34.1716, lng: -118.3089 }, // approximate — verify
  hours: [
    { days: 'Monday – Friday', time: '8:30 AM – 5:00 PM' },
    { days: 'Saturday, Sunday & holidays', time: 'By appointment' },
  ],
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=711+South+Victory+Blvd+Burbank+CA+91502',
  social: {
    facebook: 'https://www.facebook.com/pages/TEK-Media-Group/397040323684276',
    instagram: 'https://www.instagram.com/tekmediagroup',
    x: 'https://x.com/tekmediagroup',
  },
  // RepairShopr customer portal — tickets, invoices, payments stay there.
  portal: {
    newTicket: 'https://techmediagroup.repairshopr.com/check_ins',
    ticketLookup: 'https://techmediagroup.repairshopr.com/my_profile/login',
    login: 'https://techmediagroup.repairshopr.com/my_profile/user_login',
    // Invoices can be paid after logging in to the portal.
    pay: 'https://techmediagroup.repairshopr.com/my_profile/user_login',
  },
  walkInAreas: [
    'Burbank', 'Glendale', 'Pasadena', 'North Hollywood', 'Studio City',
    'Sherman Oaks', 'Eagle Rock', 'Hollywood', 'Los Angeles',
  ],
  paymentMethods: ['American Express', 'Visa', 'MasterCard', 'Discover', 'PayPal'],
};

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postal}`;
