export const optionsArray = [
  { key: 'ld', text: 'Linkedin', value: 'Linkedin', icon: 'linkedin' },
  { key: 'gh', text: 'Github', value: 'Github', icon: 'github' },
  { key: 'tw', text: 'Twitter', value: 'Twitter', icon: 'twitter' },
  { key: 'tg', text: 'Telegram', value: 'Telegram', icon: 'telegram' },
  { key: 'ig', text: 'Instagram', value: 'Instagram', icon: 'instagram' },
  { key: 'fb', text: 'Facebook', value: 'Facebook', icon: 'facebook' },
  { key: 'yt', text: 'Youtube', value: 'Youtube', icon: 'youtube' },
  { key: 'sf', text: 'Spotify', value: 'Spotify', icon: 'spotify' },
];

export const siteIconsArray = [
  'facebook',
  'github',
  'youtube',
  'twitter',
  'instagram',
  'linkedin',
  'telegram',
  'spotify',
];

const labelColors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
];

export const randomColor = () => {
  return labelColors[Math.floor(Math.random() * labelColors.length)];
};

export const getCircularAvatar = (imageLink) => {
  const firstPart = imageLink.split('image/upload/')[0];
  const secondPart = imageLink.split('image/upload/')[1];
  const transformApi = 'w_200,h_200,c_fill,r_max/e_trim/';

  return [firstPart, transformApi, secondPart].join('');
};

export const generateBase64Encode = (file, setState) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setState(reader.result);
  };
};
