export function getRequestorById(requestors, id) {
  const requestor = requestors.filter(requestor => requestor.id == id);
  if (requestor.length) return requestor[0];
  return null;
}

export function getItemsByRequestor(allItems, requestor) {
  const requestorItems = allItems.filter(item => item.requestorId == requestor.id);
  if (requestorItems.length) return requestorItems;
  return [];
}

export function getItemById(items, id) {
  const item = items.filter(item => item.id == id);
  if (item.length) return item[0];
  return null;
}
