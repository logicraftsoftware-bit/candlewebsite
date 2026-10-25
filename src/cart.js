export function sanitizeCart(value, catalog) {
 if (!Array.isArray(value)) return [];
 const result = new Map();
 for (const item of value) {
  if (!item || !catalog.some(p=>p.id===item.id) || !Number.isInteger(item.quantity) || item.quantity<1) continue;
  result.set(item.id,{id:item.id,quantity:Math.min(20,(result.get(item.id)?.quantity||0)+item.quantity)});
 }
 return [...result.values()];
}
export function cartTotal(cart,catalog) { return cart.reduce((sum,item)=>sum+(catalog.find(p=>p.id===item.id)?.price||0)*item.quantity,0); }
