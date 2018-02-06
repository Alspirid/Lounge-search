export const fetchUser = id => (
  $.ajax ({
    method: 'GET',
    url: `api/users/${id}`,
  })
);

export const fetchUsers = () => (
  $.ajax({
    method: 'GET',
    url: 'api/users'
  })
);

export const searchUsers = searchTerm => (
  $.ajax({
    method: 'POST',
    url: 'api/users/search',
    data: { term: searchTerm }
  })
);

export const updateUser = user => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user }
  })
);
