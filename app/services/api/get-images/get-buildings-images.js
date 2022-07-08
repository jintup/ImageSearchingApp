import ApiInstance from '../api';

// Expected Search Params
// method = flickr.photos.search
// api_key = 5b2213805e6fca28a5769aa63cb3d06d
// text = Cars
// format = json
// nojsoncallback = 1

export const getImages = queryParameters => {
  const commonParams = {
    method: 'flickr.photos.search',
    api_key: '3d65abfbabcb6674af04f69b7b180669',
    format: 'json',
    nojsoncallback: 1,
    text: 'building',
    per_page: 20,
  };
  const params = {...commonParams, ...queryParameters};
  const queryParams = new URLSearchParams(params).toString();

  return ApiInstance.post({
    slug: `?${queryParams}`,
    axiosConfig: {},
    body: {},
  });
};
