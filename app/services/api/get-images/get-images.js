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
    api_key: '344016064c3bf6ef267ff3bb83cedae2',
    format: 'json',
    nojsoncallback: 1,
    per_page: 10,
  };
  const params = {...commonParams, ...queryParameters};
  const queryParams = new URLSearchParams(params).toString();

  return ApiInstance.post({
    slug: `?${queryParams}`,
    axiosConfig: {},
    body: {},
  });
};
