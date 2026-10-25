const asset = name => `${import.meta.env.BASE_URL}images/${name}`;
// Illustrative catalog. Confirm specifications and inventory before opening sales.
export const products = [
 { id:'amber-evening',name:'Amber Evening',category:'Warm & Woody',notes:'Amber · Sandalwood · Vanilla',price:899,size:'220 g',burn:'40 hours',image:asset('amber.jpg'),tag:'Signature scent',description:'A golden-hour kind of fragrance. Soft amber meets mellow sandalwood and a little vanilla for evenings that deserve to last longer.' },
 { id:'lavender-haze',name:'Lavender Haze',category:'Floral & Soft',notes:'Lavender · Chamomile · Musk',price:799,size:'200 g',burn:'35 hours',image:asset('lavender.jpg'),tag:'Slow-down essential',description:'Imagine fresh linen, an open window, and nowhere you need to be. Lavender and chamomile bring a gentle floral note to your evening ritual.' },
 { id:'citrus-sunrise',name:'Citrus Sunrise',category:'Fresh & Citrus',notes:'Sweet orange · Bergamot · Neroli',price:749,size:'200 g',burn:'35 hours',image:asset('citrus.jpg'),tag:'A brighter morning',description:'A fresh squeeze of sunshine. Bright orange and bergamot soften into neroli for a cheerful companion to slow weekend mornings.' },
 { id:'rose-garden',name:'Rose Garden',category:'Floral & Soft',notes:'Rose petals · Peony · White musk',price:849,size:'220 g',burn:'40 hours',image:asset('rose.jpg'),tag:'For the romantics',description:'A little escape to a garden in bloom. Soft rose petals and airy peony create a floral fragrance with an understated, romantic finish.' },
 { id:'vanilla-cloud',name:'Vanilla Cloud',category:'Warm & Woody',notes:'Vanilla bean · Tonka · Cream',price:799,size:'200 g',burn:'35 hours',image:asset('vanilla.jpg'),tag:'Something comforting',description:'Familiar, soft, and a little indulgent. Creamy vanilla and warm tonka bring that tucked-in-at-home feeling to your favourite corner.' },
 { id:'quiet-moments',name:'The Quiet Moments Duo',category:'Gift Sets',notes:'Amber Evening + Lavender Haze',price:1499,size:'2 × 200 g',burn:'2 × 35 hours',image:asset('gift.jpg'),tag:'Made for gifting',description:'Two ways to make a little time for yourself. A pairing of warm amber and soft lavender, ready for a thoughtful gift or your own candle shelf.' },
];
export const categories=['All candles','Warm & Woody','Floral & Soft','Fresh & Citrus','Gift Sets'];
export const money = value => new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(value);
export const faqs=[
 ['How do I choose a scent?','Choose warm and woody notes for a cosy evening, floral notes for a softer mood, or citrus for a bright, fresh feel. Each candle page lists its fragrance notes.'],
 ['How should I burn my candle?','Trim the wick to about 5 mm before lighting. Place on a stable, heat-resistant surface away from drafts. Follow the instructions on your candle label. Never leave a flame unattended, and keep away from children and pets.'],
 ['Can I send candles as a gift?','Explore the Gift Sets collection and add a personal message in the checkout preview. Gift packaging and fulfilment options will be confirmed when the store opens.'],
 ['Where do you deliver?','This storefront is being prepared for orders in India. Delivery areas, charges, and timelines will be published before sales open.'],
 ['What is your return policy?','The final return and replacement policy will be published before orders open. No payments or orders are accepted in the current preview.'],
 ['Are the product photos and prices final?','The catalog currently contains illustrative products, sample prices, and styled photography. Final images, ingredients, weights, burn times, and availability must be confirmed before launch.'],
];
