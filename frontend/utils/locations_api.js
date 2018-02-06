export const fetchLocations = () => (
$.ajax({
  method: 'GET',
  url: 'api/locations',
})
);

export const fetchLocation = id => (
$.ajax({
  method: 'GET',
  url: `api/locations/${id}`,
})
);

export const createLocation = data => (
$.ajax({
  method: 'POST',
  url: 'api/locations',
  data
})
);

export const searchLocations = searchTerm => (
$.ajax({
  method: 'POST',
  url: 'api/locations/search',
  data: { term: searchTerm }
})
);
