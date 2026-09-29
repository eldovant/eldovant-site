/* ==========================================================================
   ELDOVANT — shared data. This is the ONLY file you edit for content.
   Every page (index, productions, studio, contact, privacy, cookies, terms)
   reads it on load. Leave a field empty and the pages say so honestly;
   nothing here is invented. Keep this file in the same folder as the .html
   pages, wherever you publish them (GitHub Pages included).
   ========================================================================== */
window.ELDOVANT_DATA = {

  /* CONTACT
     email        : the general address shown as the fallback and on the sidebar.
     formEndpoint : leave empty — no form service is configured yet (see note below).
                    If you ever set one up, put its https URL here and the form
                    switches to sending directly instead of opening email.
     routing      : optional — send each inquiry type from the Contact form to a
                    more specific address instead of the general one. Keys must
                    match the form's inquiry labels exactly.
     addresses    : optional — listed on the Contact page's "Elsewhere" section
                    so a visitor can see all official addresses at a glance,
                    not only the one the form happens to use. */
  contact: {
    email: 'contact@eldovant.com',
    formEndpoint: '',
    routing: {
      'Collaboration': 'partnerships@eldovant.com',
      'Licensing & distribution': 'partnerships@eldovant.com',
      'Music & scoring': 'productions@eldovant.com',
      'Press': 'contact@eldovant.com',
      'Something else': 'contact@eldovant.com'
    },
    addresses: [
      { label: 'General & press', email: 'contact@eldovant.com' },
      { label: 'Productions & music', email: 'productions@eldovant.com' },
      { label: 'Partnerships & licensing', email: 'partnerships@eldovant.com' }
    ]
  },

  /* Official channels — all four confirmed live under the @eldovant handle,
     plus YouTube. Fill href only for profiles that are really live. */
  social: [
    { name: 'YouTube',   href: 'https://www.youtube.com/@eldovant' },
    { name: 'Instagram', href: 'https://www.instagram.com/eldovant' },
    { name: 'TikTok',    href: 'https://www.tiktok.com/@eldovant' },
    { name: 'Facebook',  href: 'https://www.facebook.com/eldovant' },
    { name: 'X',         href: 'https://x.com/eldovant' },
    { name: 'LinkedIn',  href: '' }
  ],

  /* LEGAL PAGES — the facts Privacy Policy and Terms of Service must state.
     ELDOVANT is not currently a registered company and has no registered
     office (confirmed 22 Sept 2026), so noCompany is set to true: the pages
     say this plainly instead of showing a "to be added" placeholder for an
     address that doesn't exist. Flip it to false the day ELDOVANT
     incorporates, and fill controller/address then.

     controller  : leave empty for now (no company name exists to give).
                   If you ever want your own name named as the person behind
                   ELDOVANT, put it here — entirely your call, not required.
     address     : leave empty — there is no registered office to publish.
     email       : privacy-specific contact; leave empty to reuse contact.email.
     hosting     : leave empty until the site is actually live somewhere
                   (you mentioned GitHub Pages, but only once it's published there).
     formService : only needed if contact.formEndpoint above is used.
     authority   : optional. Left empty on purpose — the default text points
                   each visitor to the data-protection authority of their own
                   country via the EDPB, which is more accurate than naming
                   only Italy's Garante for every visitor worldwide.
     retention   : optional, replaces the default retention sentence.
     law         : NOT set — see the message below for the three options and
                   what each one means before you choose.
     updated     : the date of the current text. */
  privacy: {
    noCompany: true,
    controller: '', address: '', email: '', hosting: 'GitHub Pages (GitHub, Inc., USA)', formService: '',
    authority: '', retention: '',
    law: {
      it: 'Questi termini sono regolati dalla legge italiana. Se usi il sito come consumatore, restano salvi i diritti inderogabili che la legge del tuo paese di residenza ti riconosce.',
      en: 'These terms are governed by Italian law. If you use the site as a consumer, the mandatory consumer rights granted by the law of your country of residence remain unaffected.'
    },
    updated: '22 September 2026'
  },

  /* Optional legal line for the footer — a registered company name, once one
     exists. Leave empty: ELDOVANT is not a registered company today, and the
     footer simply omits the line when this is blank. */
  entity: '',

  /* Optional named credits on the Studio/Contact pages: [{ name: '…', role: '…' }] */
  people: [],

  /* PRODUCTIONS — add only real titles, in the order you want them shown.
     status: 'announced' | 'development' | 'production' | 'post' | 'soon' | 'released'
     format: 'feature' | 'short' | 'series' | 'trailer' | 'music'
     A "Watch" button appears ONLY when status is 'released' AND watchUrl is set.

     Example — keep it commented until it is real:
     {
       id: 'title-slug',
       title: 'Title',
       format: 'feature',
       status: 'development',
       year: 2027,
       runtime: '',                             // e.g. '12 min'
       logline: 'One precise sentence.',
       synopsis: '',                            // optional, longer
       image: 'assets/title-wide.jpg',          // wide key art (16:10 or wider)
       poster: 'assets/title-poster.jpg',       // optional, portrait
       imageAlt: '',
       credits: [ { role: 'Written by', name: '…' } ],
       trailer: { type: 'youtube', id: 'VIDEO_ID' },   // or { type: 'file', src: '…mp4' }
       watchUrl: '',                            // only used when released
       pageUrl: '',                             // optional dedicated page
       featured: true                           // one title can lead the Index and Productions
     }
  */
  productions: [],

  /* SHOP — digital releases only (en/shop/). Add only real, sellable releases.
     provider     : name of the payment provider shown before payment (e.g. 'Stripe'); leave empty until chosen.
     supportEmail : optional; falls back to contact.email.
     taxNote      : optional one line about tax, only if it is true for your setup.
     delivery     : { method: 'how files/access arrive', after: 'what the buyer sees/receives after paying' }
     Return URLs to set at your payment provider:  success -> /en/shop/#/thanks   cancel -> /en/shop/#/cancelled

     Release example — keep it commented until it is real:
     {
       id: 'title-slug', title: 'Title', category: 'Music',   // or 'Motion Pictures'
       kind: 'Album', year: 2026, status: 'available',        // 'available' | 'soon' | 'unavailable'
       summary: 'One precise sentence.', description: 'Longer text.\n\nSecond paragraph.',
       cover: 'assets/title-cover.jpg', image: 'assets/title-wide.jpg', imageAlt: '', ratio: '1/1',
       price: { amount: 9, currency: 'EUR' },                 // promo: { was: 12 } only if a real promotion
       format: 'WAV + MP3', size: '240 MB', includes: ['12 tracks', 'Booklet (PDF)'],
       specs: [ { label: 'Duration', value: '48 min' } ], licence: '', delivery: '', after: '',
       previews: [ { type: 'audio', src: 'assets/preview.mp3', title: 'Track name' } ],   // or { type:'youtube', id:'…' } / { type:'file', src:'…mp4' }
       checkoutUrl: 'https://…', related: [], featured: true
     }
  */
  shop: { enabled: true, provider: '', supportEmail: '', taxNote: '', delivery: { method: '', after: '' }, products: [] },

  /* Beyond the Frame (Index) — confirmed items only: { date: '2026-10-01', title: '', text: '', href: '' } */
  dispatches: []
};
